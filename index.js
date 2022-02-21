// function to validate usa phone number
function telephoneCheck(str) {
  // regex to match phone number
  var regex = /^(1\s?)?(\(\d{3}\)|\d{3})[\s\-]?\d{3}[\s\-]?\d{4}$/;
  // return true if str matches regex
  return regex.test(str);
}
