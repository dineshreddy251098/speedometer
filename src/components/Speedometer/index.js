import './index.css'
import {Component} from 'react'

class Speedometer extends Component {
  state = {count: 0}

  accelerate = () => {
    this.setState(prevState =>
      prevState.count === 200
        ? {count: prevState.count}
        : {count: prevState.count + 10},
    )
  }

  brake = () => {
    this.setState(prevState =>
      prevState.count === 0
        ? {count: prevState.count}
        : {count: prevState.count - 10},
    )
  }

  render() {
    const {count} = this.state
    return (
      <div className="bg-container">
        <h1 className="heading">SPEEDOMETER</h1>
        <img
          className="img"
          src="https://assets.ccbp.in/frontend/react-js/speedometer-img.png"
          alt="speedometer"
        />
        <h1 className="sub-heading">Speed is {count}mph</h1>
        <p className="tag-line">Min limit is 0mph, Max limit is 200mph</p>
        <div className="btn-container">
          <button
            onClick={this.accelerate}
            className="btn-accelerate"
            type="button"
          >
            Accelerate
          </button>
          <button onClick={this.brake} className="btn-brake" type="button">
            Apply Brake
          </button>
        </div>
      </div>
    )
  }
}

export default Speedometer
