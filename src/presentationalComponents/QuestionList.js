import React from 'react'
import PropTypes from 'prop-types'
import Box from 'grommet/components/Box'
import Headline from 'grommet/components/Headline'
import Heading from 'grommet/components/Heading'
import Title from 'grommet/components/Title'
import Label from 'grommet/components/Label'
import Tiles from 'grommet/components/Tiles'
import Tile from 'grommet/components/Tile'
import Timestamp from 'grommet/components/Timestamp'
import {withRouter} from 'react-router'

const QuestionList = ({questions, history}) => (
	<Box>
		<Box
			direction="row"
			justify="between"
			size="large"
			pad={{horizontal: 'medium'}}
		>
			<Box>
				<Headline>Questions</Headline>
				<Headline size="small">
					Click on a question to vote on an answer
				</Headline>
			</Box>
		</Box>
		<Tiles>
			{questions.map(question => (
				<Tile key={question.question} pad="small">
					<Box
						pad="small"
						size={{height: 'small', width: 'medium'}}
						colorIndex="brand"
						onClick={() => history.push(question.url)}
					>
						<Heading>
							<Title truncate={false}>{question.question}</Title>
						</Heading>
						<Timestamp value={question.published_at} />
						<Box responsive={false} direction="row">
							<Label>{`Number of choices: ${question.choices.length}`}</Label>
						</Box>
					</Box>
				</Tile>
			))}
		</Tiles>
	</Box>
)

QuestionList.propTypes = {
	questions: PropTypes.array,
	history: PropTypes.object.isRequired
}

QuestionList.defaultProps = {
	questions: []
}

export default withRouter(QuestionList)
