`node package manager: ` hay còn gọi là NPM, là một kho lưu trữ các libs, packages của hệ sinh thái node js; cũng giống như các kho lưu trữ khác: NuGet của .Net, Composer của PHP, Maven của java, Pip của python, ...; NPM hỗ trợ tối đa cho việc install, uninstall, update, control version các packages trong dự án Node - javascript.
---
`npm init -y`: khởi tạo một project mới với file package.json mặc định

`dependences`: chứa các packages cần thiết để chạy project
`MAJOR.MINOR.PATCH`: version của packages
`^`: chỉ update các version MINOR và PATCH
`~`: chỉ update các version PATCH
`*`: update tất cả các version
`npm install` hoặc `npm i`: cài đặt các packages cần thiết để chạy project
