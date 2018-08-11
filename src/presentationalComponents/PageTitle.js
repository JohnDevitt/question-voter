import React from 'react'
import PropTypes from 'prop-types'
import Box from 'grommet/components/Box'
import Headline from 'grommet/components/Headline'

const PageTitle = ({title, subtitle}) => (
	<Box
		direction="row"
		justify="between"
		size="large"
		pad={{horizontal: 'medium'}}
	>
		<Box>
			<Headline>{title}</Headline>
			<Headline size="small">{subtitle}</Headline>
		</Box>
	</Box>
)

PageTitle.propTypes = {
	title: PropTypes.string.isRequired,
	subtitle: PropTypes.string.isRequired
}

export default PageTitle
