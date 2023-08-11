import { Typography } from "@mui/material";

export default function InfoBadge({children}) {
    return (
        <Typography variant="body" display='block' margin="5px 0">
            {children}
        </Typography>
    )
}
