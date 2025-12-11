import React, { Component } from 'react';
import Filters from './Filters';
import ProductTable from './ProductTable';
import ProductForm from './ProductForm';

const RESET_VALUES = { productid: '', category: '', price: '', name: '', instock: false };

class Products extends Component {
  constructor(props) {
    super(props);
    this.state = {
      filterText: '',
      products: {},
      currentProduct: {
        id: '',
        product: Object.assign({}, RESET_VALUES),
      },
      error: null,
    };

    this.handleFilter = this.handleFilter.bind(this);
    this.handleDestroy = this.handleDestroy.bind(this);
    this.handleSave = this.handleSave.bind(this);
    this.handleUpdate = this.handleUpdate.bind(this);
    this.fetchProducts = this.fetchProducts.bind(this);
  }

  componentDidMount() {
    this.fetchProducts();
  }

  async fetchProducts() {
    try {
      const res = await fetch('http://localhost:3003/product/get');
      const result = await res.json();
      this.setState({
        filterText: '',
        products: result,
        currentProduct: {
          id: '',
          product: Object.assign({}, RESET_VALUES),
        },
        error: null,
      });
    } catch (error) {
      console.error(error);
      this.setState({ error });
    }
  }

  handleFilter(filterInput) {
    this.setState(filterInput);
  }

  handleUpdate(product) {
    const clone = {
      id: product.id,
      product: { ...product.product },
    };
    this.setState({ currentProduct: clone });
  }

  async handleSave(product) {
    const isNew = !product.id;
    let endpoint = 'http://localhost:3003/product/create';
    let method = 'POST';

    if (!isNew) {
      endpoint = `http://localhost:3003/product/update/${product.id}`;
      method = 'PUT';
    }

    try {
      const res = await fetch(endpoint, {
        method,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(product),
      });

      const updatedProducts = await res.json();

      this.setState({
        products: updatedProducts,
        currentProduct: {
          id: '',
          product: Object.assign({}, RESET_VALUES),
        },
        error: null,
      });
    } catch (error) {
      console.error(error);
      this.setState({ error });
    }
  }

  async handleDestroy(productId) {
    try {
      const res = await fetch(`http://localhost:3003/product/delete/${productId}`, {
        method: 'DELETE',
      });

      const updatedProducts = await res.json();

      this.setState({
        products: updatedProducts,
        currentProduct: {
          id: '',
          product: Object.assign({}, RESET_VALUES),
        },
        error: null,
      });
    } catch (error) {
      console.error(error);
      this.setState({ error });
    }
  }

  render() {
    return (
      <div>
        <h1>My Inventory</h1>

        <Filters onFilter={this.handleFilter} />

        <ProductTable
          products={this.state.products}
          filterText={this.state.filterText}
          onDestroy={this.handleDestroy}
          onEdit={this.handleUpdate}
        />

        <ProductForm
          onSave={this.handleSave}
          product={this.state.currentProduct}
        />

        {this.state.error && (
          <div className="alert alert-danger mt-2">
            {this.state.error.message || 'Something went wrong'}
          </div>
        )}
      </div>
    );
  }
}

export default Products;
