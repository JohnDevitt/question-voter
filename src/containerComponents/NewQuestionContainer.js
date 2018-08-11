import React from 'react'
import axios from 'axios'
import NewQuestion from '../presentationalComponents/NewQuestion'

const submitNewQuestion = (question, choices) => {
	axios.post('https://polls.apiblueprint.org/questions?page=1', {
		question,
		choices
	})
}

const NewQuestionContainer = () => (
	<NewQuestion submitNewQuestion={submitNewQuestion} />
)

export default NewQuestionContainer
