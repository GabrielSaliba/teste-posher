function executarT1() {
  let string1 = document.getElementById("input1_t1").value;
  let string2 = document.getElementById("input2_t1").value;
  if (string1.trim() == "" || string2.trim() == "") {
    alert("Existe um ou mais campos vazios!");
    return;
  }

  let array1 = string1.split(" ").map(Number);
  let array2 = string2.split(" ").map(Number);

  if (array1.includes(NaN) || array2.includes(NaN)) {
    alert("Digite apenas valores númericos.");
    return;
  }

  if (!array1.every(Number.isInteger) || !array2.every(Number.isInteger)) {
    alert("Digite apenas números inteiros.");
    return;
  }

  alert(isSubsequent(array1, array2));
}

function executarT2() {
  let array = document.getElementById("input1_t2").value.split(" ").map(String);

  array.forEach((char) => {
    if (char.length > 1) {
      alert("Digite apenas caracteres únicos");
      return;
    }
  });

  result = removeDuplicates(array);
  if (result != "") {
    alert(`Resultado: [${result}]`);
  }
}

function executarT3() {
  let array = document.getElementById("input1_t3").value.split(" ").map(String);

  let result = [];

  array.forEach((item) => {
    result.push(checkPalindromes(item));
  });

  alert(`Resultado: [${result}]`);
}

function checkPalindromes(value) {
  for (var i = 0; i < value.length / 2; i++)
    if (value[i] != value[value.length - i - 1]) return false;
  return true;
}

function isSubsequent(values, sequence) {
  if (sequence.length != values.length) return false;

  for (let i = 0; i <= values.length; i++) {
    if (values[i] !== sequence[i]) return false;
  }

  return true;
}
function removeDuplicates(values) {
  for (let i = 0; i <= values.length; i++) {
    let valorSucessor = values[i + 1];
    if (valorSucessor === values[i]) {
      delete values[i];
    }
  }

  return values.filter((i) => i != null);
}
