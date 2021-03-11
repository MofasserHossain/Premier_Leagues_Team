import React from 'react';
import { Button, Card, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import './Team.css';

const Team = (props) => {
  const teamData = props.team;
  const { strTeam, strSport, strTeamBadge, idTeam } = teamData;
  return (
    <Col md={6} lg={4} className="my-4 team">
      <Card className="team__card">
        <Card.Img
          className="card-image pt-3"
          variant="top"
          src={strTeamBadge}
        />
        <Card.Body className="text-center ">
          <Card.Title>{strTeam}</Card.Title>
          <Card.Text>Team Type : {strSport}</Card.Text>
          <Button className="button">
            <Link to={`team/${idTeam}`}>
              Explore <FontAwesomeIcon className="ml-2" icon={faArrowRight} />
            </Link>
          </Button>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default Team;
