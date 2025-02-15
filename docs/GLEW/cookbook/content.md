# 渲染的基本内容

## 清除当前画面

```cpp
glClear(GL_DEPTH_BUFFER_BIT | GL_COLOR_BUFFER_BIT);
```

此函数采用mask进行清除画面，你可以自己用OR运算符（如上）来自由选择要清除什么。一般的都是清除颜色与深度缓冲区。

>下面是一些mask与其解释

|mask|解释|
|-|-|
|GL_COLOR_BUFFER_BIT|颜色缓冲区|
|GL_DEPTH_BUFFER_BIT|深度缓冲区|
|GL_ACCUM_BUFFER_BIT|累积缓冲区|
|GL_STENCIL_BUFFER_BIT|模具缓冲区|

<div style="display: flex;align-items: center;justify-content: center;">
    <figure style="width: 200px;">
        <img src="/favicon.ico" alt="">
        <figcaption>hello</figcaption>
    </figure>
    <figure style="width: 50px;">
        <img src="/favicon.ico" alt="">
        <figcaption>hello</figcaption>
    </figure>
    <figure style="width: 50px;">
        <img src="/favicon.ico" alt="">
        <figcaption>hello</figcaption>
    </figure>
    <figure style="width: 50px;">
        <img src="/favicon.ico" alt="">
        <figcaption>hello</figcaption>
    </figure>
</div>