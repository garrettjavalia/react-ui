import { Fragment } from "react";

export interface IssueItemProps{
    ID:number,
    title:string,
    author:string,
    date:string,
    commentCount:number,
};

export const IssueItem : React.FunctionComponent<IssueItemProps> = (props) => {

    return (
        <Fragment>

            <div>
                <div>
                    #{props.ID} {props.title}
                </div>
                <div>
                    작성자: {props.author}, 작성일: {props.date}
                </div>
            </div>
            <div>
                <div>
                    댓글: {props.commentCount}
                </div>
            </div>

        </Fragment>
    );

}