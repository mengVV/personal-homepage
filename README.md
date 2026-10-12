# Meng Wu · Academic Homepage

基于 [vCard](https://github.com/codewithsadee/vcard-personal-portfolio) 的个人学术主页，包含中英文切换、个人简介、教育经历、论文、研究项目和联系。支持桌面与手机浏览，无需安装第三方依赖。

## 在 GitHub 更新资料

1. 打开 [`assets/js/profile.js`](assets/js/profile.js)，点击编辑。
2. 修改对应内容，并同时填写中文 `zh` 与英文 `en`。
3. 提交修改。GitHub Actions 会检查脚本语法，并确认静态网站能够生成。

| 字段 | 内容 |
| --- | --- |
| `bio`、`interests` | 个人简介、研究方向 |
| `education`、`experience` | 教育与研究经历 |
| `honors`、`skills` | 荣誉、技能与工具 |
| `publications` | 论文标题、作者、年份、会议与链接 |
| `projects` | 研究项目标题、介绍、封面与链接 |

社交链接、侧栏机构与所在地在 [`index.html`](index.html)。头像使用 `assets/images/monogram.svg`；可上传照片，再修改 HTML 中的头像路径。中英界面文字在 `assets/js/script.js`，额外样式在 `assets/css/custom.css`。

论文链接与状态依据个人简历和公开作者记录整理；预印本未附加未经确认的会议录用状态。研究封面为概念示意，不是论文实验图。联系表单会打开访客的邮件草稿，由访客确认发送。

## 本地预览

```sh
node scripts/prepare.mjs
python3 -m http.server 4173 --bind 127.0.0.1 --directory dist
```

访问 <http://127.0.0.1:4173>。每次修改源文件后重新运行准备脚本，并刷新浏览器。`dist/` 为生成文件，不提交到仓库。

## 网站发布

当前仓库用于管理源码。已有的 [Sites 私有预览](https://personal-vcard-oct12.saltyrook512.chatgpt.site) 不会随 GitHub 提交自动更新，需要另行部署。

若希望每次提交自动更新公开主页，可以为此仓库启用 GitHub Pages，并添加部署流程。GitHub Pages 发布的网站可被公众访问。

## 许可

原模板为 MIT 许可，版权归属 codewithsadee。完整版权与许可条款保留于 [`LICENSE`](LICENSE)，并随生成的网站一并发布。
