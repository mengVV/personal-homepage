# Meng Wu · Academic Homepage

基于 [PRISM](https://github.com/xyjoey/PRISM) 的个人学术主页，保留模板的浅色学术排版、深色模式、论文搜索与筛选、BibTeX 引用以及中英文切换。

## 在 GitHub 修改内容

内容集中在 `content/`（英文）和 `content_zh/`（中文），请同时更新对应文件。

| 文件 | 内容 |
| --- | --- |
| `config.toml` | 姓名、机构、头像、联系方式、社交链接和导航 |
| `bio.md`、`about.toml` | 简介、研究兴趣与首页精选论文 |
| `publications.bib` | 全部论文、作者、年份、会议、论文/项目/代码链接 |
| `research.toml` | 研究项目卡片 |
| `cv.md` | 教育、经历、荣誉与技能 |
| `contact.md` | 联系方式 |

论文字段 `selected={true}` 用于首页精选；`preview` 指向 `public/papers/` 中的封面文件名；`url` 是论文链接，`project` 是项目主页，`code` 是代码仓库。PRISM 作者字段里的 `#` 表示共同贡献，`*` 表示通讯作者，请只按已确认信息填写。当前两篇预印本未标注未经确认的会议录用状态。

头像为 `public/images/monogram.svg`，可替换成自己的照片并更新两份 `config.toml`。研究封面是概念示意，并非论文实验图。默认中文，语言切换会保存访客偏好。

## 本地预览与构建

需要 Node.js 22 或更高版本。

```sh
npm ci
npm run dev
```

生成静态网站：

```sh
npm run build
python3 -m http.server 4173 --bind 127.0.0.1 --directory out
```

部署目录为 `out/`。GitHub Actions 会在每次提交后执行完整构建检查。当前 [Sites 预览](https://personal-vcard-oct12.saltyrook512.chatgpt.site) 为私有，GitHub 提交不会自动更新该预览，需要另行部署。

## 许可

PRISM 采用 MIT 许可，原版权声明保留于 `LICENSE`。本站资料来自本人提供的简历与公开学术记录。
