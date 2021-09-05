import './App.css';
import { makeStyles } from '@material-ui/core';
import { Fragment, useState } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';


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

  const [issueList, setIssueListState] = useState(Array.from({ length: 20 }));
  const [lastUpdatedPage, setLastUpdatedPageState] = useState(-1);

  function fetchMoreData(){
    // a fake async api call like which sends
    // 20 more records in 1.5 secs
    setTimeout(() => {
      setIssueListState(issueList.concat(Array.from({ length: 20 })));
    }, 1500);

  };

  return (

    <Fragment>

      <InfiniteScroll
        dataLength={issueList.length}
        next={fetchMoreData}
        hasMore={true}
        loader={<h4>Loading...</h4>}
      >
        {issueList.map((i, index) => (
          <div className={classes.issueItemStyle} key={index}>
            div - #{index}
          </div>
        ))}
      </InfiniteScroll>

    </Fragment>

  );
}

export default IssueList;
