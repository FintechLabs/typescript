function buildNameRest(firstName: string, ...restOfName: string[]) {
  return firstName + " " + restOfName.join(" ");
}

let employeeName = buildNameRest("Joseph", "Samuel", "Lucas", "MacKinzie");
