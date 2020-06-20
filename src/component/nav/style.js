import { makeStyles } from "@material-ui/core";
import { pink } from "@material-ui/core/colors";


export const useStyles = makeStyles(theme => ({

    nav_bar: {
        background: "#fafafa",
        boxShadow: "none",
        flexGrow: 1
    },
    nav_lastL: {
        color: pink[400],
        fontWeight: "bold"
    },
    nav_logo: {
        flexGrow: 1,
        color: "black",
        fontWeight: "bold",
    }
}));