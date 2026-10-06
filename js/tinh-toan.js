// Các hàm tính toán, không đụng tới giao diện

function tinhTong(danhSach, loai) {
  let tong = 0;
  danhSach.forEach(function (g) {
    if (g.loai === loai) tong += g.soTien;
  });
  return tong;
}

function dinhDangTien(soTien) {
  return new Intl.NumberFormat('vi-VN').format(soTien) + ' ₫';
}

if (typeof module !== 'undefined') {
  module.exports = { tinhTong, dinhDangTien };
}
