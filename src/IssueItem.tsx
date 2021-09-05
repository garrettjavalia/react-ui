import { makeStyles, Typography } from "@material-ui/core";
import { Fragment } from "react";

export interface IssueItemProps{
    ID:number,
    title:string,
    author:string,
    date:string,
    commentCount:number,
};

const useStyles = makeStyles((theme) => ({
    IssueItem: {
        display:"flex",
        flexDirection:"row",
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
        marginLeft:"auto",
    },
    CommentLeftDiv: {
        paddingRight: "auto",
    }
  }));

export const IssueItem : React.FunctionComponent<IssueItemProps> = (props) => {

    const classes = useStyles();

    return (
        <Fragment>

            <div className={classes.IssueItem}>

                <div className={classes.CommentLeftDiv}>
                    <Typography>
                        #{props.ID} {props.title}
                    </Typography>
                    <Typography>
                        작성자: {props.author}, 작성일: {props.date}
                    </Typography>
                </div>
                <div className={classes.CommentNumber}>
                    <Typography>
                        댓글: {props.commentCount}
                    </Typography>
                </div>

            </div>

        </Fragment>
    );

}