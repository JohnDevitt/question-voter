import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {withRouter} from 'react-router'
import axios from 'axios'
import Question from '../presentationalComponents/Question'

const baseUrl = 'https://polls.apiblueprint.org/questions'

class QuestionContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      question: {
        choices: []
      }
    }
  }

  componentDidMount() {
    const {match} = this.props
    axios
      .get(`${baseUrl}/${match.params.id}`)
      .then(res => this.setState({question: res.data}))
  }

  voteOnChoice = (questionId, choiceId) =>
    axios.post(`${baseUrl}/${questionId}/choices/${choiceId}`)

  render() {
    const {question} = this.state
    return <Question question={question} voteOnChoice={this.voteOnChoice} />
  }
}

QuestionContainer.propTypes = {
  match: PropTypes.object.isRequired
}

export default withRouter(QuestionContainer)
