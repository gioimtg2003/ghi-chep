## 1 - Khái niệm về EC2 (Elastic Compute Cloud)
- `EC2` là một dịch vụ cung cấp các máy ảo (Virtual Machine) trên Cloud.
- `EC2` cho phép bạn thuê các máy ảo (Virtual Machine) và sử dụng chúng để chạy các ứng dụng của bạn.
- `EC2` cho phép bạn có được các máy ảo (Virtual Machine) với các cấu hình khác nhau.
- `EC2` cho phép bạn có thể tăng hoặc giảm số lượng, cấu hình máy ảo (Virtual Machine) một cách nhanh chóng.
## 2 - Thành phần của EC2
- `EC2` bao gồm các thành phần sau:
    - `AMI (Amazon Machine Image)`: Là một bản snapshot của một máy ảo (Virtual Machine) hoặc một máy vật lý (Physical Machine).
    - `Instance`: Là một máy ảo (Virtual Machine) được tạo ra từ một `AMI`.
    - `Instance Type`: Là một tập hợp các tài nguyên phần cứng (CPU, RAM, Network, ...) được cung cấp cho một `Instance`.
    - `Instance Store`: Là một ổ đĩa cứng được gắn trực tiếp vào máy vật lý (Physical Machine).
    - `EBS (Elastic Block Store)`: Là một ổ đĩa cứng được tạo ra từ một `Snapshot`.
    - `Snapshot`: Là một bản snapshot của một `EBS`.
    - `Security Group`: Là một tập hợp các luật mà bạn có thể áp dụng cho một `Instance`.
    - `Key Pair`: Là một cặp khóa công khai và khóa bí mật được sử dụng để xác thực khi kết nối vào một `Instance`.
    - `Tag`: Là một cặp key-value được sử dụng để phân loại các `Instance`.
