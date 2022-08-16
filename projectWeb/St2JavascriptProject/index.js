function checkInput() {
  let txtValue = document.getElementById("dimension1").value;
  if (txtValue == "" || txtValue == null || txtValue == " ") {
    alert("Enter a value");
  } else {
    txtValue = Number(txtValue);
    let digitCounting = txtValue.toString().length;
    if (!isNaN(txtValue) && digitCounting == 5) {
      var digits = txtValue.toString().split("");
      var realDigits = digits.map(Number);
      let sum = 0;
      for (let i = 0; i < realDigits.length; i++) {
        sum += realDigits[i];
      }
      document.getElementById("createShape").style.width = sum + "px";
      document.getElementById("createShape").style.height = sum + "px";
      document.getElementById("createShape").style.backgroundColor = "#002e47";
      document.getElementById("createShape").style.borderRadius = sum / 5 + "px";
    } else {
      alert("Enter a 5-digit number");
    }
  }
}