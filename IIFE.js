// 写法二
console.log(tmp)
(function () {
    var tmp = 111;
    console.log(tmp)
  }());
  console.log(tmp)
  // IIFE函数就没必要了(为了形成封闭的作用域, 避免声明函数名 污染全局变量)