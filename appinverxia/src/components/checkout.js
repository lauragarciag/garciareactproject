import { useState, useContext } from "react"
import CartContext from "../context/CartContext"
import {Row, Col, Form, Input, Label, FormGroup} from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { db } from "../services/firebase"
import { addDoc, collection, updateDoc, doc, getDocs, query, where, documentId, writeBatch } from "firebase/firestore"
import { useNavigate } from 'react-router-dom'


const Checkout = () => {
    const [isLoading, setIsLoading] = useState(false)
    const [orderCreated, setOrderCreated] = useState(false)
    const { cart, getQuantity, getTotal, clearCart } = useContext(CartContext) 

    const navigate = useNavigate()

    const totalQuantity = getQuantity()
    const total = getTotal()

    const createOrder = async () => {
        setIsLoading(true)
        try {
            const objOrder = {
                buyer: {
                    firstName: '',
                    lastName: '',
                    phone: '',
                    address: ''
                },
                items: cart,
                totalQuantity,
                total,
                date: new Date()
            }
    
            const ids = cart.map(prod => prod.id)
    
            const productsRef = collection(db, 'products')
    
            const productsAddedFromFirestore = await getDocs(query(productsRef, where(documentId(), 'in', ids)))
            
            const { docs } = productsAddedFromFirestore
    
            const outOfStock = []
    
            const batch = writeBatch(db)
    
            docs.forEach(doc => {
                const dataDoc = doc.data()
                const stockDb = dataDoc.stock
    
                const productAddedToCart = cart.find(prod => prod.id === doc.id)
                const prodQuantity = productAddedToCart?.quantity
    
                if(stockDb >= prodQuantity) {
                    batch.update(doc.ref, { stock: stockDb - prodQuantity})
                } else {
                    outOfStock.push({ id: doc.id, ...dataDoc})
                }
            })
    
            if(outOfStock.length === 0) {
                await batch.commit()
    
                const orderRef = collection(db, 'orders')
                const orderAdded = await addDoc(orderRef, objOrder)
    
                console.log(`El id de su orden es: ${orderAdded.id}`)
                clearCart()
                setOrderCreated(true)
                setTimeout(() => {
                    navigate('/')
                }, 3000)
            } else {
                console.log('Hay productos que estan fuera de stock')
            }
        } catch (error) {
            console.log(error)
        } finally {
            setIsLoading(false)
        }
    }

    if(isLoading) {
        return <h1>Se esta generando tu orden...</h1>
    }

    if(orderCreated) {
        return <h1>La orden fue creada correctamente, sera redirigido al listado de cursos en 3 segundos</h1>
    }

    return (
        <>
            <h1>Finalizar compra</h1>
        <Row>
            <Col xs="3"> </Col>
            <Col xs="6">
            <h2>Completa tus datos para finalizar compra</h2>
                <Form>
                    <FormGroup>
                        <Label>Nombre</Label>
                        <Input type="text" name="nombre" />
                    </FormGroup>
                <FormGroup>
                    <Label>Apellidos</Label>
                    <Input type="text" name="apellidos" />
                </FormGroup>
                <FormGroup>
                    <Label>Teléfono</Label>
                    <Input type="number" name="telefono" />
                </FormGroup>
                <FormGroup>
                    <Label>Correo electrónico </Label>
                    <Input type="email" name="correo" />   
                </FormGroup>
                <FormGroup>
                    <Label>Mensaje</Label>
                    <Input type="text" name="mensaje" /> 
                </FormGroup>
           
            
                </Form>
            </Col>
        </Row>
            
     



            <button className="Option" onClick={createOrder}>Generar Orden</button>
        </>
    )
}

export default Checkout