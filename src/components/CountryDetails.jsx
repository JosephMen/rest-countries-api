import { Box, Button, Grid, Typography } from "@mui/material";
import { ArrowBack } from "@mui/icons-material";
import InfoBadge from "./InfoBadge";
import BadgeBorder from "./BadgeBorder";
import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { countryDetails } from "../services/constants";
import { fetchCountry } from "../services/getData";
import Spinner from "./Spinner";

export default function CountryDetails() {

    const [country, setCountry] = useState(countryDetails)
    const {countryName} = useParams()
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        setIsLoading(true)
        fetchCountry(countryName)
        .then(countryData => {
            if(!countryData) throw countryData
            setCountry(countryData)
            setIsLoading(false)
        }).catch(e => console.log("error lptm", e))
    },[countryName])

    if(isLoading){
        return <Spinner />
    }
    return (
        <Box
        sx={{
            width:'100%', 
            maxWidth:'1200px', 
            margin: '0 auto', 
            padding: {
                xs: '10px 30px',
                md:'10px 30px'
            },
            display: 'flex',
            flexWrap: 'wrap',
            gap: '10px',
            justifyContent: 'space-between',
            alignItems: 'center'
        }}
        >
            <Box
            sx={{
                width: '100%',
                height: '100px',
                display: 'flex',
                alignItems: 'center'
            }}
            >
                <Button sx={{
                    backgroundColor: 'primary.main',
                    color: 'text.primary',
                    textTransform: 'none',
                    padding: '0.3em 2em',
                    boxShadow: '2px 2px 8px hsl(200, 15%, 8%)',
                    '&:hover': {
                        backgroundColor: 'primary.main',
                        opacity: 1,
                    }
                }} component={Link} to="/">
                    <ArrowBack /> <strong>Back</strong>
                </Button>
            </Box>
            <Grid container spacing={2}>

                <Grid item md={6} xs={12} sx={{overflow: 'hidden'}}>
                    <Box
                    sx={{
                        width: {xs:'100%', md: '80%'},
                        overflow: 'hidden',
                        height: {xs: '200px' ,sm:'100%'},
                        maxHeight: '350px'
                    }}>
                        <img src={country.url_flag} style={{
                            height: '100%',
                            width: '100%',
                            objectFit: 'cover'
                        }}/>
                    </Box>
                </Grid>
                <Grid container item md={6} spacing={4}
                >
                    <Grid item xs = {12}>
                        <Typography variant="h5" fontWeight={600}>
                           <strong>{country.name}</strong> 
                        </Typography>
                    </Grid>
                    <Grid item xs={12} sm={6} textAlign='left' >
                        <InfoBadge >
                            <b> Native Name: &nbsp; </b> {country.nativeName}
                        </InfoBadge>
                        <InfoBadge >
                            <b> Population: &nbsp; </b> {country.population}
                        </InfoBadge>
                        <InfoBadge >
                            <b> Region: &nbsp; </b> {country.region}
                        </InfoBadge>
                        <InfoBadge >
                            <b> Sub Region: &nbsp; </b> {country.subregion}
                        </InfoBadge>
                        <InfoBadge>
                            <b> Capital: &nbsp; </b> {country.capital}
                        </InfoBadge>
                    </Grid>

                    <Grid item xs={12} sm={6} textAlign='left' >
                        <InfoBadge>
                            <b> Top Level Domain: &nbsp; </b> {country.topLevelDomain}
                        </InfoBadge>
                        <InfoBadge>
                            <b> Currencies: &nbsp; </b> {country.currencies}
                        </InfoBadge>
                        <InfoBadge>
                            <b> Languages: &nbsp; </b> {country.languajes}
                        </InfoBadge>
                    </Grid>

                    <Grid item xs={12} textAlign='left' >
                        <InfoBadge>
                            <b>Borders: &nbsp; </b> 
                            {country.borders?.map(border => <BadgeBorder key={border} >{border} &nbsp;</BadgeBorder>)} 
                        </InfoBadge>
                    </Grid>

                </Grid>

            </Grid>

        </Box>
    )
    
}
