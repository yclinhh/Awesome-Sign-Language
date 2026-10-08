<div align="center">

# Awesome Sign Language

**A curated list of sign language papers published at CCF-A venues since 2021**

[![Awesome](https://awesome.re/badge.svg)](https://awesome.re)
![Papers](https://img.shields.io/badge/papers-183-blue)
![CCF-A](https://img.shields.io/badge/CCF--A-166-brightgreen)
![Years](https://img.shields.io/badge/years-2021--2026-orange)
![Updated](https://img.shields.io/badge/updated-2026--10--08-lightgrey)

Venue tiers follow the *CCF Recommended List of International Conferences and Journals*, **7th edition (March 2026)**.

**Only formally accepted / published papers are included — no arXiv-only preprints.**

</div>

---

## 📊 At a Glance

| Direction | 2026 | 2025 | 2024 | 2023 | 2022 | 2021 | **Total** |
|---|---|---|---|---|---|---|---|
| ISLR | · | 2 | 4 | 5 | 2 | 3 | **16** |
| CSLR | 3 | 4 | 5 | 9 | 2 | 3 | **26** |
| SLT | 13 | 10 | 8 | 9 | 6 | 8 | **54** |
| SLP | 8 | 5 | 2 | 2 | 3 | 3 | **23** |
| Retrieval | 1 | · | 1 | 1 | 1 | · | **4** |
| Others | 15 | 8 | 3 | 3 | 7 | 7 | **43** |
| Other Venues | 4 | · | 7 | 1 | 5 | · | **17** |
| **Total** | **44** | **29** | **30** | **30** | **26** | **24** | **183** |

## 📋 Contents

- 🤟 [Isolated Sign Language Recognition (ISLR)](#-isolated-sign-language-recognition-islr) &nbsp;`16`
- 🎬 [Continuous Sign Language Recognition (CSLR)](#-continuous-sign-language-recognition-cslr) &nbsp;`26`
- 🔤 [Sign Language Translation (SLT)](#-sign-language-translation-slt) &nbsp;`54`
- 🧍 [Sign Language Production (SLP)](#-sign-language-production-slp) &nbsp;`23`
- 🔍 [Sign Language Retrieval](#-sign-language-retrieval) &nbsp;`4`
- 📚 [Others](#-others) &nbsp;`43`
- ⭐ [Other Top Venues](#-other-top-venues) &nbsp;`17`
- 📌 [Inclusion Criteria](#-inclusion-criteria)
- 📰 [News](#-news)
- 🤝 [Contributing](#-contributing)

---

## 🤟 Isolated Sign Language Recognition (ISLR)

<details open>
<summary><b>2025</b> &nbsp;·&nbsp; 2 papers</summary>

| Title | Authors | Venue | Paper | Code | Datasets | Key Contribution |
|:--|:--|:--|:-:|:-:|:--|:--|
| Cross-View Isolated Sign Language Recognition via View Synthesis and Feature Disentanglement | Shen et al. | `ICCV` | [link](https://openaccess.thecvf.com/content/ICCV2025/html/Shen_Cross-View_Isolated_Sign_Language_Recognition_via_View_Synthesis_and_Feature_Disentanglement_ICCV2025_paper.html) | — | — | 通过视角合成与特征解耦，解决跨视角的孤立词识别。 |
| Scaling up Multimodal Pre-training for Sign Language Understanding | Zhou et al. | `TPAMI` | — | — | 多数据集 | 大规模多模态手语预训练，统一覆盖识别、翻译与检索等任务。 |

</details>

<details open>
<summary><b>2024</b> &nbsp;·&nbsp; 4 papers</summary>

| Title | Authors | Venue | Paper | Code | Datasets | Key Contribution |
|:--|:--|:--|:-:|:-:|:--|:--|
| Siformer: Feature-isolated Transformer for Efficient Skeleton-based Sign Language Recognition | Pu et al. | `ACM MM` | [link](https://doi.org/10.1145/3664647.3681578) | — | — | 特征隔离的 Transformer，做高效的骨架手语识别。 |
| Self-Supervised Representation Learning with Spatial-Temporal Consistency for Sign Language Recognition | Zhao et al. | `TIP` | [link](https://arxiv.org/abs/2406.10501) | — | NMFs-CSL, SLR500, MSASL, WLASL | 以时空一致性为自监督信号做骨架手语表征学习。 |
| A Sign Language Recognition Framework Based on Cross-Modal Complementary Information Fusion | Zhang et al. | `TMM` | [link](https://doi.org/10.1109/tmm.2024.3377095) | — | — | 融合多模态之间的互补信息提升手语识别。 |
| SKIM: Skeleton-Based Isolated Sign Language Recognition With Part Mixing | Lin et al. | `TMM` | [link](https://doi.org/10.1109/tmm.2023.3321502) | — | — | 骨架 ISLR 中按身体部位混合做数据增强。 |

</details>

<details open>
<summary><b>2023</b> &nbsp;·&nbsp; 5 papers</summary>

| Title | Authors | Venue | Paper | Code | Datasets | Key Contribution |
|:--|:--|:--|:-:|:-:|:--|:--|
| BEST: BERT Pre-Training for Sign Language Recognition with Coupling Tokenization | Zhao et al. | `AAAI` | [link](https://arxiv.org/abs/2302.05075) | — | NMFs-CSL, SLR500, MSASL, WLASL | 将手部与身体姿态耦合离散化为 token，做 BERT 式掩码预训练。 |
| CVT-SLR: Contrastive Visual-Textual Transformation for Sign Language Recognition with Variational Alignment | Zheng et al. | `CVPR` | [link](https://arxiv.org/abs/2303.05725) | — | PHOENIX-2014, PHOENIX-2014T | 用变分自编码器对齐视觉与文本模态，做对比式跨模态一致性约束。 |
| Natural Language-Assisted Sign Language Recognition | Zuo et al. | `CVPR` | [link](https://arxiv.org/abs/2303.12080) | [code](https://github.com/FangyunWei/SLRT/tree/main/NLA-SLR) | MSASL, WLASL, NMFs-CSL | 用词汇的自然语言描述缓解视觉相近手势（VISigns）的混淆。 |
| Human Part-wise 3D Motion Context Learning for Sign Language Recognition | Lee et al. | `ICCV` | [link](https://arxiv.org/abs/2308.09305) | — | WLASL, PHOENIX-2014T | 按人体部位分解 3D 运动上下文，显式建模各部位的运动语义。 |
| SignBERT+: Hand-model-aware Self-supervised Pre-training for Sign Language Understanding | Hu et al. | `TPAMI` | [link](https://arxiv.org/abs/2305.04868) | — | NMFs-CSL, SLR500, MSASL, WLASL, PHOENIX-2014 | SignBERT 的期刊扩展版，统一支持 ISLR、CSLR 与 SLT 三类下游任务。 |

</details>

<details open>
<summary><b>2022</b> &nbsp;·&nbsp; 2 papers</summary>

| Title | Authors | Venue | Paper | Code | Datasets | Key Contribution |
|:--|:--|:--|:-:|:-:|:--|:--|
| OpenHands: Making Sign Language Recognition Accessible with Pose-based Pretrained Models across Languages | Selvaraj et al. | `ACL` | [link](https://aclanthology.org/2022.acl-long.150/) | [code](https://github.com/AI4Bharat/OpenHands) | WLASL, AUTSL, INCLUDE 等 6 种手语 | 基于姿态的多语种 ISLR 开源库，并提供跨语言的自监督预训练模型。 |
| Towards Zero-Shot Sign Language Recognition | Bilge et al. | `TPAMI` | [link](https://doi.org/10.1109/tpami.2022.3143074) | — | — | 利用手语词的文本描述，实现对未见手语词的零样本识别。 |

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
<summary><b>2026</b> &nbsp;·&nbsp; 3 papers</summary>

| Title | Authors | Venue | Paper | Code | Datasets | Key Contribution |
|:--|:--|:--|:-:|:-:|:--|:--|
| HyperSign: Hierarchical Hypergraph-based Co-occurrence Modeling for Sign Language Recognition and Translation | Guo et al. | `AAAI` | [link](https://doi.org/10.1609/aaai.v40i6.42440) | — | — | 层级超图建模多部位共现，同时支持识别与翻译。 |
| HyperSign: Saliency-Aware Spatial Graphs and Temporal Hypergraphs for Continuous Sign Language Recognition | Ye et al. | `AAAI` | [link](https://doi.org/10.1609/aaai.v40i14.38185) | — | — | 显著性感知的空间图加时序超图建模。 |
| Privacy-Preserving Continuous Sign Language Recognition | Xue et al. | `TMM` | [link](https://doi.org/10.1109/tmm.2026.3668639) | — | — | 隐私保护的连续手语识别。 |

</details>

<details open>
<summary><b>2025</b> &nbsp;·&nbsp; 4 papers</summary>

| Title | Authors | Venue | Paper | Code | Datasets | Key Contribution |
|:--|:--|:--|:-:|:-:|:--|:--|
| OLMD: Orientation-aware Long-term Motion Decoupling for Continuous Sign Language Recognition | Yu et al. | `AAAI` | [link](https://doi.org/10.1609/aaai.v39i9.33052) | — | — | 方向感知的长时运动解耦，用于连续手语识别。 |
| VSNet: Focusing on the Linguistic Characteristics of Sign Language | Li et al. | `CVPR` | [link](https://openaccess.thecvf.com/content/CVPR2025/html/Li_VSNet_Focusing_on_the_Linguistic_Characteristics_of_Sign_Language_CVPR2025_paper.html) | — | — | 从手语的语言学特性出发设计识别网络。 |
| MixSignGraph: A Sign Sequence is Worth Mixed Graphs of Nodes | Gan et al. | `NeurIPS` | [link](https://openreview.net/forum?id=YjZYMHvlRs) | — | PHOENIX-2014, PHOENIX-2014T, CSL-Daily | 在 SignGraph 基础上混合多种图结构，更好地捕捉跨区域的手语特征。 |
| Trustworthy Continuous Sign Language Recognition | Zhang et al. | `TMM` | [link](https://doi.org/10.1109/tmm.2025.3640024) | — | — | 关注连续手语识别的可信性。 |

</details>

<details open>
<summary><b>2024</b> &nbsp;·&nbsp; 5 papers</summary>

| Title | Authors | Venue | Paper | Code | Datasets | Key Contribution |
|:--|:--|:--|:-:|:-:|:--|:--|
| Cross-Sentence Gloss Consistency for Continuous Sign Language Recognition | Rao et al. | `AAAI` | [link](https://doi.org/10.1609/aaai.v38i5.28265) | — | — | 约束同一 gloss 在不同句子间表示一致。 |
| TCNet: Continuous Sign Language Recognition from Trajectories and Correlated Regions | Lu et al. | `AAAI` | [link](https://doi.org/10.1609/aaai.v38i4.28181) | — | — | 联合建模运动轨迹与相关区域，改进连续手语识别。 |
| SignGraph: A Sign Sequence is Worth Graphs of Nodes | Gan et al. | `CVPR` | — | [code](https://github.com/gswycf/SignGraph) | PHOENIX-2014, PHOENIX-2014T, CSL-Daily | 把手语视频建成图结构，跨帧跨区域聚合节点特征。 |
| Gloss Prior Guided Visual Feature Learning for Continuous Sign Language Recognition | Guo et al. | `TIP` | [link](https://doi.org/10.1109/tip.2024.3404869) | — | — | 用 gloss 先验引导视觉特征学习。 |
| EvCSLR: Event-Guided Continuous Sign Language Recognition and Benchmark | Jiang et al. | `TMM` | [link](https://doi.org/10.1109/tmm.2024.3521750) | — | — | 事件相机引导的连续手语识别，并建立基准。 |

</details>

<details open>
<summary><b>2023</b> &nbsp;·&nbsp; 9 papers</summary>

| Title | Authors | Venue | Paper | Code | Datasets | Key Contribution |
|:--|:--|:--|:-:|:-:|:--|:--|
| Self-Emphasizing Network for Continuous Sign Language Recognition | Hu et al. | `AAAI` | [link](https://arxiv.org/abs/2211.17081) | [code](https://github.com/hulianyuyy/SEN_CSLR) | PHOENIX-2014, PHOENIX-2014T, CSL-Daily | 无需额外监督，自适应强调手部与面部等信息丰富的空间区域。 |
| AdaBrowse: Adaptive Video Browser for Efficient Continuous Sign Language Recognition | Hu et al. | `ACM MM` | [link](https://arxiv.org/abs/2308.08327) | [code](https://github.com/hulianyuyy/AdaBrowse) | PHOENIX-2014, PHOENIX-2014T, CSL-Daily | 自适应选择输入序列长度与分辨率，显著降低推理开销。 |
| Towards Real-Time Sign Language Recognition and Translation on Edge Devices | Gan et al. | `ACM MM` | [link](https://doi.org/10.1145/3581783.3611820) | — | — | 面向边缘设备的实时手语识别与翻译。 |
| Continuous Sign Language Recognition with Correlation Network | Hu et al. | `CVPR` | [link](https://arxiv.org/abs/2303.03202) | [code](https://github.com/hulianyuyy/CorrNet) | PHOENIX-2014, PHOENIX-2014T, CSL-Daily | 相关性模块显式捕捉相邻帧间身体轨迹的关联。 |
| Distilling Cross-Temporal Contexts for Continuous Sign Language Recognition | Guo et al. | `CVPR` | — | — | PHOENIX-2014, PHOENIX-2014T, CSL-Daily | 蒸馏不同时间尺度的上下文，融合局部与全局时序线索。 |
| C2ST: Cross-modal Contextualized Sequence Transduction for Continuous Sign Language Recognition | Zhang et al. | `ICCV` | — | — | PHOENIX-2014, PHOENIX-2014T, CSL-Daily | 把 gloss 语言上下文注入序列转录过程，替代纯 CTC 解码。 |
| CoSign: Exploring Co-occurrence Signals in Skeleton-based Continuous Sign Language Recognition | Jiao et al. | `ICCV` | — | — | PHOENIX-2014, PHOENIX-2014T, CSL-Daily | 基于骨架建模多部位共现信号，轻量且无需 RGB 输入。 |
| Improving Continuous Sign Language Recognition with Cross-Lingual Signs | Wei & Chen | `ICCV` | [link](https://arxiv.org/abs/2308.10809) | — | PHOENIX-2014, PHOENIX-2014T, CSL-Daily | 借跨语种手语词的视觉相似性做跨语言数据增强。 |
| Prior-Aware Cross Modality Augmentation Learning for Continuous Sign Language Recognition | Guo et al. | `TMM` | — | — | PHOENIX-2014, PHOENIX-2014T, CSL | 利用 gloss 先验做跨模态数据增强，缓解标注稀缺。 |

</details>

<details open>
<summary><b>2022</b> &nbsp;·&nbsp; 2 papers</summary>

| Title | Authors | Venue | Paper | Code | Datasets | Key Contribution |
|:--|:--|:--|:-:|:-:|:--|:--|
| C2SLR: Consistency-Enhanced Continuous Sign Language Recognition | Zuo & Mak | `CVPR` | — | — | PHOENIX-2014, PHOENIX-2014T, CSL-Daily | 用姿态与注意力一致性约束同时正则空间与时序建模。 |
| Collaborative Multilingual Continuous Sign Language Recognition: A Unified Framework | Hu et al. | `TMM` | [link](https://doi.org/10.1109/tmm.2022.3223260) | — | — | 多语种协同的统一连续手语识别框架。 |

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
<summary><b>2026</b> &nbsp;·&nbsp; 13 papers</summary>

| Title | Authors | Venue | Paper | Code | Datasets | Key Contribution |
|:--|:--|:--|:-:|:-:|:--|:--|
| SAME: Signer-Aware Mixture-of-Experts for Test-Time Adaptation in Sign Language Translation | Yang et al. | `ACL` | [link](https://aclanthology.org/2026.acl-long.973/) | — | — | 签名者感知的混合专家，做测试时自适应。 |
| Selective Contrastive Learning For Gloss Free Sign Language Translation | Lai et al. | `ACL` | [link](https://aclanthology.org/2026.acl-long.2116/) | — | PHOENIX-2014T, CSL-Daily | 按相似度轨迹筛选难负样本，以课程式对比学习改善视频-文本对齐。 |
| Think in Latent Thoughts: A New Paradigm for Gloss-Free Sign Language Translation | Jiang et al. | `ACL` | [link](https://aclanthology.org/2026.acl-long.454/) | [code](https://github.com/fletcherjiang/SignThought) | PHOENIX-2014T, 新建数据集 | 在视频与文本间引入潜在思维槽做推理式翻译，并发布新数据集。 |
| BoostSLT: Boosting Sign Language Translation via a Plug-and-Play Diffusion-Based Semantic Enhancer | Han et al. | `CVPR` | [link](https://openaccess.thecvf.com/content/CVPR2026/html/Han_BoostSLT_Boosting_Sign_Language_Translation_via_a_Plug-and-Play_Diffusion-Based_Semantic_CVPR_2026_paper.html) | [code](https://github.com/K1sna/BoostSLT) | PHOENIX-2014T, CSL-Daily, Auslan-Daily | 即插即用的扩散语义增强模块，配合无监督时序分割改善长句翻译。 |
| Learning Effective Sign Features without Text for Gloss-free Sign Language Translation | Gan et al. | `CVPR` | [link](https://openaccess.thecvf.com/content/CVPR2026/html/Gan_Learning_Effective_Sign_Features_without_Text_for_Gloss-free_Sign_Language_CVPR_2026_paper.html) | — | PHOENIX-2014T, CSL-Daily, How2Sign, OpenASL | 提出 SignDINO，不用 gloss 和文本、纯自蒸馏预训练手语 tokenizer。 |
| Grounding or Guessing? Visual Signals for Detecting Hallucinations in Sign Language Translation | Hamidullah et al. | `ICLR` | [link](https://openreview.net/forum?id=bLFW2T3UHq) | — | — | 利用视觉证据检测无 gloss 翻译中的幻觉。 |
| Diverse Sign Language Translation | Shen et al. | `IJCV` | [link](https://doi.org/10.1007/s11263-026-02900-5) | — | — | 为一段手语生成多样化的正确译文。 |
| Variational Sign Language Translation | Zhao et al. | `IJCV` | [link](https://doi.org/10.1007/s11263-026-02978-x) | — | — | 变分框架下的手语翻译。 |
| From Clips to Streams: A Unified Framework for Streaming Sign Language Translation | Dang et al. | `NeurIPS` | [link](https://openreview.net/forum?id=8cWsEeaaN5) | — | — | 从片段级扩展到连续视频流的统一流式手语翻译框架。 |
| Lost in Translation, Found in Embeddings: Sign Language Translation and Alignment | Jang et al. | `NeurIPS` | [link](https://openreview.net/forum?id=aELeAvEd3r) | — | — | 把手语翻译与字幕对齐放进同一嵌入空间联合处理。 |
| SEN: Semantic-Enhanced Network for Gloss-Free Sign Language Translation | Liu et al. | `TMM` | [link](https://doi.org/10.1109/tmm.2026.3724355) | — | — | 语义增强的无 gloss 翻译网络。 |
| SF-LLM: A Skeleton-Fused Multimodal Large Language Model for Sign Language Translation | Yuan et al. | `TMM` | [link](https://doi.org/10.1109/tmm.2026.3739476) | — | — | 把骨架信息融合进多模态大模型做手语翻译。 |
| TRANSLATE: Temporal Disentanglement and Regularization for Test-Time Adaptation in Sign Language Translation | Wang et al. | `TMM` | [link](https://doi.org/10.1109/tmm.2026.3730967) | — | — | 时序解耦与正则化的测试时自适应翻译。 |

</details>

<details open>
<summary><b>2025</b> &nbsp;·&nbsp; 10 papers</summary>

| Title | Authors | Venue | Paper | Code | Datasets | Key Contribution |
|:--|:--|:--|:-:|:-:|:--|:--|
| SCOPE: Sign Language Contextual Processing with Embedding from LLMs | Liu et al. | `AAAI` | [link](https://doi.org/10.1609/aaai.v39i6.32612) | — | — | 引入对话上下文并利用 LLM 嵌入做手语理解与翻译。 |
| Multilingual Gloss-free Sign Language Translation: Towards Building a Sign Language Foundation Model | Tan et al. | `ACL` | [link](https://aclanthology.org/2025.acl-short.43/) | — | — | 多语种无 gloss 翻译，迈向手语基础模型。 |
| Gloss Matters: Unlocking the Potential of Non-Autoregressive Sign Language Translation | Wang et al. | `ACM MM` | [link](https://doi.org/10.1145/3746027.3755319) | — | — | 借助 gloss 提升非自回归手语翻译。 |
| Lost in Translation, Found in Context: Sign Language Translation with Contextual Cues | Sincan et al. | `CVPR` | [link](https://arxiv.org/abs/2501.09754) | — | BOBSL, How2Sign | 引入背景与上下文线索辅助翻译，处理指代与省略。 |
| Leveraging the Power of MLLMs for Gloss-Free Sign Language Translation | Kim et al. | `ICCV` | [link](https://openaccess.thecvf.com/content/ICCV2025/html/Kim_Leveraging_the_Power_of_MLLMs_for_Gloss-Free_Sign_Language_Translation_ICCV2025_paper.html) | — | — | 借助多模态大模型做无 gloss 手语翻译。 |
| Uni-Sign: Toward Unified Sign Language Understanding at Scale | Li et al. | `ICLR` | [link](https://arxiv.org/abs/2501.15187) | [code](https://github.com/ZechengLi19/Uni-Sign) | CSL-Daily, PHOENIX-2014T, WLASL | 统一预训练框架，把识别、翻译与理解任务放进同一模型。 |
| YouTube-SL-25: A Large-Scale, Open-Domain Multilingual Sign Language Parallel Corpus | Tanzer & Zhang | `ICLR` | [link](https://arxiv.org/abs/2407.11144) | — | YouTube-SL-25 | 覆盖 25 种以上手语的大规模多语种平行语料。 |
| Bridging Sign and Spoken Languages: Pseudo Gloss Generation for Sign Language Translation | Guo et al. | `NeurIPS` | [link](https://openreview.net/forum?id=p6Huickfj7) | — | PHOENIX-2014T, CSL-Daily | 不依赖人工 gloss，自动生成伪 gloss 作为中间表示，保留两阶段翻译的结构优势。 |
| Geo-Sign: Hyperbolic Contrastive Regularisation for Geometrically Aware Sign Language Translation | Fish & Bowden | `NeurIPS` | [link](https://openreview.net/forum?id=WkUzrUsqR9) | — | — | 把骨架特征投影到双曲空间，建模手语运动的层级结构，辅助翻译。 |
| GFTLS-SLT: Gloss-Free Transformer Based Lexical and Semantic Awareness Framework for Multimodal Sign Language Translation | Zhang et al. | `TMM` | [link](https://doi.org/10.1109/tmm.2025.3542990) | — | — | 兼顾词汇与语义感知的无 gloss 多模态翻译。 |

</details>

<details open>
<summary><b>2024</b> &nbsp;·&nbsp; 8 papers</summary>

| Title | Authors | Venue | Paper | Code | Datasets | Key Contribution |
|:--|:--|:--|:-:|:-:|:--|:--|
| Conditional Variational Autoencoder for Sign Language Translation with Cross-Modal Alignment | Zhao et al. | `AAAI` | [link](https://doi.org/10.1609/aaai.v38i17.29937) | — | — | 条件 VAE 做跨模态对齐的手语翻译。 |
| Semi-Supervised Spoken Language Glossification | Yao et al. | `ACL` | [link](https://aclanthology.org/2024.acl-long.504/) | — | — | 半监督的口语文本到 gloss 转换（Text-to-Sign）。 |
| Sign Language Translation with Sentence Embedding Supervision | Hamidullah et al. | `ACL` | [link](https://aclanthology.org/2024.acl-short.40/) | — | — | 用句向量代替 gloss 作为监督信号。 |
| Towards Privacy-Aware Sign Language Translation at Scale | Rust et al. | `ACL` | [link](https://aclanthology.org/2024.acl-long.467/) | — | YouTube-ASL, How2Sign | 以人脸模糊等隐私保护手段做大规模自监督预训练再翻译。 |
| LLMs are Good Sign Language Translators | Gong et al. | `CVPR` | [link](https://arxiv.org/abs/2404.00925) | — | PHOENIX-2014T, CSL-Daily | 把手语视频规范化为类语言表示，直接对接 LLM 做翻译。 |
| Sign2GPT: Leveraging Large Language Models for Gloss-Free Sign Language Translation | Wong et al. | `ICLR` | [link](https://arxiv.org/abs/2405.04164) | — | PHOENIX-2014T, CSL-Daily | 用轻量适配器把预训练大语言模型接入无 gloss 手语翻译。 |
| Improving Gloss-free Sign Language Translation by Reducing Representation Density | Ye et al. | `NeurIPS` | [link](https://arxiv.org/abs/2405.14312) | — | PHOENIX-2014T, CSL-Daily | 指出语义相近手语词表示过密是瓶颈，用对比目标拉开距离。 |
| Scaling Sign Language Translation | Zhang et al. | `NeurIPS` | [link](https://arxiv.org/abs/2407.11855) | — | YouTube-ASL, How2Sign, PHOENIX-2014T | 系统研究数据、模型与多语种规模化对 SLT 的影响。 |

</details>

<details open>
<summary><b>2023</b> &nbsp;·&nbsp; 9 papers</summary>

| Title | Authors | Venue | Paper | Code | Datasets | Key Contribution |
|:--|:--|:--|:-:|:-:|:--|:--|
| Considerations for Meaningful Sign Language Machine Translation Based on Glosses | Müller et al. | `ACL` | [link](https://aclanthology.org/2023.acl-short.60/) | — | — | 反思以 gloss 为中间表示的手语机器翻译，给出研究与评测建议。 |
| Gloss-Free End-to-End Sign Language Translation | Lin et al. | `ACL` | [link](https://arxiv.org/abs/2305.12876) | [code](https://github.com/HenryLittle/GloFE) | PHOENIX-2014T, CSL-Daily, OpenASL | 用共享语义空间中的中间表示替代 gloss，实现端到端无 gloss 翻译。 |
| Neural Machine Translation Methods for Translating Text to Sign Language Glosses | Zhu et al. | `ACL` | [link](https://aclanthology.org/2023.acl-long.700/) | — | PHOENIX-2014T | 系统比较文本到 gloss 的神经机器翻译方法（Text-to-Sign）。 |
| Gloss Attention for Gloss-free Sign Language Translation | Yin et al. | `CVPR` | [link](https://arxiv.org/abs/2307.07361) | — | PHOENIX-2014T, CSL-Daily | 无需 gloss 标注，用注意力隐式定位类 gloss 的语义片段。 |
| Gloss-free Sign Language Translation: Improving from Visual-Language Pretraining | Zhou et al. | `ICCV` | [link](https://arxiv.org/abs/2307.14768) | [code](https://github.com/zhoubenjia/GFSLT-VLP) | PHOENIX-2014T, CSL-Daily | 视觉-语言预训练对齐视频与文本语义，大幅提升无 gloss 翻译。 |
| Sign Language Translation with Iterative Prototype | Yao et al. | `ICCV` | [link](https://arxiv.org/abs/2308.12191) | — | PHOENIX-2014T, CSL-Daily | 迭代refine原型表示，逐步逼近准确的语义单元。 |
| SLTUNET: A Simple Unified Model for Sign Language Translation | Zhang et al. | `ICLR` | [link](https://arxiv.org/abs/2305.01778) | [code](https://github.com/bzhangGo/sltunet) | PHOENIX-2014T, CSL-Daily | 单一模型统一多任务多模态，共享表示提升翻译质量。 |
| Auslan-Daily: Australian Sign Language Translation for Daily Communication and News | Shen et al. | `NeurIPS` | — | — | Auslan-Daily | 发布覆盖日常对话与新闻场景的澳大利亚手语翻译数据集。 |
| YouTube-ASL: A Large-Scale, Open-Domain American Sign Language-English Parallel Corpus | Uthus et al. | `NeurIPS` | [link](https://arxiv.org/abs/2306.15162) | — | YouTube-ASL, How2Sign | 构建开放域大规模 ASL-英语平行语料，规模约为 How2Sign 的 3 倍。 |

</details>

<details open>
<summary><b>2022</b> &nbsp;·&nbsp; 6 papers</summary>

| Title | Authors | Venue | Paper | Code | Datasets | Key Contribution |
|:--|:--|:--|:-:|:-:|:--|:--|
| MC-SLT: Towards Low-Resource Signer-Adaptive Sign Language Translation | Jin et al. | `ACM MM` | [link](https://doi.org/10.1145/3503161.3548069) | — | — | 低资源场景下的签名者自适应翻译。 |
| A Simple Multi-Modality Transfer Learning Baseline for Sign Language Translation | Chen et al. | `CVPR` | [link](https://arxiv.org/abs/2203.04287) | [code](https://github.com/FangyunWei/SLRT) | PHOENIX-2014T, CSL-Daily | 用渐进式预训练把通用视觉与语言模型迁移到 SLT，成为强基线。 |
| MLSLT: Towards Multilingual Sign Language Translation | Yin et al. | `CVPR` | — | — | SP-10 | 首个多语种手语翻译工作，发布覆盖 10 种手语的 SP-10 数据集。 |
| Addressing Resource Scarcity across Sign Languages with Multilingual Pretraining and Unified-Vocabulary Datasets | Yin et al. | `NeurIPS` | — | — | SP-10, PHOENIX-2014T | 多语种预训练加统一词表，缓解低资源手语数据稀缺。 |
| Two-Stream Network for Sign Language Recognition and Translation | Chen et al. | `NeurIPS` | [link](https://arxiv.org/abs/2211.01367) | [code](https://github.com/FangyunWei/SLRT/tree/main/TwoStreamNetwork) | PHOENIX-2014, PHOENIX-2014T, CSL-Daily | RGB 与关键点双流互促，同时刷新识别与翻译性能。 |
| SignNet II: A Transformer-Based Two-Way Sign Language Translation Model | Chaudhary et al. | `TPAMI` | [link](https://doi.org/10.1109/tpami.2022.3232389) | — | — | 双向（手语↔文本）翻译的 Transformer 模型。 |

</details>

<details open>
<summary><b>2021</b> &nbsp;·&nbsp; 8 papers</summary>

| Title | Authors | Venue | Paper | Code | Datasets | Key Contribution |
|:--|:--|:--|:-:|:-:|:--|:--|
| Contrastive Disentangled Meta-Learning for Signer-Independent Sign Language Translation | Ye et al. | `ACM MM` | — | — | PHOENIX-2014T, CSL | 对比解耦 + 元学习，提升跨签名者泛化。 |
| SimulSLT: End-to-End Simultaneous Sign Language Translation | Yin et al. | `ACM MM` | — | — | PHOENIX-2014T | 端到端同声手语翻译，用等待策略在时延与质量间折中。 |
| Skeleton-Aware Neural Sign Language Translation | Chen et al. | `ACM MM` | — | — | PHOENIX-2014T, CSL | 引入骨架信息辅助翻译，降低对外观与背景的依赖。 |
| Improving Sign Language Translation With Monolingual Data by Sign Back-Translation | Zhou et al. | `CVPR` | [link](https://arxiv.org/abs/2105.12397) | — | PHOENIX-2014T, CSL-Daily | 提出手语回译，用单语文本合成伪手语数据；发布 CSL-Daily 数据集。 |
| Aligning Subtitles in Sign Language Videos | Bull et al. | `ICCV` | [link](https://arxiv.org/abs/2105.02877) | — | BOBSL | 用 Transformer 对齐手语视频与字幕时间轴，为大规模弱标注铺路。 |
| Conditional Sentence Generation and Cross-Modal Reranking for Sign Language Translation | Zhao et al. | `TMM` | — | — | PHOENIX-2014T | 条件句子生成加跨模态重排序，提升译文流畅度与忠实度。 |
| Graph-Based Multimodal Sequential Embedding for Sign Language Translation | Tang et al. | `TMM` | [link](https://doi.org/10.1109/tmm.2021.3117124) | — | — | 基于图的多模态序列嵌入做翻译。 |
| PiSLTRc: Position-Informed Sign Language Transformer With Content-Aware Convolution | Xie et al. | `TMM` | [link](https://doi.org/10.1109/tmm.2021.3109665) | — | — | 位置感知的 Transformer 加内容感知卷积。 |

</details>

<p align="right"><a href="#-contents">back to top ↑</a></p>

## 🧍 Sign Language Production (SLP)

<details open>
<summary><b>2026</b> &nbsp;·&nbsp; 8 papers</summary>

| Title | Authors | Venue | Paper | Code | Datasets | Key Contribution |
|:--|:--|:--|:-:|:-:|:--|:--|
| Hybrid Autoregressive-Diffusion Model for Real-Time Sign Language Production | Ye et al. | `ACL` | [link](https://aclanthology.org/2026.acl-long.31/) | — | — | 自回归与扩散混合，面向实时手语生成。 |
| Stable Signer: Hierarchical Sign Language Generative Model | Fang et al. | `ACL` | [link](https://aclanthology.org/2026.acl-long.659/) | — | — | 层级式手语生成模型。 |
| Focal–General Diffusion Model with Semantic Consistent Guidance for Sign Language Production | Yu et al. | `CVPR` | [link](https://openaccess.thecvf.com/content/CVPR2026/html/Yu_Focal-General_Diffusion_Model_with_Semantic_Consistent_Guidance_for_Sign_Language_CVPR_2026_paper.html) | [code](https://github.com/yuyiheng-eu/FGDM-main) | PHOENIX-2014T, USTC-CSL | 两阶段扩散分别建模关节依赖与全局序列，用时间感知 CTC 注入语义约束。 |
| SignPR: A Progressive Vector-Quantized Diffusion Framework for Sign Language Production | Liu et al. | `CVPR` | [link](https://openaccess.thecvf.com/content/CVPR2026/html/Liu_SignPR_A_Progressive_Vector-Quantized_Diffusion_Framework_for_Sign_Language_Production_CVPR_2026_paper.html) | — | PHOENIX-2014T, CSL-Daily, USTC-CSL | 语义级与区域级离散 token 双重渐进，扩散生成兼顾结构一致与动作细节。 |
| Text-Driven 3D Hand Motion Generation from Sign Language Data | Bensabath et al. | `CVPR` | [link](https://openaccess.thecvf.com/content/CVPR2026/html/Bensabath_Text-Driven_3D_Hand_Motion_Generation_from_Sign_Language_Data_CVPR_2026_paper.html) | — | BOBSL3DT | 从手语视频自动构建 130 万文本-3D 手部动作对，训练 HandMDM 生成手部动作。 |
| LLM Is a Good Conditioner: End-to-End Sign Language Video Generation with VQ-Diffusion | Liu & Gan | `NeurIPS` | [link](https://openreview.net/forum?id=twBWaZ8FT0) | — | — | 用大语言模型提供条件，配合 VQ-Diffusion 端到端生成手语视频。 |
| Hierarchical Graph Frequency-Selective Diffusion Model for Personalized Sign Language Production | Rastgoo et al. | `TMM` | [link](https://doi.org/10.1109/tmm.2026.3724351) | — | — | 层级图频率选择扩散，做个性化手语生成。 |
| SignMoD: Sign Language Video Generation via Mixture of Diffusion | Qi et al. | `TPAMI` | [link](https://doi.org/10.1109/tpami.2026.3698334) | — | — | 混合扩散模型生成手语视频。 |

</details>

<details open>
<summary><b>2025</b> &nbsp;·&nbsp; 5 papers</summary>

| Title | Authors | Venue | Paper | Code | Datasets | Key Contribution |
|:--|:--|:--|:-:|:-:|:--|:--|
| Sign-IDD: Iconicity Disentangled Diffusion for Sign Language Production | Tang et al. | `AAAI` | [link](https://arxiv.org/abs/2412.13609) | [code](https://github.com/NaVi-start/Sign-IDD) | PHOENIX-2014T, CSL-Daily | 解耦手语的象似性（iconicity）骨架约束，改进扩散式生成。 |
| Discrete to Continuous: Generating Smooth Transition Poses from Sign Language Observations | Shen et al. | `CVPR` | — | — | PHOENIX-2014T, CSL-Daily | 在离散手语词之间生成平滑过渡姿态，改善拼接生硬问题。 |
| GReg: Geometry-Aware Region Refinement for Sign Language Video Generation | Shi et al. | `ICCV` | [link](https://openaccess.thecvf.com/content/ICCV2025/html/Shi_GReg_Geometry-Aware_Region_Refinement_for_Sign_Language_Video_Generation_ICCV2025_paper.html) | — | — | 几何感知的区域细化，提升手部等关键区域的生成质量。 |
| Signs as Tokens: A Retrieval-Enhanced Multilingual Sign Language Generator | Li et al. | `ICCV` | [link](https://arxiv.org/abs/2411.17799) | [code](https://github.com/2000ZRL/SOKE) | 多语种数据集 | 把手语词当作 token，检索增强的多语种手语生成。 |
| Advanced Sign Language Video Generation with Compressed and Quantized Multi-Condition Tokenization | Zhu et al. | `NeurIPS` | — | [code](https://github.com/umnooob/signvip) | PHOENIX-2014T | 多条件压缩量化 token 控制，提升生成视频的可控性与保真度。 |

</details>

<details open>
<summary><b>2024</b> &nbsp;·&nbsp; 2 papers</summary>

| Title | Authors | Venue | Paper | Code | Datasets | Key Contribution |
|:--|:--|:--|:-:|:-:|:--|:--|
| T2S-GPT: Dynamic Vector Quantization for Autoregressive Sign Language Production from Text | Yin et al. | `ACL` | [link](https://arxiv.org/abs/2406.07119) | — | PHOENIX-2014T, How2Sign | 动态向量量化编码手语序列，自回归生成保留细粒度动作。 |
| Neural Sign Actors: A Diffusion Model for 3D Sign Language Production from Text | Baltatzis et al. | `CVPR` | [link](https://arxiv.org/abs/2312.02702) | — | How2Sign, PHOENIX-2014T | 基于扩散模型的 3D 手语 avatar 生成，兼顾语义准确与动作自然。 |

</details>

<details open>
<summary><b>2023</b> &nbsp;·&nbsp; 2 papers</summary>

| Title | Authors | Venue | Paper | Code | Datasets | Key Contribution |
|:--|:--|:--|:-:|:-:|:--|:--|
| Ham2Pose: Animating Sign Language Notation into Pose Sequences | Shalev-Arkushin et al. | `CVPR` | [link](https://openaccess.thecvf.com/content/CVPR2023/html/Arkushin_Ham2Pose_Animating_Sign_Language_Notation_Into_Pose_Sequences_CVPR2023_paper.html) | [code](https://github.com/rotem-shalev/Ham2Pose) | — | 把 HamNoSys 手语记号直接生成为姿态序列，不依赖特定语种。 |
| Reconstructing Signing Avatars From Video Using Linguistic Priors | Forte et al. | `CVPR` | [link](https://openaccess.thecvf.com/content/CVPR2023/html/Forte_Reconstructing_Signing_Avatars_From_Video_Using_Linguistic_Priors_CVPR2023_paper.html) | — | — | 用语言学先验从视频重建 3D 手语 avatar（SGNify）。 |

</details>

<details open>
<summary><b>2022</b> &nbsp;·&nbsp; 3 papers</summary>

| Title | Authors | Venue | Paper | Code | Datasets | Key Contribution |
|:--|:--|:--|:-:|:-:|:--|:--|
| DualSign: Semi-Supervised Sign Language Production with Balanced Multi-Modal Multi-Task Dual Transformation | Huang et al. | `ACM MM` | [link](https://doi.org/10.1145/3503161.3547957) | — | — | 多模态多任务对偶变换的半监督手语生成。 |
| Gloss Semantic-Enhanced Network with Online Back-Translation for Sign Language Production | Tang et al. | `ACM MM` | [link](https://doi.org/10.1145/3503161.3547830) | — | — | gloss 语义增强加在线回译约束的手语生成。 |
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
<summary><b>2026</b> &nbsp;·&nbsp; 1 paper</summary>

| Title | Authors | Venue | Paper | Code | Datasets | Key Contribution |
|:--|:--|:--|:-:|:-:|:--|:--|
| Semantic Hardness Is Not Visual Hardness: Sign-Aware Hard Negative Mining for Sign Language Retrieval | Lee et al. | `ACL` | [link](https://aclanthology.org/2026.acl-long.1302/) | — | — | 按视觉难度而非语义难度挖掘难负样本。 |

</details>

<details open>
<summary><b>2024</b> &nbsp;·&nbsp; 1 paper</summary>

| Title | Authors | Venue | Paper | Code | Datasets | Key Contribution |
|:--|:--|:--|:-:|:-:|:--|:--|
| SEDS: Semantically Enhanced Dual-Stream Encoder for Sign Language Retrieval | Zhou et al. | `ACM MM` | [link](https://arxiv.org/abs/2407.16394) | [code](https://github.com/longtaojiang/SEDS) | How2Sign, PHOENIX-2014T, CSL-Daily | RGB 与姿态双流编码加语义增强，提升检索的细粒度判别力。 |

</details>

<details open>
<summary><b>2023</b> &nbsp;·&nbsp; 1 paper</summary>

| Title | Authors | Venue | Paper | Code | Datasets | Key Contribution |
|:--|:--|:--|:-:|:-:|:--|:--|
| CiCo: Domain-Aware Sign Language Retrieval via Cross-Lingual Contrastive Learning | Cheng et al. | `CVPR` | [link](https://openaccess.thecvf.com/content/CVPR2023/html/Bao_CiCo_Domain-Aware_Sign_Language_Retrieval_via_Cross-Lingual_Contrastive_Learning_CVPR2023_paper.html) | [code](https://github.com/FangyunWei/SLRT) | How2Sign, PHOENIX-2014T, CSL-Daily | 跨语言对比学习，兼顾手语检索的领域差异。 |

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
<summary><b>2026</b> &nbsp;·&nbsp; 15 papers</summary>

| Title | Authors | Venue | Paper | Code | Datasets | Key Contribution |
|:--|:--|:--|:-:|:-:|:--|:--|
| CNSL-bench: Benchmarking the Sign Language Understanding Capabilities of MLLMs on Chinese National Sign Language | Zhao et al. | `ACL` | [link](https://aclanthology.org/2026.acl-long.1896/) | — | CNSL-bench | 评测多模态大模型对中国国家通用手语的理解能力。 |
| Segment, Embed, and Align: A Universal Recipe for Aligning Subtitles to Signing | Jiang et al. | `ACL` | [link](https://aclanthology.org/2026.acl-long.1401/) | — | — | 分割、嵌入、对齐三步，跨语种跨领域对齐字幕与手语。 |
| The Visual Iconicity Challenge: Evaluating Vision-Language Models on Sign Language Form–Meaning Mapping | Keleş et al. | `ACL` | [link](https://aclanthology.org/2026.acl-long.1907/) | — | — | 评测视觉语言模型对手语形义映射（象似性）的理解。 |
| ASL Educators' Perspectives on AI for Enhancing Student Learning in American Sign Language Education | Hassan et al. | `CHI` | [link](https://doi.org/10.1145/3772318.3791928) | — | — | 调研 ASL 教师对用 AI 辅助手语教学的看法。 |
| AuslanSpell: An Interactive Technology for Improving Auslan Fingerspelling Comprehension | Stefanov et al. | `CHI` | [link](https://doi.org/10.1145/3772318.3791563) | — | — | 帮助学习者提高澳大利亚手语指拼理解能力的交互系统。 |
| Beyond Technical Metrics: Understanding the Gap Between AI Performance and Deaf User Experience in Chinese Natural Sign Language Generation | Liu et al. | `CHI` | [link](https://doi.org/10.1145/3772318.3791429) | — | — | 揭示中国自然手语生成中技术指标与聋人实际体验之间的落差。 |
| Reimagining Sign Language Technologies: Analyzing Translation Work of Chinese Deaf Online Content Creators | Tang et al. | `CHI` | [link](https://doi.org/10.1145/3772318.3790624) | — | — | 分析中国聋人内容创作者的翻译实践，反思手语技术设计。 |
| OpenFS: Multi-Hand-Capable Fingerspelling Recognition with Implicit Signing-Hand Detection and Frame-Wise Letter-Conditioned Synthesis | Cha et al. | `CVPR` | [link](https://arxiv.org/abs/2602.22949) | [code](https://github.com/JunukCha/OpenFS) | ChicagoFSWild, ChicagoFSWild+, FSNeo | 指拼识别：隐式检测打手语的手，并用扩散合成词表外指拼数据。 |
| BANZ-FS: BANZSL Fingerspelling Dataset | Shen et al. | `ICLR` | [link](https://mlanthology.org/iclr/2026/shen2026iclr-banzfs/) | — | BANZ-FS | 首个英/澳/新西兰手语双手指拼大规模数据集（3.5 万+ 实例）及基准。 |
| CNText2Sign and CNSign: Unified Chinese Sign Language Datasets for Bidirectional Accessibility | Li et al. | `KDD` | [link](https://doi.org/10.1145/3770854.3785676) | — | CNText2Sign, CNSign | 统一的中国手语数据集，同时支持文本到手语与手语到文本两个方向。 |
| Isharah-Selfie: Continuous Sign Language Recognition Dataset for One-handed Signing | Hasanaath et al. | `NeurIPS (D&B)` | [link](https://openreview.net/forum?id=l3pvG8AHwe) | — | Isharah-Selfie | 面向单手（自拍场景）打手语的连续识别数据集。 |
| LSC-Parlament: An Automatically Aligned Catalan Sign Language Dataset from Parliament Videos | Escolano et al. | `NeurIPS (D&B)` | [link](https://openreview.net/forum?id=pPt0iqECnh) | — | LSC-Parlament | 从议会视频自动对齐构建的加泰罗尼亚手语数据集。 |
| MySign: A High-Fidelity Motion-Capture Dataset for 3D Sign Generation in Bahasa Isyarat Malaysia | Shen et al. | `NeurIPS (D&B)` | [link](https://openreview.net/forum?id=FMCB6LFtcc) | — | MySign | 马来西亚手语的高精度动作捕捉数据集，用于 3D 手语生成。 |
| Deep Understanding of Sign Language for Sign to Subtitle Alignment | Jang et al. | `TMM` | [link](https://doi.org/10.1109/tmm.2026.3673520) | — | — | 利用手语理解做手语视频与字幕的对齐。 |
| Isharah: A Large-Scale Multi-Scene Dataset for Continuous Sign Language Recognition | Alyami et al. | `TMM` | [link](https://doi.org/10.1109/tmm.2026.3664959) | — | Isharah | 多场景大规模连续手语识别数据集。 |

</details>

<details open>
<summary><b>2025</b> &nbsp;·&nbsp; 8 papers</summary>

| Title | Authors | Venue | Paper | Code | Datasets | Key Contribution |
|:--|:--|:--|:-:|:-:|:--|:--|
| SHuBERT: Self-Supervised Sign Language Representation Learning via Multi-Stream Cluster Prediction | Gueuwou et al. | `ACL` | [link](https://aclanthology.org/2025.acl-long.1397/) | — | — | 多流聚类预测的自监督手语表征学习。 |
| Sentence-level Segmentation for Long Sign Language Videos with Captions | Guo et al. | `ACM MM` | [link](https://doi.org/10.1145/3746027.3755080) | — | — | 借助字幕把长手语视频切分到句子级。 |
| ELMI: Interactive and Intelligent Sign Language Translation of Lyrics for Song Signing | Yoo et al. | `CHI` | [link](https://doi.org/10.1145/3706598.3713973) | — | — | 交互式辅助把歌词翻译为手语演唱。 |
| Exploring Reduced Feature Sets for American Sign Language Dictionaries | Kosa et al. | `CHI` | [link](https://doi.org/10.1145/3706598.3714118) | — | — | 探索 ASL 词典检索所需的精简特征集合。 |
| SpellRing: Recognizing Continuous Fingerspelling in American Sign Language using a Ring | Lim et al. | `CHI` | [link](https://doi.org/10.1145/3706598.3713721) | — | — | 用智能指环识别连续 ASL 指拼。 |
| Towards AI-driven Sign Language Generation with Non-manual Markers | Zhang et al. | `CHI` | [link](https://doi.org/10.1145/3706598.3713855) | — | — | 在手语生成中纳入面部表情等非手部标记。 |
| FSboard: Over 3 Million Characters of ASL Fingerspelling Collected via Smartphones | Georg et al. | `CVPR` | [link](https://openaccess.thecvf.com/content/CVPR2025/html/Georg_FSboard_Over_3_Million_Characters_of_ASL_Fingerspelling_Collected_via_Smartphones_CVPR2025_paper.html) | — | FSboard | 手机采集的 300 万字符级 ASL 指拼数据集。 |
| SignRep: Enhancing Self-Supervised Sign Representations | Wong et al. | `ICCV` | [link](https://openaccess.thecvf.com/content/ICCV2025/html/Wong_SignRep_Enhancing_Self-Supervised_Sign_Representations_ICCV2025_paper.html) | — | — | 改进自监督的手语表征学习。 |

</details>

<details open>
<summary><b>2024</b> &nbsp;·&nbsp; 3 papers</summary>

| Title | Authors | Venue | Paper | Code | Datasets | Key Contribution |
|:--|:--|:--|:-:|:-:|:--|:--|
| American Sign Language Handshapes Reflect Pressures for Communicative Efficiency | Yin et al. | `ACL` | [link](https://aclanthology.org/2024.acl-long.839/) | — | — | 从计算角度分析 ASL 手形的交际效率。 |
| Assessment of Sign Language-Based versus Touch-Based Input for Deaf Users Interacting with Intelligent Personal Assistants | Tran et al. | `CHI` | [link](https://doi.org/10.1145/3613904.3642094) | — | — | 比较聋人用手语与触控操作智能助手的体验。 |
| MM-WLAuslan: Multi-View Multi-Modal Word-Level Australian Sign Language Recognition Dataset | Shen et al. | `NeurIPS` | [link](https://arxiv.org/abs/2410.19488) | — | MM-WLAuslan | 多视角多模态的澳大利亚手语词级识别数据集。 |

</details>

<details open>
<summary><b>2023</b> &nbsp;·&nbsp; 3 papers</summary>

| Title | Authors | Venue | Paper | Code | Datasets | Key Contribution |
|:--|:--|:--|:-:|:-:|:--|:--|
| Community-Driven Information Accessibility: Online Sign Language Content Creation within d/Deaf Communities | Tang et al. | `CHI` | [link](https://doi.org/10.1145/3544548.3581286) | — | — | 研究聋人社区在线手语内容的创作与信息无障碍。 |
| ASL Citizen: A Community-Sourced Dataset for Advancing Isolated Sign Language Recognition | Desai et al. | `NeurIPS` | [link](https://arxiv.org/abs/2304.05934) | — | ASL Citizen | 社区众包采集的大规模 ISLR 数据集，聚焦手语词典检索场景。 |
| PopSign ASL v1.0: An Isolated American Sign Language Dataset Collected via Smartphones | Starner et al. | `NeurIPS` | — | — | PopSign ASL | 用手机采集的 ISLR 数据集，面向儿童手语学习游戏场景。 |

</details>

<details open>
<summary><b>2022</b> &nbsp;·&nbsp; 7 papers</summary>

| Title | Authors | Venue | Paper | Code | Datasets | Key Contribution |
|:--|:--|:--|:-:|:-:|:--|:--|
| Searching for Fingerspelled Content in American Sign Language | Shi et al. | `ACL` | [link](https://aclanthology.org/2022.acl-long.119/) | — | — | 定义并解决在 ASL 视频中检索指拼内容的任务。 |
| WLASL-LEX: a Dataset for Recognising Phonological Properties in American Sign Language | Tavella et al. | `ACL` | [link](https://aclanthology.org/2022.acl-short.49/) | — | WLASL-LEX | 识别 ASL 音系属性（手形、位置等）的数据集。 |
| Weakly-supervised Disentanglement Network for Video Fingerspelling Detection | Jiang et al. | `ACM MM` | [link](https://doi.org/10.1145/3503161.3548213) | — | — | 弱监督解耦网络做视频指拼检测。 |
| Design and Evaluation of Hybrid Search for American Sign Language to English Dictionaries | Hassan et al. | `CHI` | [link](https://doi.org/10.1145/3491102.3501986) | — | — | 结合不完美手语识别的 ASL-英语词典混合检索。 |
| Towards Sign Language-Centric Design of ASL Survey Tools | Mahajan et al. | `CHI` | [link](https://doi.org/10.1145/3491102.3502047) | — | — | 以手语为中心设计面向聋人的 ASL 问卷工具。 |
| Exploring Collection of Sign Language Videos through Crowdsourcing | Bragg et al. | `CSCW` | [link](https://doi.org/10.1145/3555627) | — | — | 探索众包方式采集手语视频的可行性与问题。 |
| Scaling Up Sign Spotting Through Sign Language Dictionaries | Varol et al. | `IJCV` | [link](https://doi.org/10.1007/s11263-022-01589-6) | — | BSL-1K, BSLDict | 借助手语词典视频扩大手语词定位（sign spotting）规模。 |

</details>

<details open>
<summary><b>2021</b> &nbsp;·&nbsp; 7 papers</summary>

| Title | Authors | Venue | Paper | Code | Datasets | Key Contribution |
|:--|:--|:--|:-:|:-:|:--|:--|
| Including Signed Languages in Natural Language Processing | Yin et al. | `ACL` | [link](https://aclanthology.org/2021.acl-long.570/) | — | — | 立场论文：呼吁 NLP 社区把手语纳入研究范围。 |
| Fingerspelling Recognition in the Wild with Fixed-Query based Visual Attention | Kruthiventi et al. | `ACM MM` | [link](https://doi.org/10.1145/3474085.3475580) | — | — | 基于固定查询视觉注意力的野外指拼识别。 |
| ASL Sea Battle: Gamifying Sign Language Data Collection | Bragg et al. | `CHI` | [link](https://doi.org/10.1145/3411764.3445416) | — | — | 用游戏化方式众包采集手语数据。 |
| Fingerspelling Detection in American Sign Language | Shi et al. | `CVPR` | [link](https://arxiv.org/abs/2104.01291) | — | ChicagoFSWild, ChicagoFSWild+ | 定义野外场景下的指拼检测任务并给出评测协议与基线。 |
| How2Sign: A Large-Scale Multimodal Dataset for Continuous American Sign Language | Duarte et al. | `CVPR` | [link](https://arxiv.org/abs/2008.08143) | — | How2Sign | 大规模多模态多视角 ASL 数据集，含 3D 关键点与深度信息。 |
| Read and Attend: Temporal Localisation in Sign Language Videos | Varol et al. | `CVPR` | [link](https://arxiv.org/abs/2103.16481) | — | BSL-1K, BSLDict | 用 Transformer 在连续手语视频中定位手语词的时间位置。 |
| A Comprehensive Study on Deep Learning-Based Methods for Sign Language Recognition | Adaloglou et al. | `TMM` | [link](https://doi.org/10.1109/tmm.2021.3070438) | — | — | 系统评测深度学习手语识别方法，并发布希腊手语数据集。 |

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
<summary><b>2024</b> &nbsp;·&nbsp; 7 papers</summary>

| Title | Authors | Venue | Direction | Paper | Code | Datasets | Key Contribution |
|:--|:--|:--|:--|:-:|:-:|:--|:--|
| MS2SL: Multimodal Spoken Data-Driven Continuous Sign Language Production | Ma et al. | `ACL Findings (Findings)` | SLP | [link](https://aclanthology.org/2024.findings-acl.432/) | — | PHOENIX-2014T, How2Sign | 支持文本与语音多模态输入驱动的连续手语生成。 |
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
| **Status** | Formally accepted or published (camera-ready / proceedings / journal issue). **No arXiv-only preprints.** Workshop papers, *Findings* papers, student abstracts and extended abstracts are not counted as main-venue papers. |
| **Venue tier** | CCF-A per the 7th edition (March 2026). Tier is judged by the *current* edition, not the edition in force when the paper was published. |
| **Conferences (CCF-A)** | CVPR, ICCV, ACM MM, AAAI, NeurIPS, ICML, ICLR, ACL, SIGKDD, WWW, SIGIR, CHI, CSCW, SIGGRAPH, IEEE VR |
| **Journals (CCF-A)** | TPAMI, IJCV, TIP, TMM, AI, JMLR, TOG, TVCG |
| **Other Top Venues** | Strong work at non-CCF-A venues (ECCV, EMNLP, NAACL, IJCAI, COLING, BMVC …) goes in its own section. |

> ⚠️ Two commonly mis-tiered venues: **ICLR is CCF-A** in the 7th edition, while **IJCAI is CCF-B**.

## 📰 News

- **2026-10-08** — Added 6 NeurIPS 2026 papers (3 main track, 3 Datasets & Benchmarks), 1 TMM 2026, 1 KDD 2026 and 4 CHI 2026 papers.
- **2026-09-29** — Venue-by-venue audit against official proceedings (CVF, ACL Anthology, NeurIPS/ICML proceedings, OpenReview) and OpenAlex: added 75 missed papers (AAAI, ACM MM, CHI, TPAMI, IJCV, TIP, TMM, CVPR, ICCV, ACL, ICLR); moved MS2SL to Other Top Venues (it is ACL Findings, not the main conference); corrected one TIP year.
- **2026-09-28** — Added 3 NeurIPS 2025 papers (MixSignGraph, Geo-Sign, Pseudo Gloss) found via OpenReview.
- **2026-09-28** — Added 11 CCF-A papers from 2026 (CVPR, ACL, ICLR) and 4 from ECCV 2026, each verified against official proceedings.
- **2026-09-28** — Reorganized by year within each direction; added stats table and new layout.
- **2026-09-28** — First batch of 183 papers added across all sections.
- **2026-09-28** — Repository created. Added inclusion criteria and the Other Top Venues section.

## 🤝 Contributing

PRs welcome. Please:

1. Keep the table format and place the paper under the right year block.
2. Check the venue tier against the **CCF 7th edition** before adding to a CCF-A section.
3. Make sure the paper is **formally accepted** — no arXiv-only preprints.

> Cells marked `—` mean the link has not been filled in yet, not that none exists — PRs adding them are especially welcome.
