function buildName(firstName: string, lastName = "Smith") {
  return firstName + " " + lastName;
}

let resultDef1 = buildName("Bob"); // works correctly now, returns "Bob Smith"
let resultDef2 = buildName("Bob", undefined); // still works, also returns "Bob Smith"
// let resultDef3 = buildName("Bob", "Adams", "Sr."); // error, too many parameters
let resultDef = buildName("Bob", "Adams"); // ah, just right
