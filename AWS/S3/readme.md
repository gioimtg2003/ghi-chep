## 1 - Khái niệm về Simple storage service (S3)
- `Simple storage service (S3)` là một dịch vụ lưu trữ đối tượng được cung cấp bởi `Amazon Web Services (AWS)`.
- `Simple storage service (S3)` được sử dụng để lưu trữ các đối tượng như: file, ảnh, video, văn bản, ...
- `Simple storage service (S3)` có thể được sử dụng để lưu trữ các đối tượng có kích thước từ 0 byte đến 5 terabyte.
- `Simple storage service (S3)` có thể được sử dụng để lưu trữ các đối tượng không giới hạn.
- `Simple storage service (S3)` có thể được sử dụng để lưu trữ các đối tượng được lưu trữ trong các `bucket` được tạo ra bởi người dùng.
## 2 - Khả năng của S3
- `scalability`: tính khả năng mở rộng.
- `availability`: tính sẵn sàng.
- `durability`: tính bền vững.
- `performance`: Hiệu năng cao.
- `security`: tính bảo mật.
- `S3`: có thể chứa dữ liệu của website, mobile app, backup and restore, archive, enterprise applications, IoT devices, ...
## 3 - Các thành phần của S3
- `Bucket`: là một thùng chứa lưu trữ các đối tượng.
- `Object`: là một đối tượng được lưu trữ trong `bucket`.
## 4 - Các tính năng của S3
- `Versioning`: cho phép lưu trữ nhiều phiên bản của một đối tượng.
- `Encryption`: cho phép mã hóa dữ liệu trong `bucket`.
- `Access control list (ACL)`: cho phép kiểm soát quyền truy cập vào `bucket` và `object`.
- `Bucket policies`: cho phép kiểm soát quyền truy cập vào `bucket` và `object`.
- `Object lock`: cho phép khóa `object` trong `bucket`.
- `Lifecycle`: cho phép tự động xóa `object` trong `bucket`.
- `Cross-region replication`: cho phép sao chép `object` trong `bucket` sang các `bucket` khác.
- `Transfer acceleration`: cho phép tăng tốc độ truy cập vào `bucket`.
- `Requester pays`: cho phép người dùng trả phí cho việc truy cập vào `bucket`.
- `Event notifications`: cho phép gửi thông báo khi có sự kiện xảy ra trong `bucket`.
- `Storage class`: cho phép lưu trữ `object` trong `bucket` theo các lớp khác nhau.
## 5 - Các lớp lưu trữ của S3
- `S3 Standard`: lớp lưu trữ tiêu chuẩn, được sử dụng để lưu trữ các `object` có thể truy cập thường xuyên.
- `S3 Intelligent-Tiering`: lớp lưu trữ thông minh, được sử dụng để lưu trữ các `object` có thể truy cập thường xuyên và không thường xuyên.
- `S3 Standard-Infrequent Access (S3 Standard-IA)`: lớp lưu trữ thường xuyên, được sử dụng để lưu trữ các `object` có thể truy cập không thường xuyên.
- `S3 One Zone-Infrequent Access (S3 One Zone-IA)`: lớp lưu trữ thường xuyên, được sử dụng để lưu trữ các `object` có thể truy cập không thường xuyên và chỉ lưu trữ trong một vùng.
- `S3 Glacier`: lớp lưu trữ lạnh, được sử dụng để lưu trữ các `object` có thể truy cập không thường xuyên và chỉ lưu trữ trong một vùng.
- `S3 Glacier Deep Archive`: lớp lưu trữ lạnh, được sử dụng để lưu trữ các `object` có thể truy cập không thường xuyên và chỉ lưu trữ trong một vùng.
## 6 - Các loại mã hóa của S3
- `Server-side encryption with Amazon S3-managed keys (SSE-S3)`: mã hóa dữ liệu bằng khóa được quản lý bởi S3.
- `Server-side encryption with AWS KMS-managed keys (SSE-KMS)`: mã hóa dữ liệu bằng khóa được quản lý bởi KMS.
- `Server-side encryption with customer-provided keys (SSE-C)`: mã hóa dữ liệu bằng khóa được cung cấp bởi người dùng.
- `Client-side encryption`: mã hóa dữ liệu bằng khóa được cung cấp bởi người dùng.
---
![S3 example]( qS3_bucket.png)