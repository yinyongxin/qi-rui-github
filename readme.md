# 规范

  1. 时间处理使用moment
  2. 项目引入了react-use 和 ahooks 两个hooks库如果有使用hooks需要优先在这两个库中查找，如果没有
    则在utils/hooks下自定义hooks
  3. if 判断超过三层则已经要写备注
  4. 尽量使用TS声明
  5. 组件创建参照ExempleComponent和conponents下的readme.md
  6. 页面创建参照ExemmplePage和pages下的readme.md
  7. 只有组件的文件夹名称和文件名称大写
  8. 函数要写声明已经备注(入参and出参)
  9. 除React函数组件外尽量避免使用export defatut, 应使用export
  10. 文件夹下有多个文件则使用index.ts/tsx统一导出
  11.  JavaScript 常用函数 使用 loadsh（ 例如：omit pick等）

# 文件夹说明

  ## public
    静态文件存放地址 通过路径引入

  ## src
    + assets 静态文件存放 通过组件方式使用（区别去pullic下文件）
    + compoments 通用组件存放位置
    + config 项目配置文件夹
    + Layout 项目布局组件
    + locale 国际化文件夹
    + pages 页面文件夹
    + routes 路由文件夹
    + store 状态管理文件夹（redux）
    + typings 全局声明文件夹
    + utils 工具类文件夹

# 第三方库

  1. loadsh [https://www.lodashjs.com/]
  2. ahooks [https://ahooks.js.org/zh-CN]
  3. react-use[https://github.com/zenghongtu/react-use-chinese/blob/master/README.md]
  4. moment [https://momentjs.com/]
  5. qirui-digitization-ui 定制化Ui组件库
  6. 图标库 [https://fontawesome.com/search?m=free&s=solid%2Cregular]