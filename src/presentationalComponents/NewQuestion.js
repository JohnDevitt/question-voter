import React, {Component} from 'react'
import PropTypes from 'prop-types'
import Box from 'grommet/components/Box'
import Form from 'grommet/components/Form'
import FormField from 'grommet/components/FormField'
import TextInput from 'grommet/components/TextInput'
import Button from 'grommet/components/Button'
import Label from 'grommet/components/Label'
import Table from 'grommet/components/Table'
import Close from 'grommet/components/icons/base/Close'
import Checkmark from 'grommet/components/icons/base/Checkmark'
import Headline from 'grommet/components/Headline'
import PageTitle from './PageTitle'
import StyledTableRow from './StyledTableRow'

export default class NewQuestion extends Component {
	state = {
		question: '',
		currentChoice: '',
		choices: []
	}

	setQuestion = question => this.setState({question})

	setCurrentChoice = currentChoice => this.setState({currentChoice})

	addChoice = () => {
		const {choices, currentChoice} = this.state
		if (currentChoice === '') return
		this.setState({choices: [...choices, currentChoice], currentChoice: ''})
	}

	removeChoice = index => {
		const {choices} = this.state
		this.setState({
			choices: choices.filter((_, i) => i !== index)
		})
	}

	submitNewQuestion = () => {
		const {question, choices} = this.state
		const {submitNewQuestion} = this.props
		if (question === '') return
		if (choices === []) return
		submitNewQuestion(question, choices)
	}

	render() {
		const {question, choices, currentChoice} = this.state
		return (
			<Box>
				<PageTitle
					title="New Question "
					subtitle="Submit a new question"
					label="QuestionList"
					path="/"
				/>
				<FormField label="Question Title">
					<TextInput
						id="question"
						name="question"
						placeHolder="Type your question here"
						onDOMChange={event => this.setQuestion(event.target.value)}
					/>
				</FormField>

				<Box pad="medium" />
				<Headline size="small">Choices</Headline>

				<Form
					plain
					onSubmit={e => {
						e.preventDefault()
						this.addChoice()
					}}
				>
					<Box size={{width: 'full'}}>
						<Table responsive>
							<thead>
								<tr>
									<th>Choice</th>
									<th>Action</th>
								</tr>
							</thead>
							<tbody>
								{choices.map((choice, index) => (
									<StyledTableRow key={choice}>
										<td>
											<Label>{choice}</Label>
										</td>
										<td>
											<Button
												icon={<Close />}
												onClick={() => this.removeChoice(index)}
											/>
										</td>
									</StyledTableRow>
								))}

								<StyledTableRow>
									<td>
										<TextInput
											id="choice"
											name="choice"
											placeHolder="Enter a new choice here"
											value={currentChoice}
											onDOMChange={event =>
												this.setCurrentChoice(event.target.value)
											}
										/>
									</td>
									<td>
										<Button icon={<Checkmark />} onClick={this.addChoice} />
									</td>
								</StyledTableRow>
							</tbody>
						</Table>
					</Box>
				</Form>

				<Box pad="small" />
				<Box alignSelf="end">
					<Button
						label="Submit Question"
						onClick={() => this.submitNewQuestion(question, choices)}
						primary
						path="/"
					/>
				</Box>
			</Box>
		)
	}
}

NewQuestion.propTypes = {
	submitNewQuestion: PropTypes.func.isRequired
}
