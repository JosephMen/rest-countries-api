import { Search } from "@mui/icons-material"
import { Box, FormControl, IconButton, InputBase, InputLabel, MenuItem, Paper, Select, Typography } from "@mui/material"
import COUNTRIES from "../services/constants"
import { useEffect, useState } from "react"
import {useNavigate} from 'react-router'
import useQuery from "./hooks/useQuery"
import isValidCountryCode from "../services/validations"

export default function SearchForm({numberData}) {

    const [filter, setFilter] = useState(COUNTRIES.ALL)
    const navigate= useNavigate()
    const [searchWord, setSearchWord] = useState("")
    const handleSubmit = (e) => {
        e.preventDefault()
        navigate(`/?search=${searchWord}&filter=${filter}`)
    }
    const changeFilter = (e) => {
        navigate(`/?search=${searchWord}&filter=${e.target.value}`)
        setFilter(e.target.value)
    }
    const search = useQuery()
    useEffect(() => {
        const searchW = search.get('search') ?? ""
        const filter = search.get('filter') 
        let filterNumber = filter ? Number.parseInt(filter) : COUNTRIES.ALL
        if (isNaN(filterNumber) || isValidCountryCode(filterNumber) === false){
            filterNumber = COUNTRIES.ALL
        }
        setFilter(filterNumber)
        setSearchWord(searchW)
    },[search])
    return (
        <Box
            component='form'
            sx={
            {width:'100%', 
            maxWidth:'1200px', 
            margin: '0 auto', 
            padding: '10px 10px',
            display: 'flex',
            flexWrap: 'wrap',
            gap: '10px',
            justifyContent: 'space-between',
            alignItems: 'center'
            }}
            >
                <Paper
                sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: {xs: "100%" ,sm:400} }}
                >
                    <IconButton onClick={handleSubmit} type="submit" sx={{ p: '10px' }} aria-label="search">
                        <Search />
                    </IconButton>
                    <InputBase
                        value={searchWord}
                        onChange={(e) => setSearchWord(e.target.value)}
                        id="keyWord"
                        name="keyWord"
                        sx={{ mr: 1, flex: 1 }}
                        placeholder="Search For a Country"
                        inputProps={{ 'aria-label': 'search for a country' }}
                    />
                </Paper>

                <Typography variant="h5" > <b>Results: &nbsp;</b> {numberData}</Typography>

                <FormControl variant="standard" sx={{ m: 1, minWidth: 120}}>
                    <InputLabel id="select-filter-label">Filter by Region</InputLabel>
                    <Select
                        labelId="select-filter-label"
                        id="selectFilter"
                        name="selectFilter"
                        value={filter}
                        onChange={changeFilter}
                        label="Select by Region"
                        sx={{minWidth: '150px'}}
                        >
                        <MenuItem value={COUNTRIES.ELSE}>Else</MenuItem>
                        <MenuItem value={COUNTRIES.AFRICA}>Africa</MenuItem>
                        <MenuItem value={COUNTRIES.EUROPA}>Europe</MenuItem>
                        <MenuItem value={COUNTRIES.AMERICA}>Americas</MenuItem>
                        <MenuItem value={COUNTRIES.ASIA}>Asia</MenuItem>
                        <MenuItem value={COUNTRIES.OCEANIA}>Oceania</MenuItem>
                        <MenuItem value={COUNTRIES.ALL}>ALL</MenuItem>
                    </Select>
                </FormControl>            
            </Box>
    )
}
