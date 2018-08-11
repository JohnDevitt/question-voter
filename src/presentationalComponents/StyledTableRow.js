import styled from 'styled-components'
import TableRow from 'grommet/components/TableRow'

const StyledTableRow = styled(TableRow)`
	border-bottom: 1px solid #434343;
	background-color: ${({selected}) => (selected ? '#865cd6 ' : 'transparent')};
	color: #${({selected}) => (selected ? 'ffffff ' : '000000')};
	opacity: ${({selected}) => (selected ? '50' : '100')}%;
`

export default StyledTableRow
