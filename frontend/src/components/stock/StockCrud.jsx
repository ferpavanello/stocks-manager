import React, { Component } from 'react'
import Main from './../templates/Main'

const initialState = {
  stock: {
    code: '',
    quantity: 0,
    price: 0
  },
  list: []
}

export default class StockCrud extends Component {

  state = { ...initialState }

  clear () {
    this.setState({ stock: initialState.stock })
  }

  updateField (event) {
    const stock = { ...this.state.stock }
    stock[event.target.id] = event.target.value
    this.setState({ stock })
  }

  renderForm () {
    return (
      <div className="form">
        <div className="form-group">
          <label htmlFor="code">Code</label>
          <input
            type="text"
            className="form-control"
            id="code"
            value={this.state.stock.code}
            placeholder="Stock Code"
            aria-describedby="Stock code"
            onChange={e => this.updateField(e)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="quantity">Quantity</label>
          <input
            type="number"
            className="form-control"
            id="quantity"
            value={this.state.stock.quantity || ''}
            placeholder="0.000000000"
            onChange={e => this.updateField(e)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="price">Price</label>
          <input
            type="number"
            className="form-control"
            id="price"
            value={this.state.stock.price || ''}
            placeholder="0.00"
            onChange={e => this.updateField(e)}
          />
        </div>
        <div className="row pt-3">
          <div className="col-12">
            <button type="submit" className="btn btn-success">Save</button>
            <button
              type="submit"
              className="btn btn-danger ml-3"
              onClick={e => this.clear()}
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    )
  }

  render() {
    return (
      <Main>
        {this.renderForm()}
      </Main>
    )
  }
}
