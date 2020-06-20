import { makeStyles } from "@material-ui/core";
import { pink } from "@material-ui/core/colors";


export const useStyles = makeStyles(theme => ({
    nav_block: {
        flexGrow: 1
    },
    nav_bar: {
        background: "#fafafa",
        boxShadow: "none"
    },
    nav_lastL: {
        color: pink[400],
        fontweight: "bold"
    },
    nav_logo: {
        flexGrow: 1,
        color: "black",
        fontWeight: "bold",
    }
}));