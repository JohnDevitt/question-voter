import React from 'react'
import PropTypes from 'prop-types'
import Box from 'grommet/components/Box'
import Headline from 'grommet/components/Headline'
import Anchor from 'grommet/components/Anchor'

const PageTitle = ({title, subtitle, label, path}) => (
	<Box pad={{vertical: 'medium'}}>
		<Headline>{title}</Headline>
		<Box justify="between" size={{width: 'full'}} direction="row">
			<Headline size="small">{subtitle}</Headline>
			<Anchor label={label} path={path} primary />
		</Box>
	</Box>
)

PageTitle.propTypes = {
	title: PropTypes.string.isRequired,
	subtitle: PropTypes.string.isRequired,
	label: PropTypes.string.isRequired,
	path: PropTypes.string.isRequired
}

export default PageTitle
