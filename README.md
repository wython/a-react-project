### 介绍
是一个demo项目，对应博客地址：https://github.com/wython/wython.github.io/issues/8
### 项目引导
#### 启动
#### 开发环境
执行npm i安装依赖包
directoryList.md查看文件目录结构
在开发环境启动前，需要先执行dll, 用于提取公共包：
```
npm run dll 
```
该命令只需执行一次，如果未引入公共包，或者不想提取公共包后续可不必执行。
这个命令的作用是，将类似react这类不会变更的包提取出来，在开发每次执行构建无需将其引入，从而提高编译效率。
开发环境启动命令为：
```
npm run start
```
#### 部署构建
构建命令:
```
npm run build
```
生成文件输出在pubic文件夹

其他命令:mddir：用于更新directoryList.md的目录结构


