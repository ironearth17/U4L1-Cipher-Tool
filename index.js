let mode = "encode";

function validate(shift) {
  let num = Number(shift);

  if (num === 0 || num > 0 || num < 0) {
    return num;
  } else {
    alert("Please type in a correct number");
    return 0;
  }
}

function encode(text, shifter) {
  text = text.toLowerCase();

  let alphabets = "abcdefghijklmnopqrstuvwxyz";
  let result = "";
  let key = validate(shifter);

  for (let i = 0; i < text.length; i = i + 1) {
    let letter = text[i];
    let index = alphabets.indexOf(letter);

    if (index !== -1) {
      let newIndex = (index + key) % 26;
      result = result + alphabets[newIndex];
    } 
    else {
      result = result + letter;
    }
  }

  return result;
}

function decode(text, shifter) {
  text = text.toLowerCase();

  let alphabets = "abcdefghijklmnopqrstuvwxyz";
  let result = "";
  let key = validate(shifter);

  for (let i = 0; i < text.length; i = i + 1) {
    let letter = text[i];
    let index = alphabets.indexOf(letter);

    if (index !== -1) {
      let newIndex = (index - key + 26) % 26;
      result = result + alphabets[newIndex];
    } 
    else {
      result = result + letter;
    }
  }

  return result;
}

function toggleMode() {
  if (mode === "encode") {
    mode = "decode";
    document.getElementById("modeBtn").innerHTML = "Mode: Decode";
  } 
  else {
    mode = "encode";
    document.getElementById("modeBtn").innerHTML = "Mode: Encode";
  }

  updateText();
}

function updateText() {
  let text = document.getElementById("originalMsg").value;
  let shift = document.getElementById("keyShift").value;

  if (mode === "encode") {
    document.getElementById("encodedMsg").value = encode(text, shift);
  } 
  else if (mode === "decode") {
    document.getElementById("encodedMsg").value = decode(text, shift);
  }
}