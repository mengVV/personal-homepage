/*
 * Personal content from the user's CV, checked against public author records.
 * Identity and academic links: https://openreview.net/profile?id=~Meng_Wu3
 * Publication titles, author order, and venues follow the linked public versions.
 */
window.PROFILE = {
  name: 'Meng Wu',
  email: 'wymond@umich.edu',
  role: {
    zh: '密歇根大学 · 博士研究生',
    en: 'Ph.D. Student · University of Michigan'
  },
  location: 'Ann Arbor, MI, USA',
  bio: {
    zh: [
      '我是密歇根大学安娜堡分校的博士研究生，导师为 Qing Qu 教授。此前，我在密歇根大学学习电气与计算机工程，并在电子科技大学获得电子信息工程学士学位。',
      '我的研究围绕生成模型如何学习、泛化与利用数据展开，关注扩散模型的记忆与模型坍塌、合成数据及跨域视觉学习。我也探索多模态生成与异构智能体之间的潜在表示通信，希望让模型更有效地理解和共享信息。'
    ],
    en: [
      'I am a Ph.D. student at the University of Michigan, Ann Arbor, advised by Prof. Qing Qu. I previously studied Electrical and Computer Engineering at Michigan and received my B.E. in Electronic Information Engineering from the University of Electronic Science and Technology of China.',
      'My research explores how generative models learn, generalize, and use data, with a focus on memorization and model collapse in diffusion models, synthetic data, and visual domain adaptation. I also study multimodal generation and latent communication between heterogeneous agents to help models understand and share information more effectively.'
    ]
  },
  interests: [
    {
      title: { zh: '扩散模型与泛化', en: 'Diffusion & Generalization' },
      description: {
        zh: '研究生成模型的表示学习、记忆行为，以及递归训练中的模型坍塌。',
        en: 'Studying representation learning, memorization, and model collapse in generative models.'
      },
      icon: 'icon-design.svg'
    },
    {
      title: { zh: '合成数据与视觉学习', en: 'Synthetic Data & Vision' },
      description: {
        zh: '通过扩散模型缩小合成与真实图像之间的差异，改善视觉任务中的数据利用。',
        en: 'Using diffusion models to bridge synthetic and real imagery for visual learning.'
      },
      icon: 'icon-photo.svg'
    },
    {
      title: { zh: '多模态生成', en: 'Multimodal Generation' },
      description: {
        zh: '结合多模态大语言模型与扩散模型，探索可控图像外扩、图像及视频编辑。',
        en: 'Combining multimodal language models and diffusion models for controllable outpainting and editing.'
      },
      icon: 'icon-app.svg'
    },
    {
      title: { zh: '智能体潜在通信', en: 'Latent Communication' },
      description: {
        zh: '对齐不同模型的内部表示，让智能体通过 KV 缓存共享上下文和推理信息。',
        en: 'Aligning internal representations so heterogeneous agents can share context and reasoning through KV caches.'
      },
      icon: 'icon-dev.svg'
    }
  ],
  education: [
    {
      title: { zh: '密歇根大学安娜堡分校 · 博士', en: 'University of Michigan · Ph.D.' },
      period: '2026 — Present',
      description: {
        zh: '博士研究生，导师：Qing Qu 教授。',
        en: 'Ph.D. student, advised by Prof. Qing Qu.'
      }
    },
    {
      title: { zh: '密歇根大学 · 电气与计算机工程硕士', en: 'University of Michigan · M.S. in ECE' },
      period: '2024 — 2026',
      description: {
        zh: '方向：信号、图像处理与机器学习。GPA：4.00 / 4.00。',
        en: 'Signal, Image Processing & Machine Learning. GPA: 4.00 / 4.00.'
      }
    },
    {
      title: { zh: '电子科技大学 · 电子信息工程学士', en: 'UESTC · B.E. in Electronic Information Engineering' },
      period: '2020 — 2024',
      description: {
        zh: 'GPA：3.76 / 4.00；专业 GPA：3.98 / 4.00；专业排名：2 / 42。',
        en: 'GPA: 3.76 / 4.00; major GPA: 3.98 / 4.00; major rank: 2 / 42.'
      }
    }
  ],
  experience: [
    {
      title: { zh: '研究助理 · 密歇根大学', en: 'Graduate Research Assistant · University of Michigan' },
      period: '2024.09 — Present',
      description: { zh: '导师：Qing Qu 教授。', en: 'Advised by Prof. Qing Qu.' },
      bullets: {
        zh: [
          '研究扩散模型在合成数据递归训练中的泛化退化与记忆行为；相关工作获 NeurIPS 2025 Spotlight。',
          '研究训练数据熵与模型泛化的关系，并探索缓解模型坍塌的数据选择方法。',
          '开展基于扩散模型的无人机图像 Sim2Real 域适应与行人检测研究。'
        ],
        en: [
          'Studied generalization degradation and memorization under recursive training on synthetic data; related work received a NeurIPS 2025 Spotlight.',
          'Investigated the connection between data entropy and generalization, and developed data selection methods to mitigate model collapse.',
          'Worked on diffusion-based Sim2Real adaptation for human detection in UAV imagery.'
        ]
      }
    },
    {
      title: { zh: 'AIGC 研究实习生 · 生数科技', en: 'AIGC Research Intern · Shengshu AI' },
      period: '2024.04 — 2024.07',
      description: { zh: '北京，中国。', en: 'Beijing, China.' },
      bullets: {
        zh: ['研究保持人物身份一致性的图像与视频生成，以及扩散模型中的时序注意力和表示对齐。'],
        en: ['Researched identity-consistent image and video generation, temporal attention, and diffusion representation alignment.']
      }
    },
    {
      title: { zh: '研究实习生 · 百度研究院', en: 'Research Intern · Baidu Research' },
      period: '2023.11 — 2024.04',
      description: { zh: '北京，中国。', en: 'Beijing, China.' },
      bullets: {
        zh: [
          '开展基于 Diffusion Transformer 的视频编辑，并使用多模态条件微调 U-ViT。',
          '构建海报数据集，使用 DPO 微调 LLaVA。',
          '参与图像外扩研究，相关论文 VIP 发表于 ACCV 2024。'
        ],
        en: [
          'Worked on video editing with Diffusion Transformers and multimodal conditioning for U-ViT.',
          'Built a poster dataset and fine-tuned LLaVA with DPO.',
          'Conducted image-outpainting experiments for VIP, published at ACCV 2024.'
        ]
      }
    },
    {
      title: { zh: '教学助理 · 电子科技大学', en: 'Teaching Assistant · UESTC' },
      period: '2023.08 — 2024.02',
      description: { zh: '3036 人工智能与机器学习课程。', en: 'Course 3036: AI & Machine Learning.' },
      bullets: {
        zh: ['组织每周实验课、设计作业，并指导 90 名学生。'],
        en: ['Led weekly labs, designed assignments, and mentored 90 students.']
      }
    }
  ],
  honors: [
    {
      zh: '2023.12 · 粤港澳大湾区（黄埔）国际算法竞赛三等奖',
      en: '2023.12 · Third Prize, Greater Bay Area (Huangpu) International Algorithm Competition'
    },
    {
      zh: '2023、2022、2021 · 电子科技大学学业奖学金',
      en: '2023, 2022, 2021 · UESTC Academic Merit Scholarship'
    },
    {
      zh: '2023.09 · 电子科技大学学生贡献奖学金',
      en: '2023.09 · UESTC Most Contributive Student Scholarship'
    },
    {
      zh: '2022.09 · 全国大学生嵌入式系统设计竞赛三等奖',
      en: '2022.09 · Third Prize, National College Student Embedded Systems Design Contest'
    }
  ],
  skills: [
    'Python', 'C / C++', 'MATLAB', 'PyTorch', 'Diffusers',
    'Hugging Face', 'OpenCV', 'scikit-learn', 'Git', 'Docker', 'SLURM', 'Bash'
  ],
  publications: [
    {
      id: 'dense-latent-communication',
      title: 'See What I See, Know What I Think: Dense Latent Communication Across Heterogeneous Agents',
      authors: 'Siyi Chen, Xiaoyan Zhang, Meng Wu, Jonathan Tremblay, Valts Blukis, Stan Birchfield, Rene Vidal, Alvaro Velasquez, Sijia Liu, Qing Qu',
      year: 2026,
      venue: 'arXiv',
      tag: 'Preprint',
      category: 'agents',
      links: [
        { label: 'Paper', url: 'https://arxiv.org/abs/2606.13594' },
        { label: 'Project', url: 'https://chicychen.github.io/dense-hetero-latent-mas/' }
      ]
    },
    {
      id: 'balanced-representations',
      title: 'Generalization of Diffusion Models Arises with a Balanced Representation Space',
      authors: 'Zekai Zhang*, Xiao Li*, Xiang Li, Lianghe Shi, Meng Wu, Molei Tao, Qing Qu',
      year: 2026,
      venue: 'ICLR',
      tag: 'Poster',
      category: 'diffusion',
      links: [
        { label: 'Paper', url: 'https://arxiv.org/abs/2512.20963' },
        { label: 'Project', url: 'https://la0ka1.github.io/diffusion-gen-from-rep/' },
        { label: 'Code', url: 'https://github.com/la0ka1/diffusion-gen-from-rep' }
      ]
    },
    {
      id: 'model-collapse',
      title: 'A Closer Look at Model Collapse: From a Generalization-to-Memorization Perspective',
      authors: 'Lianghe Shi*, Meng Wu*, Huijie Zhang, Zekai Zhang, Molei Tao, Qing Qu',
      year: 2025,
      venue: 'NeurIPS',
      tag: 'Spotlight',
      category: 'diffusion',
      links: [
        { label: 'Paper', url: 'https://arxiv.org/abs/2509.16499' },
        { label: 'Project', url: 'https://shilianghe007.github.io/model-collapse/index.html' },
        { label: 'Code', url: 'https://github.com/shilianghe007/Model_Collapse' }
      ]
    },
    {
      // The CV lists an earlier ICRA submission. The public version has no confirmed acceptance.
      id: 'cfha',
      title: 'Coarse-to-Fine Hierarchical Alignment for UAV-based Human Detection using Diffusion Models',
      authors: 'Wenda Li, Meng Wu, Liangzhao Chen, Sungmin Eum, Heesung Kwon, Qing Qu',
      year: 2025,
      venue: 'arXiv',
      tag: 'Preprint',
      category: 'vision',
      links: [
        { label: 'Paper', url: 'https://arxiv.org/abs/2512.13869' },
        { label: 'Code', url: 'https://github.com/liwd190019/CFHA' }
      ]
    },
    {
      // ACCV 2024 is confirmed by the CVF proceedings and the authors' official repository.
      id: 'vip',
      title: 'VIP: Versatile Image Outpainting Empowered by Multimodal Large Language Model',
      authors: 'Jinze Yang, Haoran Wang, Zining Zhu, Chenglong Liu, Meng Wu, Mingming Sun',
      year: 2024,
      venue: 'ACCV',
      tag: '',
      category: 'multimodal',
      links: [
        { label: 'Paper', url: 'https://openaccess.thecvf.com/content/ACCV2024/html/Yang_VIP_Versatile_Image_Outpainting_Empowered_by_Multimodal_Large_Language_Model_ACCV_2024_paper.html' },
        { label: 'Code', url: 'https://github.com/ucasyjz/VIP' }
      ]
    },
    {
      // DOI and complete author order confirmed through the publisher's Crossref record.
      id: 'convolution-transformer',
      title: 'Convolution Meets Transformer: Efficient Hybrid Transformer for Semantic Segmentation with Very High Resolution Imagery',
      authors: 'Yuji Wang, Ruojun Zhao, Shicai Wei, Jingchen Ni, Meng Wu, Yang Luo, Chunbo Luo',
      year: 2024,
      venue: 'IEEE IGARSS',
      tag: '',
      category: 'vision',
      links: [{ label: 'Paper', url: 'https://doi.org/10.1109/IGARSS53475.2024.10640608' }]
    }
  ],
  projects: [
    {
      id: 'collapse',
      title: { zh: '理解与缓解模型坍塌', en: 'Understanding Model Collapse' },
      category: 'diffusion',
      subtitle: { zh: 'NeurIPS 2025 · Spotlight · 共同一作', en: 'NeurIPS 2025 · Spotlight · Equal contribution' },
      description: {
        zh: '从泛化向记忆的转变解释扩散模型坍塌，并通过基于熵的数据选择改善递归训练。',
        en: 'Explaining collapse as a transition from generalization to memorization, and studying entropy-based data selection for recursive training.'
      },
      image: './assets/images/research-collapse.svg',
      links: [
        { label: 'Paper', url: 'https://arxiv.org/abs/2509.16499' },
        { label: 'Project', url: 'https://shilianghe007.github.io/model-collapse/index.html' },
        { label: 'Code', url: 'https://github.com/shilianghe007/Model_Collapse' }
      ]
    },
    {
      id: 'representation',
      title: { zh: '扩散模型的表示与泛化', en: 'Representations & Generalization' },
      category: 'diffusion',
      subtitle: { zh: 'ICLR 2026 · Poster', en: 'ICLR 2026 · Poster' },
      description: {
        zh: '研究平衡表示与局部尖峰表示如何区分泛化和记忆，并探索记忆检测及表示引导编辑。',
        en: 'Connecting balanced and spiky representations to generalization and memorization, with applications to detection and image editing.'
      },
      image: './assets/images/research-representation.svg',
      links: [
        { label: 'Paper', url: 'https://arxiv.org/abs/2512.20963' },
        { label: 'Project', url: 'https://la0ka1.github.io/diffusion-gen-from-rep/' },
        { label: 'Code', url: 'https://github.com/la0ka1/diffusion-gen-from-rep' }
      ]
    },
    {
      id: 'uav',
      title: { zh: '无人机视觉的合成到真实迁移', en: 'Sim2Real for UAV Detection' },
      category: 'vision',
      subtitle: { zh: 'CFHA · 公开预印本', en: 'CFHA · Preprint' },
      description: {
        zh: '通过全局风格迁移、局部细化和幻觉移除，改善合成无人机图像与真实场景之间的对齐。',
        en: 'Bridging synthetic and real UAV imagery through global style transfer, local refinement, and hallucination removal.'
      },
      image: './assets/images/research-uav.svg',
      links: [
        { label: 'Paper', url: 'https://arxiv.org/abs/2512.13869' },
        { label: 'Code', url: 'https://github.com/liwd190019/CFHA' }
      ]
    },
    {
      id: 'multimodal',
      title: { zh: '多模态驱动的可控图像外扩', en: 'Multimodal Image Outpainting' },
      category: 'multimodal',
      subtitle: { zh: 'VIP · ACCV 2024', en: 'VIP · ACCV 2024' },
      description: {
        zh: '结合多模态大语言模型的语义描述与扩散生成，按用户需求扩展图像周围内容。',
        en: 'Combining multimodal descriptions and diffusion generation to customize the content beyond an image’s boundaries.'
      },
      image: './assets/images/research-multimodal.svg',
      links: [
        { label: 'Paper', url: 'https://openaccess.thecvf.com/content/ACCV2024/html/Yang_VIP_Versatile_Image_Outpainting_Empowered_by_Multimodal_Large_Language_Model_ACCV_2024_paper.html' },
        { label: 'Code', url: 'https://github.com/ucasyjz/VIP' }
      ]
    },
    {
      id: 'agents',
      title: { zh: '异构智能体的潜在通信', en: 'Latent Communication Across Agents' },
      category: 'agents',
      subtitle: { zh: 'See What I See · 2026 预印本', en: 'See What I See · 2026 Preprint' },
      description: {
        zh: '通过稠密 KV 缓存对齐，研究不同语言模型之间共享上下文和推理信息的方法。',
        en: 'Studying dense KV-cache alignment to transfer context and reasoning across different language models.'
      },
      image: './assets/images/research-agents.svg',
      links: [
        { label: 'Paper', url: 'https://arxiv.org/abs/2606.13594' },
        { label: 'Project', url: 'https://chicychen.github.io/dense-hetero-latent-mas/' }
      ]
    }
  ]
};
