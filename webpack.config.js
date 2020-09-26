module.exports={   //程序的入口是执行babel-polyfill兼容代码，把main.js变成兼容代码
  entry:["./src/index.js"],
  // 把js/main.js变成兼容代码
  output:{　　 // 输出路径及文件名
    path:__dirname+"/dist",
    filename:"main.js"
    // 将编译打包后的mian.js保存到当前目录下dist文件夹下的main.js
  }
}