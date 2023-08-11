import { Card, CardContent, CardMedia, List, ListItem, Typography } from "@mui/material";
import { memo } from "react";

const CountryCard = memo((prop) => {

    const {url_flag, name, population, region, capital} = prop
    
    return (
        
        <Card sx={{ maxWidth: 345, margin: "0 auto"}}>
            <CardMedia
                sx={{ 
                    minWidth: '250px', 
                    minHeight: '150px',
                    maxWidth: '345px', 
                    maxHeight: '150px', 
                    height: '100%', 
                    width: '100%' 
                }}
                image={url_flag}
                title="Country flag"
            />
            <CardContent>   
                    
                <List>
                    <ListItem>
                        <Typography variant="h5" sx={{fontWeight:700}}>
                            {name}
                        </Typography>
                    </ListItem>
                    <ListItem>
                        <b>Population: &nbsp; </b> {population}
                    </ListItem>
                    <ListItem>
                    <b>Region: &nbsp;</b>{region}
                    </ListItem>
                    <ListItem>
                    <b>Capital: &nbsp;</b> {capital}
                    </ListItem>
                </List>
            </CardContent>
        </Card>
    )
})
CountryCard.displayName = 'CountryCard'
export default CountryCard
