import React from 'react';
import styled from 'styled-components';

const ItemContainer = styled.div`
    display: grid;
    grid-auto-flow: column;
    gap: 4px;
    align-items: center;
    justify-items: center;

    p{
        margin:0;
    }

    button {
        display:flex;
        justify-content: center;
        align-items: center;
        font-size: 16px;
        width: 16px;
        height: 16px;
        background-color: #e53935;
        border-color: #e53935;
    }
`

class ShoppingCartItem extends React.Component {
    render() {
        return (
            <ItemContainer>
                <p>{this.props.cartItem.quantity}x</p>
                <p>{this.props.cartItem.name}</p>
                <button
                onClick={() =>
                    this.props.onRemoveProductFromCart(this.props.cartItem.id)
                }>
                    <i className='fas fa-trash-alt'></i>
                </button>
            </ItemContainer>

        )
    }
}

export default ShoppingCartItem