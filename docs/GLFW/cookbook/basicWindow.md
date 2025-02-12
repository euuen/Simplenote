# 资源管理

## 初始化

::: warning 警告
一定要初始化GLFW，GLFW才可以用!
:::

```cpp
glfwInit();
```

## 销毁

```cpp
glfwTerminate();
```

# 创建窗口

```cpp
glfwCreateWindow(200, 200, "hello opengl", NULL, NULL);
```

然后，你需要给当前窗口
