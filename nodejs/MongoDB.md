- `Mongoose` là một gói npm giúp tương tác với MongoDB trong Nodejs
```sh
"dependencies": {
    "mongoose": "^5.11.15"
  },
```
---
## Tạo tài khoản MongoDB Atlas
- Truy cập vào trang [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)
- 1. Đăng ký tài khoản
- 2. Tạo một cluster
- 3. Tạo một user
- 4. Allow access from anywhere `0.0.0.0/0`
- 5. Connect to your cluster
---
## Connect to MongoDB Atlas 
- file .env
```sh
DB_URI=<mongodb+srv://<username>:<password>@<cluster-name>.prx1c.mongodb.net/<db-name>?retryWrites=true&w=majority>
```
- file myApp.js
```js
const mongoose = require('mongoose');
mongoose.connect(process.env.DB_URI, { useNewUrlParser: true, useUnifiedTopology: true });
```
---
## Các thuật ngữ trong MongoDB
- `Collections`: tương đương với bảng trong SQL, có thể chứa nhiều json document
- `Documents`: tương đương với một dòng trong SQL, là một json object
- `Fields`: tương đương với một cột trong SQL, là một cặp key-value trong json object
- `Schema`: tương đương với một bảng trong SQL, là một json object, mô tả các fields của một document
- `Model`: tương đương với một bảng trong SQL, là một class, mô tả các fields của một document
## Mongoose Schema vs. Model
- Mongoose Model là 1 trình bao bọc Mongoose Schema. Mongoose Schema xác định cấu trúc của documents, giá trị mặc đinh, xác thực,... Trong khi Mongoose Model cung cấp một giao diện để tương tác với cơ sở dữ liệu MongoDB cho các documents như tạo, đọc, cập nhật, xóa,...
1. Tạo một Schema
```js
const Schema = mongoose.Schema;
const personSchema = new Schema({
  name: { type: String, required: true },
  age: Number,
  favoriteFoods: [String]
});
```
---
## Create a Model
- CURD: Create, Read, Update, Delete
- file myApp.js
```js
