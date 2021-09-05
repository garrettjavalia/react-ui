import './App.css';
import { makeStyles } from '@material-ui/core';
import { Fragment, useEffect, useState } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import { Octokit } from 'octokit';
import {IssueItem, IssueItemProps } from './IssueItem';
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  issueItemStyle:{

  },
}));

function IssueList() {

  const classes = useStyles();

  //yea, use my token.......
  const [octokit, setOctokitState] = useState(new Octokit({ auth: `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` }));
  
  const [issueList, setIssueListState] = useState([] as Array<IssueItemProps>);
  const [nextUpdatedPage, setNextUpdatedPageState] = useState(1);

  function fetchMoreData(){
    // a fake async api call like which sends
    // 20 more records in 1.5 secs
    
    octokit.request('GET /repos/{owner}/{repo}/issues', {
      owner: 'angular',
      repo: 'angular-cli',
      state: 'open',
      sort: 'comments',
      direction: 'desc',
      per_page: 50,
      page: nextUpdatedPage,
    }).then(result => {
      //console.log(result);
      let datas:IssueItemProps[] = [];
      result.data.forEach((value, index, dataArray) => {
        datas.push(
          {
            ID: value.id,
            author: value.user ? value.user.login : "ERRORID",
            title: value.title,
            commentCount: value.comments,
            date: value.updated_at,
          }
        )
      });
      setNextUpdatedPageState(nextUpdatedPage + 1);
      setIssueListState(issueList.concat(datas));
    });

  };

  //it will forcefully update page on component load.
  useEffect(() => {
   if(nextUpdatedPage === 1){
    fetchMoreData();
   } 
  })

  return (

    <Fragment>

      <InfiniteScroll
        dataLength={issueList.length}
        next={fetchMoreData}
        hasMore={true}
        loader={<h4>Loading...</h4>}
      >
        {issueList.map((item, index) => (
          <Link to={"/issue-details?issueid="+item.ID}>
            <IssueItem key={index} ID = {item.ID} author = {item.author} commentCount = {item.commentCount} date = {item.date} title={item.title}></IssueItem>
          </Link>
        ))}
      </InfiniteScroll>

    </Fragment>

  );
}

export default IssueList;
