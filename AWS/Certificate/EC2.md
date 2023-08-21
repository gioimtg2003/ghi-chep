# 1. Intro EC2
---
- EC2 is a virtual server in the aws cloud
- it makes scaling of capacity up and down easy
- You can access the resources at demand
- you only pay what you need
## Launch EC2
- Start with selecting a template with basic configuration
- the config includes the operation system, application server, and applications
- next, decide the instance type and hardware configuration of your instance
- finally, specify the security settings to control the traffic in and out of your instance
## Connect EC2
- there are many ways to connect an instance
- you can connect to your instance using ssh
- Programs and applications have multiple connect methods to exchange data
---
# 2. EC2 Instance Types
---
- there are different instance types
---
## General purpose instances
- the general purpose instances balance compute, memory, and networking resources
- It is fits many purposes, much as:
    - application servers
    - gaming servers
    - backend servers for companies
    - small and medium databases
- The general purpose instances are best when there is a balance between the resources
## Compute optimized instances
- The Compute optimized instances are best there is a need for high compute
- This type is also good for application servers, gaming servers and web applications
- In case of using: Điện toán hiệu năng cao (HPC), xử lý hàng loạt, phân phối quảng cáo, mã hóa video, trò chơi, lập mô hình khoa học, phân tích phân tán và suy luận máy học dựa trên CPU.

## Memory optimized instances
- this type can deliver large dataset workloads fast
- memory is a temporary storage area

## Accelerated optimized instances
- this type is a hardware accelerator
- the accelerated computing instances are best for graphics applications and streaming

## Storage optimized instances
- this type is best when you large datasets on local storage
- example:
    - data warehousing
    - large file systems
    - online transaction systems 
# EC2 Pricing
---
- On-demand instances
- savings plans
- reserved instances
- spot instances
- dedicated hosts
# EC2 auto scaling
---
- design a scalable architecture allow you to only pay for the resources you need
- here you can set a minium capacity of instances that will always be running. phần còn lại sẽ hoạt động khi có nhu cầu
- có 3 loại: 
    - `minimum capacity` công suất tối thiểu
    - `desired number` số lượng mong muốn
    - `maximum capacity` công suất tối đa

# EC2 load balancing
---
- traffic can be directed with ELB