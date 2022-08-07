import React from 'react';
import './Item.css';
import { getProductsInverxia } from '../asyncMock';

const Item = ({products}) => {
  const { name, img, price, id, stock } = products;
  const onAdd = (qty) => {
    alert(`Has agregado ${qty} el curso`);
  };

  return (
    <article className="product-card">
      <img className="product-card__image" src={img} alt="" />

      <h3 className="product-card__name">{name}</h3>
      <span className="product-card__name">${price}</span>


    </article>
  );
};

export default Item;
