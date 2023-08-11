import { useLocation, useSearchParams } from "react-router-dom"

export default function useQuery() {
    const location = useLocation() 
    console.log(location)
    const [search, _] = useSearchParams(location)
    return search
}
