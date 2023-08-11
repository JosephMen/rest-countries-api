import { DarkMode } from "@mui/icons-material";
import { AppBar, Box, Button, IconButton, Toolbar, Typography } from "@mui/material";
import PropTypes from 'prop-types'
import { CustomLink } from "./Content";
function Bar({changeDarkMode}) {

    return (
        <Box sx={{ flexGrow: 1}} >
            <AppBar position="static" >
                <Toolbar sx={{width:'100%' ,maxWidth:'1200px', margin: '0 auto', minHeight: {xs:'80px'}}}>
                    <Typography  sx={{ flexGrow: 1, fontWeight:700, fontSize: {xs: '1rem', md: '1.5rem'}}}>
                        <Button style={{color:'inherit', fontWeight: 'inherit', fontSize: 'inherit'}} component={CustomLink} to="/">
                            Where in the world? 
                        </Button>
                    </Typography>
                    <IconButton onClick={() => changeDarkMode()}>
                        <DarkMode />
                    </IconButton>
                    <Typography variant="h6" sx={{fontWeight: 600}}>
                        Dark Mode
                    </Typography>
                </Toolbar>
            </AppBar>
        </Box>
    )
    
}
Bar.propTypes = {
    changeDarkMode: PropTypes.func.isRequired
}

export default Bar