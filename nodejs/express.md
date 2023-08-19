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
let express = require('express');
let app = express();
app.get("/", (req, res) => {
  res.sendFile(__dirname + "/views/index.html");
});
module.exports = app;
```
- `res.sendFile(__dirname + "/views/index.html");`: trả về file index.html cho client
- `__dirname`: biến toàn cục, chứa đường dẫn tuyệt đối của thư mục hiện tại
```js
let express = require('express');
let app = express();
app.get("/", (req, res) => {
  res.sendFile(__dirname + "/views/index.html");
});
app.use("/public", express.static(__dirname + "/public"));
module.exports = app;
```
- `app.use("/public", express.static(__dirname + "/public"));`: tạo một route tĩnh, khi truy cập vào route này, server sẽ trả về các file tĩnh trong thư mục public cho client
- `express.static(__dirname + "/public")`: tạo một middleware, giúp server trả về các file tĩnh trong thư mục public cho client