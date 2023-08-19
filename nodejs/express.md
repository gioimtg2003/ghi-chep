- `express: ` là một framework của nodejs, giúp xây dựng các ứng dụng web và API đơn giản, nhanh chóng, dễ dàng.
```js
let express = require('express');
let app = express();
console.log("Hello World");
app.get("/", (req, res) => {
  res.send("<h1>Hello Express</h1>");
});

module.exports = app;

```
- `require('express')`: import module express
- `app.get("/", (req, res) => { res.send("Hello Express"); });`: tạo một route với method GET, khi truy cập vào route này, server sẽ trả về một chuỗi "Hello Express" cho client
```js
app.get("/", (req, res) => {
  res.sendFile(__dirname + "/views/index.html");
});
```
- `res.sendFile(__dirname + "/views/index.html");`: trả về file index.html cho client
- `__dirname`: biến toàn cục, chứa đường dẫn tuyệt đối của thư mục hiện tại
```js
app.use("/public", express.static(__dirname + "/public"));
```
- `app.use("/public", express.static(__dirname + "/public"));`: tạo một route tĩnh, khi truy cập vào route này, server sẽ trả về các file tĩnh trong thư mục public cho client
- `express.static(__dirname + "/public")`: tạo một middleware, giúp server trả về các file tĩnh trong thư mục public cho client
```js
app.get("/json", (req, res) =>{
  res.json({
    "message": "Hello json"
  });
})

```
- `res.json()`: phục vụ cho việc trả về dữ liệu dạng json cho client
```js
require('dotenv').config()
app.get("/json", (req, res) =>{
  res.json({
    "message": process.env.MESSAGE_STYLE 
  });
})
```
- `require('dotenv').config()`: import module dotenv, giúp đọc các biến môi trường từ file .env
- `process.env.MESSAGE_STYLE`: đọc biến môi trường MESSAGE_STYLE từ file .env
---
- `middleware`: là một hàm, nhận vào 3 tham số: request, response, next; thực hiện một số xử lý trên request, response; gọi hàm next() để chuyển request, response cho middleware tiếp theo. 
- `next()`: hàm gọi middleware tiếp theo, nếu không gọi hàm này, request, response sẽ bị treo, không thể trả về cho client
