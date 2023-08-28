## - Document Object Model (DOM):
- Khi một trang web được tải, trình duyệt sẽ tạo một mô hình document hoặc object của trang
- Mô hình `HTML DOM` được xây dựng dưới dạng cây `Object`
- `HTML DOM`: là một tiêu chuẩn về cách lấy, thay đổi, thêm hoặc xóa các phần tử HTML
![DOM](./pic_htmltree.gif)

---
### - The DOM programming interface:
- Tất cả các phần tử HTML đều là các đối tượng
- `Method`: là các hành động có thể thực hiện trên các phần tử HTML
- `Property`: là một giá trị mà bạn có thể lấy hoặc đặt cho các phần tử HTML
- Example:
```sh
    document.getElementById("demo").innerHTML = "Hello World!";
```
- `document`: là một đối tượng
- `getElementById`: là một phương thức
- `innerHTML`: là một thuộc tính, thuộc tính này có thể thay đổi bất kì phần tử `HTML` nào, bao gồm cả phần tử `HTML` `<html>` và `<body>`
---
### - Finding HTML Elements:
- `document.getElementById(id)`: trả về một phần tử duy nhất với một id cụ thể
- `document.getElementsByTagName("h1")`: trả về một danh sách các phần tử `<h1></h1>`
- `document.getElementsByClassName("intro")`: trả về một danh sách các phần tử có class="intro"
- `document.querySelectorAll("p.intro")`: trả về một danh sách các phần tử `<p>` có class="intro"

```js
let x = document.forms["frm1"]; // Lấy ra form có id="frm1"
let text = "";
for (let i = 0; i < x.length; i++) {
    text += x.elements[i].value + "<br>"; // Lấy ra giá trị của các phần tử trong form
}
document.getElementById("demo").innerHTML = text; // Hiển thị giá trị lấy được
```

---
### - Changing HTML Elements:
- `document.getElementById(id).innerHTML = new HTML`: thay đổi nội dung của phần tử HTML
- `document.getElementById(id).attribute = new value`: thay đổi giá trị của thuộc tính của phần tử HTML 
- `document.getElementById(id).style.property = new style`: thay đổi style của phần tử HTML
- Example:
```js
    document.getElementById("p1").innerHTML = "New text!";
    document.getElementById("p2").style.color = "blue";
    document.getElementById("img1").src = "pic_mountain.jpg";
```
---

### - Adding and Deleting Elements:
- `document.createElement(element)`: tạo một phần tử HTML
- `document.removeChild(element)`: xóa một phần tử HTML
- `document.appendChild(element)`: thêm một phần tử HTML
- `document.replaceChild(new, old)`: thay thế một phần tử HTML

---
### - DOM Events:
- `HTML DOM events` là một cái gì đó xảy ra với phần tử HTML của bạn
- `onclick`: xảy ra khi phần tử HTML được click
- `onmouseover`: xảy ra khi con trỏ chuột được di chuyển vào một phần tử
- `onmouseout`: xảy ra khi con trỏ chuột được di chuyển ra khỏi một phần tử
- `onkeydown`: xảy ra khi một phím được nhấn xuống
- `onload`: xảy ra khi một đối tượng đã được tải
- `onchange`: xảy ra khi giá trị của một phần tử đã được thay đổi, thường được dùng với các phần tử `<input>`, `<textarea>` và `<select>`
- `onmousedown / onmouseup`: xảy ra khi một nút chuột được nhấn xuống / được thả ra

- [Link các sự kiện](https://www.w3schools.com/jsref/dom_obj_event.asp)
---

### - DOM NODES

