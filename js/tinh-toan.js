// Các hàm tính toán, không đụng tới giao diện

function tinhTong(danhSach, loai) {
  let tong = 0;
  danhSach.forEach(function (g) {
    if (g.loai === loai) tong += g.soTien;
  });
  return tong;
}

if (typeof module !== 'undefined') {
  module.exports = { tinhTong };
}
