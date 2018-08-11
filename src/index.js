/* eslint-env browser */
import React from 'react'
import ReactDOM from 'react-dom'
import App from 'grommet/components/App'
import 'grommet/scss/vanilla/index.scss'
import {BrowserRouter as Router, Route} from 'react-router-dom'
import QuestionListContainer from './containerComponents/QuestionListContainer'
import QuestionContainer from './containerComponents/QuestionContainer'

const Index = () => (
	<Router>
		<App centered={false}>
			<Route exact path="/" component={QuestionListContainer} />
			<Route exact path="/questions/:id" component={QuestionContainer} />
		</App>
	</Router>
)

ReactDOM.render(<Index />, document.getElementById('index'))
