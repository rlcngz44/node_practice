//Object propert shorthand

const name = "Erol";
const userAge = 39;

const user = {
  name,
  age: userAge,
  location: "Philadelphia",
};
console.log(user);

//Object destructuring

const product = {
  label: "Red Notebook",
  price: 3,
  stock: 201,
  salePrice: undefined,
};

//const label = product.label
//const stock = product.stock

//OR

// const { label: productLabel, stock, rating = 5 } = product;
// console.log(productLabel);
// console.log(stock);
// console.log(rating);

const transaction = (type, { label, stock }) => {
  console.log(type, label, stock);
};
transaction("order", product);
