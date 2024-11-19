String.prototype.cleanup = function () {
  return this.toLowerCase().replace(/[^0-9]+/g, "");
};

function generatePassword(leng) {
  var length = leng,
    charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789",
    retVal = "";
  for (var i = 0, n = charset.length; i < length; ++i) {
    retVal += charset.charAt(Math.floor(Math.random() * n));
  }
  return retVal;
}

let length = document.getElementById("lenght");
let generate = document.getElementById("gen");
let copy = document.getElementById("copy");
let pass = document.getElementById("pass");

length.value = "Test";
generate.onclick = function () {
  let endlen = Number(length.value)
  if (endlen <= 0) {
    endlen = 10
  } else if(endlen >= 1000) {
    endlen = 999
  }
  let password = generatePassword(endlen);
  pass.innerHTML = password;
};

copy.onclick = function () {
  navigator.clipboard.writeText(pass.innerHTML).then(
    function () {
      console.log("Async: Copying to clipboard was successful!");
    },
    function (err) {
      console.error("Async: Could not copy text: ", err);
    }
  );
};
