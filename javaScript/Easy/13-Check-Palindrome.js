let palindrome = [
  "civic",
  "radar",
  "level",
  "rotor",
  "kayak",
  "madam",
  "refer",
];

function checkPalindrome(str) {
  if (palindrome.includes(str)) {
    console.log(true);
  } else {
    console.log(false);
  }
}

checkPalindrome("Hello");
