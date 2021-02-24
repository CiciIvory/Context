## React Context Provider上下文使用总结

**含义及用处：**

上下文：用于跨层级传递值


**基本写法：**

创建上下文：const demo = React.createContext()
获取 & 提供 （管道） 上下文：demo.Provider;    // 注意这里没有()


**Context API**

 1. `Ctx=React.createContext()`
 2. `Ctx.Provider`
 3. `Class.contextType`
	一般在Component 里声明为 static contextType=Ctx
 4. `Ctx.Consumer`
 
**Context 的使用：**
 1. 一个组件只能订阅一个`context`，并且是类组件，**类组件**使用`contextType`
 2. 函数组件不可使用contextType，需要使用到`consumer`![在这里插入图片描述](https://img-blog.csdnimg.cn/20210224181630765.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzQwNTkzNjU2,size_16,color_FFFFFF,t_70)
 3. Consumer可以用于类组件 **和** func组件
	Consumer可以挂在 **多个** context，但是contextType不行
	
博客地址： [https://blog.csdn.net/qq_40593656/article/details/114032750](https://blog.csdn.net/qq_40593656/article/details/114032750)
