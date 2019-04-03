import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { withRouter } from 'react-router-dom'
import { BounceLoader } from 'react-spinners'
import axios from 'axios'

import Layout from 'components/Layout'

import style from './List.style'

const list0 = [
  { id: 'id1', label: 'T123: fdsfdsfds' },
  { id: 'id2', label: 'T123: fdsfdsfds' },
  { id: 'id3', label: 'T123: fdsfdsfds' },
  { id: 'id4', label: 'T123: fdsfdsfds' },
  { id: 'id5', label: 'T123: fdsfdsfds' },
  { id: 'id6', label: 'T123: fdsfdsfds' },
  { id: 'id7', label: 'T123: fdsfdsfds' },
  { id: 'id8', label: 'T123: fdsfdsfds' },
  { id: 'id9', label: 'T123: fdsfdsfds' },
]

class List extends Component {
  constructor(props) {
    super(props)

    this.handleClick = this.handleClick.bind(this)
    this.updateRequest = this.updateRequest.bind(this)

    this.state = {
      // query: '',
      list: null,
    }
  }

  componentDidMount() {
    this.updateRequest()
  }

  updateRequest() {
    axios.get('/').then((/* res */) => {
      this.setState({ list: list0 })
    })
  }

  handleClick(/* id */) {
    return () => {
      const { history } = this.props
      history.push('/questions')
    }
  }

  render() {
    const { list } = this.state
    return (
      <Layout>
        <div className={style.container}>
          {list === null ? (
            <div className={style.loading}>
              <BounceLoader color="#0c193b" size={100} />
            </div>
          ) : null}
          {list !== null
            ? list.map(item => (
              <button
                key={item.id}
                className={style.item}
                type="button"
                onClick={this.handleClick(item.id)}
              >
                {item.label}
              </button>
            ))
            : null}
        </div>
      </Layout>
    )
  }
}

List.defaultProps = {
  history: {
    push: () => {},
  },
}

List.propTypes = {
  history: PropTypes.shape({
    history: PropTypes.func,
  }),
}

export default withRouter(List)
