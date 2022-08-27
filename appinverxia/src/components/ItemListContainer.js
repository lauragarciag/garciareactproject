import './ItemListContainer.css'
import { useState, useEffect } from 'react'
import ItemList from './ItemList'
import { useParams } from 'react-router-dom' 
import { db, } from '../services/firebase'



const ItemListContainer = ({ greeting }) => {
      const { categoryId } = useParams()
      const getProductsFromFirestore = () => db(categoryId)


    return(
      <>
        <h1>{greeting}</h1>
        <div style={{ display: 'flex', flexDirection: 'column'}}>
      
        </div>
      </>
    )
}

export default ItemListContainer