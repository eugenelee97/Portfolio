import React from 'react';
import { Typography, Link } from "@material-ui/core";


const Copyright = ({ name, link, year }) => {
    return (
        <Typography variant="body2" color="textSecondary">
            {"Copyright © "}
            <Link color="inherit" href={link} target="_blank">
                {name}
            </Link>
            {` ${year}.`}
        </Typography>
    );
}

export default Copyright;
