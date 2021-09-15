import React from "react";
import {ShoppingCartItem} from './ShoppingCartItem';
import styled from 'styled-components';

const ShoppingCartContainer = styled.div`
    border: 1px solid black;
    padding: 8px;
`

const CartListContainer = styled.div`
    display: grid;
    gap: 8px;
`

class ShoppingCart extends React.Component {
    getTotalValue = () => {
        let totalValue = 0

        for (let produt of this.props.productsInCart) {
            totalValue += product.proce * product.quantity
        }
        return totalValue
    }
    render() {
        return (
            <ShoppingCartContainer>
                <h3>Carrinho</h3>
                <CartListContainer>
                    {this.props.productsInCart.map((product) => {
                        return (
                            <ShoppingCartItem
                            cartItem={product}
                            onRemoveProductFromCart={this.props.onRemoveProductFromCart}
                            />
                        )
                    })}
                </CartListContainer>
                <p>Valor Total: R${this.getTotalValue()},00</p>
            </ShoppingCartContainer>)
        
    }
}

export default ShoppingCart