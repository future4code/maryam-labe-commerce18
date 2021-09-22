import React from "react";
import { ProductCard } from "./ProductCard";
import styled from "styled-components";
const ProductsContainer = styled.div``;
const ProductsHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 16px;
  select {
    display: inline-block;
    margin-left: 8px;
  }
`;
const ProductsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 16px;
  padding: 16px;
`;
export class Products extends React.Component {
  state = {
    sort: "CRESCENTE",
  };
  getfilteredAndOrderedList = () => {
    return this.props.products
      .filter((product) => product.price < this.props.maxFilter)
      .filter((product) => product.price >= this.props.minFilter)
      .filter((product) => product.name.includes(this.props.nameFilter))
      .sort((a, b) =>
        this.state.sort === "CRESCENTE" ? a.price - b.price : b.price - a.price
      );
  };
  onChangeSort = (event) => {
    this.setState({ sort: event.target.value });
  };
  render() {
    const filteredAndOrderedList = this.getfilteredAndOrderedList();
    return (
      <ProductsContainer>
        <ProductsHeader>
          <h4>Quantidade de produtos: {filteredAndOrderedList.length}</h4>
          <label>
            <select value={this.state.sort} onChange={this.onChangeSort}>
              <option value={"CRESCENTE"}>Crescente</option>
              <option value={"DECRESCENTE"}>Decrescente</option>
            </select>
          </label>
        </ProductsHeader>
        <ProductsGrid>
          {filteredAndOrderedList.map((product) => {
            return (
              <ProductCard
                product={product}
                onAddProductToCart={this.props.onAddProductToCart}
              />
            );
          })}
        </ProductsGrid>
      </ProductsContainer>
    );
  }
}
