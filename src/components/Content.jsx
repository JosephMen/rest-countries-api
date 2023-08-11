import { Box, Grid } from "@mui/material";
import { useEffect, useMemo, useState } from "react";
import CountryCard from "./CountryCard";
import fetchData from "../services/getData";
import { Link, useLocation, useSearchParams } from "react-router-dom";
import styled from "@emotion/styled";
import {default as COUNTRIES }from "../services/constants";
import { getRegionCode } from "../services/getData";
import Spinner from "./Spinner";
import Error from "./Error";
import SearchForm from "./SearchForm";
import useQuery from "./hooks/useQuery";


export const CustomLink = styled(Link)( () =>(
    {
        textDecoration: 'none',
        '&:hover': {
            opacity: 0.8
        }
    })
)

export default function Content() {
    console.log('render')
    const [data, setData] = useState([])
    const [error, setError] = useState(false)
    const [isLoading, setIsLoading] = useState(true)

    
    const search = useQuery()

    const dataFiltered = useMemo(() => {
        const searchWord = search.get('search') ?? ""
        const filter = search.get('filter') ?? ""

        console.log(`SearchWord: ${searchWord}  - Filter: ${filter}`)
        try{
            const filter1 = data.filter(country => country.name.toLowerCase().includes(searchWord.toLowerCase()))
            if (filter !== "" && Number.parseInt(filter) !== COUNTRIES.ALL){
                const finalFilter = filter1.filter(country => getRegionCode(country.region) === Number.parseInt(filter))
                return finalFilter
            }
            return filter1

        }catch(e){
            return []
        }
    }, [data, search])

    useEffect(() => {
        setIsLoading(true)
        fetchData()
        .then(countriesData => {
            setData(countriesData)
            setIsLoading(false)
        })
        .catch(e => {
            console.log(e)
            setError(true)
        })
    },[])

    if (isLoading){
        return (
            <Spinner style = {{margin: '0 auto'}}/>
        )
    }
    if(error){
        return (
            <Error />
        )
    }
    return (
        <Box>
           
            <SearchForm numberData={dataFiltered.length}/>
            <Box 
            sx={
                {width:'100%', 
                maxWidth:'1200px', 
                margin: '0 auto', 
                padding: '10px 10px',
                }}
            >
                <Grid container spacing={5}>                  
                    {dataFiltered.map(country => {
                        
                        return <Grid key={country.key} item xs={12} sm ={6} md = {4} lg={3}>
                            <CustomLink to={'Details/' + country.name}>
                                <CountryCard {...country} />
                            </CustomLink>
                        </Grid>
                    })}              
                </Grid>
            </Box>
        </Box>      
    )
}
