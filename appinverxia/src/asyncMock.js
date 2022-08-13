const products = [
    { 
        id: '1', 
        name: 'Programa de Formación en Portafolios de Inversiones', 
        price: 1300000, 
        category: 'Inversiones', 
        img : 'https://static.wixstatic.com/media/56be1a_195e1ed1fc064f238992c6095fd299ab~mv2.jpg/v1/fill/w_508,h_420,al_c,lg_1,q_80,enc_auto/Banners%20Cursos%2006.jpg', 
        stock: 15, 
        description:'Este diplomado tiene como objetivo brindar las bases fundamentales para convertirte en un inversionista bien fundamentado en métodos como el “Value investing” y otras metodologías de análisis de mediano y largo plazo, que han demostrado brindar excelentes resultados en los mercados financieros.'
    },
    { id: '2', 
    name: 'Programa de Formación en Inversión Especulativa', 
    price: 'COP 1.300.000', 
    category: 'Inversiones', 
    img:'https://static.wixstatic.com/media/56be1a_4b0b7edfbb7940b48c8c4423b6816ecb~mv2.jpg/v1/fill/w_460,h_380,al_c,lg_1,q_80,enc_auto/Banners%20Cursos02.jpg', 
    stock: 15, 
    description:'Este diplomado tiene por objetivo brindarte unas fuertes bases en inversión de corto plazo a través de metodologías avanzadas de trading, gestión de riesgo y administración del capital en mercados principalmente especulativos.'},

    { id: '3', 
    name: 'Programa de Formación en Excel', 
    price: 1300000, 
    category: 'Excel', 
    img:'https://static.wixstatic.com/media/11062b_372b0cff6a4a4998843c1e9c27dddcff~mv2.jpg/v1/fill/w_460,h_380,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/Fila%20de%20la%20tabla.jpg', 
    stock: 15, 
    description:'Este diplomado brindará todas las herramientas básicas y avanzadas en el uso de excel como herramienta de trabajo y como habilidad fundamental para la administración de cualquier negocio u empresa. Se hará gran énfasis en el tratamiento de bases de datos a través de herramientas como el power BI y metodologías de minería de datos.'},

    { id: '4', 
    name: 'Programa de Formación en Finanzas Empresariales', 
    price: 1300000, 
    category: 'Finanzas', 
    img:'https://static.wixstatic.com/media/11062b_936be1e073f545f5aa7c6e4508ac673a~mv2.jpg/v1/fill/w_460,h_380,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/A%20group%20of%20women%20at%20a%20business%20meeting.jpg', 
    stock: 10, 
    description:'Diplomado dirigido a todos aquellos que desean entender el comportamiento financiero de las compañías y aquellos que tienen algún tipo de emprendimiento encontrarán en este un importante apoyo para la viabilidad financiera de su idea. Acá brindaremos fuertes bases sobre el manejo de activos y pasivos, fuentes de financiación e indicadores de salud financiera de las compañías.'},
]

export const getProductsInverxia = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products)
        }, 500)
    })
}

export const getProductById = (id) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.find(prod => prod.id === id))
        },500)
    })
}

export const getProductsByCategory = (categoryId) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.filter(prod => prod.category === categoryId))
        }, 500)
    })
}