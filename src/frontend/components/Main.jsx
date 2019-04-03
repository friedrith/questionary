import React, { Component } from 'react'

class Main extends Component {
  constructor(props) {
    super(props)
    this.load = this.load.bind(this)

    this.state = {
      component: null,
    }
  }

  load() {
    import(/* webpackChunkName: "print" */ './Button').then((component) => {
      this.setState({
        component: component.default,
      })
    })
  }

  render() {
    const C = this.state.component
    return (
      <div>
        {C ? (
          <C />
        ) : (
          <button type="button" onClick={this.load}>
            load
          </button>
        )}
      </div>
    )
  }
}

export default Main
