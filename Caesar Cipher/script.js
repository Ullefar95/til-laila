function encrypt() {
  let str = document.getElementById("encrypt").value;
  let num = parseInt(document.getElementById("shift").value);
  let result = caesarCipher(str, -num);
  document.getElementById("decrypt").value = result;
}

function decrypt() {
  let str = document.getElementById("decrypt").value;
  let num = parseInt(document.getElementById("shift").value);
  let result = caesarCipher(str, num);
  document.getElementById("encrypt").value = result;
}

function caesarCipher(str, num) {
  let result = "";
  num = num % 26;
  for (let i = 0; i < str.length; i++) {
    let charCode = str.charCodeAt(i);

    if (charCode >= 65 && charCode <= 90) {
      let newCharCode = ((charCode - 65 + num + 26) % 26) + 65;
      result += String.fromCharCode(newCharCode);
    } else if (charCode >= 97 && charCode <= 122) {
      let newCharCode = ((charCode - 97 + num + 26) % 26) + 97;
      result += String.fromCharCode(newCharCode);
    } else {
      result += str[i];
    }
  }
  return result;
}
