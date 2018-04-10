/* 1. expressモジュールをロードし、インスタンス化してappに代入。*/
var express = require("express");
var app = express();

/* 2. listen()メソッドを実行して3000番ポートで待ち受け。*/
var server = app.listen(3000, function(){
    console.log("Node.js is listening to PORT:" + server.address().port);
});

app.get("/wait/:seconds", (req,res,next) => {
  setTimeout(() => {
    res.json({
      wait: Number(req.params.seconds)
    })
  }, 1000 * req.params.seconds);
})