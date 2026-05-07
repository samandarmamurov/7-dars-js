const users = [
  { id: 1, name: "Ali",  age: 17, role: "admin" },
  { id: 2, name: "Vali", age: 25, role: "user"  },
  { id: 3, name: "Soli", age: 15, role: "admin" },
  { id: 4, name: "Gani", age: 30, role: "user"  }
];

// 1. 18 yoshdan kattalarini ajratib olish kere
const adults = users.filter(user => user.age >= 18);
console.log("18+ yoshdagilar:", adults);

// 2. Faqat ismlarni olish kere
const names = users.map(user => user.name);
console.log("Faqat ismlar:", names);

// 3. Faqat adminlarni ajratish
const admins = users.filter(user => user.role === "admin");
console.log("Adminlar:", admins);         





//==========================================================================

const products = [
  { name: "Laptop",     price: 1200, category: "Electronics" },
  { name: "T-shirt",    price: 20,   category: "Clothes"     },
  { name: "Smartphone", price: 800,  category: "Electronics" },
  { name: "Shoes",      price: 50,   category: "Clothes"     }
];



// 4. Narxlarni 10% arzonlashtirish kere
const discounted = products.map(product => ({

  product,
  price: product.price * 0.9


}));


console.log("10% chegirmali mahsulotlar:", discounted);



// 5. Faqat Electronics kategoriyasini ajratish kere
const electronics = products.filter(p => p.category === "Electronics");


console.log("Electronics:", electronics);

// =================================================================================================

const userNames = ["ahmad", "bekzod", "dilshod", "elyor"];





// 6. Birinchi harfni katta qilish kere
const capitalized = userNames.map(name => name[0].toUpperCase() + name.slice(1));



console.log("Bosh harflar katta:", capitalized);



// 7. Uzunligi 5 dan ko'p ismlar kere
const longNames = userNames.filter(name => name.length > 5);



console.log("Uzun ismlar (5+):", longNames);