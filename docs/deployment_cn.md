# 发布与长期维护

公开主页：[Meng Wu 个人主页](https://mengvv.github.io/personal-homepage/)。网站由 [mengVV/personal-homepage](https://github.com/mengVV/personal-homepage) 仓库的 `main` 分支自动发布。

## 更新内容

网站只保留英文版。在 GitHub 打开 `content/` 中的对应文件，点击铅笔图标修改，然后提交到 `main`。**Deploy homepage to GitHub Pages** 会自动构建和发布。到 [Actions](https://github.com/mengVV/personal-homepage/actions/workflows/deploy.yml) 查看结果；绿色表示发布成功。无需上传或提交生成的网站文件。

- `config.toml`：姓名、机构、头像、导航和社交链接。
- `bio.md`、`about.toml`：简介、研究兴趣和首页精选论文。
- `publications.bib`：论文和论文、项目、代码链接。
- `research.toml`：研究项目。
- `cv.md`、`contact.md`：简历和联系方式。

图片放在 `public/images/` 或 `public/papers/`，并更新内容文件里的路径。字段说明见 [README](../README.md)。

## 发布配置

仓库保持公开。**Settings → Pages → Build and deployment → Source** 已使用 **GitHub Actions**。

`.github/workflows/deploy.yml` 在每次提交到 `main` 后运行，也可以从 Actions 点击 **Run workflow** 手动运行。拉取请求只做构建检查，合并到 `main` 后才发布。

自动发布使用 Node.js 22 安装锁定版本的依赖，生成 `out/` 静态网站并上传到 Pages。工作流会自动读取 Pages 的站点路径，确保导航、图片、脚本和图标都能正确加载。发布失败时，现有网站继续提供上一次成功版本。

## 本地预览

使用 Node.js 22 或更新版本：

```sh
npm ci
npm run dev
```

普通的 `npm run build` 生成根路径网站。如需生成当前 GitHub Pages 地址对应的版本：

```sh
NEXT_PUBLIC_BASE_PATH=/personal-homepage npm run build
```

预览该版本时，应把 `out/` 目录映射到 `/personal-homepage/`，与公开网址一致。站点路径在构建时确定。

## 发布失败时

打开 Actions 中失败的运行记录，查看报错的步骤。修正内容语法并提交后会自动重试；也可以在 `main` 上点击 **Run workflow** 重新发布。保持 Pages 来源为 **GitHub Actions**，并保持仓库公开，以延续当前托管方式。
