const products = [
    { 
        id: '1', 
        name: 'port inv', 
        price: 1300000, 
        category: 'Inv', 
        img : 'images/pf inv.jpeg', 
        stock: 15, 
        description:'Descripcion prog port inv'
    },
    { id: '2', 
    name: 'inv espec', 
    price: 1300000, 
    category: 'Inv', 
    img:'', 
    stock: 15, 
    description:'Descripcion prog inv espec'},

    { id: '3', 
    name: 'prog excel', 
    price: 1300000, 
    category: 'Excel', 
    img:'', 
    stock: 15, 
    description:'Descripcion prog excel'},

    { id: '4', 
    name: 'prog fin emp', 
    price: 1300000, 
    category: 'Finanzas', 
    img:'', 
    stock: 10, 
    description:'Descripcion prog fin emp'}
]

export const getProductsInverxia = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products)
        }, 3000)
    })
}