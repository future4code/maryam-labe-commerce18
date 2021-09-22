import React from "react";
import styled from "styled-components";
matheus-alonso

=======
master
const CardContainer = styled.div`
  border: 1px solid black;
  display: flex;
  flex-direction: column;
matheus-alonso

img{
  width: 400px;
  height: 300px;
}

    &:hover{
  color: black;
  transform: scale(1.1);
    transition: all 0.5s;
  }
`;


=======
`;
master
const CardInfo = styled.div`
  display: flex;
  flex-direction: column;
  padding: 16px;
  p {
    margin: 4px 0;
  }
`;
matheus-alonso

const AddToCartButton = styled.button`
  align-self: center;
  margin-top: 0px;
  padding: 4px 8px;
  font-size: 24px;
  color: black;
  background-color: white;
  border-radius: 10px;
  border: 3px solid black;
  cursor: pointer;

  &:hover{
  color: orange;
  transform: scale(1.1);
    transition: all 0.5s;
  }
`;

=======
const AddToCartButton = styled.button`
  align-self: center;
  margin-top: 4px;
  padding: 4px 8px;
  font-size: 24px;
`;
master
export class ProductCard extends React.Component {
  render() {
    const product = this.props.product;
    return (
      <CardContainer>
        <img alt="imagem" src={product.photo} />
        <CardInfo>
          <p>{product.name}</p>
          <p>R${product.price},00</p>
          <AddToCartButton
            onClick={() => this.props.onAddProductToCart(product.id)}
          >
matheus-alonso
            <i class="fas fa-shopping-cart">Carrinho</i>
          </AddToCartButton>
        </CardInfo>
      </CardContainer>


    );
  }
}
=======
            <i class="fas fa-shopping-cart"></i>
          </AddToCartButton>
        </CardInfo>
      </CardContainer>
    );
  }
}
master
