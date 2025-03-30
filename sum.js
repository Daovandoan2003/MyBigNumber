function sum(num1, num2) {
  let soDu = 0;
  let ketQua = "";
  let doDai1 = num1.length;
  let doDai2 = num2.length;
  let chuoiLonNhat = Math.max(doDai1, doDai2);

  for (let i = 0; i < chuoiLonNhat; i++) {
    let so1 = i < doDai1 ? parseInt(num1[doDai1 - 1 - i]) : 0;
    let so2 = i < doDai2 ? parseInt(num2[doDai2 - 1 - i]) : 0;

    let total = so1 + so2 + soDu;
    soDu = Math.floor(total / 10);
    ketQua = (total % 10) + ketQua;
  }

  if (soDu) {
    ketQua = soDu + ketQua;
  }

  return ketQua;
}

function congSo() {
  let num1 = document.getElementById("num1").value.trim();
  let num2 = document.getElementById("num2").value.trim();

  if (!num1 || !num2 || isNaN(num1) || isNaN(num2)) {
    alert("Vui lòng nhập hai số hợp lệ!");
    return;
  }

  let sumResult = sum(num1, num2);

  let resultElement = document.getElementById("ketQua");
  if (resultElement) {
    resultElement.innerText = "Kết quả: " + sumResult;
  }
}
