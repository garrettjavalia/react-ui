import { Divider, makeStyles, Typography } from "@material-ui/core";
import { Octokit } from "octokit";
import { Fragment, useState } from "react";
import { Link, useParams, useRouteMatch } from "react-router-dom";
import { GITHUB_TOKEN } from "./GithubSecrets";

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

interface issueURLPARAM{
    issueID:string|undefined
}

export interface IssueDetailsProp{

}

export const IssueDetails: React.FunctionComponent<IssueDetailsProp> = (props) => {

    const classes = useStyles();

    const [isFirstRender, setIsFirstRenderState] = useState(true); 

    //yea, use my token.......
    const [octokit, setOctokitState] = useState(new Octokit({ auth: GITHUB_TOKEN }));

    let { issueID } = useParams<issueURLPARAM>();

    useState(() => {
        if(isFirstRender){
            //place loading code here

            console.log(issueID);

            octokit.request('GET /repos/{owner}/{repo}/issues/{issue_number}', {
                owner: 'angular',
                repo: 'angular-cli',
                issue_number: parseInt(issueID!),
              }).then(result => {
                console.log(result);
                //not working
              });

        }
        setIsFirstRenderState(false);
    });

    return (
        <Fragment>
            
            detail page

        </Fragment >
    );

}