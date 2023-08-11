import { Box, Typography } from "@mui/material";

export default function Error() {
    return(
        <Box sx={{display: 'flex', justifyContent: 'center', marginTop: '20px'}}>
            <Typography component='div' variant="h5" sx={{width: 'fit-content'}}> 
                <b> Sorry we have an error :( </b> 
            </Typography>
        </Box>
    )
}
