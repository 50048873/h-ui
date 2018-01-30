# hui

> hui base vue

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# 生成npm包步骤：

# 生成dist文件夹
npm run dist

# 生成.tgz本地安装包
npm pack

# 发布到npm
注册个npm账号，在你要发布的项目目录执行npm login，输入账号密码和邮箱，然后npm publish就发布成功了


# 说明：
原始地址：hzzHome/static/hui
版本1：commit为"init"的版本，实现了把单个.vue文件编译成npm安装包；
版本2：commit为“此版本可以打包多个.vue文件到一个js库，并可以通过npm安装使用”的版本；
版本3：commit为“偿试把巡河事件——事件详情改写成detail1.vue组件，但存在问题”
[问题描叙：要想引入detail1.vue的main.vue正常运行，则需在index.html里通过script标签引入依赖，
.vue是基于模块运行的，上面的模式不能与模块机制很好的结合。如果把detail1.vue所有的依赖通过import引入，
再通过webpack的externals排除掉依赖库，则可以实现目的。但此种形式也存在问题：一是像layer这样的库并不能通过import引入，
另外，自己编写的js也不能通过import引入]