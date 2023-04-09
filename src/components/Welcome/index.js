// Write your code here
import {Component} from 'react'
import './index.css'

class Welcome extends Component {
  state = {status: true}

  onStatusChange = () => {
    this.setState(prevState => ({status: !prevState.status}))
  }

  buttonText = () => {
    const {status} = this.state
    return status ? 'Subscribe' : 'Subscribed'
  }

  render() {
    return (
      <div className="container">
        <h1 className="heading">Welcome</h1>
        <p className="para">Thank you! Happy Learning</p>
        <button className="button" type="button" onClick={this.onStatusChange}>
          {this.buttonText()}
        </button>
      </div>
    )
  }
}
export default Welcome
