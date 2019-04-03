import React, { Component } from 'react'
import PropTypes from 'prop-types'

import style from './Question.style'

const colors = [
  '#900c3f',
  '#c70039',
  '#ff5733',
  '#182952',
  '#2b3595',
  '#7045af',
  '#e14594',
  '#ff8f56',
  '#ff5959',
  '#ff5959',
  '#60424c',
  '#0b032d',
  '#843b62',
  '#f67e7d',
  '#ffb997',
]

class Question extends Component {
  constructor(props) {
    super(props)

    this.handleClick = this.handleClick.bind(this)

    this.state = {
      active: null,
    }
  }

  handleClick(choice, index) {
    return () => {
      this.setState({
        active: index,
      })

      setTimeout(() => {
        const { onClick } = this.props
        onClick(choice, index)
      }, 200)
    }
  }

  render() {
    const {
      choices, id, position, question,
    } = this.props
    const { active } = this.state
    return (
      <div
        className={`${style.Question} ${position >= 1 ? style.bottom : ''} ${
          position <= -1 ? style.top : ''
        }`}
      >
        <div className={style.question} style={{ background: colors[id % colors.length] }}>
          <div>{question}</div>
        </div>
        <div className={style.choices}>
          {choices.map((choice, index) => (
            <button
              type="button"
              key={choice}
              className={`${style.choice} ${active === index ? style.active : ''}`}
              onClick={this.handleClick(choice, index)}
            >
              {choice}
            </button>
          ))}
        </div>
      </div>
    )
  }
}

Question.defaultProps = {
  choices: [],
  onClick: () => {},
  id: 0,
  position: 0,
  question: '',
}

Question.propTypes = {
  choices: PropTypes.arrayOf(PropTypes.string),
  onClick: PropTypes.func,
  id: PropTypes.number,
  position: PropTypes.number,
  question: PropTypes.string,
}

export default Question
