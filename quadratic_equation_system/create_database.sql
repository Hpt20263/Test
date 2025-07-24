-- Script tạo database và bảng cho hệ thống giải phương trình bậc 2
-- MySQL 8.0.43

-- Tạo database
CREATE DATABASE IF NOT EXISTS quadratic_equations CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- Sử dụng database
USE quadratic_equations;

-- Tạo bảng equations
CREATE TABLE IF NOT EXISTS equations (
    id INT AUTO_INCREMENT PRIMARY KEY,
    a DECIMAL(10, 6) NOT NULL,
    b DECIMAL(10, 6) NOT NULL,
    c DECIMAL(10, 6) NOT NULL,
    result TEXT NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

-- Thêm một số dữ liệu mẫu
INSERT INTO equations (a, b, c, result) VALUES
(1, -5, 6, 'x1 = 3, x2 = 2'),
(1, 2, 5, 'Vô nghiệm'),
(2, -8, 6, 'x1 = 3, x2 = 1');

-- Hiển thị cấu trúc bảng
DESCRIBE equations;

-- Hiển thị dữ liệu mẫu
SELECT * FROM equations;