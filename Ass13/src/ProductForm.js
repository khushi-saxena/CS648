import React, { Component } from 'react';

class ProductForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      product: {
        id: props.product.id,
        product: { ...props.product.product },
      },
      errors: {},
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSave = this.handleSave.bind(this);
  }

  componentDidUpdate(prevProps) {
    if (prevProps.product.id !== this.props.product.id) {
      this.setState({
        product: {
          id: this.props.product.id,
          product: { ...this.props.product.product },
        },
      });
    }
  }

  handleChange(e) {
    const { name, type, checked, value } = e.target;
    const newValue = type === 'checkbox' ? checked : value;

    this.setState((prevState) => ({
      product: {
        ...prevState.product,
        product: {
          ...prevState.product.product,
          [name]: newValue,
        },
      },
    }));
  }

  handleSave(e) {
    e.preventDefault();
    // Convert productid and price to numbers before saving
    const productToSave = {
      ...this.state.product,
      product: {
        ...this.state.product.product,
        productid: this.state.product.product.productid === '' ? 0 : Number(this.state.product.product.productid),
        price: this.state.product.product.price === '' ? 0 : Number(this.state.product.product.price),
      },
    };
    this.props.onSave(productToSave);
  }

  render() {
    const selectedProduct = this.state.product;
    const formHeader = selectedProduct.id === '' ? 'Add a new Product' : 'Update Product';
    const buttonLabel = selectedProduct.id === '' ? 'Save' : 'Update';

    return (
      <form>
        <h4>{formHeader}</h4>

        <p>
          <label>Product Id<br />
            <input
              type="text"
              className="form-control"
              name="productid"
              onChange={this.handleChange}
              value={selectedProduct.product.productid}
            />
          </label>
        </p>

        <p>
          <label>Name<br />
            <input
              type="text"
              className="form-control"
              name="name"
              onChange={this.handleChange}
              value={selectedProduct.product.name}
            />
          </label>
        </p>

        <p>
          <label>Category<br />
            <input
              type="text"
              className="form-control"
              name="category"
              onChange={this.handleChange}
              value={selectedProduct.product.category}
            />
          </label>
        </p>

        <p>
          <label>Price<br />
            <input
              type="text"
              className="form-control"
              name="price"
              onChange={this.handleChange}
              value={selectedProduct.product.price}
            />
          </label>
        </p>

        <p>
          <label>
            In Stock &nbsp;
            <input
              type="checkbox"
              name="instock"
              onChange={this.handleChange}
              checked={selectedProduct.product.instock}
            />
          </label>
        </p>

        <input
          type="submit"
          className="btn btn-primary"
          value={buttonLabel}
          onClick={this.handleSave}
        />
      </form>
    );
  }
}

export default ProductForm;
