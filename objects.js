const book = {
    title: '"Мастер и Маргарита"',
    author: 'Булгаков М.А.',
    year: "1967 г.",
    pages: "480 стр.",
    available: true,
    info() {
        return `${book.title}, ${book.author}, ${book.year}, ${book.pages}`
    }
}
console.log(book.info())

const {title, author, rating = 0} = book
console.log(title, author, rating)

const students = [
  { name: "Анна", grade: 4.8, passed: true },
  { name: "Борис", grade: 2.9, passed: false },
  { name: "Вера", grade: 3.5, passed: true },
  { name: "Григорий", grade: 4.1, passed: true },
  { name: "Дарья", grade: 2.5, passed: false },
]
console.log((students.filter(n => n.passed == true)).map(n => n).length)

function mergeUser(user1,user2) {
    return{ ...user1, ...user2}
}
const u1 = { name: "Иван", age: 20, city: "Казань" }
const u2 = { name: "Иван Петров", email: "ivan@mail.ru", city: "Москва" }
console.log(mergeUser(u1,u2))

function countByField(arr, field) {
    return arr.reduce((acc, n) => {
    const key = n[field]
    acc[key] = (acc[key] || 0) + 1
    return acc
  }, {})
}
console.log(countByField(students,"passed"))