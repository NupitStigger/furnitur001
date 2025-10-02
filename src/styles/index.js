const products = [
    {
        id: 1,
        title: "Мужские Кроссовки Nike Blazzer Mid Suede",
        price: 40000,
        imgUrl: "../assets/product/sneaker-1.jpg"
    },
    {
        id: 2,
        title: "Мужские Кроссовки Nike Air Max 207",
        price: 35000,
        imgUrl: "../assets/products/sneaker-2.jpg"
    },
    {
        id: 3,
        title: "Мужские Кроссовки Nike Blazer Mid Suede",
        price: 52000,
        imgUrl: "../assets/products/sneaker-3.jpg"
    },
]

// products.forEach((item) => {
//     console.log(item.id)
// })

const card = document.querySelector('.cards')

products.forEach((item) => {
    cards.insertAdjacentHTML('beforeend', `
         Название: ${item.title}
        
        `)
})