import { makeStyles } from "@material-ui/core";
import { pink } from "@material-ui/core/colors";

export const useStyles = makeStyles(theme => ({
    img_block: {
        textAlign: "center"
    },
    img: {
        width: "100%",
        maxWidth: "540px",
    },
    main_block: {
        display: "flex",
        flexDirection: "column",
        padding: theme.spacing(20, 0, 16, 0),
    },
    main_text: {
        textAlign: "left",
    },
    tag: {
        display: "flex",
        justifyContent: "left",
        flexWrap: "wrap",
        marginTop: "10px",
        "& > *": {
            margin: theme.spacing(0.6)
        }
    },
    text_lastL: {
        color: pink[400],
        fontWeight: "bold"
    },

    text_bold: {
        lineHeight: "20px",
        marginBottom: "30px"
    },

    skill_h: {
        marginTop: "20px",
        fontWeight: "bold",
        fontSize: "18px"
    }


}));

