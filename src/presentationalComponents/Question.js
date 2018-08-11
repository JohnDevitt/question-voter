import React from 'react'
import PropTypes from 'prop-types'
import Box from 'grommet/components/Box'
import Label from 'grommet/components/Label'
import Table from 'grommet/components/Table'
import Button from 'grommet/components/Button'
import PageTitle from './PageTitle'
import StyledTableRow from './StyledTableRow'

export default class Question extends React.Component {
	static defaultProps = {
		question: {}
	}

	state = {
		index: -1,
		choice: {}
	}

	getPercentage = (votes, choices) => {
		const totalVotes = choices
			.map(choice => choice.votes)
			.reduce((a, b) => a + b, 0)
		if (totalVotes === 0) return 0
		return ((votes * 100) / totalVotes).toFixed(1)
	}

	voteOnChoice = () => {
		const {question, voteOnChoice} = this.props
		const {index, choice} = this.state
		if (index === -1) return
		voteOnChoice(question.url.split('/')[2], choice.url.split('/')[4])
	}

	render() {
		const {question} = this.props
		const {index} = this.state
		return (
			<Box>
				<PageTitle
					title="Questions Detail"
					subtitle={`Question: ${question.question}`}
					label="QuestionList"
					path="/"
				/>
				<Table responsive>
					<thead>
						<tr>
							<th>Choice</th>
							<th>Votes</th>
							<th>% of votes</th>
						</tr>
					</thead>
					<tbody>
						{question.choices.map((choice, count) => (
							<StyledTableRow
								selected={count === index}
								key={choice.choice}
								onClick={() => this.setState({index: count, choice})}
							>
								<td>
									<Label>{choice.choice}</Label>
								</td>
								<td>
									<Label>{choice.votes}</Label>
								</td>
								<td>
									<Label>
										{this.getPercentage(choice.votes, question.choices)}
									</Label>
								</td>
							</StyledTableRow>
						))}
					</tbody>
				</Table>
				<Box pad="small" />
				<Box alignSelf="end">
					<Button
						label="Save Vote!"
						onClick={this.voteOnChoice}
						primary
						path="/"
					/>
				</Box>
			</Box>
		)
	}
}

Question.propTypes = {
	question: PropTypes.object,
	voteOnChoice: PropTypes.func.isRequired
}
