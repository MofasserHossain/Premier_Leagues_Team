import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Team from './components/Team/Team';
import { useState, useEffect } from 'react';
import { Container, Row } from 'react-bootstrap';
import { TeamDetails } from './components/TeamDetails/TeamDetails';
import NotFound from './components/NotFound/NotFound';
import Banner from './components/Banner/Banner';

function App() {
  const [teams, setTeams] = useState([]);
  useEffect(() => {
    fetch(
      'https://www.thesportsdb.com/api/v1/json/1/search_all_teams.php?l=English%20Premier%20League'
    )
      .then((res) => res.json())
      .then((data) => setTeams(data.teams));
  }, []);
  const teamsList = teams.slice(0, 18);

  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/">
          <Banner></Banner>
          <Container>
            <Row>
              {teamsList.map((team) => (
                <Team key={team.idTeam} team={team}></Team>
              ))}
            </Row>
          </Container>
        </Route>
        <Route path="/all-teams">
          <Banner></Banner>
          <Container>
            <Row>
              {teamsList.map((team) => (
                <Team key={team.idTeam} team={team}></Team>
              ))}
            </Row>
          </Container>
        </Route>
        <Route path="/team/:teamId">
          <TeamDetails></TeamDetails>
        </Route>
        <Route path="/log-in"></Route>
        <Route path="*">
          <NotFound></NotFound>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
