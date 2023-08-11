import { Box } from '@mui/material'
import './Styles/Spinner.css'

export default function Spinner() {
    return (
        <Box sx={{display: 'flex', justifyContent: 'center', marginTop: '20px'}}>
            <div className='spinner' style={{width:50, height: 50, borderLeftColor: 'blue'}} ></div>
        </Box>
    )
}
