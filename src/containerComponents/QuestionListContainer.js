import React, {Component} from 'react'
import axios from 'axios'
import QuestionList from '../presentationalComponents/QuestionList'

export default class QuestionListContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      questions: []
    }
  }

  componentDidMount() {
    axios
      .get('https://polls.apiblueprint.org/questions?page=1')
      .then(res => this.setState({questions: res.data}))
  }

  render() {
    const {questions} = this.state
    return <QuestionList questions={questions} />
  }
}
