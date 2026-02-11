const users = [
  {
    id: 1,
    name: "Mahesh",
    orders: [
      { product: "Laptop", price: 50000 },
      { product: "Mouse", price: 1000 }
    ]
  },
  {
    id: 2,
    name: "Rohit",
    orders: [
      { product: "Keyboard", price: 2000 }
    ]
  },
  {
    id: 3,
    name: "Anjali",
    orders: []
  }
];




const totalSpent = users.map(user => {
  const total = user.orders.reduce((sum, order) => {
    return sum + order.price;
  }, 0);

  return {
    name: user.name,
    totalSpent: total
  };
});

console.log("Total spent by users:", totalSpent);


const highestSpender = totalSpent.reduce((max, user) => {
  return user.totalSpent > max.totalSpent ? user : max;
});

console.log("Highest spender:", highestSpender);


const noOrders = users.filter(user => user.orders.length === 0);

console.log("Users with no orders:", noOrders);
