interface Address {
  street: string;
  city: string;
  postalCode: string;
}

interface Customer {
  id: number;
  name: string;
  address: Address;
}

const jsonString: string = `{"id": 1, "name": "Ola Nordmann", "email": "ola@example.com"}`;
const user1: User = JSON.parse(jsonString);
const user2 = JSON.parse(jsonString) as Customer;

console.log(user1);

function isCustomer(obj: any): obj is Customer {
  return "id" in obj && "name" in obj;
}

if (isCustomer(user2)) {
  console.log(user2.name); // Safe to access 'name'
}
