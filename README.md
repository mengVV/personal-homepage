# Meng Wu · Academic Homepage

基于 [PRISM](https://github.com/xyjoey/PRISM) 的英文个人学术主页，保留模板的浅色学术排版、深色模式、论文搜索与筛选及 BibTeX 引用。

公开主页：**[https://mengvv.github.io/personal-homepage/](https://mengvv.github.io/personal-homepage/)**

## 在 GitHub 修改内容

英文内容集中在 `content/`，只需维护这一份。

可以直接在 GitHub 打开文件，点击铅笔图标修改并提交到 `main`。每次提交会自动构建并发布；在仓库 [Actions](https://github.com/mengVV/personal-homepage/actions/workflows/deploy.yml) 中查看结果，绿色表示发布成功。内容更新无需手动上传构建文件。

| 文件 | 内容 |
| --- | --- |
| `config.toml` | 姓名、机构、头像、联系方式、社交链接和导航 |
| `bio.md`、`about.toml` | 简介、研究兴趣与首页精选论文 |
| `publications.bib` | 全部论文、作者、年份、会议、论文/项目/代码链接 |
| `research.toml` | 研究项目卡片 |
| `cv.md` | 教育、经历、荣誉与技能 |
| `contact.md` | 联系方式 |

论文字段 `selected={true}` 用于首页精选；`preview` 指向 `public/papers/` 中的封面文件名；`url` 是论文链接，`project` 是项目主页，`code` 是代码仓库。PRISM 作者字段里的 `#` 表示共同贡献，`*` 表示通讯作者，请只按已确认信息填写。当前两篇预印本未标注未经确认的会议录用状态。

头像为 `public/images/monogram.svg`，可替换成自己的照片并更新 `content/config.toml`。研究封面是概念示意，并非论文实验图。网站固定使用英文，已移除语言切换入口。

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

部署目录为 `out/`。GitHub Pages 工作流会自动取得站点路径并构建；本地默认使用根路径。若要生成 GitHub Pages 对应的版本，运行 `NEXT_PUBLIC_BASE_PATH=/personal-homepage npm run build`。

## 自动发布

仓库保持公开，**Settings → Pages → Source** 使用 **GitHub Actions**。`.github/workflows/deploy.yml` 在 `main` 提交或手动触发时部署；拉取请求只进行构建检查。发布失败时，现有网站继续提供上一次成功版本。详见[部署指南](docs/deployment_cn.md)。

## 许可

PRISM 采用 MIT 许可，原版权声明保留于 `LICENSE`。本站资料来自本人提供的简历与公开学术记录。
