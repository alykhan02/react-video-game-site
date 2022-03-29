import React, { useState} from 'react';
import { ProductsContainer, 
    ProductsHeading, ProductWrapper, ProductCard, 
    ProductImg, ProductInfo, ProductTitle,
    ProductDesc, ProductPrice, ProductButton} from './ProductsElements';

export const Products = ({heading, data}) => {
  
    const [cart, setCart] = useState([]);
    const [page, setPage] = useState('products')

    const addToCart = (Products) => {
        console.log(cart.length + 1);
        setCart([...cart, Products]);
    };  
    //const renderProducts = () => (
    //    <h1>Cart</h1>
    //)
    
    
    return (
        <ProductsContainer>
            <ProductsHeading>{heading}</ProductsHeading>
            <ProductWrapper>
                {data.map((product, index) => {
                    return (
                        <ProductCard key={index}>
                            <ProductImg src={product.img} alt={product.alt} />
                            <ProductInfo>
                                <ProductTitle>{product.name}</ProductTitle>
                                <ProductDesc>{product.desc}</ProductDesc>
                                <ProductPrice>{product.price}</ProductPrice>
                                <ProductButton onClick={() =>addToCart(Products)}>{product.button}</ProductButton>
                            </ProductInfo>
                        </ProductCard>
                    );
            })}
            </ProductWrapper>
        </ProductsContainer>
  );
};


export default Products;
