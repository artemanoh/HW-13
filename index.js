// Task 1
const user = {
    name: 'Artem',
    age: 16,
    hobby: 'singing',
    premium: true
};

user.mood = 'very-happy';
user.hobby = 'dancing';
user.premium = false;

const { name, age, hobby, premium, mood } = user;

for (const key of Object.keys(user)) {
    console.log(`${key}: ${user[key]}`);
}
// Task 2
const countProps = ({ ...obj }) => Object.keys(obj).length;

const userPropsCount = countProps(user);
console.log(`Кількість властивостей: ${userPropsCount}`);
// Task 3
function findBestEmployee(employees) {
    let maxTasks = 0;
    let bestEmployee = '';

    for (const [employee, tasks] of Object.entries(employees)) {
        if (tasks > maxTasks) {
            maxTasks = tasks;
            bestEmployee = employee;
        }
    }

    return `Найкращий працівник це ${bestEmployee}, з ${maxTasks} виконанами завданнями`;
}

const employees = {
    Artem: 29,
    Lera: 35,
    Max: 13,
    Vasiliy: 42
};

console.log(findBestEmployee(employees));
// Task 4
function countTotalSalary(employees) {
    let totalSalary = 0;

    for (const salary of Object.values(employees)) {
        totalSalary += salary;
    }

    return totalSalary;
}

const salaries = {
    Artem: 1500,
    Lera: 2500,
    Max: 1800,
    Vasiliy: 2200
};

const { Artem, Lera, Max, Vasiliy } = salaries;

console.log(`Загальна сума зарплати: ${countTotalSalary(salaries)}`);
// Task 5
function getAllPropValues(arr, prop) {
    const propValues = [];

    for (const obj of arr) {
        if (prop in obj) {
            propValues.push(obj[prop]);
        }
    }

    return propValues;
}

const products = [
    { name: 'Radar', price: 30000, quantity: 7 },
    { name: 'Scanner', price: 10000, quantity: 5 },
    { name: 'Drone', price: 50000, quantity: 7 },
    { name: 'Phone', price: 41000, quantity: 9 },
];

for (const { name: productName, price, quantity } of products) {
    console.log(`Назва продукту: ${productName}, Ціна: ${price}, Кількість: ${quantity}`);
}

console.log(getAllPropValues(products, 'name'));
console.log(getAllPropValues(products, 'price'));
console.log(getAllPropValues(products, 'quantity'));
// Task 6
function calculateTotalPrice(allProducts, productName) {
    let totalPrice = 0;

    for (const { name, price, quantity } of allProducts) {
        if (name === productName) {
            totalPrice = price * quantity;
            break;
        }
    }

    return totalPrice;
}

console.log(calculateTotalPrice(products, 'Radar'));
console.log(calculateTotalPrice(products, 'Scanner'));
console.log(calculateTotalPrice(products, 'Drone')); 
console.log(calculateTotalPrice(products, 'Phone')); 
// Task 7
const account = {
    balance: 10000,
  
    deposit() {
      const depositAmount = Number(
        prompt("Введіть суму, на яку хочете поповнити баланс")
      );
      this.balance += depositAmount;
      return this.balance;
    },
  
    withdraw() {
      const withdrawAmount = Number(
        prompt("Введіть суму, яку хочете зняти з баланс")
      );
      this.balance -= withdrawAmount;
      return this.balance;
    },
    showBalance() {
      console.log(`У вас на балансі ${this.balance} грн`);
    },
  };
  
  console.log("--------------------------- Task 7 ---------------------------");
  let repeatAction;
  do {
    const isDeposit = confirm(
      "Якщо хочете поповнити рахунок - натиснить 'Ok', якщо хочете зняти з рахунку - натиснить 'Cansel'"
    );
    if (isDeposit === true) {
      account.deposit();
    } else {
      account.withdraw();
    }
    repeatAction = confirm("Чи хочети ви ще поповнити чи зняти з рахунку?");
  } while (repeatAction === true);
  
  account.showBalance();