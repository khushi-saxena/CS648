import React, { Component } from 'react'
import ProductRow from './ProductRow';

class ProductTable extends Component
{

    handleDelete = (id) => {
        this.props.onDelete(id)
    }
    render()
    {
        let filterText = this.props.filterText;
        let products = this.props.products;

        return(
            <div>
                <table className ="table table-striped">
                    <thead className="thead-dark">
                        <tr>
                            <th>Name</th>
                            <th>Category</th>
                            <th>Price</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            Object.keys(products)
                            .filter(
                                key=> products[key].name.indexOf(filterText) >= 0
                            )
                            .map (
                                key=> {
                                    return(
                                        <ProductRow
                                        key = {products[key].id}
                                        product = {products[key]}
                                        onDelete={this.handleDelete}
                                        ></ProductRow>
                                    )
                                }
                            )
                        }
                    </tbody>
                </table>
            </div>
        )
    }
}
export default ProductTable;