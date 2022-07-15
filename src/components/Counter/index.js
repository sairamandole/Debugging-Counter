import {Component} from 'react'

import './index.css'

class Counter extends Component {
  state = {count: 0}

  onDecrement = () => {
    this.setState(prevState => ({count: prevState.count - 1}))
  }

  onIncrement = () => {
    this.setState(prevState => ({count: prevState.count + 1}))
  }

  render() {
    const {count} = this.state

    return (
      <div className="app-container">
        <h1 className="count">Count {count}</h1>
        {/* The event handler onIncrement, should be passed as a reference to the onClick attribute */}
        <button className="button" onClick={this.onIncrement} type="button">
          Increase
        </button>
        {/* The event handler onDecrement, should be passed as a reference to the onClick attribute */}
        <button className="button" onClick={this.onDecrement} type="button">
          Decrease
        </button>
      </div>
    )
  }
}

export default Counter
