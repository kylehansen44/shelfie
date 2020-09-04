import React, { Component } from 'react'
import Product from '../Product/Product'



class Dashboard extends Component {
    constructor() {
        super()

        this.state = {

        }
    }



    render() {
        return (
            <div>
                <Product {this.props.products} />
            </div>
        )
    }
}


export default Dashboard