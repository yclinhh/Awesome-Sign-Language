<div align="center">

# Awesome Sign Language

**A curated list of sign language papers published at CCF-A venues since 2021**

[![Awesome](https://awesome.re/badge.svg)](https://awesome.re)
![Papers](https://img.shields.io/badge/papers-96-blue)
![CCF-A](https://img.shields.io/badge/CCF--A-80-brightgreen)
![Years](https://img.shields.io/badge/years-2021--2026-orange)
![Updated](https://img.shields.io/badge/updated-2026--09--28-lightgrey)

Venue tiers follow the *CCF Recommended List of International Conferences and Journals*, **7th edition (March 2026)**.

**Only formally accepted / published papers are included — no arXiv-only preprints.**

</div>

---

## 📊 At a Glance

| Direction | 2026 | 2025 | 2024 | 2023 | 2022 | 2021 | **Total** |
|---|---|---|---|---|---|---|---|
| ISLR | · | 1 | · | 6 | · | 3 | **10** |
| CSLR | · | 1 | 1 | 8 | 1 | 3 | **14** |
| SLT | 4 | 5 | 4 | 7 | 4 | 6 | **30** |
| SLP | 5 | 4 | 3 | · | 1 | 3 | **16** |
| Retrieval | · | · | 1 | · | 1 | · | **2** |
| Others | 2 | · | 1 | 2 | · | 3 | **8** |
| Other Venues | 4 | · | 6 | 1 | 5 | · | **16** |
| **Total** | **15** | **11** | **16** | **24** | **12** | **18** | **96** |

## 📋 Contents

- 🤟 [Isolated Sign Language Recognition (ISLR)](#-isolated-sign-language-recognition-islr) &nbsp;`10`
- 🎬 [Continuous Sign Language Recognition (CSLR)](#-continuous-sign-language-recognition-cslr) &nbsp;`14`
- 🔤 [Sign Language Translation (SLT)](#-sign-language-translation-slt) &nbsp;`30`
- 🧍 [Sign Language Production (SLP)](#-sign-language-production-slp) &nbsp;`16`
- 🔍 [Sign Language Retrieval](#-sign-language-retrieval) &nbsp;`2`
- 📚 [Others](#-others) &nbsp;`8`
- ⭐ [Other Top Venues](#-other-top-venues) &nbsp;`16`
- 📌 [Inclusion Criteria](#-inclusion-criteria)
- 📰 [News](#-news)
- 🤝 [Contributing](#-contributing)

---

## 🤟 Isolated Sign Language Recognition (ISLR)

<details open>
<summary><b>2025</b> &nbsp;·&nbsp; 1 paper</summary>

| Title | Authors | Venue | Paper | Code | Datasets | Key Contribution |
|:--|:--|:--|:-:|:-:|:--|:--|
| Scaling up Multimodal Pre-training for Sign Language Understanding | Zhou et al. | `TPAMI` | — | — | 多数据集 | 大规模多模态手语预训练，统一覆盖识别、翻译与检索等任务。 |

</details>

<details open>
<summary><b>2023</b> &nbsp;·&nbsp; 6 papers</summary>

| Title | Authors | Venue | Paper | Code | Datasets | Key Contribution |
|:--|:--|:--|:-:|:-:|:--|:--|
| BEST: BERT Pre-Training for Sign Language Recognition with Coupling Tokenization | Zhao et al. | `AAAI` | [link](https://arxiv.org/abs/2302.05075) | — | NMFs-CSL, SLR500, MSASL, WLASL | 将手部与身体姿态耦合离散化为 token，做 BERT 式掩码预训练。 |
| CVT-SLR: Contrastive Visual-Textual Transformation for Sign Language Recognition with Variational Alignment | Zheng et al. | `CVPR` | [link](https://arxiv.org/abs/2303.05725) | — | PHOENIX-2014, PHOENIX-2014T | 用变分自编码器对齐视觉与文本模态，做对比式跨模态一致性约束。 |
| Natural Language-Assisted Sign Language Recognition | Zuo et al. | `CVPR` | [link](https://arxiv.org/abs/2303.12080) | [code](https://github.com/FangyunWei/SLRT/tree/main/NLA-SLR) | MSASL, WLASL, NMFs-CSL | 用词汇的自然语言描述缓解视觉相近手势（VISigns）的混淆。 |
| Human Part-wise 3D Motion Context Learning for Sign Language Recognition | Lee et al. | `ICCV` | [link](https://arxiv.org/abs/2308.09305) | — | WLASL, PHOENIX-2014T | 按人体部位分解 3D 运动上下文，显式建模各部位的运动语义。 |
| Self-Supervised Representation Learning with Spatial-Temporal Consistency for Sign Language Recognition | Zhao et al. | `TIP` | [link](https://arxiv.org/abs/2406.10501) | — | NMFs-CSL, SLR500, MSASL, WLASL | 以时空一致性为自监督信号做骨架手语表征学习。 |
| SignBERT+: Hand-model-aware Self-supervised Pre-training for Sign Language Understanding | Hu et al. | `TPAMI` | [link](https://arxiv.org/abs/2305.04868) | — | NMFs-CSL, SLR500, MSASL, WLASL, PHOENIX-2014 | SignBERT 的期刊扩展版，统一支持 ISLR、CSLR 与 SLT 三类下游任务。 |

</details>

<details open>
<summary><b>2021</b> &nbsp;·&nbsp; 3 papers</summary>

| Title | Authors | Venue | Paper | Code | Datasets | Key Contribution |
|:--|:--|:--|:-:|:-:|:--|:--|
| Hand-Model-Aware Sign Language Recognition | Hu et al. | `AAAI` | — | — | NMFs-CSL, SLR500, MSASL | 把统计手部模型作为先验嵌入识别网络，缓解手部自遮挡。 |
| SignBERT: Pre-Training of Hand-Model-Aware Representation for Sign Language Recognition | Hu et al. | `ICCV` | [link](https://arxiv.org/abs/2109.05304) | — | NMFs-CSL, SLR500, MSASL, WLASL | 以手部模型为先验的自监督预训练，用掩码手势重建学习手语表征。 |
| Global-Local Enhancement Network for NMF-Aware Sign Language Recognition | Hu et al. | `TMM` | [link](https://arxiv.org/abs/2008.10428) | — | NMFs-CSL, SLR500 | 全局-局部双分支建模非手部动作（NMF），提出 NMFs-CSL 数据集。 |

</details>

<p align="right"><a href="#-contents">back to top ↑</a></p>

## 🎬 Continuous Sign Language Recognition (CSLR)

<details open>
<summary><b>2025</b> &nbsp;·&nbsp; 1 paper</summary>

| Title | Authors | Venue | Paper | Code | Datasets | Key Contribution |
|:--|:--|:--|:-:|:-:|:--|:--|
| MixSignGraph: A Sign Sequence is Worth Mixed Graphs of Nodes | Gan et al. | `NeurIPS` | [link](https://openreview.net/forum?id=YjZYMHvlRs) | — | PHOENIX-2014, PHOENIX-2014T, CSL-Daily | 在 SignGraph 基础上混合多种图结构，更好地捕捉跨区域的手语特征。 |

</details>

<details open>
<summary><b>2024</b> &nbsp;·&nbsp; 1 paper</summary>

| Title | Authors | Venue | Paper | Code | Datasets | Key Contribution |
|:--|:--|:--|:-:|:-:|:--|:--|
| SignGraph: A Sign Sequence is Worth Graphs of Nodes | Gan et al. | `CVPR` | — | [code](https://github.com/gswycf/SignGraph) | PHOENIX-2014, PHOENIX-2014T, CSL-Daily | 把手语视频建成图结构，跨帧跨区域聚合节点特征。 |

</details>

<details open>
<summary><b>2023</b> &nbsp;·&nbsp; 8 papers</summary>

| Title | Authors | Venue | Paper | Code | Datasets | Key Contribution |
|:--|:--|:--|:-:|:-:|:--|:--|
| Self-Emphasizing Network for Continuous Sign Language Recognition | Hu et al. | `AAAI` | [link](https://arxiv.org/abs/2211.17081) | [code](https://github.com/hulianyuyy/SEN_CSLR) | PHOENIX-2014, PHOENIX-2014T, CSL-Daily | 无需额外监督，自适应强调手部与面部等信息丰富的空间区域。 |
| AdaBrowse: Adaptive Video Browser for Efficient Continuous Sign Language Recognition | Hu et al. | `ACM MM` | [link](https://arxiv.org/abs/2308.08327) | [code](https://github.com/hulianyuyy/AdaBrowse) | PHOENIX-2014, PHOENIX-2014T, CSL-Daily | 自适应选择输入序列长度与分辨率，显著降低推理开销。 |
| Continuous Sign Language Recognition with Correlation Network | Hu et al. | `CVPR` | [link](https://arxiv.org/abs/2303.03202) | [code](https://github.com/hulianyuyy/CorrNet) | PHOENIX-2014, PHOENIX-2014T, CSL-Daily | 相关性模块显式捕捉相邻帧间身体轨迹的关联。 |
| Distilling Cross-Temporal Contexts for Continuous Sign Language Recognition | Guo et al. | `CVPR` | — | — | PHOENIX-2014, PHOENIX-2014T, CSL-Daily | 蒸馏不同时间尺度的上下文，融合局部与全局时序线索。 |
| C2ST: Cross-modal Contextualized Sequence Transduction for Continuous Sign Language Recognition | Zhang et al. | `ICCV` | — | — | PHOENIX-2014, PHOENIX-2014T, CSL-Daily | 把 gloss 语言上下文注入序列转录过程，替代纯 CTC 解码。 |
| CoSign: Exploring Co-occurrence Signals in Skeleton-based Continuous Sign Language Recognition | Jiao et al. | `ICCV` | — | — | PHOENIX-2014, PHOENIX-2014T, CSL-Daily | 基于骨架建模多部位共现信号，轻量且无需 RGB 输入。 |
| Improving Continuous Sign Language Recognition with Cross-Lingual Signs | Wei & Chen | `ICCV` | [link](https://arxiv.org/abs/2308.10809) | — | PHOENIX-2014, PHOENIX-2014T, CSL-Daily | 借跨语种手语词的视觉相似性做跨语言数据增强。 |
| Prior-Aware Cross Modality Augmentation Learning for Continuous Sign Language Recognition | Guo et al. | `TMM` | — | — | PHOENIX-2014, PHOENIX-2014T, CSL | 利用 gloss 先验做跨模态数据增强，缓解标注稀缺。 |

</details>

<details open>
<summary><b>2022</b> &nbsp;·&nbsp; 1 paper</summary>

| Title | Authors | Venue | Paper | Code | Datasets | Key Contribution |
|:--|:--|:--|:-:|:-:|:--|:--|
| C2SLR: Consistency-Enhanced Continuous Sign Language Recognition | Zuo & Mak | `CVPR` | — | — | PHOENIX-2014, PHOENIX-2014T, CSL-Daily | 用姿态与注意力一致性约束同时正则空间与时序建模。 |

</details>

<details open>
<summary><b>2021</b> &nbsp;·&nbsp; 3 papers</summary>

| Title | Authors | Venue | Paper | Code | Datasets | Key Contribution |
|:--|:--|:--|:-:|:-:|:--|:--|
| Self-Mutual Distillation Learning for Continuous Sign Language Recognition | Hao et al. | `ICCV` | — | — | PHOENIX-2014, PHOENIX-2014T | 视觉与序列模块间互蒸馏，让视觉分支学到更强的短时语义。 |
| Visual Alignment Constraint for Continuous Sign Language Recognition | Min et al. | `ICCV` | [link](https://arxiv.org/abs/2104.02330) | [code](https://github.com/ycmin95/VAC_CSLR) | PHOENIX-2014, PHOENIX-2014T, CSL | 用对齐约束强化视觉特征提取器，缓解 CTC 训练下的过拟合。 |
| Spatial-Temporal Multi-Cue Network for Sign Language Recognition and Translation | Zhou et al. | `TMM` | [link](https://arxiv.org/abs/2002.03187) | — | PHOENIX-2014, PHOENIX-2014T, CSL | 多线索（全身/手/脸/姿态）时空网络，统一支持识别与翻译。 |

</details>

<p align="right"><a href="#-contents">back to top ↑</a></p>

## 🔤 Sign Language Translation (SLT)

<details open>
<summary><b>2026</b> &nbsp;·&nbsp; 4 papers</summary>

| Title | Authors | Venue | Paper | Code | Datasets | Key Contribution |
|:--|:--|:--|:-:|:-:|:--|:--|
| Selective Contrastive Learning For Gloss Free Sign Language Translation | Lai et al. | `ACL` | [link](https://aclanthology.org/2026.acl-long.2116/) | — | PHOENIX-2014T, CSL-Daily | 按相似度轨迹筛选难负样本，以课程式对比学习改善视频-文本对齐。 |
| Think in Latent Thoughts: A New Paradigm for Gloss-Free Sign Language Translation | Jiang et al. | `ACL` | [link](https://aclanthology.org/2026.acl-long.454/) | [code](https://github.com/fletcherjiang/SignThought) | PHOENIX-2014T, 新建数据集 | 在视频与文本间引入潜在思维槽做推理式翻译，并发布新数据集。 |
| BoostSLT: Boosting Sign Language Translation via a Plug-and-Play Diffusion-Based Semantic Enhancer | Han et al. | `CVPR` | [link](https://openaccess.thecvf.com/content/CVPR2026/html/Han_BoostSLT_Boosting_Sign_Language_Translation_via_a_Plug-and-Play_Diffusion-Based_Semantic_CVPR_2026_paper.html) | [code](https://github.com/K1sna/BoostSLT) | PHOENIX-2014T, CSL-Daily, Auslan-Daily | 即插即用的扩散语义增强模块，配合无监督时序分割改善长句翻译。 |
| Learning Effective Sign Features without Text for Gloss-free Sign Language Translation | Gan et al. | `CVPR` | [link](https://openaccess.thecvf.com/content/CVPR2026/html/Gan_Learning_Effective_Sign_Features_without_Text_for_Gloss-free_Sign_Language_CVPR_2026_paper.html) | — | PHOENIX-2014T, CSL-Daily, How2Sign, OpenASL | 提出 SignDINO，不用 gloss 和文本、纯自蒸馏预训练手语 tokenizer。 |

</details>

<details open>
<summary><b>2025</b> &nbsp;·&nbsp; 5 papers</summary>

| Title | Authors | Venue | Paper | Code | Datasets | Key Contribution |
|:--|:--|:--|:-:|:-:|:--|:--|
| Lost in Translation, Found in Context: Sign Language Translation with Contextual Cues | Sincan et al. | `CVPR` | [link](https://arxiv.org/abs/2501.09754) | — | BOBSL, How2Sign | 引入背景与上下文线索辅助翻译，处理指代与省略。 |
| Uni-Sign: Toward Unified Sign Language Understanding at Scale | Li et al. | `ICLR` | [link](https://arxiv.org/abs/2501.15187) | [code](https://github.com/ZechengLi19/Uni-Sign) | CSL-Daily, PHOENIX-2014T, WLASL | 统一预训练框架，把识别、翻译与理解任务放进同一模型。 |
| YouTube-SL-25: A Large-Scale, Open-Domain Multilingual Sign Language Parallel Corpus | Tanzer & Zhang | `ICLR` | [link](https://arxiv.org/abs/2407.11144) | — | YouTube-SL-25 | 覆盖 25 种以上手语的大规模多语种平行语料。 |
| Bridging Sign and Spoken Languages: Pseudo Gloss Generation for Sign Language Translation | Guo et al. | `NeurIPS` | [link](https://openreview.net/forum?id=p6Huickfj7) | — | PHOENIX-2014T, CSL-Daily | 不依赖人工 gloss，自动生成伪 gloss 作为中间表示，保留两阶段翻译的结构优势。 |
| Geo-Sign: Hyperbolic Contrastive Regularisation for Geometrically Aware Sign Language Translation | Fish & Bowden | `NeurIPS` | [link](https://openreview.net/forum?id=WkUzrUsqR9) | — | — | 把骨架特征投影到双曲空间，建模手语运动的层级结构，辅助翻译。 |

</details>

<details open>
<summary><b>2024</b> &nbsp;·&nbsp; 4 papers</summary>

| Title | Authors | Venue | Paper | Code | Datasets | Key Contribution |
|:--|:--|:--|:-:|:-:|:--|:--|
| LLMs are Good Sign Language Translators | Gong et al. | `CVPR` | [link](https://arxiv.org/abs/2404.00925) | — | PHOENIX-2014T, CSL-Daily | 把手语视频规范化为类语言表示，直接对接 LLM 做翻译。 |
| Sign2GPT: Leveraging Large Language Models for Gloss-Free Sign Language Translation | Wong et al. | `ICLR` | [link](https://arxiv.org/abs/2405.04164) | — | PHOENIX-2014T, CSL-Daily | 用轻量适配器把预训练大语言模型接入无 gloss 手语翻译。 |
| Improving Gloss-free Sign Language Translation by Reducing Representation Density | Ye et al. | `NeurIPS` | [link](https://arxiv.org/abs/2405.14312) | — | PHOENIX-2014T, CSL-Daily | 指出语义相近手语词表示过密是瓶颈，用对比目标拉开距离。 |
| Scaling Sign Language Translation | Zhang et al. | `NeurIPS` | [link](https://arxiv.org/abs/2407.11855) | — | YouTube-ASL, How2Sign, PHOENIX-2014T | 系统研究数据、模型与多语种规模化对 SLT 的影响。 |

</details>

<details open>
<summary><b>2023</b> &nbsp;·&nbsp; 7 papers</summary>

| Title | Authors | Venue | Paper | Code | Datasets | Key Contribution |
|:--|:--|:--|:-:|:-:|:--|:--|
| Gloss-Free End-to-End Sign Language Translation | Lin et al. | `ACL` | [link](https://arxiv.org/abs/2305.12876) | [code](https://github.com/HenryLittle/GloFE) | PHOENIX-2014T, CSL-Daily, OpenASL | 用共享语义空间中的中间表示替代 gloss，实现端到端无 gloss 翻译。 |
| Gloss Attention for Gloss-free Sign Language Translation | Yin et al. | `CVPR` | [link](https://arxiv.org/abs/2307.07361) | — | PHOENIX-2014T, CSL-Daily | 无需 gloss 标注，用注意力隐式定位类 gloss 的语义片段。 |
| Gloss-free Sign Language Translation: Improving from Visual-Language Pretraining | Zhou et al. | `ICCV` | [link](https://arxiv.org/abs/2307.14768) | [code](https://github.com/zhoubenjia/GFSLT-VLP) | PHOENIX-2014T, CSL-Daily | 视觉-语言预训练对齐视频与文本语义，大幅提升无 gloss 翻译。 |
| Sign Language Translation with Iterative Prototype | Yao et al. | `ICCV` | [link](https://arxiv.org/abs/2308.12191) | — | PHOENIX-2014T, CSL-Daily | 迭代refine原型表示，逐步逼近准确的语义单元。 |
| SLTUNET: A Simple Unified Model for Sign Language Translation | Zhang et al. | `ICLR` | [link](https://arxiv.org/abs/2305.01778) | [code](https://github.com/bzhangGo/sltunet) | PHOENIX-2014T, CSL-Daily | 单一模型统一多任务多模态，共享表示提升翻译质量。 |
| Auslan-Daily: Australian Sign Language Translation for Daily Communication and News | Shen et al. | `NeurIPS` | — | — | Auslan-Daily | 发布覆盖日常对话与新闻场景的澳大利亚手语翻译数据集。 |
| YouTube-ASL: A Large-Scale, Open-Domain American Sign Language-English Parallel Corpus | Uthus et al. | `NeurIPS` | [link](https://arxiv.org/abs/2306.15162) | — | YouTube-ASL, How2Sign | 构建开放域大规模 ASL-英语平行语料，规模约为 How2Sign 的 3 倍。 |

</details>

<details open>
<summary><b>2022</b> &nbsp;·&nbsp; 4 papers</summary>

| Title | Authors | Venue | Paper | Code | Datasets | Key Contribution |
|:--|:--|:--|:-:|:-:|:--|:--|
| A Simple Multi-Modality Transfer Learning Baseline for Sign Language Translation | Chen et al. | `CVPR` | [link](https://arxiv.org/abs/2203.04287) | [code](https://github.com/FangyunWei/SLRT) | PHOENIX-2014T, CSL-Daily | 用渐进式预训练把通用视觉与语言模型迁移到 SLT，成为强基线。 |
| MLSLT: Towards Multilingual Sign Language Translation | Yin et al. | `CVPR` | — | — | SP-10 | 首个多语种手语翻译工作，发布覆盖 10 种手语的 SP-10 数据集。 |
| Addressing Resource Scarcity across Sign Languages with Multilingual Pretraining and Unified-Vocabulary Datasets | Yin et al. | `NeurIPS` | — | — | SP-10, PHOENIX-2014T | 多语种预训练加统一词表，缓解低资源手语数据稀缺。 |
| Two-Stream Network for Sign Language Recognition and Translation | Chen et al. | `NeurIPS` | [link](https://arxiv.org/abs/2211.01367) | [code](https://github.com/FangyunWei/SLRT/tree/main/TwoStreamNetwork) | PHOENIX-2014, PHOENIX-2014T, CSL-Daily | RGB 与关键点双流互促，同时刷新识别与翻译性能。 |

</details>

<details open>
<summary><b>2021</b> &nbsp;·&nbsp; 6 papers</summary>

| Title | Authors | Venue | Paper | Code | Datasets | Key Contribution |
|:--|:--|:--|:-:|:-:|:--|:--|
| Contrastive Disentangled Meta-Learning for Signer-Independent Sign Language Translation | Ye et al. | `ACM MM` | — | — | PHOENIX-2014T, CSL | 对比解耦 + 元学习，提升跨签名者泛化。 |
| SimulSLT: End-to-End Simultaneous Sign Language Translation | Yin et al. | `ACM MM` | — | — | PHOENIX-2014T | 端到端同声手语翻译，用等待策略在时延与质量间折中。 |
| Skeleton-Aware Neural Sign Language Translation | Chen et al. | `ACM MM` | — | — | PHOENIX-2014T, CSL | 引入骨架信息辅助翻译，降低对外观与背景的依赖。 |
| Improving Sign Language Translation With Monolingual Data by Sign Back-Translation | Zhou et al. | `CVPR` | [link](https://arxiv.org/abs/2105.12397) | — | PHOENIX-2014T, CSL-Daily | 提出手语回译，用单语文本合成伪手语数据；发布 CSL-Daily 数据集。 |
| Aligning Subtitles in Sign Language Videos | Bull et al. | `ICCV` | [link](https://arxiv.org/abs/2105.02877) | — | BOBSL | 用 Transformer 对齐手语视频与字幕时间轴，为大规模弱标注铺路。 |
| Conditional Sentence Generation and Cross-Modal Reranking for Sign Language Translation | Zhao et al. | `TMM` | — | — | PHOENIX-2014T | 条件句子生成加跨模态重排序，提升译文流畅度与忠实度。 |

</details>

<p align="right"><a href="#-contents">back to top ↑</a></p>

## 🧍 Sign Language Production (SLP)

<details open>
<summary><b>2026</b> &nbsp;·&nbsp; 5 papers</summary>

| Title | Authors | Venue | Paper | Code | Datasets | Key Contribution |
|:--|:--|:--|:-:|:-:|:--|:--|
| Hybrid Autoregressive-Diffusion Model for Real-Time Sign Language Production | Ye et al. | `ACL` | [link](https://aclanthology.org/2026.acl-long.31/) | — | — | 自回归与扩散混合，面向实时手语生成。 |
| Stable Signer: Hierarchical Sign Language Generative Model | Fang et al. | `ACL` | [link](https://aclanthology.org/2026.acl-long.659/) | — | — | 层级式手语生成模型。 |
| Focal–General Diffusion Model with Semantic Consistent Guidance for Sign Language Production | Yu et al. | `CVPR` | [link](https://openaccess.thecvf.com/content/CVPR2026/html/Yu_Focal-General_Diffusion_Model_with_Semantic_Consistent_Guidance_for_Sign_Language_CVPR_2026_paper.html) | [code](https://github.com/yuyiheng-eu/FGDM-main) | PHOENIX-2014T, USTC-CSL | 两阶段扩散分别建模关节依赖与全局序列，用时间感知 CTC 注入语义约束。 |
| SignPR: A Progressive Vector-Quantized Diffusion Framework for Sign Language Production | Liu et al. | `CVPR` | [link](https://openaccess.thecvf.com/content/CVPR2026/html/Liu_SignPR_A_Progressive_Vector-Quantized_Diffusion_Framework_for_Sign_Language_Production_CVPR_2026_paper.html) | — | PHOENIX-2014T, CSL-Daily, USTC-CSL | 语义级与区域级离散 token 双重渐进，扩散生成兼顾结构一致与动作细节。 |
| Text-Driven 3D Hand Motion Generation from Sign Language Data | Bensabath et al. | `CVPR` | [link](https://openaccess.thecvf.com/content/CVPR2026/html/Bensabath_Text-Driven_3D_Hand_Motion_Generation_from_Sign_Language_Data_CVPR_2026_paper.html) | — | BOBSL3DT | 从手语视频自动构建 130 万文本-3D 手部动作对，训练 HandMDM 生成手部动作。 |

</details>

<details open>
<summary><b>2025</b> &nbsp;·&nbsp; 4 papers</summary>

| Title | Authors | Venue | Paper | Code | Datasets | Key Contribution |
|:--|:--|:--|:-:|:-:|:--|:--|
| Sign-IDD: Iconicity Disentangled Diffusion for Sign Language Production | Tang et al. | `AAAI` | [link](https://arxiv.org/abs/2412.13609) | [code](https://github.com/NaVi-start/Sign-IDD) | PHOENIX-2014T, CSL-Daily | 解耦手语的象似性（iconicity）骨架约束，改进扩散式生成。 |
| Discrete to Continuous: Generating Smooth Transition Poses from Sign Language Observations | Shen et al. | `CVPR` | — | — | PHOENIX-2014T, CSL-Daily | 在离散手语词之间生成平滑过渡姿态，改善拼接生硬问题。 |
| Signs as Tokens: A Retrieval-Enhanced Multilingual Sign Language Generator | Li et al. | `ICCV` | [link](https://arxiv.org/abs/2411.17799) | [code](https://github.com/2000ZRL/SOKE) | 多语种数据集 | 把手语词当作 token，检索增强的多语种手语生成。 |
| Advanced Sign Language Video Generation with Compressed and Quantized Multi-Condition Tokenization | Zhu et al. | `NeurIPS` | — | [code](https://github.com/umnooob/signvip) | PHOENIX-2014T | 多条件压缩量化 token 控制，提升生成视频的可控性与保真度。 |

</details>

<details open>
<summary><b>2024</b> &nbsp;·&nbsp; 3 papers</summary>

| Title | Authors | Venue | Paper | Code | Datasets | Key Contribution |
|:--|:--|:--|:-:|:-:|:--|:--|
| MS2SL: Multimodal Spoken Data-Driven Continuous Sign Language Production | Ma et al. | `ACL` | [link](https://arxiv.org/abs/2406.07168) | — | PHOENIX-2014T, How2Sign | 支持文本与语音多模态输入驱动的连续手语生成。 |
| T2S-GPT: Dynamic Vector Quantization for Autoregressive Sign Language Production from Text | Yin et al. | `ACL` | [link](https://arxiv.org/abs/2406.07119) | — | PHOENIX-2014T, How2Sign | 动态向量量化编码手语序列，自回归生成保留细粒度动作。 |
| Neural Sign Actors: A Diffusion Model for 3D Sign Language Production from Text | Baltatzis et al. | `CVPR` | [link](https://arxiv.org/abs/2312.02702) | — | How2Sign, PHOENIX-2014T | 基于扩散模型的 3D 手语 avatar 生成，兼顾语义准确与动作自然。 |

</details>

<details open>
<summary><b>2022</b> &nbsp;·&nbsp; 1 paper</summary>

| Title | Authors | Venue | Paper | Code | Datasets | Key Contribution |
|:--|:--|:--|:-:|:-:|:--|:--|
| Signing at Scale: Learning to Co-Articulate Signs for Large-Scale Photo-Realistic Sign Language Production | Saunders et al. | `CVPR` | [link](https://arxiv.org/abs/2203.15354) | — | meineDGS, PHOENIX-2014T | 学习手语词间的协同发音，生成大词表的照片级真实手语视频。 |

</details>

<details open>
<summary><b>2021</b> &nbsp;·&nbsp; 3 papers</summary>

| Title | Authors | Venue | Paper | Code | Datasets | Key Contribution |
|:--|:--|:--|:-:|:-:|:--|:--|
| Towards Fast and High-Quality Sign Language Production | Huang et al. | `ACM MM` | — | — | PHOENIX-2014T | 非自回归生成框架，兼顾生成速度与姿态质量。 |
| Mixed SIGNals: Sign Language Production via a Mixture of Motion Primitives | Saunders et al. | `ICCV` | [link](https://arxiv.org/abs/2107.11317) | — | PHOENIX-2014T | 把手语生成分解为运动基元的混合，提升长序列生成稳定性。 |
| Continuous 3D Multi-Channel Sign Language Production via Progressive Transformers and Mixture Density Networks | Saunders et al. | `IJCV` | [link](https://arxiv.org/abs/2103.06982) | — | PHOENIX-2014T | 渐进式 Transformer 加混合密度网络，连续生成多通道 3D 手语。 |

</details>

<p align="right"><a href="#-contents">back to top ↑</a></p>

## 🔍 Sign Language Retrieval

<details open>
<summary><b>2024</b> &nbsp;·&nbsp; 1 paper</summary>

| Title | Authors | Venue | Paper | Code | Datasets | Key Contribution |
|:--|:--|:--|:-:|:-:|:--|:--|
| SEDS: Semantically Enhanced Dual-Stream Encoder for Sign Language Retrieval | Zhou et al. | `ACM MM` | [link](https://arxiv.org/abs/2407.16394) | [code](https://github.com/longtaojiang/SEDS) | How2Sign, PHOENIX-2014T, CSL-Daily | RGB 与姿态双流编码加语义增强，提升检索的细粒度判别力。 |

</details>

<details open>
<summary><b>2022</b> &nbsp;·&nbsp; 1 paper</summary>

| Title | Authors | Venue | Paper | Code | Datasets | Key Contribution |
|:--|:--|:--|:-:|:-:|:--|:--|
| Sign Language Video Retrieval with Free-Form Textual Queries | Duarte et al. | `CVPR` | [link](https://arxiv.org/abs/2201.02495) | — | How2Sign, PHOENIX-2014T | 首次定义自由文本查询的手语视频检索任务，提出 SPOT-ALIGN 框架。 |

</details>

<p align="right"><a href="#-contents">back to top ↑</a></p>

## 📚 Others

Datasets & benchmarks, pre-training & representation learning, fingerspelling, sign language understanding & dialogue.

<details open>
<summary><b>2026</b> &nbsp;·&nbsp; 2 papers</summary>

| Title | Authors | Venue | Paper | Code | Datasets | Key Contribution |
|:--|:--|:--|:-:|:-:|:--|:--|
| OpenFS: Multi-Hand-Capable Fingerspelling Recognition with Implicit Signing-Hand Detection and Frame-Wise Letter-Conditioned Synthesis | Cha et al. | `CVPR` | [link](https://arxiv.org/abs/2602.22949) | [code](https://github.com/JunukCha/OpenFS) | ChicagoFSWild, ChicagoFSWild+, FSNeo | 指拼识别：隐式检测打手语的手，并用扩散合成词表外指拼数据。 |
| BANZ-FS: BANZSL Fingerspelling Dataset | Shen et al. | `ICLR` | [link](https://mlanthology.org/iclr/2026/shen2026iclr-banzfs/) | — | BANZ-FS | 首个英/澳/新西兰手语双手指拼大规模数据集（3.5 万+ 实例）及基准。 |

</details>

<details open>
<summary><b>2024</b> &nbsp;·&nbsp; 1 paper</summary>

| Title | Authors | Venue | Paper | Code | Datasets | Key Contribution |
|:--|:--|:--|:-:|:-:|:--|:--|
| MM-WLAuslan: Multi-View Multi-Modal Word-Level Australian Sign Language Recognition Dataset | Shen et al. | `NeurIPS` | [link](https://arxiv.org/abs/2410.19488) | — | MM-WLAuslan | 多视角多模态的澳大利亚手语词级识别数据集。 |

</details>

<details open>
<summary><b>2023</b> &nbsp;·&nbsp; 2 papers</summary>

| Title | Authors | Venue | Paper | Code | Datasets | Key Contribution |
|:--|:--|:--|:-:|:-:|:--|:--|
| ASL Citizen: A Community-Sourced Dataset for Advancing Isolated Sign Language Recognition | Desai et al. | `NeurIPS` | [link](https://arxiv.org/abs/2304.05934) | — | ASL Citizen | 社区众包采集的大规模 ISLR 数据集，聚焦手语词典检索场景。 |
| PopSign ASL v1.0: An Isolated American Sign Language Dataset Collected via Smartphones | Starner et al. | `NeurIPS` | — | — | PopSign ASL | 用手机采集的 ISLR 数据集，面向儿童手语学习游戏场景。 |

</details>

<details open>
<summary><b>2021</b> &nbsp;·&nbsp; 3 papers</summary>

| Title | Authors | Venue | Paper | Code | Datasets | Key Contribution |
|:--|:--|:--|:-:|:-:|:--|:--|
| Fingerspelling Detection in American Sign Language | Shi et al. | `CVPR` | [link](https://arxiv.org/abs/2104.01291) | — | ChicagoFSWild, ChicagoFSWild+ | 定义野外场景下的指拼检测任务并给出评测协议与基线。 |
| How2Sign: A Large-Scale Multimodal Dataset for Continuous American Sign Language | Duarte et al. | `CVPR` | [link](https://arxiv.org/abs/2008.08143) | — | How2Sign | 大规模多模态多视角 ASL 数据集，含 3D 关键点与深度信息。 |
| Read and Attend: Temporal Localisation in Sign Language Videos | Varol et al. | `CVPR` | [link](https://arxiv.org/abs/2103.16481) | — | BSL-1K, BSLDict | 用 Transformer 在连续手语视频中定位手语词的时间位置。 |

</details>

<p align="right"><a href="#-contents">back to top ↑</a></p>

## ⭐ Other Top Venues

Sign language papers from well-known venues that are **not** CCF-A in the 7th edition (e.g. ECCV, EMNLP, NAACL, IJCAI, COLING, BMVC). Same inclusion rules otherwise (2021+, formally accepted).

<details open>
<summary><b>2026</b> &nbsp;·&nbsp; 4 papers</summary>

| Title | Authors | Venue | Direction | Paper | Code | Datasets | Key Contribution |
|:--|:--|:--|:--|:-:|:-:|:--|:--|
| SIGNER: Temporally Grounded Sign Language Generation via Time-Resolved Conditioning | Lee et al. | `ECCV (CCF-B)` | SLP | [link](https://arxiv.org/abs/2506.07460) | — | — | 按时间分辨的条件控制，生成时间上对齐的手语。 |
| SignBind-LLM: Multi-Stage Modality Fusion for Sign Language Translation | — | `ECCV (CCF-B)` | SLT | [link](https://en.papernotes.org/ECCV2026/human_understanding/signbind-llm_multi-stage_modality_fusion_for_sign_language_translation/) | — | — | 多阶段模态融合接入 LLM 做手语翻译。 |
| SignRefine: Adapting Foundational Video Models for Sign Language Generation | Pelykh et al. | `ECCV (CCF-B)` | SLP | [link](https://eccv.ecva.net/virtual/2026/poster/4976) | — | — | 把视频基础模型适配到手语视频生成。 |
| SignSparK: Efficient Multilingual Sign Language Production via Sparse Keyframe Learning | Low et al. | `ECCV (CCF-B)` | SLP | [link](https://arxiv.org/abs/2603.10446) | [code](https://github.com/JianHe0628/SignSparK) | — | 稀疏关键帧学习的高效多语种手语生成。 |

</details>

<details open>
<summary><b>2024</b> &nbsp;·&nbsp; 6 papers</summary>

| Title | Authors | Venue | Direction | Paper | Code | Datasets | Key Contribution |
|:--|:--|:--|:--|:-:|:-:|:--|:--|
| A Simple Baseline for Spoken Language to Sign Language Translation with 3D Avatars | Fang et al. | `ECCV (CCF-B)` | SLP | [link](https://arxiv.org/abs/2401.04730) | [code](https://github.com/FangyunWei/SLRT/tree/main/Spoken2Sign) | PHOENIX-2014T, CSL-Daily | 从口语文本直接驱动 3D avatar 生成手语，给出简洁强基线。 |
| EvSign: Sign Language Recognition and Translation with Streaming Events | Zhang et al. | `ECCV (CCF-B)` | CSLR / SLT | [link](https://arxiv.org/abs/2407.12593) | — | EvSign | 用事件相机流做手语识别与翻译，兼顾隐私与低功耗。 |
| Uncertainty-Aware Sign Language Video Retrieval with Probability Distribution Modeling | Zheng et al. | `ECCV (CCF-B)` | 检索 | [link](https://arxiv.org/abs/2405.19689) | — | How2Sign, PHOENIX-2014T | 用概率分布建模检索中的语义不确定性，缓解一对多匹配。 |
| Visual Alignment Pre-training for Sign Language Translation | Jiao et al. | `ECCV (CCF-B)` | SLT | — | — | PHOENIX-2014T, CSL-Daily | 无 gloss 的视觉对齐预训练，把视觉片段与词语对齐。 |
| SignCLIP: Connecting Text and Sign Language by Contrastive Learning | Jiang et al. | `EMNLP (CCF-B)` | 预训练 | [link](https://arxiv.org/abs/2407.01264) | — | Spreadthesign, How2Sign | CLIP 式对比学习对齐手语视频与文本，支持多语种零样本迁移。 |
| Towards Online Continuous Sign Language Recognition and Translation | Guo et al. | `EMNLP (CCF-B)` | CSLR / SLT | [link](https://arxiv.org/abs/2401.05336) | [code](https://github.com/FangyunWei/SLRT) | PHOENIX-2014, PHOENIX-2014T, CSL-Daily | 把离线 CSLR 改造为在线流式框架，支持实时识别与翻译。 |

</details>

<details open>
<summary><b>2023</b> &nbsp;·&nbsp; 1 paper</summary>

| Title | Authors | Venue | Direction | Paper | Code | Datasets | Key Contribution |
|:--|:--|:--|:--|:-:|:-:|:--|:--|
| Cross-modality Data Augmentation for End-to-End Sign Language Translation | Ye et al. | `EMNLP Findings (CCF-B)` | SLT | [link](https://arxiv.org/abs/2305.11096) | — | PHOENIX-2014T, CSL-Daily | 跨模态数据增强桥接 gloss 与文本，改善端到端翻译。 |

</details>

<details open>
<summary><b>2022</b> &nbsp;·&nbsp; 5 papers</summary>

| Title | Authors | Venue | Direction | Paper | Code | Datasets | Key Contribution |
|:--|:--|:--|:--|:-:|:-:|:--|:--|
| Weakly-supervised Fingerspelling Recognition in British Sign Language Videos | Prajwal et al. | `BMVC` | 指拼识别 | [link](https://arxiv.org/abs/2211.08954) | — | BOBSL | 弱监督学习英国手语指拼识别，无需逐帧字母标注。 |
| Automatic Dense Annotation of Large-Vocabulary Sign Language Videos | Momeni et al. | `ECCV (CCF-B)` | 数据集 | [link](https://arxiv.org/abs/2208.02802) | — | BOBSL | 自动为大词表手语视频生成稠密标注，大幅扩充可用监督。 |
| Deep Radial Embedding for Visual Sequence Learning | Min et al. | `ECCV (CCF-B)` | CSLR | — | — | PHOENIX-2014, PHOENIX-2014T | 改造 CTC 的径向嵌入，缓解序列学习中的尖峰行为。 |
| Temporal Lift Pooling for Continuous Sign Language Recognition | Hu et al. | `ECCV (CCF-B)` | CSLR | [link](https://arxiv.org/abs/2207.08734) | [code](https://github.com/hulianyuyy/Temporal-Lift-Pooling) | PHOENIX-2014, PHOENIX-2014T, CSL-Daily | 用提升小波思想设计时序池化，保留下采样中丢失的细节。 |
| Open-Domain Sign Language Translation Learned from Online Video | Shi et al. | `EMNLP (CCF-B)` | SLT / 数据集 | [link](https://arxiv.org/abs/2205.12870) | [code](https://github.com/chevalierNoir/OpenASL) | OpenASL | 从在线视频构建开放域 ASL 翻译数据集 OpenASL。 |

</details>

<p align="right"><a href="#-contents">back to top ↑</a></p>

---

## 📌 Inclusion Criteria

| Rule | Detail |
|:--|:--|
| **Time** | Published in 2021 or later. |
| **Status** | Formally accepted or published (camera-ready / proceedings / journal issue). **No arXiv-only preprints.** |
| **Venue tier** | CCF-A per the 7th edition (March 2026). Tier is judged by the *current* edition, not the edition in force when the paper was published. |
| **Conferences (CCF-A)** | CVPR, ICCV, ACM MM, AAAI, NeurIPS, ICML, ICLR, ACL, SIGKDD, WWW, SIGIR, CHI, SIGGRAPH, IEEE VR |
| **Journals (CCF-A)** | TPAMI, IJCV, TIP, TMM, AI, JMLR, TOG, TVCG |
| **Other Top Venues** | Strong work at non-CCF-A venues (ECCV, EMNLP, NAACL, IJCAI, COLING, BMVC …) goes in its own section. |

> ⚠️ Two commonly mis-tiered venues: **ICLR is CCF-A** in the 7th edition, while **IJCAI is CCF-B**.

## 📰 News

- **2026-09-28** — Added 3 NeurIPS 2025 papers (MixSignGraph, Geo-Sign, Pseudo Gloss) found via OpenReview.
- **2026-09-28** — Added 11 CCF-A papers from 2026 (CVPR, ACL, ICLR) and 4 from ECCV 2026, each verified against official proceedings.
- **2026-09-28** — Reorganized by year within each direction; added stats table and new layout.
- **2026-09-28** — First batch of 96 papers added across all sections.
- **2026-09-28** — Repository created. Added inclusion criteria and the Other Top Venues section.

## 🤝 Contributing

PRs welcome. Please:

1. Keep the table format and place the paper under the right year block.
2. Check the venue tier against the **CCF 7th edition** before adding to a CCF-A section.
3. Make sure the paper is **formally accepted** — no arXiv-only preprints.

> Cells marked `—` mean the link has not been filled in yet, not that none exists — PRs adding them are especially welcome.
