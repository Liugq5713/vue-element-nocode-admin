# vue-element-form-editor

[项目预览地址](https://so-easy.cc/vue-element-form-editor/)

element-ui 的表单可视化编辑器，自动生成表单验证代码。不是一个可视化解决方案，更像是生成模板的工具。为解决笔者记不住 element-ui 表单验证写法而生。

## 支持 JSON 转化为表单

作为一个表单编辑工具，拖拽虽然简单，但是表单数量多的时候还是很麻烦。

因为我司接口通过 swagger 管理，其 post 接口列出了数据，如下图

![swagger图](https://wpimg.wallstcn.com/98883408-e3aa-43ef-9ab8-ea9ea15d4947.png)

你可以很方便的把数据粘贴至 JSON 表单对象的输入框

![表单编辑区](https://wpimg.wallstcn.com/80a00d25-c157-42f6-a4b4-3e9366dff194.png)
但是粘贴过来的数据仅有 value 值，因此我定义了`value:label` 这样的结构，value 作为表单的 value,label 作为表单的 label。注意 label 需要用引号引起来。

```
{
  "id": 'ID',
  "title": '标题',
  "type": '类型'
}
```

然后点击生成表单即可，默认生成 Input，可在表单元素编辑区修改

## 计划

目前仅支持非空的表单验证

未来可能会增加新的表单资源，但是不会多，因为我觉得拖拖拽拽这些表单，可能还不如我自己手写代码来的快。
