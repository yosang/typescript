"use strict";
const jsonString = `{"id": 1, "name": "Ola Nordmann", "email": "ola@example.com"}`;
const user1 = JSON.parse(jsonString);
const user2 = JSON.parse(jsonString);
console.log(user1);
function isCustomer(obj) {
    return "id" in obj && "name" in obj;
}
if (isCustomer(user2)) {
    console.log(user2.name); // Safe to access 'name'
}
//# sourceMappingURL=data.js.map