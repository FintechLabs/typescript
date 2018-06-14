function buildNameOptional(firstName: string, lastName?: string) {
  if (lastName) return firstName + " " + lastName;
  else return firstName;
}

let result1 = buildNameOptional("Bob"); // works correctly now
// let result2 = buildNameOptional("Bob", "Adams", "Sr."); // error, too many parameters
let result3 = buildNameOptional("Bob", "Adams"); // ah, just right
