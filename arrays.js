const gpi=[4, 5, 3, 5, 2, 4, 5, 3]
const true_gpi = gpi.reduce((acc,n) => n+acc, 0) / gpi.length
console.log(true_gpi.toFixed(2))

console.log(gpi.filter(n => n>3))

const fruits = ["банан", "яблоко", "вишня", "абрикос", "груша"]
const sorted_fruits = fruits.sort()
console.log(sorted_fruits.join(","))

const products = [
  { name: "Ноутбук", price: 75000 },
  { name: "Мышь", price: 1500 },
  { name: "Монитор", price: 32000 },
  { name: "Клавиатура", price: 3500 },
  { name: "Наушники", price: 8000 }
]
const cheap = products.filter(p => p.price<10000)
const names = products.map(n => n.name)
const full_price = products.reduce((acc, p) => acc+p.price, 0)
console.log(cheap,names,full_price)

const numbe = [12, 45, 7, 33, 18]
console.log(numbe.some(n => n>40), numbe.every(n => n>5))