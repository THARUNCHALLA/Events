import {Component} from 'react'

import './index.css'

const apiStatusConstant = {
  registered: 'REGISTERED',
  registrationsClosed: 'REGISTRATIONS_CLOSED',
  yetToRegister: 'YET_TO_REGISTER',
}

class ActiveEventRegistrationDetails extends Component {
  renderRegistered = () => (
    <div className="center123">
      <img
        src="https://assets.ccbp.in/frontend/react-js/events-regestered-img.png "
        alt="registered"
        className="yet"
      />
      <h1 className="head">You have already registered for the event</h1>
    </div>
  )

  renderRegistrationsClosed = () => (
    <div className="center123">
      <img
        src="https://assets.ccbp.in/frontend/react-js/events-registrations-closed-img.png  "
        alt="registrations closed"
        className="yet12"
      />
      <h1 className="head">Registrations Are Closed Now!</h1>
      <p className="description">Stay tuned. We will reopen</p>
    </div>
  )

  renderYetToRegister = () => (
    <div className="center123">
      <img
        src="https://assets.ccbp.in/frontend/react-js/events-register-img.png"
        alt="yet to register"
        className="yet"
      />
      <p className="head">
        A live performance brings so much to your relationship with dance.Seeing
        dance live can often make you fall totally in love with this beautiful
        art form
      </p>
      <button type="button" className="button">
        Register Here
      </button>
    </div>
  )

  tharun12 = () => (
    <p className="head">Click on an event, to view its registration details</p>
  )

  render() {
    const {user12} = this.props
    const {registrationStatus} = user12[0]
    switch (registrationStatus) {
      case apiStatusConstant.registered:
        return this.renderRegistered()
      case apiStatusConstant.yetToRegister:
        return this.renderYetToRegister()
      case apiStatusConstant.registrationsClosed:
        return this.renderRegistrationsClosed()
      default:
        return this.tharun12()
    }
  }
}

export default ActiveEventRegistrationDetails
