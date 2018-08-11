import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import Box from 'grommet/components/Box'
import Label from 'grommet/components/Label'
import Table from 'grommet/components/Table'
import TableRow from 'grommet/components/TableRow'
import Button from 'grommet/components/Button'
import PageTitle from './PageTitle'

const StyledTableRow = styled(TableRow)`
	border-bottom: 1px solid #434343;
	background-color: ${({selected}) => (selected ? '#865cd6 ' : 'transparent')};
	color: #${({selected}) => (selected ? 'ffffff ' : '000000')};
	opacity: ${({selected}) => (selected ? '50' : '100')}%;
`

export default class Question extends React.Component {
	static defaultProps = {
		question: {}
	}

	constructor(props) {
		super(props)
		this.state = {
			index: -1,
			choice: {}
		}
	}

	getPercentage = (votes, choices) => {
		const totalVotes = choices
			.map(choice => choice.votes)
			.reduce((a, b) => a + b, 0)
		if (totalVotes === 0) return 0
		return ((votes * 100) / totalVotes).toFixed(1)
	}

	render() {
		const {question, voteOnChoice} = this.props
		const {choice, index} = this.state
		return (
			<Box>
				<PageTitle
					title="Questions Detail"
					subtitle={`Question: ${question.question}`}
				/>
				<Box pad="medium">
					<Table responsive>
						<thead>
							<tr>
								<th>Choice</th>
								<th>Votes</th>
								<th>% of votes</th>
							</tr>
						</thead>
						<tbody>
							{question.choices.map((currentChoice, count) => (
								<StyledTableRow
									selected={count === index}
									key={choice.choice}
									onClick={() => this.setState({index, choice})}
								>
									<td>
										<Label>{currentChoice.choice}</Label>
									</td>
									<td>
										<Label>{currentChoice.votes}</Label>
									</td>
									<td>
										<Label>
											{this.getPercentage(
												currentChoice.votes,
												question.choices
											)}
										</Label>
									</td>
								</StyledTableRow>
							))}
						</tbody>
					</Table>
					<Button
						box
						plain={false}
						size="medium"
						alignSelf="end"
						label="Save Vote!"
						onClick={() =>
							voteOnChoice(question.url.split('/')[2], choice.url.split('/')[4])
						}
						primary
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
