# 保险产品基础模块


## QuickStarts

1. 安装模块

`npm install git+http://gogs.pms.anyi-tech.com/AnyiTech/insure-base.git#<版本号>`

2. 使用模块里的功能

```js

const BaseActionManager = require("insure-base/bases/ins.am");

const idgen = require("insure-base/toolkits/generateid");

const errors = require("insure-base/toolkits/error");


```

## Release Notes

**版本号建议使用a.b.c规则，小修复增加c，有特性增加使用b，有大调整使用a**

`0.1.0` 增加短链接、保单详情链接接口

`0.0.1` 基础模块引入