`node package manager: ` hay còn gọi là NPM, là một kho lưu trữ các libs, packages của hệ sinh thái node js; cũng giống như các kho lưu trữ khác: NuGet của .Net, Composer của PHP, Maven của java, Pip của python, ...; NPM hỗ trợ tối đa cho việc install, uninstall, update, control version các packages trong dự án Node - javascript.
---
`npm init -y`: khởi tạo một project mới với file package.json mặc định
```sh
{
  "name": "nodejs",
  "version": "1.0.0",
  "description": "nodejs",
  "dependencies" : {
    "express": "^4.17.1",
    "react": "^16.13.1",
    "react-dom": "^16.13.1"
  },
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1" // chứa các câu lệnh để chạy project
  },
  "keywords": [
    "nodejs"
  ],
  "author": "Nguyen Cong Gioi",
  "license": "ISC"
}
```
`dependences`: chứa các packages cần thiết để chạy project
`MAJOR.MINOR.PATCH`: version của packages
- `^`: chỉ update các version MINOR và PATCH
- `~`: chỉ update các version PATCH
- `*`: update tất cả các version
- `npm install` hoặc `npm i`: cài đặt các packages cần thiết để chạy project
