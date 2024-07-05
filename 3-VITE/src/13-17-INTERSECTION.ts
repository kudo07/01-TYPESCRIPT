//
type AdminUser = User & Admin;

const adminUser: AdminUser = {
  name: 'Grace',
  email: 'grace@example.com',
  admin: true,
}; // Valid because it satisfies both User and Admin

const invalidAdminUser: AdminUser = {
  name: 'Hank',
  email: 'hank@example.com',
  // Missing 'admin' property
}; // Error: Property 'admin' is missing
// ----------------------------------------------------------------------------------------------------------
// ----------------------------------------------------------------------------------------------------------
// ----------------------------------------------------------------------------------------------------------
interface Drivable {
  drive(): void;
}

interface Flyable {
  fly(): void;
}

type FlyingCar = Drivable & Flyable;

const myFlyingCar: FlyingCar = {
  drive() {
    console.log('Driving...');
  },
  //   fly() {
  //     console.log('Flying...');
  //   },
  //   fly is missing as all the properties must be here
};

myFlyingCar.drive(); // "Driving..."
myFlyingCar.fly(); // "Flying..."
https://chatgpt.com/c/2ba2313b-f5b1-44c0-9f14-35f846be6c65