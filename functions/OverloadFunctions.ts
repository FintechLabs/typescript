//public void GetFirstName(string fullName): string;
//public void GetFirstName(string fullName, int pos): string;
//public void GetFirstName(Customer fullName): string;

//Correct Way
// function GetFirstName(stringOrCustomer: string | Customer): string {
//   if (stringOrCustomer && typeof stringOrCustomer === "string") {
//     return stringOrCustomer.substr(0, stringOrCustomer.indexOf(" "));
//   } else {
//     return stringOrCustomer.Name.substr(0, stringOrCustomer.Name.indexOf(" "));
//   }
// }
