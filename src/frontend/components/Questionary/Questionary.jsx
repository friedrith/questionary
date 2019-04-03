import React, { Component } from 'react'

import Question from 'components/Question'
import Layout from 'components/Layout'

import style from './Questionary.style'

const choices = ['X', 'A', 'B', 'C']

const list = ["Quel sont les changements d'architecture?", "Y a t'il de l'UML à faire?"]

const message = "C'est fini!"

class Questionary extends Component {
  constructor(props) {
    super(props)

    this.handleClick = this.handleClick.bind(this)

    this.state = {
      questions: list,
      current: 0,
    }
  }

  handleClick(/* choice, index */) {
    const { current } = this.state
    this.setState({
      current: current + 1,
    })
  }

  render() {
    const { current, questions } = this.state
    return (
      <Layout>
        {questions.map((question, index) => (
          <Question
            question={question}
            choices={choices}
            id={current}
            onClick={this.handleClick}
            position={current - index}
          />
        ))}
        <div className={`${style.end} ${current >= questions.length ? style.show : ''}`}>
          {message}
        </div>
      </Layout>
    )
  }
}

export default Questionary
