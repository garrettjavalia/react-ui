import './App.css';
import { AppBar, Toolbar, Typography, makeStyles } from '@material-ui/core';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import IssueList from './IssueList';
import { IssueDetails } from './IssueDetails';


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
}));

function App() {

  const classes = useStyles();

  return (

    <Router>

      <div className="App">
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h6" className={classes.title}>
              Anglular / Angular-cli
            </Typography>
          </Toolbar>
        </AppBar>

        <Switch>
          <Route path="/issue-details/:issueID">
            <IssueDetails/>
          </Route>
          <Route path="/">
            <IssueList />
          </Route>
        </Switch>

      </div>

    </Router>

  );
}

export default App;
