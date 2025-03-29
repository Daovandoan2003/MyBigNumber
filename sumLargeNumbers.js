function sumLargeNumbers(stn1, stn2) {
  // Đảm bảo stn1 là chuỗi dài hơn (nếu không thì hoán đổi)
  stn1 = String(stn1); // Ép kiểu thành chuỗi
  stn2 = String(stn2);
  console.log(typeof stn1, typeof stn2);
  if (stn1.length < stn2.length) {
    [stn1, stn2] = [stn2, stn1];
  }

  // Đảo ngược chuỗi để cộng từ phải sang trái
  let num1 = stn1.split("").reverse();
  let num2 = stn2.split("").reverse();

  let result = [];
  let carry = 0; // Biến nhớ

  // Duyệt từng chữ số từ phải sang trái
  for (let i = 0; i < num1.length; i++) {
    let digit1 = parseInt(num1[i]);
    let digit2 = i < num2.length ? parseInt(num2[i]) : 0; // Nếu num2 ngắn hơn thì lấy 0

    // Cộng từng cặp chữ số + phần nhớ
    let total = digit1 + digit2 + carry;
    result.push(total % 10); // Ghi phần đơn vị
    carry = Math.floor(total / 10); // Lưu phần nhớ

    // Logging từng bước
    console.log(
      `Bước ${i + 1}: ${digit1} + ${digit2} + ${carry} (nhớ) = ${total} → Ghi ${
        total % 10
      }, nhớ ${carry}`
    );
  }

  // Nếu còn phần nhớ thì thêm vào cuối
  if (carry) {
    result.push(carry);
    console.log(`Thêm nhớ cuối: ${carry}`);
  }

  // Đảo ngược lại để có kết quả đúng
  return result.reverse().join("");
}
function calculateSum() {
  let num1 = document.getElementById("num1").value;
  let num2 = document.getElementById("num2").value;

  if (!num1 || !num2 || isNaN(num1) || isNaN(num2)) {
    alert("Vui lòng nhập hai số hợp lệ!");
    return;
  }

  let sum = sumLargeNumbers(num1, num2);
  document.getElementById("result").innerText = sum;
}

// Test thử
// let stn1 = Number(prompt("số đầu tiên"));
// let stn2 = Number(prompt("số thứ hai"));

// console.log("Kết quả:", sumLargeNumbers(stn1, stn2));
module.exports = sumLargeNumbers;
