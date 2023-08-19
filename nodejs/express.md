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
~~~js
app.use((req, res, next) => {
  console.log(`${req.method} ${req.path} - ${req.ip}`);
  next();
});
~~~
- `app.use()`: tạo một middleware, áp dụng cho tất cả các route
- `req.method`: phương thức của request
- `req.path`: đường dẫn của request
- `req.ip`: địa chỉ ip của client
```js
app.get("/now", (req, res, next) => {
  req.time = new Date().toString();
  next();
}, (req, res) => {
  res.json({
    "time": req.time
  });
});
```
- `req.time = new Date().toString();`: tạo một thuộc tính time cho request
- Các chức năng của 1 middleware:
  - Thực hiện các xử lý trên request, response. Ví dụ: `console.log(`${req.method} ${req.path} - ${req.ip}`);`
  - Thêm các thuộc tính cho request. Ví dụ: `req.time = new Date().toString();`
  - Gọi hàm next() để chuyển request, response cho middleware tiếp theo trong stack
  - Kết thúc request, response
- Các kiểu middleware:
    - application-level middleware: áp dụng cho tất cả các route. Ví dụ: `app.use((req, res, next) => { ... });`. Sử dụng `next('route')`: để chuyển request, response cho route tiếp theo trong stack
    - router-level middleware: áp dụng cho một route. Ví dụ: `app.get("/now", (req, res, next) => { ... });`
    - error-handling middleware: xử lý các lỗi. Ví dụ: `app.use((err, req, res, next) => { ... });`
    - built-in middleware: được tích hợp sẵn trong express. Ví dụ: `app.use(express.static(__dirname + "/public"));`
    - third-party middleware: được cài đặt từ bên ngoài. Ví dụ: `app.use(bodyParser.urlencoded({ extended: false }));`

---

