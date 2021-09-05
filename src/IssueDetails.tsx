import { Divider, makeStyles, Typography } from "@material-ui/core";
import { Fragment, useState } from "react";
import { Link, useRouteMatch } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
    IssueItem: {
        display: "flex",
        flexDirection: "row",
        flexGrow: 1,
        textAlign: "left",
        paddingLeft: theme.spacing(4),
        paddingRight: theme.spacing(4),
        marginTop: theme.spacing(2),
        marginBottom: theme.spacing(2),
    },
    CommentNumber: {
        marginTop: "auto",
        marginBottom: "auto",
        marginLeft: "auto",
    },
    CommentLeftDiv: {
        paddingRight: "auto",
    }
}));

export interface IssueDetailsProp{

}

export const IssueDetails: React.FunctionComponent<IssueDetailsProp> = (props) => {

    const classes = useStyles();

    const [isFirstRender, setIsFirstRenderState] = useState(true); 

    

    useState(() => {
        if(isFirstRender){
            //place loading code here
        }
        setIsFirstRenderState(false);
    });

    return (
        <Fragment>
            
            detail page

        </Fragment >
    );

}