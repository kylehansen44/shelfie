import React, { Component } from 'react'



class Form extends Component {
    constructor() {
        super()

        this.state = {
            name: '',
            price: 0,
            imgurl: ''
        }
        this.handleCancel = this.handleCancel.bind(this)
        this.handleChangeImg = this.handleChangeImg.bind(this)
        this.handleChangeName = this.handleChangeName.bind(this)
        this.handleChangePrice = this.handleChangePrice.bind(this)
    }
    handleChangeImg(event) {
        this.setState({
            [event.target.imgurl]: event.target.value
        })
    }

    handleChangeName(event) {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleChangePrice(event) {
        this.setState({
            [event.target.price]: event.target.value
        })
    }

    handleCancel(){
       this.setState({
           name: '',
           price: 0,
           imgurl: ''
       })
    }

    render() {
        return (
            <div>
                <input onChange={this.handleChangeImg}></input>
                <input onChange={this.handleChangeName}></input>
                <input onChange={this.handleChangePrice}></input>
                <button onClick={this.handleCancel}>Cancel</button>
                <button>Add to Inventory</button>
            </div>
        )
    }
}


export default Form