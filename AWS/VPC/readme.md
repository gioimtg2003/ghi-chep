## 1 - Khái niệm về VPC (Virtual Private Cloud)
- `VPC` là một môi trường ảo được tạo ra trên Cloud.
- `VPC` cho phép bạn có thể tạo ra các mạng ảo (Virtual Network) và các máy ảo (Virtual Machine) trong mạng ảo đó.
- `VPC` cho phép bạn có thể tạo ra các mạng ảo (Virtual Network) với các cấu hình khác nhau.
- `VPC` cho phép bạn có thể kết nối các mạng ảo (Virtual Network) với nhau.
- `VPC` cho phép bạn có thể kết nối các mạng ảo (Virtual Network) với mạng vật lý (Physical Network).
## 2 - Thành phần của VPC
- `VPC` bao gồm các thành phần sau:
    - `Subnet`: Là một mạng ảo (Virtual Network) được tạo ra từ một `VPC`.
    - `Internet Gateway`: Là một cổng kết nối giữa mạng ảo (Virtual Network) và mạng vật lý (Physical Network).
    - `Route Table`: Là một bảng định tuyến được sử dụng để xác định các đường đi của các gói tin trong mạng ảo (Virtual Network).
    - `Network Access Control List (ACL)`: Là một bộ lọc được sử dụng để kiểm soát các gói tin trong mạng ảo (Virtual Network).
    - `Security Group`: Là một tập hợp các luật mà bạn có thể áp dụng cho một `Instance`.
    - `Elastic IP`: Là một địa chỉ IP tĩnh được cung cấp cho một `Instance`.
    - `NAT Gateway`: Là một cổng kết nối giữa mạng ảo (Virtual Network) và mạng vật lý (Physical Network).
    - `VPC Endpoint`: Là một cổng kết nối giữa mạng ảo (Virtual Network) và một dịch vụ của AWS.
    - `VPC Peering`: Là một kết nối giữa hai mạng ảo (Virtual Network).
    - `VPC Flow Logs`: Là một dịch vụ được sử dụng để ghi lại các gói tin trong mạng ảo (Virtual Network).
    - `VPC Endpoints for DynamoDB`: Là một dịch vụ được sử dụng để kết nối giữa mạng ảo (Virtual Network) và dịch vụ DynamoDB.
    - `VPC Endpoints for S3`: Là một dịch vụ được sử dụng để kết nối giữa mạng ảo (Virtual Network) và dịch vụ S3.
## 3 - Các loại VPC
- `VPC` có hai loại:
    - `Default VPC`: Là một `VPC` được tạo ra sẵn khi bạn tạo một tài khoản AWS.
    - `Custom VPC`: Là một `VPC` được tạo ra bởi người dùng.
## 4 - Các loại Subnet
- `Subnet` có hai loại:
    - `Public Subnet`: Là một `Subnet` được kết nối với `Internet Gateway`.
    - `Private Subnet`: Là một `Subnet` không được kết nối với `Internet Gateway`.
## 5 - Các loại Route Table
- `Route Table` có hai loại:
    - `Public Route Table`: Là một `Route Table` được kết nối với `Internet Gateway`.
    - `Private Route Table`: Là một `Route Table` không được kết nối với `Internet Gateway`.
## 6 - Các loại Network Access Control List (ACL)
- `Network Access Control List (ACL)` có hai loại:
    - `Public Network Access Control List (ACL)`: Là một `Network Access Control List (ACL)` được kết nối với `Internet Gateway`.
    - `Private Network Access Control List (ACL)`: Là một `Network Access Control List (ACL)` không được kết nối với `Internet Gateway`.
## 7 - Các loại Security Group
- `Security Group` có hai loại:
    - `Public Security Group`: Là một `Security Group` được kết nối với `Internet Gateway`.
    - `Private Security Group`: Là một `Security Group` không được kết nối với `Internet Gateway`.
## 8 - Các loại Elastic IP
- `Elastic IP` có hai loại:
    - `Public Elastic IP`: Là một `Elastic IP` được kết nối với `Internet Gateway`.
    - `Private Elastic IP`: Là một `Elastic IP` không được kết nối với `Internet Gateway`.
## 9 - Các loại NAT Gateway
- `NAT Gateway` có hai loại:
    - `Public NAT Gateway`: Là một `NAT Gateway` được kết nối với `Internet Gateway`.
    - `Private NAT Gateway`: Là một `NAT Gateway` không được kết nối với `Internet Gateway`.
## 10 - Các loại VPC Endpoint
- `VPC Endpoint` có hai loại:
    - `Public VPC Endpoint`: Là một `VPC Endpoint` được kết nối với `Internet Gateway`.
    - `Private VPC Endpoint`: Là một `VPC Endpoint` không được kết nối với `Internet Gateway`.
...
---