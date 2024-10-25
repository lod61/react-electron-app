# React Electron App

这是一个使用 React 和 Electron 构建的桌面应用程序。

## 技术栈

- React 18
- Electron 33
- Webpack 5
- Babel 7
- ESLint 8
- Jest 29

## 安装

确保您已安装 [Node.js](https://nodejs.org/) 和 [pnpm](https://pnpm.io/)。

克隆仓库并安装依赖：

```bash
git clone https://github.com/lod61/react-electron-app.git
cd react-electron-app
pnpm install
```

## 开发

启动 React 开发服务器：

```bash
pnpm start
```

在另一个终端窗口中启动 Electron：

```bash
pnpm run electron
```

或者，使用单个命令同时运行 React 和 Electron：

```bash
pnpm run dev
```

## 构建

构建 React 应用：

```bash
pnpm run build
```

## 打包

打包 Electron 应用（适用于 macOS、Windows 和 Linux）：

```bash
pnpm run electron-pack
```

## 测试

运行测试：

```bash
pnpm test
```

## 代码检查

运行 ESLint：

```bash
pnpm run lint
```

## 项目结构

- `src/`: React 应用源代码
  - `pages/`: React 组件
  - `index.js`: React 应用入口点
- `public/`: 静态资源
- `main.js`: Electron 主进程
- `preload.js`: Electron 预加载脚本
- `webpack.config.js`: Webpack 配置
- `.babelrc`: Babel 配置
- `.eslintrc.js`: ESLint 配置
- `jest.config.js`: Jest 配置

## 贡献

欢迎提交 Pull Requests。对于重大更改，请先开 issue 讨论您想要改变的内容。

## 许可证

[ISC](https://choosealicense.com/licenses/isc/)
