import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { withRouter } from 'react-router-dom'
import { BounceLoader } from 'react-spinners'
import style from './Configuration.style'

class Configuration extends Component {
  constructor(props) {
    super(props)

    this.hide = this.hide.bind(this)

    this.state = {
      hidden: false,
    }
  }
  componentDidMount() {
    const { history } = this.props
    setTimeout(() => {
      this.hide()

      setTimeout(() => {
        history.push('/list')
      }, 300)
    }, 3000)
  }

  hide() {
    this.setState({
      hidden: true,
    })
  }

  render() {
    const { hidden } = this.state
    return (
      <div className={`${style.Configuration} ${hidden ? style.hidden : ''}`}>
        <BounceLoader color="#0c193b" size={100} />
      </div>
    )
  }
}

Configuration.defaultProps = {
  history: {
    push: () => {},
  },
}

Configuration.propTypes = {
  history: PropTypes.shape({
    history: PropTypes.func,
  }),
}

export default withRouter(Configuration)
