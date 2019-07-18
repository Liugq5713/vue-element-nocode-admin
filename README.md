<h1 align="center">Welcome to vue-element-nocode-admin 👋</h1>
<p align="center">
  <img  width="320" src="https://raw.githubusercontent.com/Liugq5713/vue-element-form-editor/master/src/assets/logo-with-title.png">
</p>
<p align="center">
  <img alt="Version" src="https://img.shields.io/badge/version-0.1.0-blue.svg?cacheSeconds=2592000" />
   <a href="https://github.com/dongsuo/vue-data-board/blob/master/LICENSE">
    <img alt="License: MIT" src="https://img.shields.io/badge/License-MIT-yellow.svg" target="_blank" />
  </a>
  <a href='https://travis-ci.org/Liugq5713/vue-element-nocode-admin' target="_blank" alt='travis ci'>
  <img alt='travis ci' src='https://travis-ci.org/Liugq5713/vue-element-nocode-admin.svg?branch=master'>
  </a>
</p>

> element-ui 的代码可视化编辑器，自动生成表单代码，列表代码。不是一个可视化解决方案，更像是生成模板的工具

## 🏠 [Homepage](https://so-easy.cc/vue-element-nocode-admin/)

## Install

```sh
npm install
```

## How to Use

### 表单

一份表单有两个需要编辑的地方，一个是表单本身的属性，比如表单对象，表单的 Ref（用于表单验证），另一个就是表单包含的表单元素。

表单属性在表单属性编辑区可以编辑，表单元素的生成有两种方式

- 拖拽

将表单元素拖拽到拖拽区，然后编辑表单元素属性

- 支持 JSON 转化为表单

作为一个表单编辑工具，拖拽虽然简单，但是表单数量多的时候还是很麻烦。

因为我司接口通过 swagger 管理，其 post 接口列出了数据，如下图

![swagger图](https://wpimg.wallstcn.com/98883408-e3aa-43ef-9ab8-ea9ea15d4947.png)

你可以很方便的把数据粘贴至 JSON 表单对象的输入框，支持嵌套的对象。

![表单编辑区](https://wpimg.wallstcn.com/80a00d25-c157-42f6-a4b4-3e9366dff194.png)

但是粘贴过来的数据仅有 value 值，因此我定义了`value:label` 这样的结构，value 作为表单的 value,label 作为表单的 label。注意 label 需要用引号引起来。

```js
{
  "id": 'ID',
  "title": '标题',
  "type": '类型'
}
```

然后点击生成表单即可，默认生成 Input，可在表单元素编辑区修改

### 表格

将后端返回得数据粘贴到生成表单得输入框中，生成表单，然后编辑表格头即可，后续会加上表格查询

## Author

👤 **sarva**

- Github: [@Liugq5713](https://github.com/Liugq5713)

## Show your support

Give a ⭐️ if this project helped you!
