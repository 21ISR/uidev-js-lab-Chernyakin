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

