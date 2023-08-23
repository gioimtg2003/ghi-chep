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
1. Import Mongoose
```js
const mongoose = require('mongoose');
```
2. Tạo một Schema
```js
const Schema = mongoose.Schema;
const personSchema = new Schema({
  name: {type: String, required: true},
  age: Number,
  favoriteFoods: [String]
});
```
3. Tạo một Model
```js
const Person = mongoose.model("Person", personSchema);
```
4. Xuất Model
```js
module.exports = Person;
```
- Mix:
```js
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const personSchema = new Schema({
  name: {type: String, required: true, unique: true},
  age: Number,
  favoriteFoods: [String]
});
module.exports = mongoose.model("Person", personSchema);;
```
---
## CURD
- Create and save
- Tạo 1 document mới
```js
const createAndSave = (done) =>{
  let me = new Person({
    name: "Nguyễn Công Giới",
    age: 20,
    favoriteFoods: ["Cơm", "Bún"]
  });
  me.save( (err, data)=>{
    if(err) return console.error(err);
    done(null, data);
  });
}
```
- Create Many Documents with model.create()
```js
const arrayOfPeople = [
  {name: "Nguyễn Công Giới", age: 20, favoriteFoods: ["Cơm", "Bún"]},
  {name: "Nguyễn Văn A", age: 20, favoriteFoods: ["Cơm", "Bún"]},
  {name: "Nguyễn Văn B", age: 20, favoriteFoods: ["Cơm", "Bún"]}
];
Person.create(arrayOfPeople, (err, data)=>{
  if(err) return console.error(err);
  done(null, data);
});
```
- Khi tạo nhiều document, nếu có document nào bị lỗi thì sẽ không tạo document đó và trả về lỗi
- `Note`: Kết quả trả về
```js
{ 
  _id: 5a78fe3e2f44ba8f85a2409a,
  name: 'Nguyễn Công Giới',
  age: 20,
  favoriteFoods: [ 'Cơm', 'Bún' ],
  __v: 0
}
```
- `_id`: là một thuộc tính tự động được tạo ra, có kiểu dữ liệu là `ObjectId`, giá trị này là mã định danh duy nhất của document
- `__v`: là một thuộc tính tự động được tạo ra, có kiểu dữ liệu là `Number`, giá trị này là số phiên bản của document. Khi một document được tạo ra, giá trị của thuộc tính này là 0. Mỗi khi document được cập nhật, giá trị của thuộc tính này sẽ tăng lên 1
