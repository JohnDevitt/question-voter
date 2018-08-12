/* eslint-env browser */
import React from 'react'
import ReactDOM from 'react-dom'
import App from 'grommet/components/App'
import Box from 'grommet/components/Box'
import 'grommet/scss/vanilla/index.scss'
import {HashRouter as Router, Route} from 'react-router-dom'
import QuestionListContainer from './containerComponents/QuestionListContainer'
import QuestionContainer from './containerComponents/QuestionContainer'
import NewQuestionContainer from './containerComponents/NewQuestionContainer'

const Index = () => (
  <Router>
    <App centered>
      <Box pad="medium">
        <Route exact path="/" component={QuestionListContainer} />
        <Route exact path="/new" component={NewQuestionContainer} />
        <Route exact path="/questions/:id" component={QuestionContainer} />
      </Box>
    </App>
  </Router>
)

ReactDOM.render(<Index />, document.getElementById('index'))
