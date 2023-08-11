import { Box } from "@mui/material";

export default function BadgeBorder({children}) {
    
    return (
        <Box backgroundColor = 'primary.main' sx={{
            borderRadius: '5px',
            display: 'inline-block',
            padding: '0.5em 1.5em',
            margin: '2px 5px',
            fontSize: '0.8rem',
            border: '1px solid grey'
        }}>
            {children}
        </Box>
    )

}
