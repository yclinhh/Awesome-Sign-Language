# Awesome Sign Language [![Awesome](https://awesome.re/badge.svg)](https://awesome.re)

A curated list of sign language papers published at **CCF-A** conferences and journals since **2021**
(venue tiers follow the CCF Recommended List, 7th edition, March 2026).

> **Only formally accepted / published papers are included.** arXiv-only preprints are not listed until the paper is accepted at an eligible venue.

Currently **66** CCF-A papers, plus **12** in [Other Top Venues](#other-top-venues).

## Inclusion Criteria
- **Time**: papers published in 2021 or later.
- **Status**: formally accepted or published (camera-ready / proceedings / journal issue). No arXiv-only preprints.
- **Venue tier**: CCF-A, per the 7th edition (March 2026). Tier is judged by the current edition, not the edition in force when the paper was published.
- **CCF-A venues most relevant to sign language research** (non-exhaustive):
  - Conferences: CVPR, ICCV, ACM MM, AAAI, NeurIPS, ICML, ICLR, ACL, SIGKDD, WWW, SIGIR, CHI, SIGGRAPH, IEEE VR
  - Journals: TPAMI, IJCV, TIP, TMM, AI, JMLR, TOG, TVCG
- **Other Top Venues**: strong work at venues that are not CCF-A in the 7th edition (e.g. ECCV, EMNLP, NAACL, IJCAI, COLING, BMVC) goes in the separate [Other Top Venues](#other-top-venues) section.

> Note on two commonly mis-tiered venues: **ICLR is CCF-A** in the 7th edition, while **IJCAI is CCF-B**.

## News
- **2026-09-28**: First batch of 78 papers added across all sections.
- **2026-09-28**: Repository created. Added inclusion criteria and the Other Top Venues section.

## Contents
- [Isolated Sign Language Recognition (ISLR)](#isolated-sign-language-recognition-islr)
- [Continuous Sign Language Recognition (CSLR)](#continuous-sign-language-recognition-cslr)
- [Sign Language Translation (SLT)](#sign-language-translation-slt)
- [Sign Language Production (SLP)](#sign-language-production-slp)
- [Sign Language Retrieval](#sign-language-retrieval)
- [Others](#others)
- [Other Top Venues](#other-top-venues)

## Isolated Sign Language Recognition (ISLR)
| Title | Authors | Venue | Paper | Code | Datasets | Contribution |
|---|---|---|---|---|---|---|
| SignBERT: Pre-Training of Hand-Model-Aware Representation for Sign Language Recognition | Hu et al. | ICCV 2021 | [link](https://arxiv.org/abs/2109.05304) | — | NMFs-CSL, SLR500, MSASL, WLASL | 以手部模型为先验的自监督预训练，用掩码手势重建学习手语表征。 |
| Hand-Model-Aware Sign Language Recognition | Hu et al. | AAAI 2021 | — | — | NMFs-CSL, SLR500, MSASL | 把统计手部模型作为先验嵌入识别网络，缓解手部自遮挡。 |
| Natural Language-Assisted Sign Language Recognition | Zuo et al. | CVPR 2023 | [link](https://arxiv.org/abs/2303.12080) | [code](https://github.com/FangyunWei/SLRT/tree/main/NLA-SLR) | MSASL, WLASL, NMFs-CSL | 用词汇的自然语言描述缓解视觉相近手势（VISigns）的混淆。 |
| CVT-SLR: Contrastive Visual-Textual Transformation for Sign Language Recognition with Variational Alignment | Zheng et al. | CVPR 2023 | [link](https://arxiv.org/abs/2303.05725) | — | PHOENIX-2014, PHOENIX-2014T | 用变分自编码器对齐视觉与文本模态，做对比式跨模态一致性约束。 |
| BEST: BERT Pre-Training for Sign Language Recognition with Coupling Tokenization | Zhao et al. | AAAI 2023 | [link](https://arxiv.org/abs/2302.05075) | — | NMFs-CSL, SLR500, MSASL, WLASL | 将手部与身体姿态耦合离散化为 token，做 BERT 式掩码预训练。 |
| Human Part-wise 3D Motion Context Learning for Sign Language Recognition | Lee et al. | ICCV 2023 | [link](https://arxiv.org/abs/2308.09305) | — | WLASL, PHOENIX-2014T | 按人体部位分解 3D 运动上下文，显式建模各部位的运动语义。 |
| SignBERT+: Hand-model-aware Self-supervised Pre-training for Sign Language Understanding | Hu et al. | TPAMI 2023 | [link](https://arxiv.org/abs/2305.04868) | — | NMFs-CSL, SLR500, MSASL, WLASL, PHOENIX-2014 | SignBERT 的期刊扩展版，统一支持 ISLR、CSLR 与 SLT 三类下游任务。 |
| Self-Supervised Representation Learning with Spatial-Temporal Consistency for Sign Language Recognition | Zhao et al. | TIP 2023 | [link](https://arxiv.org/abs/2406.10501) | — | NMFs-CSL, SLR500, MSASL, WLASL | 以时空一致性为自监督信号做骨架手语表征学习。 |
| Global-Local Enhancement Network for NMF-Aware Sign Language Recognition | Hu et al. | TMM 2021 | [link](https://arxiv.org/abs/2008.10428) | — | NMFs-CSL, SLR500 | 全局-局部双分支建模非手部动作（NMF），提出 NMFs-CSL 数据集。 |
| Scaling up Multimodal Pre-training for Sign Language Understanding | Zhou et al. | TPAMI 2025 | — | — | 多数据集 | 大规模多模态手语预训练，统一覆盖识别、翻译与检索等任务。 |

## Continuous Sign Language Recognition (CSLR)
| Title | Authors | Venue | Paper | Code | Datasets | Contribution |
|---|---|---|---|---|---|---|
| Visual Alignment Constraint for Continuous Sign Language Recognition | Min et al. | ICCV 2021 | [link](https://arxiv.org/abs/2104.02330) | [code](https://github.com/ycmin95/VAC_CSLR) | PHOENIX-2014, PHOENIX-2014T, CSL | 用对齐约束强化视觉特征提取器，缓解 CTC 训练下的过拟合。 |
| Self-Mutual Distillation Learning for Continuous Sign Language Recognition | Hao et al. | ICCV 2021 | — | — | PHOENIX-2014, PHOENIX-2014T | 视觉与序列模块间互蒸馏，让视觉分支学到更强的短时语义。 |
| C2SLR: Consistency-Enhanced Continuous Sign Language Recognition | Zuo & Mak | CVPR 2022 | — | — | PHOENIX-2014, PHOENIX-2014T, CSL-Daily | 用姿态与注意力一致性约束同时正则空间与时序建模。 |
| Continuous Sign Language Recognition with Correlation Network | Hu et al. | CVPR 2023 | [link](https://arxiv.org/abs/2303.03202) | [code](https://github.com/hulianyuyy/CorrNet) | PHOENIX-2014, PHOENIX-2014T, CSL-Daily | 相关性模块显式捕捉相邻帧间身体轨迹的关联。 |
| Distilling Cross-Temporal Contexts for Continuous Sign Language Recognition | Guo et al. | CVPR 2023 | — | — | PHOENIX-2014, PHOENIX-2014T, CSL-Daily | 蒸馏不同时间尺度的上下文，融合局部与全局时序线索。 |
| CoSign: Exploring Co-occurrence Signals in Skeleton-based Continuous Sign Language Recognition | Jiao et al. | ICCV 2023 | — | — | PHOENIX-2014, PHOENIX-2014T, CSL-Daily | 基于骨架建模多部位共现信号，轻量且无需 RGB 输入。 |
| Improving Continuous Sign Language Recognition with Cross-Lingual Signs | Wei & Chen | ICCV 2023 | [link](https://arxiv.org/abs/2308.10809) | — | PHOENIX-2014, PHOENIX-2014T, CSL-Daily | 借跨语种手语词的视觉相似性做跨语言数据增强。 |
| C2ST: Cross-modal Contextualized Sequence Transduction for Continuous Sign Language Recognition | Zhang et al. | ICCV 2023 | — | — | PHOENIX-2014, PHOENIX-2014T, CSL-Daily | 把 gloss 语言上下文注入序列转录过程，替代纯 CTC 解码。 |
| Self-Emphasizing Network for Continuous Sign Language Recognition | Hu et al. | AAAI 2023 | [link](https://arxiv.org/abs/2211.17081) | [code](https://github.com/hulianyuyy/SEN_CSLR) | PHOENIX-2014, PHOENIX-2014T, CSL-Daily | 无需额外监督，自适应强调手部与面部等信息丰富的空间区域。 |
| AdaBrowse: Adaptive Video Browser for Efficient Continuous Sign Language Recognition | Hu et al. | ACM MM 2023 | [link](https://arxiv.org/abs/2308.08327) | [code](https://github.com/hulianyuyy/AdaBrowse) | PHOENIX-2014, PHOENIX-2014T, CSL-Daily | 自适应选择输入序列长度与分辨率，显著降低推理开销。 |
| SignGraph: A Sign Sequence is Worth Graphs of Nodes | Gan et al. | CVPR 2024 | — | [code](https://github.com/gswycf/SignGraph) | PHOENIX-2014, PHOENIX-2014T, CSL-Daily | 把手语视频建成图结构，跨帧跨区域聚合节点特征。 |
| Prior-Aware Cross Modality Augmentation Learning for Continuous Sign Language Recognition | Guo et al. | TMM 2023 | — | — | PHOENIX-2014, PHOENIX-2014T, CSL | 利用 gloss 先验做跨模态数据增强，缓解标注稀缺。 |
| Spatial-Temporal Multi-Cue Network for Sign Language Recognition and Translation | Zhou et al. | TMM 2021 | [link](https://arxiv.org/abs/2002.03187) | — | PHOENIX-2014, PHOENIX-2014T, CSL | 多线索（全身/手/脸/姿态）时空网络，统一支持识别与翻译。 |

## Sign Language Translation (SLT)
| Title | Authors | Venue | Paper | Code | Datasets | Contribution |
|---|---|---|---|---|---|---|
| Improving Sign Language Translation With Monolingual Data by Sign Back-Translation | Zhou et al. | CVPR 2021 | [link](https://arxiv.org/abs/2105.12397) | — | PHOENIX-2014T, CSL-Daily | 提出手语回译，用单语文本合成伪手语数据；发布 CSL-Daily 数据集。 |
| Aligning Subtitles in Sign Language Videos | Bull et al. | ICCV 2021 | [link](https://arxiv.org/abs/2105.02877) | — | BOBSL | 用 Transformer 对齐手语视频与字幕时间轴，为大规模弱标注铺路。 |
| Skeleton-Aware Neural Sign Language Translation | Chen et al. | ACM MM 2021 | — | — | PHOENIX-2014T, CSL | 引入骨架信息辅助翻译，降低对外观与背景的依赖。 |
| SimulSLT: End-to-End Simultaneous Sign Language Translation | Yin et al. | ACM MM 2021 | — | — | PHOENIX-2014T | 端到端同声手语翻译，用等待策略在时延与质量间折中。 |
| Contrastive Disentangled Meta-Learning for Signer-Independent Sign Language Translation | Ye et al. | ACM MM 2021 | — | — | PHOENIX-2014T, CSL | 对比解耦 + 元学习，提升跨签名者泛化。 |
| A Simple Multi-Modality Transfer Learning Baseline for Sign Language Translation | Chen et al. | CVPR 2022 | [link](https://arxiv.org/abs/2203.04287) | [code](https://github.com/FangyunWei/SLRT) | PHOENIX-2014T, CSL-Daily | 用渐进式预训练把通用视觉与语言模型迁移到 SLT，成为强基线。 |
| MLSLT: Towards Multilingual Sign Language Translation | Yin et al. | CVPR 2022 | — | — | SP-10 | 首个多语种手语翻译工作，发布覆盖 10 种手语的 SP-10 数据集。 |
| Two-Stream Network for Sign Language Recognition and Translation | Chen et al. | NeurIPS 2022 | [link](https://arxiv.org/abs/2211.01367) | [code](https://github.com/FangyunWei/SLRT/tree/main/TwoStreamNetwork) | PHOENIX-2014, PHOENIX-2014T, CSL-Daily | RGB 与关键点双流互促，同时刷新识别与翻译性能。 |
| Addressing Resource Scarcity across Sign Languages with Multilingual Pretraining and Unified-Vocabulary Datasets | Yin et al. | NeurIPS 2022 | — | — | SP-10, PHOENIX-2014T | 多语种预训练加统一词表，缓解低资源手语数据稀缺。 |
| SLTUNET: A Simple Unified Model for Sign Language Translation | Zhang et al. | ICLR 2023 | [link](https://arxiv.org/abs/2305.01778) | [code](https://github.com/bzhangGo/sltunet) | PHOENIX-2014T, CSL-Daily | 单一模型统一多任务多模态，共享表示提升翻译质量。 |
| Gloss Attention for Gloss-free Sign Language Translation | Yin et al. | CVPR 2023 | [link](https://arxiv.org/abs/2307.07361) | — | PHOENIX-2014T, CSL-Daily | 无需 gloss 标注，用注意力隐式定位类 gloss 的语义片段。 |
| Gloss-free Sign Language Translation: Improving from Visual-Language Pretraining | Zhou et al. | ICCV 2023 | [link](https://arxiv.org/abs/2307.14768) | [code](https://github.com/zhoubenjia/GFSLT-VLP) | PHOENIX-2014T, CSL-Daily | 视觉-语言预训练对齐视频与文本语义，大幅提升无 gloss 翻译。 |
| Sign Language Translation with Iterative Prototype | Yao et al. | ICCV 2023 | [link](https://arxiv.org/abs/2308.12191) | — | PHOENIX-2014T, CSL-Daily | 迭代refine原型表示，逐步逼近准确的语义单元。 |
| Gloss-Free End-to-End Sign Language Translation | Lin et al. | ACL 2023 | [link](https://arxiv.org/abs/2305.12876) | [code](https://github.com/HenryLittle/GloFE) | PHOENIX-2014T, CSL-Daily, OpenASL | 用共享语义空间中的中间表示替代 gloss，实现端到端无 gloss 翻译。 |
| YouTube-ASL: A Large-Scale, Open-Domain American Sign Language-English Parallel Corpus | Uthus et al. | NeurIPS 2023 | [link](https://arxiv.org/abs/2306.15162) | — | YouTube-ASL, How2Sign | 构建开放域大规模 ASL-英语平行语料，规模约为 How2Sign 的 3 倍。 |
| Auslan-Daily: Australian Sign Language Translation for Daily Communication and News | Shen et al. | NeurIPS 2023 | — | — | Auslan-Daily | 发布覆盖日常对话与新闻场景的澳大利亚手语翻译数据集。 |
| Sign2GPT: Leveraging Large Language Models for Gloss-Free Sign Language Translation | Wong et al. | ICLR 2024 | [link](https://arxiv.org/abs/2405.04164) | — | PHOENIX-2014T, CSL-Daily | 用轻量适配器把预训练大语言模型接入无 gloss 手语翻译。 |
| LLMs are Good Sign Language Translators | Gong et al. | CVPR 2024 | [link](https://arxiv.org/abs/2404.00925) | — | PHOENIX-2014T, CSL-Daily | 把手语视频规范化为类语言表示，直接对接 LLM 做翻译。 |
| Scaling Sign Language Translation | Zhang et al. | NeurIPS 2024 | [link](https://arxiv.org/abs/2407.11855) | — | YouTube-ASL, How2Sign, PHOENIX-2014T | 系统研究数据、模型与多语种规模化对 SLT 的影响。 |
| Improving Gloss-free Sign Language Translation by Reducing Representation Density | Ye et al. | NeurIPS 2024 | [link](https://arxiv.org/abs/2405.14312) | — | PHOENIX-2014T, CSL-Daily | 指出语义相近手语词表示过密是瓶颈，用对比目标拉开距离。 |
| Uni-Sign: Toward Unified Sign Language Understanding at Scale | Li et al. | ICLR 2025 | [link](https://arxiv.org/abs/2501.15187) | [code](https://github.com/ZechengLi19/Uni-Sign) | CSL-Daily, PHOENIX-2014T, WLASL | 统一预训练框架，把识别、翻译与理解任务放进同一模型。 |
| YouTube-SL-25: A Large-Scale, Open-Domain Multilingual Sign Language Parallel Corpus | Tanzer & Zhang | ICLR 2025 | [link](https://arxiv.org/abs/2407.11144) | — | YouTube-SL-25 | 覆盖 25 种以上手语的大规模多语种平行语料。 |
| Lost in Translation, Found in Context: Sign Language Translation with Contextual Cues | Sincan et al. | CVPR 2025 | [link](https://arxiv.org/abs/2501.09754) | — | BOBSL, How2Sign | 引入背景与上下文线索辅助翻译，处理指代与省略。 |
| Conditional Sentence Generation and Cross-Modal Reranking for Sign Language Translation | Zhao et al. | TMM 2021 | — | — | PHOENIX-2014T | 条件句子生成加跨模态重排序，提升译文流畅度与忠实度。 |

## Sign Language Production (SLP)
| Title | Authors | Venue | Paper | Code | Datasets | Contribution |
|---|---|---|---|---|---|---|
| Mixed SIGNals: Sign Language Production via a Mixture of Motion Primitives | Saunders et al. | ICCV 2021 | [link](https://arxiv.org/abs/2107.11317) | — | PHOENIX-2014T | 把手语生成分解为运动基元的混合，提升长序列生成稳定性。 |
| Towards Fast and High-Quality Sign Language Production | Huang et al. | ACM MM 2021 | — | — | PHOENIX-2014T | 非自回归生成框架，兼顾生成速度与姿态质量。 |
| Signing at Scale: Learning to Co-Articulate Signs for Large-Scale Photo-Realistic Sign Language Production | Saunders et al. | CVPR 2022 | [link](https://arxiv.org/abs/2203.15354) | — | meineDGS, PHOENIX-2014T | 学习手语词间的协同发音，生成大词表的照片级真实手语视频。 |
| Continuous 3D Multi-Channel Sign Language Production via Progressive Transformers and Mixture Density Networks | Saunders et al. | IJCV 2021 | [link](https://arxiv.org/abs/2103.06982) | — | PHOENIX-2014T | 渐进式 Transformer 加混合密度网络，连续生成多通道 3D 手语。 |
| Neural Sign Actors: A Diffusion Model for 3D Sign Language Production from Text | Baltatzis et al. | CVPR 2024 | [link](https://arxiv.org/abs/2312.02702) | — | How2Sign, PHOENIX-2014T | 基于扩散模型的 3D 手语 avatar 生成，兼顾语义准确与动作自然。 |
| T2S-GPT: Dynamic Vector Quantization for Autoregressive Sign Language Production from Text | Yin et al. | ACL 2024 | [link](https://arxiv.org/abs/2406.07119) | — | PHOENIX-2014T, How2Sign | 动态向量量化编码手语序列，自回归生成保留细粒度动作。 |
| MS2SL: Multimodal Spoken Data-Driven Continuous Sign Language Production | Ma et al. | ACL 2024 | [link](https://arxiv.org/abs/2406.07168) | — | PHOENIX-2014T, How2Sign | 支持文本与语音多模态输入驱动的连续手语生成。 |
| Sign-IDD: Iconicity Disentangled Diffusion for Sign Language Production | Tang et al. | AAAI 2025 | [link](https://arxiv.org/abs/2412.13609) | [code](https://github.com/NaVi-start/Sign-IDD) | PHOENIX-2014T, CSL-Daily | 解耦手语的象似性（iconicity）骨架约束，改进扩散式生成。 |
| Discrete to Continuous: Generating Smooth Transition Poses from Sign Language Observations | Shen et al. | CVPR 2025 | — | — | PHOENIX-2014T, CSL-Daily | 在离散手语词之间生成平滑过渡姿态，改善拼接生硬问题。 |
| Signs as Tokens: A Retrieval-Enhanced Multilingual Sign Language Generator | Li et al. | ICCV 2025 | [link](https://arxiv.org/abs/2411.17799) | [code](https://github.com/2000ZRL/SOKE) | 多语种数据集 | 把手语词当作 token，检索增强的多语种手语生成。 |
| Advanced Sign Language Video Generation with Compressed and Quantized Multi-Condition Tokenization | Zhu et al. | NeurIPS 2025 | — | [code](https://github.com/umnooob/signvip) | PHOENIX-2014T | 多条件压缩量化 token 控制，提升生成视频的可控性与保真度。 |

## Sign Language Retrieval
| Title | Authors | Venue | Paper | Code | Datasets | Contribution |
|---|---|---|---|---|---|---|
| Sign Language Video Retrieval with Free-Form Textual Queries | Duarte et al. | CVPR 2022 | [link](https://arxiv.org/abs/2201.02495) | — | How2Sign, PHOENIX-2014T | 首次定义自由文本查询的手语视频检索任务，提出 SPOT-ALIGN 框架。 |
| SEDS: Semantically Enhanced Dual-Stream Encoder for Sign Language Retrieval | Zhou et al. | ACM MM 2024 | [link](https://arxiv.org/abs/2407.16394) | [code](https://github.com/longtaojiang/SEDS) | How2Sign, PHOENIX-2014T, CSL-Daily | RGB 与姿态双流编码加语义增强，提升检索的细粒度判别力。 |

## Others
Datasets & benchmarks, pre-training & representation learning, fingerspelling, sign language understanding & dialogue.

| Title | Authors | Venue | Paper | Code | Datasets | Contribution |
|---|---|---|---|---|---|---|
| How2Sign: A Large-Scale Multimodal Dataset for Continuous American Sign Language | Duarte et al. | CVPR 2021 | [link](https://arxiv.org/abs/2008.08143) | — | How2Sign | 大规模多模态多视角 ASL 数据集，含 3D 关键点与深度信息。 |
| Read and Attend: Temporal Localisation in Sign Language Videos | Varol et al. | CVPR 2021 | [link](https://arxiv.org/abs/2103.16481) | — | BSL-1K, BSLDict | 用 Transformer 在连续手语视频中定位手语词的时间位置。 |
| Fingerspelling Detection in American Sign Language | Shi et al. | CVPR 2021 | [link](https://arxiv.org/abs/2104.01291) | — | ChicagoFSWild, ChicagoFSWild+ | 定义野外场景下的指拼检测任务并给出评测协议与基线。 |
| ASL Citizen: A Community-Sourced Dataset for Advancing Isolated Sign Language Recognition | Desai et al. | NeurIPS 2023 | [link](https://arxiv.org/abs/2304.05934) | — | ASL Citizen | 社区众包采集的大规模 ISLR 数据集，聚焦手语词典检索场景。 |
| PopSign ASL v1.0: An Isolated American Sign Language Dataset Collected via Smartphones | Starner et al. | NeurIPS 2023 | — | — | PopSign ASL | 用手机采集的 ISLR 数据集，面向儿童手语学习游戏场景。 |
| MM-WLAuslan: Multi-View Multi-Modal Word-Level Australian Sign Language Recognition Dataset | Shen et al. | NeurIPS 2024 | [link](https://arxiv.org/abs/2410.19488) | — | MM-WLAuslan | 多视角多模态的澳大利亚手语词级识别数据集。 |

## Other Top Venues
Sign language papers from well-known venues that are **not** CCF-A in the 7th edition (e.g. ECCV, EMNLP, NAACL, IJCAI, COLING, BMVC). Same inclusion rules otherwise (2021+, formally accepted).

| Title | Authors | Venue | Direction | Paper | Code | Datasets | Contribution |
|---|---|---|---|---|---|---|---|
| Temporal Lift Pooling for Continuous Sign Language Recognition | Hu et al. | ECCV 2022 (CCF-B) | CSLR | [link](https://arxiv.org/abs/2207.08734) | [code](https://github.com/hulianyuyy/Temporal-Lift-Pooling) | PHOENIX-2014, PHOENIX-2014T, CSL-Daily | 用提升小波思想设计时序池化，保留下采样中丢失的细节。 |
| Deep Radial Embedding for Visual Sequence Learning | Min et al. | ECCV 2022 (CCF-B) | CSLR | — | — | PHOENIX-2014, PHOENIX-2014T | 改造 CTC 的径向嵌入，缓解序列学习中的尖峰行为。 |
| Automatic Dense Annotation of Large-Vocabulary Sign Language Videos | Momeni et al. | ECCV 2022 (CCF-B) | 数据集 | [link](https://arxiv.org/abs/2208.02802) | — | BOBSL | 自动为大词表手语视频生成稠密标注，大幅扩充可用监督。 |
| Open-Domain Sign Language Translation Learned from Online Video | Shi et al. | EMNLP 2022 (CCF-B) | SLT / 数据集 | [link](https://arxiv.org/abs/2205.12870) | [code](https://github.com/chevalierNoir/OpenASL) | OpenASL | 从在线视频构建开放域 ASL 翻译数据集 OpenASL。 |
| Visual Alignment Pre-training for Sign Language Translation | Jiao et al. | ECCV 2024 (CCF-B) | SLT | — | — | PHOENIX-2014T, CSL-Daily | 无 gloss 的视觉对齐预训练，把视觉片段与词语对齐。 |
| EvSign: Sign Language Recognition and Translation with Streaming Events | Zhang et al. | ECCV 2024 (CCF-B) | CSLR / SLT | [link](https://arxiv.org/abs/2407.12593) | — | EvSign | 用事件相机流做手语识别与翻译，兼顾隐私与低功耗。 |
| Uncertainty-Aware Sign Language Video Retrieval with Probability Distribution Modeling | Zheng et al. | ECCV 2024 (CCF-B) | 检索 | [link](https://arxiv.org/abs/2405.19689) | — | How2Sign, PHOENIX-2014T | 用概率分布建模检索中的语义不确定性，缓解一对多匹配。 |
| Towards Online Continuous Sign Language Recognition and Translation | Guo et al. | EMNLP 2024 (CCF-B) | CSLR / SLT | [link](https://arxiv.org/abs/2401.05336) | [code](https://github.com/FangyunWei/SLRT) | PHOENIX-2014, PHOENIX-2014T, CSL-Daily | 把离线 CSLR 改造为在线流式框架，支持实时识别与翻译。 |
| SignCLIP: Connecting Text and Sign Language by Contrastive Learning | Jiang et al. | EMNLP 2024 (CCF-B) | 预训练 | [link](https://arxiv.org/abs/2407.01264) | — | Spreadthesign, How2Sign | CLIP 式对比学习对齐手语视频与文本，支持多语种零样本迁移。 |
| Cross-modality Data Augmentation for End-to-End Sign Language Translation | Ye et al. | EMNLP Findings 2023 (CCF-B) | SLT | [link](https://arxiv.org/abs/2305.11096) | — | PHOENIX-2014T, CSL-Daily | 跨模态数据增强桥接 gloss 与文本，改善端到端翻译。 |
| A Simple Baseline for Spoken Language to Sign Language Translation with 3D Avatars | Fang et al. | ECCV 2024 (CCF-B) | SLP | [link](https://arxiv.org/abs/2401.04730) | [code](https://github.com/FangyunWei/SLRT/tree/main/Spoken2Sign) | PHOENIX-2014T, CSL-Daily | 从口语文本直接驱动 3D avatar 生成手语，给出简洁强基线。 |
| Weakly-supervised Fingerspelling Recognition in British Sign Language Videos | Prajwal et al. | BMVC 2022 | 指拼识别 | [link](https://arxiv.org/abs/2211.08954) | — | BOBSL | 弱监督学习英国手语指拼识别，无需逐帧字母标注。 |

## Contributing
PRs welcome. Please keep the table format and check the venue tier against the CCF 7th edition and make sure the paper is formally accepted (no arXiv-only preprints).

Cells marked `—` mean the link has not been filled in yet, not that none exists — PRs adding them are especially welcome.
