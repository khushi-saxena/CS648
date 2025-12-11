import React, { Component } from 'react'



class ProductRow extends Component
{
    pdelete = () =>
{
    this.props.onDelete(this.props.product.id);
}
    render() {
        let name = this.props.product.name;
        let price = this.props.product.price;
        let category = this.props.product.category;
        return(
            <tr>
                <td>{name}</td>
                <td>{category}</td>
                <td>{price}</td>
                <td> <button type="button" className="btn btn-primary" onClick ={this.pdelete}> Delete</button></td>
            </tr>
        )
    }
}
export default ProductRow