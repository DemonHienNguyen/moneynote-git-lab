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

❓ **Câu 4.** `git diff` và `git diff --staged` khác nhau thế nào? Vì sao file `.env` không bao giờ nên đưa lên Git?

`git diff` dùng để xem các thay đổi chưa được thêm vào vùng chờ (Staging Area), trong khi `git diff --staged` dùng để xem các thay đổi đã được thêm vào vùng chờ và sẵn sàng để commit.

File `.env` chứa các thông tin cấu hình nhạy cảm của dự án, việc đưa file này lên Git sẽ tạo ra những rủi ro nghiêm trọng về bảo mật và quản lý hệ thống.

❓ **Câu 5.** Vì sao 3.1 là fast-forward còn 3.2 lại tạo merge commit?

* **3.1 (Fast-forward):** Nhánh `main` chưa có commit mới nào kể từ khi tách nhánh. Git chỉ cần "tua nhanh" con trỏ `main` lên vị trí của `feature/gioi-thieu` mà không cần tạo commit mới.
* **3.2 (Merge commit):** Nhánh `main` lúc này **đã có commit mới** (từ bước 3.1). Lịch sử bị rẽ nhánh nên Git phải dùng thuật toán gộp 3 bên và tạo ra một **merge commit** để nối lại.

❓ **Câu 6.** Vì sao gộp `feature/giao-dien-moi` không xung đột, còn `feature/tieu-de` thì có?

+ Gộp feature/giao-dien-moi (Không xung đột): Bạn Hùng sửa ở file hoặc vị trí khác với bạn (bạn thêm file .md, bạn Hùng sửa index.html). Git tự động gộp được.
+ Gộp feature/tieu-de (Xung đột): Cả hai nhánh cùng sửa chung một dòng

❓ **Câu 7.** Vì sao dùng `git revert` chứ không dùng `git reset` để gỡ commit đã có trên nhánh chung?

* Vì `git revert` tạo ra một commit mới để đảo ngược thay đổi, giúp giữ nguyên lịch sử và không làm ảnh hưởng đến code của người khác trên nhánh chung
* `Nếu dùng git reset, lịch sử commit sẽ bị xóa bỏ hoàn toàn.`

❓ **Câu 8.** `reset --soft`, `reset --mixed` (mặc định) và `reset --hard` khác nhau thế nào?

* **`--soft`:** Chỉ hủy commit, giữ nguyên code đã `git add`. Dùng khi muốn **gộp commit** hoặc  **viết lại thông điệp** **.**
* **`--mixed`:** Hủy commit và hủy luôn `git add`. Code quay về trạng thái chưa làm gì, dùng khi muốn **chia nhỏ commit** hoặc  **add lại từ đầu** **.**
* **`--hard`:** Xóa sạch sành sanh mọi thứ. Dùng khi code hiện tại đã nát và bạn muốn **đập đi làm lại** từ một commit cũ trong quá khứ.

---




















































































 trong file index.html. Git không biết chọn ai nên bắt con người tự xử lý.
