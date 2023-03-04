# 桌面摄像头

> 向军大叔每晚八点在 [抖音](https://live.douyin.com/houdunren) 和 [bilibli](https://space.bilibili.com/282190994) 直播

<img src="./assets/xj.jpg" alt="xj-small" style="border-radius: 10px;object-fit: cover;height:200px;" />

基于 Electron+Vue3+Vite 开发的桌面摄像头软件，方便直播录课、短视频拍摄等场景。

## 功能特点

- 电脑有多个摄像头时，支持更换摄像头
- 摄像头窗口置顶
- 配置边框宽度
- 定义边框颜色
- 支持 window、Mac 多平台

## 编译说明

因为大叔只有 windows 与 arm 芯片的苹果电脑，所以只编译了这两个系统。

如果你使用的是 inter 芯片的Mac 电脑，请 clone 项目后在项目根目录下执行以下命令，会将你操作系统的执行程序编译到 dist 目录。

```
pnpm i
pnpm build:mac
```

如果你在编译过程中出错失败，一般是你没有正确设置 electron 或 electron-build镜像，请访问[后盾人文档库](https://doc.houdunren.com/%E7%B3%BB%E7%BB%9F%E8%AF%BE%E7%A8%8B/electron/1%20%E5%9F%BA%E7%A1%80%E7%9F%A5%E8%AF%86.html)正确的设置国内镜像。

## 效果展示

摄像头角效果

<img src="./assets/image-20230303145607103.png" alt="image-20230303145607103" style="zoom:50%;" />



支持多种参数的配置

<img src="./assets/image-20230303145726417.png" alt="image-20230303145726417" style="zoom:50%;" />

支持多摄像头摄像头选择

<img src="./assets/image-20230303145754324.png" alt="image-20230303145754324" style="zoom:50%;" />
