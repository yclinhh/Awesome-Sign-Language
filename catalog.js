const directions = new Map([
  ["Isolated Sign Language Recognition (ISLR)", "孤立手语识别（ISLR）"],
  ["Continuous Sign Language Recognition (CSLR)", "连续手语识别（CSLR）"],
  ["Sign Language Translation (SLT)", "手语翻译（SLT）"],
  ["Sign Language Production (SLP)", "手语生成（SLP）"],
  ["Sign Language Retrieval", "手语检索"],
  ["Sign Language Linguistics & Cognition", "手语语言学与认知"],
  ["Others", "其他"],
]);

const normalize = (text) => text.normalize("NFKC").toLowerCase().replace(/[‐‑–—]/g, "-").trim();
const pageSize = 24;

function cellText(cell) {
  return cell === "—" ? "" : cell.replace(/^\x60|\x60$/g, "").replace(/\\\|/g, "|");
}

function cellLink(cell) {
  const match = cell.match(/^\[[^\]]+\]\((https?:\/\/\S+)\)$/);
  return match ? new URL(match[1]).href : "";
}

export function readCatalog(markdown, tier) {
  const papers = [];
  let direction, year, columns;
  for (const input of markdown.split(/\r?\n/)) {
    const line = input.trim();
    if (line.startsWith("## ")) {
      const heading = line.slice(3).replace(/^[^A-Za-z]+/, "");
      direction = directions.has(heading) ? heading : "";
      year = "";
    }
    const summary = line.match(/^<summary><b>(\d{4})<\/b>/);
    if (summary) {
      year = summary[1];
      columns = null;
    }
    if (line === "</details>") year = "";
    if (!direction || !year || !line.startsWith("| ") || !line.endsWith("|")) continue;

    const cells = line.slice(1, -1).split(/(?<!\\)\|/).map((cell) => cell.trim());
    if (cells[0] === "Title") {
      columns = cells;
      continue;
    }
    if (!columns || cells.length !== columns.length) {
      throw new Error("Invalid CCF-" + tier + " paper row: " + line);
    }
    const row = Object.fromEntries(columns.map((column, index) => [column, cells[index]]));
    const title = cellText(row.Title);
    const authors = cellText(row.Authors);
    const venue = cellText(row.Venue);
    const datasets = cellText(row.Datasets);
    const contribution = cellText(row["Key Contribution"]);
    const searchText = normalize([title, authors, venue, direction, directions.get(direction), year, datasets, contribution, "CCF-" + tier].join(" "));
    papers.push({ title, authors, venue, direction, year, tier, datasets, contribution, searchText,
      paperUrl: cellLink(row.Paper), codeUrl: cellLink(row.Code ?? "") });
  }
  if (!papers.length) throw new Error("No papers parsed for CCF-" + tier);
  return papers;
}

export function filterPapers(papers, filters) {
  const terms = normalize(filters.query ?? "").split(/\s+/).filter(Boolean);
  return papers.filter((paper) =>
    (!filters.direction || paper.direction === filters.direction) &&
    (!filters.year || paper.year === filters.year) &&
    (!filters.tier || paper.tier === filters.tier) &&
    (!filters.venue || paper.venue === filters.venue) &&
    (!filters.code || paper.codeUrl) &&
    terms.every((term) => paper.searchText.includes(term)));
}

function element(tag, text, className) {
  const node = document.createElement(tag);
  if (text) node.textContent = text;
  if (className) node.className = className;
  return node;
}

function paperRow(paper) {
  const row = element("li", "", "paper");
  row.dataset.tier = paper.tier;

  const main = element("div");
  const metadata = element("div", "", "metadata");
  metadata.append(element("span", "CCF-" + paper.tier, "tier"), element("span", paper.year),
    element("span", paper.venue), element("span", directions.get(paper.direction)));
  const title = element("h3", paper.title);
  title.lang = "en";
  main.append(metadata, title, element("p", paper.authors, "author"));
  row.append(main);

  const actions = element("div", "", "paper-actions");
  for (const [name, url] of [["论文", paper.paperUrl], ["代码", paper.codeUrl]]) {
    if (!url) continue;
    const link = element("a", name);
    link.href = url;
    link.target = "_blank";
    link.rel = "noopener noreferrer";
    link.setAttribute("aria-label", name + "（新标签页）：" + paper.title);
    actions.append(link);
  }
  if (actions.childElementCount) row.append(actions);

  if (paper.datasets || paper.contribution) {
    const details = element("details");
    const label = paper.datasets && paper.contribution ? "数据集与贡献" : paper.datasets ? "数据集" : "研究贡献";
    details.append(element("summary", label));
    if (paper.datasets) details.append(element("p", "数据集：" + paper.datasets));
    if (paper.contribution) details.append(element("p", paper.contribution));
    row.append(details);
  }
  return row;
}

async function loadPaperFile(path, tier) {
  const response = await fetch(new URL(path, import.meta.url));
  if (!response.ok) throw new Error(path + ": " + response.status);
  return readCatalog(await response.text(), tier);
}

async function init() {
  const form = document.getElementById("filters");
  const status = document.getElementById("status");
  const empty = document.getElementById("empty");
  const list = document.getElementById("papers");
  const more = document.getElementById("more");

  try {
    const catalogs = await Promise.all([loadPaperFile("README.md", "A"), loadPaperFile("CCF-B.md", "B")]);
    const papers = catalogs.flat().sort((a, b) => Number(b.year) - Number(a.year) || a.title.localeCompare(b.title, "en"));
    const years = [...new Set(papers.map((paper) => paper.year))];
    const venues = [...new Set(papers.map((paper) => paper.venue))].sort((a, b) => a.localeCompare(b, "en"));
    const filters = form.elements;
    for (const [value, label] of directions) filters.direction.add(new Option(label, value));
    for (const year of years) filters.year.add(new Option(year, year));
    for (const venue of venues) filters.venue.add(new Option(venue, venue));

    let results = [];
    let shown = 0;
    function showNext() {
      const next = results.slice(shown, shown + pageSize);
      list.append(...next.map(paperRow));
      shown += next.length;
      status.textContent = "显示 " + shown + " / " + results.length + " 篇（共收录 " + papers.length + " 篇）";
      more.hidden = shown >= results.length;
    }
    function refresh() {
      results = filterPapers(papers, Object.fromEntries(new FormData(form)));
      list.replaceChildren();
      shown = 0;
      empty.hidden = results.length > 0;
      empty.textContent = "没有符合条件的论文。可以减少筛选条件或更换关键词。";
      showNext();
    }

    document.getElementById("filter-fields").disabled = false;
    form.addEventListener("submit", (event) => event.preventDefault());
    form.addEventListener("input", refresh);
    document.getElementById("clear-filters").addEventListener("click", () => {
      form.reset();
      refresh();
      filters.query.focus();
    });
    more.addEventListener("click", () => {
      const firstNewIndex = shown;
      showNext();
      const firstNewTitle = list.children[firstNewIndex]?.querySelector("h3");
      if (firstNewTitle) {
        firstNewTitle.tabIndex = -1;
        firstNewTitle.focus();
      }
    });
    refresh();
  } catch (error) {
    console.error(error);
    status.textContent = "论文加载失败";
    empty.textContent = "请刷新页面重试，或从页首 GitHub 仓库进入原始清单。";
    empty.hidden = false;
  }
}

if (typeof document !== "undefined") init();
