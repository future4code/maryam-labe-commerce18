import React from "react";
import styled from "styled-components";

const ItemContainer = styled.div`
  display: grid;
  grid-auto-flow: column;
  gap: 4px;
  align-items: center;
  justify-items: center;
  padding: 10px;
  p {
    display: grid;
  grid-auto-flow: column;
  gap: 4px;
  align-items: center;
  justify-items: center;
  padding: 10px;
  }
  button {
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 16px;
    width: 16px;
    height: 16px;
    background-color: yellow;
    border-color: black;
    cursor: pointer;
  }`;

export class ShoppingCartItem extends React.Component {
  render() {
    return (
      <ItemContainer>
        <p>{this.props.cartItem.quantity}x</p>
        <p>{this.props.cartItem.name}</p>
        <button
          onClick={() =>
            this.props.onRemoveProductFromCart(this.props.cartItem.id)
          }
        >
          <i class="fas fa-trash-alt">x</i>
        </button>
      </ItemContainer>
    );
  }
}