<!-- assets/js/products.js -->
let categories = [
  "Dairy & Eggs",
  "Groceries & Staples",
  "Fresh Produce",
  "Oils & Ghee",
  "Snacks & Sweets",
  "Beverages",
  "Personal Care",
  "Household & Cleaning",
  "Bakery",
  "Spices & Condiments"
];

let products = [
  { id: 1, name: "Milk 1L", price: 180, stock: 45, image: "https://picsum.photos/id/29/400/400", discount: 0, category: "Dairy & Eggs" },
  { id: 2, name: "Fresh Bread", price: 80, stock: 30, image: "https://picsum.photos/id/201/400/400", discount: 15, category: "Bakery" },
  { id: 3, name: "Basmati Rice 5kg", price: 650, stock: 0, image: "https://picsum.photos/id/133/400/400", discount: 0, category: "Groceries & Staples" },
  { id: 4, name: "Eggs 12 pcs", price: 220, stock: 60, image: "https://picsum.photos/id/160/400/400", discount: 10, category: "Dairy & Eggs" },
  { id: 5, name: "Cooking Oil 1L", price: 450, stock: 25, image: "https://picsum.photos/id/251/400/400", discount: 0, category: "Oils & Ghee" },
  { id: 6, name: "Biscuits Family Pack", price: 120, stock: 40, image: "https://picsum.photos/id/312/400/400", discount: 20, category: "Snacks & Sweets" },
  { id: 7, name: "Surf Excel 1kg", price: 150, stock: 35, image: "https://picsum.photos/id/870/400/400", discount: 0, category: "Household & Cleaning" },
  { id: 8, name: "Head & Shoulders Shampoo 400ml", price: 250, stock: 20, image: "https://picsum.photos/id/1015/400/400", discount: 25, category: "Personal Care" },
  { id: 9, name: "Mango Juice 1L", price: 90, stock: 50, image: "https://picsum.photos/id/133/400/400", discount: 0, category: "Beverages" },
  { id: 10, name: "Potatoes 2kg", price: 120, stock: 15, image: "https://picsum.photos/id/29/400/400", discount: 0, category: "Fresh Produce" }
];

function saveProducts() {
  localStorage.setItem('products', JSON.stringify(products));
  localStorage.setItem('categories', JSON.stringify(categories));
}

function loadProducts() {
  const savedProducts = localStorage.getItem('products');
  const savedCategories = localStorage.getItem('categories');
  if (savedProducts) products = JSON.parse(savedProducts);
  if (savedCategories) categories = JSON.parse(savedCategories);
}

if (!localStorage.getItem('products')) {
  saveProducts();
}