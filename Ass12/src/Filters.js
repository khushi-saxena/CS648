import React, { Component } from 'react'

class Filter extends Component
{
    handleChange =(e) => {
        const value = e.target.value
        const name = e.target.name
        this.props.onFilter(
            {
                [name]: value
            }
        );
    }
    render()
    {
        return(
            <div className="my-4">
                <input
                    className="form-control" 
                    type="text"
                    placeholder="Search here"
                    name="filterText"
                    onChange={this.handleChange}>
                </input>
            </div>
        )
    }
}

export default Filter;