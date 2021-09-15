import React from "react";
import { Filters } from "./components/Filters/Filters";
import styled from "styled-components";
import { Products } from "./components/Products/Products";

const AppContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 3fr 1fr;
  padding: 16px;
  gap: 8px;
`;

const products = [
  {
    id: 1,
    name: "Produto: Sputnik",
    price: 100,
    photo: "https://img.ibxk.com.br/2020/10/09/09001157614480.jpg?w=704",
  },
  {
    id: 2,
    name: "Produto: Explorer 1",
    price: 200,
    photo: "https://img.ibxk.com.br/2020/10/09/09001326865481.jpg?w=704",
  },
  {
    id: 3,
    name: "Produto: Explorer 6",
    price: 300,
    photo: "https://img.ibxk.com.br/2020/10/09/09001456809482.jpg?w=704",
  },
  {
    id: 4,
    name: "Produto: TIROS-1",
    price: 400,
    photo: "https://img.ibxk.com.br/2020/10/09/09001811346483.jpg?w=704",
  },
  {
    id: 5,
    name: "Produto: Vostok 1",
    price: 500,
    photo: "https://img.ibxk.com.br/2020/10/09/09002021259484.jpg?w=704",
  },
];

class App extends React.Component {
  state = {
    minFilter: 100,
    maxFilter: 1000,
    nameFilter: "Produto",
    productsInCart: [
      {
        id: 4,
        name: "Produto: TIROS-1",
        price: 400,
        photo: "https://img.ibxk.com.br/2020/10/09/09001811346483.jpg?w=704",
        quantity: 1,
      },
      {
        id: 3,
        name: "Produto: Explorer 6",
        price: 300,
        photo: "https://img.ibxk.com.br/2020/10/09/09001456809482.jpg?w=704",
        quantity: 3,
      },
    ],
  };

  onChangeMinFilter = (event) => {
    this.setState({ minFilter: event.target.value });
  };

  onChangeMaxFilter = (event) => {
    this.setState({ maxFilter: event.target.value });
  };

  onChangeNameFilter = (event) => {
    this.setState({ nameFilter: event.target.value });
  };

  onAddProductToCart = (productId) => {
    const productInCart = this.state.productsInCart.find(
      (product) => productId === product.id
    );

    if (productInCart) {
      const newProductsInCart = this.state.productsInCart.map((product) => {
        if (productId === product.id) {
          return {
            ...product,
            quantity: product.quantity + 1,
          };
        }

        return product;
      });

      this.setState({ productsInCart: newProductsInCart });
    } else {
      const productToAdd = products.find((product) => productId === product.id);

      const newProductsInCart = [
        ...this.state.productsInCart,
        { ...productToAdd, quantity: 1 },
      ];

      this.setState({ productsInCart: newProductsInCart });
    }
  };

  onRemoveProductFromCart = (productId) => {
    const newProductsInCart = this.state.productsInCart
      .map((product) => {
        if (product.id === productId) {
          return {
            ...product,
            quantity: product.quantity - 1,
          };
        }
        return product;
      })
      .filter((product) => product.quantity > 0);

    this.setState({ productsInCart: newProductsInCart });
  };

  render() {
    return (
      <AppContainer>
        <Filters
          minFilter={this.state.minFilter}
          maxFilter={this.state.maxFilter}
          nameFilter={this.state.nameFilter}
          onChangeMinFilter={this.onChangeMinFilter}
          onChangeMaxFilter={this.onChangeMaxFilter}
          onChangeNameFilter={this.onChangeNameFilter}
        />
        <Products
          products={products}
          minFilter={this.state.minFilter}
          maxFilter={this.state.maxFilter}
          nameFilter={this.state.nameFilter}
          onAddProductToCart={this.onAddProductToCart}
        />
      </AppContainer>
    );
  }
}

export default App;
