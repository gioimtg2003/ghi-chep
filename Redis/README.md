## - Đặc trưng:
- Cấu trúc dữ liệu dạng key-value
- `Data Model`: 
    - `String`: có thể là String, float, integer
    - `List`: có thể là List, Set, Sorted Set
    - `Hash`: có thể là Hash, Object
    - `Set`: có thể là Set, List, Sorted Set

- `In-memory`: Redis lưu trữ dữ liệu trong bộ nhớ RAM, nên tốc độ truy xuất rất nhanh
---
- Redis lưu trữ data với dạng key-value trên RAM, nên việc server bị tắt sẽ dẫn đến mất mát dữ liệu. Redis cung cấp 2 phương thức cho việc sao lưu dữ liệu ra ổ đĩa cứng là :RDB và AOF
-----------------
- `RDB`: Redis Database File, là một file lưu trữ dữ liệu Redis, được lưu trữ theo chu kỳ thời gian. Khi Redis bị tắt, dữ liệu sẽ được lưu trữ trong file RDB. Khi khởi động lại Redis, dữ liệu sẽ được load từ file RDB vào bộ nhớ RAM.
    - `Ưu điểm`: là 1 file cố định, nên có thể chuyển đến các data centers khác nhau, ví dụ S3 của AWS. Đối với dữ liệu lớn dùng RDB sẽ nhanh hơn AOF
    - `Nhược điểm`: Thông thường người dùng setup 5min/lần RDB snapshot. Trong trường hợp server bị sự cố thì bị mất dữ liệu ở những phút cuối 

- `AOF`: Append Only File, là một file lưu trữ các lệnh Redis, được lưu trữ theo chu kỳ thời gian. Khi Redis bị tắt, dữ liệu sẽ được lưu trữ trong file AOF. Khi khởi động lại Redis, dữ liệu sẽ được load từ file AOF vào bộ nhớ RAM.