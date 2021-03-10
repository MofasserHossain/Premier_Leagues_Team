import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Team from './components/Team/Team';
import { useState, useEffect } from 'react';
import { Container, Row } from 'react-bootstrap';
import { TeamDetails } from './components/TeamDetails/TeamDetails';
import banner from './banner.jpg';
const background = {
  backgroundImage: `url(${banner})`,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat',
  height: '40vh',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
};
function App() {
  const [teams, setTeams] = useState([]);
  useEffect(() => {
    fetch(
      'https://www.thesportsdb.com/api/v1/json/1/search_all_teams.php?l=English%20Premier%20League'
    )
      .then((res) => res.json())
      .then((data) => setTeams(data.teams));
  }, []);
  console.log(teams);
  const teamsList = teams.slice(0, 18);
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/">
          <div style={background} className="banner">
            <h3>Premier Leagues Team</h3>
          </div>
          <Container>
            <Row>
              {teamsList.map((team) => (
                <Team key={team.idTeam} team={team}></Team>
              ))}
            </Row>
          </Container>
        </Route>
        <Route path="/all-teams">
          <div style={background} className="banner">
            <h3>Premier Leagues Team</h3>
          </div>
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
        <Route path="*"></Route>
      </Switch>
    </Router>
  );
}

export default App;
