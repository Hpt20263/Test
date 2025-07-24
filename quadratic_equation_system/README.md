# Hệ thống Giải Phương trình Bậc 2

Hệ thống web cho phép nhập các hệ số a, b, c để giải phương trình bậc 2 (ax² + bx + c = 0), lưu kết quả vào MySQL và quản lý các phương trình đã lưu.

## Công nghệ sử dụng

- **Frontend**: React 18 + TypeScript
- **Backend**: Python 3.12.1 + Django 4.2
- **Database**: MySQL 8.0.43
- **Node.js**: v22.17.1

## Tính năng

- ✅ Nhập hệ số a, b, c và tính toán phương trình bậc 2
- ✅ Lưu kết quả vào database MySQL
- ✅ Xem danh sách các phương trình đã lưu
- ✅ Sửa phương trình (inline editing)
- ✅ Xóa phương trình (với xác nhận)
- ✅ Giao diện responsive theo thiết kế yêu cầu

## Cài đặt và Chạy

### 1. Thiết lập Database

```bash
# Chạy script tạo database
./setup_database.sh

# Hoặc chạy trực tiếp SQL script
mysql -u root -p < create_database.sql
```

### 2. Backend (Django)

```bash
cd backend

# Tạo virtual environment
python3.12 -m venv venv
source venv/bin/activate

# Cài đặt dependencies
pip install -r requirements.txt

# Cấu hình .env
cp .env.example .env
# Chỉnh sửa thông tin database trong .env

# Chạy migrations
python manage.py migrate

# Chạy server
python manage.py runserver 0.0.0.0:12000
```

### 3. Frontend (React)

```bash
cd frontend

# Cài đặt dependencies
npm install

# Chạy development server
npm start
```

## Cấu trúc Project

```
quadratic_equation_system/
├── backend/                 # Django backend
│   ├── quadratic_system/   # Django project
│   ├── equations/          # Django app
│   ├── requirements.txt    # Python dependencies
│   ├── .env.example       # Environment template
│   └── manage.py
├── frontend/               # React frontend
│   ├── src/
│   │   ├── components/    # React components
│   │   ├── services/      # API services
│   │   ├── types/         # TypeScript types
│   │   └── App.tsx
│   ├── package.json       # Node dependencies
│   └── public/
├── create_database.sql     # SQL script tạo database
├── setup_database.sh      # Shell script thiết lập
└── README.md
```

## API Endpoints

- `GET /api/equations/` - Lấy danh sách phương trình
- `POST /api/equations/` - Tạo phương trình mới
- `PUT /api/equations/{id}/` - Cập nhật phương trình
- `DELETE /api/equations/{id}/` - Xóa phương trình

## Giao diện

Giao diện được thiết kế theo yêu cầu với:
- Form nhập a, b, c
- Nút "Tính toán" (tính mà không lưu)
- Nút "Thêm" (tính và lưu vào database)
- Bảng hiển thị kết quả với các nút Sửa/Xóa
- Thiết kế responsive với gradient background

## Phương trình Bậc 2

Hệ thống giải phương trình ax² + bx + c = 0 với các trường hợp:
- Δ > 0: Hai nghiệm phân biệt
- Δ = 0: Một nghiệm kép
- Δ < 0: Vô nghiệm (trong số thực)

## Môi trường Development

- Backend: http://localhost:12000
- Frontend: http://localhost:3000
- Database: MySQL trên port 3306

## Lưu ý

- Đảm bảo MySQL 8.0.43 đã được cài đặt và chạy
- Python 3.12.1 và Node.js v22.17.1 cần được cài đặt
- Cấu hình CORS đã được thiết lập cho development
- File .env cần được cấu hình đúng thông tin database