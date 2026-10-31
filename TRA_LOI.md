
❓ **Câu 1.** Lúc mới nhận repo, nhánh `main` có bao nhiêu commit? Kể tên 4 nhánh còn lại.

+ Nhánh main có 15 commit
+ Các nhánh còn lại:
  + hotfix/sua-loi-cong
  + feature/tieu-de
  + feature/giao-dien-moi
  + feature/xuat-csv

❓ **Câu 2.** Bạn Lan có bao nhiêu commit trong toàn bộ repo (gợi ý: thêm `--all`)?

* 62b5cde (origin/hotfix/sua-loi-cong) Thử nghiệm font Comic Sans (chưa chốt)
* b5056bb Sửa lỗi tổng bị cộng chuỗi (giá trị khởi tạo reduce phải là 0)
* d4abd9b (origin/feature/tieu-de) Đổi tiêu đề trang thành MoneyNote – Quản lýchi tiêu
* f79adb9 Thêm chân trang
* 9be76b1 Sửa chữ trên các nút lọc
* 9960310 (tag: v0.1) Định dạng số tiền kiểu Việt Nam
* c1faea8 Thêm style cơ bản

7 loại commit

❓ **Câu 3.** Dòng có chữ `reduce` trong `js/tinh-toan.js` do ai viết, ở commit nào?

df17ab7d (Lê Hùng     2026-10-08 20:45:00 +0700  6)     .reduce(function (tong, g) { return tong + g.soTien;}, '');

Do Lê Hùng Viết, ở commit "Thêm hàm tính tổng thu, tổng chi"
