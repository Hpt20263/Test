#!/bin/bash

# Script thiết lập database cho hệ thống giải phương trình bậc 2
# Yêu cầu: MySQL 8.0.43

echo "=== Thiết lập Database cho Hệ thống Giải Phương trình Bậc 2 ==="
echo

# Kiểm tra MySQL có đang chạy không
if ! command -v mysql &> /dev/null; then
    echo "❌ MySQL không được tìm thấy. Vui lòng cài đặt MySQL 8.0.43"
    exit 1
fi

# Nhập thông tin đăng nhập MySQL
read -p "Nhập MySQL username (mặc định: root): " MYSQL_USER
MYSQL_USER=${MYSQL_USER:-root}

read -s -p "Nhập MySQL password: " MYSQL_PASSWORD
echo

# Chạy script SQL
echo "🔄 Đang tạo database và bảng..."
mysql -u "$MYSQL_USER" -p"$MYSQL_PASSWORD" < create_database.sql

if [ $? -eq 0 ]; then
    echo "✅ Database và bảng đã được tạo thành công!"
    echo
    echo "📋 Thông tin database:"
    echo "   - Database: quadratic_equations"
    echo "   - Bảng: equations"
    echo "   - Cổng: 3306 (mặc định)"
    echo
    echo "🔧 Cấu hình .env file:"
    echo "   DB_NAME=quadratic_equations"
    echo "   DB_USER=$MYSQL_USER"
    echo "   DB_PASSWORD=your_password"
    echo "   DB_HOST=localhost"
    echo "   DB_PORT=3306"
else
    echo "❌ Có lỗi xảy ra khi tạo database!"
    exit 1
fi