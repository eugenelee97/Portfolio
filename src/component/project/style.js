import { makeStyles } from "@material-ui/core/styles";


export const useStyles = makeStyles(theme => ({
    card_block: {
        borderRadius: 30,
        boxShadow: "none",
        marginBottom: "40px"
    },
    card_media: {
        height: 0,
        paddingTop: "56.25%" // 16:9
    },
    expand: {
        transform: "rotate(0deg)",
        marginLeft: "auto",
        transition: theme.transitions.create("transform", {
            duration: theme.transitions.duration.shortest
        })
    },
    expandOpen: {
        transform: "rotate(180deg)"
    },
    card_tags: {
        marginTop: "8px",
        marginRight: "6px"
    },
    pj_block: {
        background: " linear-gradient(217deg, #F0C1DF, #FCEEDF, #F8CACA)",
        margin: "0 auto",
        padding: theme.spacing(0, 2)
    },
    pj_title: {
        marginBottom: "20px",
        display: "flex",
        alignItems: "center",

    },
    pj_container: {
        padding: theme.spacing(10, 0)
    },
    pj_img: {
        width: "50px"
    },
    pj_font: {
        marginLeft: "10px",
        fontWeight: "bold",
        fontSize: "28px"
    }
}));