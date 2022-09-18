// JS_CT_3

// Section (A)
// 02. Write a simple JS program to demonstrate the scope chain using a block-diagram.
const studentName = "Tumpa";
const tumpaBirthYear = 2003;

first();

function first() {
  const tumpaAge = 2022 - tumpaBirthYear;

  if (tumpaAge >= 18) {
    console.log(`${studentName} is an adult. She is ${tumpaAge} years old.`);
    const passport = true;
  }

  function second() {
    const NID = true;
    console.log(NID);
    console.log(`${studentName} can apply for NID`);
  }
  second();
}
