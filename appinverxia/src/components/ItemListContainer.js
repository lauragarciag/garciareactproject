// import { getProductsInverxia, getProductsByCategory } from '../asyncMock'
import { useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import {getDocs, collection} from 'firebase/firestore'
import {db} from '../services/firebase'


const ItemListContainer = ({ greeting }) => {
    const [products, setProducts] = useState([])

    const { categoryId } = useParams()

    useEffect(() => {



  getDocs(collection(db, 'products')).then(response => {
      const productsAdapted = response.docs.map(doc => {
          const data = doc.data()
          return { id: doc.id, ...data}
      })
      setProducts(productsAdapted)
    })


      // if(categoryId) {
      //   getProductsByCategory(categoryId).then(response => {
      //     setProducts(response)
      //   })
      // } else {
      //   getProductsInverxia().then(response => {
      //     setProducts(response)
      //   })
      // } 
    }, [categoryId])

    return(
      <>
        <h1>{greeting}</h1>
        <div style={{ display: 'flex', flexDirection: 'column'}}>
          {products.map(prod => <Link to={`/detail/${prod.id}`} key={prod.id}>{prod.name}</Link>)}
        </div>
      </>
    )
}

export default ItemListContainer