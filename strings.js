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
console.log(dev.startsWith("Node"), dev.endsWith("разработчик"))
console.log("0".repeat(6)+"42")