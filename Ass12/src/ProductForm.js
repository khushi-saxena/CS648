import React, { Component } from 'react'

const RESET_VALUES = {id: '', category: '', price: '', name: ''}
class ProductForm extends Component
{
    constructor(props)
    {
        super(props);
        this.state= {
            product: Object.assign({}, RESET_VALUES), errors:{}
        }
    this.handleChange = this.handleChange.bind(this)
    this.handleSave = this.handleSave.bind(this)
    }  
    handleSave = (e) => {
            this.props.onSave(this.state.product);
            this.setState({
                product: Object.assign({}, RESET_VALUES), errors: {}
            })
        e.preventDefault();
    }
    handleChange = (e) => {
        const target = e.target
        const name = target.name
        const value = target.value

        this.setState((prevState) => {
             prevState.product[name] = value
             return { product: prevState.product }
        })
    }
    render() {
        return (
            <div>
                <h2>Add a new Product</h2>
                <div>
                    <form> 
                        <div className="form-group">
                            <label>Name</label>
                            <input className="col-sm-8 form-control" id="productName" type="text" onChange={this.handleChange} value={this.state.product.name} name="name"></input> 
                        </div>
                        <div className="form-group">
                            <label>Category</label>
                            <input className="col-sm-8 form-control" id="productCategory" type="text" onChange={this.handleChange} value={this.state.product.category} name="category"></input>
                        </div>
                        <div className="form-group">
                            <label>Price</label>
                            <input className="col-sm-8 form-control" id="productPrice" type="text" onChange={this.handleChange} value={this.state.product.price} name="price"></input>
                        </div>
                    
                        <button type="button"  className="btn btn-primary" onClick={this.handleSave}>Save</button>
                    </form>
                </div>
            </div>
        )
    }
}



export default ProductForm;