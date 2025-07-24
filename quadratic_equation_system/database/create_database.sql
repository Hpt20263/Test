-- Script tạo database và bảng cho hệ thống giải phương trình bậc 2
-- MySQL 8.0.43

-- Tạo database
CREATE DATABASE IF NOT EXISTS quadratic_equations_db CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- Sử dụng database
USE quadratic_equations_db;

-- Tạo bảng equations để lưu trữ phương trình và kết quả
CREATE TABLE IF NOT EXISTS equations (
    id INT AUTO_INCREMENT PRIMARY KEY,
    a DECIMAL(10, 6) NOT NULL,
    b DECIMAL(10, 6) NOT NULL,
    c DECIMAL(10, 6) NOT NULL,
    result TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

-- Tạo index cho tối ưu hóa truy vấn
CREATE INDEX idx_created_at ON equations(created_at);

-- Hiển thị cấu trúc bảng
DESCRIBE equations;

-- Hiển thị thông tin database
SELECT 'Database created successfully!' as message;