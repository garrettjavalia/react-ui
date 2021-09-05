import './App.css';
import { makeStyles } from '@material-ui/core';
import { Fragment, useEffect, useState } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import { Octokit } from 'octokit';
import {IssueItem, IssueItemProps } from './IssueItem';

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
  const [lastUpdatedPage, setLastUpdatedPageState] = useState(-1);

  function fetchMoreData(){
    // a fake async api call like which sends
    // 20 more records in 1.5 secs
    setLastUpdatedPageState(lastUpdatedPage + 1);
    
    octokit.request('GET /repos/{owner}/{repo}/issues', {
      owner: 'angular',
      repo: 'angular-cli',
      state: 'open',
      sort: 'comments',
      direction: 'desc',
      per_page: 50,
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
      setIssueListState(issueList.concat(datas));
    });

  };

  //it will forcefully update page on component load.
  useEffect(() => {
   if(lastUpdatedPage === -1){
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
          <IssueItem key={index} ID = {item.ID} author = {item.author} commentCount = {item.commentCount} date = {item.date} title={item.title}></IssueItem>
        ))}
      </InfiniteScroll>

    </Fragment>

  );
}

export default IssueList;
