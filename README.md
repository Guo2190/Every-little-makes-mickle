# Every little makes mickle

**积少成多。** 


欢迎大家加入`Every little makes mickle`。

积累知识点

___

# let、const、var 的区别有哪些？

let 和 var 声明一个变量 const 声明的是只读变量  只保证指针不变  一旦声明 必须立即初始化 否则报错

let 和 const 声明的变量 不存在变量提升   var 会变量提升

let 和 const 声明的变量 存在暂时性死区   声明前使用会报错 

let 和 const 存在于块级作用域（ES6 规定块级作用域必须有打括号） 在块级作用域 重复声明会报错

let 实际上为 JavaScript 新增了块级作用域。 IIFE函数就没必要了(为了形成封闭的作用域, 避免声明函数名 污染全局变量)






