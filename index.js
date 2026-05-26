const temperature=36.6789
console.log(temperature.toFixed(1))
const a=17
const b=5
console.log(Math.floor(a/b))
console.log(a%b)
console.log(Math.floor(Math.random()*10)+1)
console.log(isNaN("100"/5))
console.log(isNaN("сто"/5))
console.log(Math.max(14, -3, 77, 0, -100, 42))
console.log(Math.min(14, -3, 77, 0, -100, 42))

const sentence = "  javascript — это просто!  "
console.log((sentence.at(2).toUpperCase())+((sentence.trim()).slice(1,23)))
const role = "Студент"
const last_name = "Картушин"
const name = "Кирилл"
const role_group = "группа"
const group = "21-ИСР"
const mid = "средний"
const point = "балл:"
const points = "4.2"
console.log(`${role} ${last_name} ${name}, ${role_group} ${group}, ${mid} ${point} ${points}`)
const date = "2025-03-15"
const splitdate = (date.split("-")).reverse()
console.log(`${splitdate[0]}.${splitdate[1]}.${splitdate[2]}`)
const dev = "Node.js разработчик"
console.log(dev.startsWith("Node"), dev.en)