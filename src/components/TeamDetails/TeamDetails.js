import React from 'react';
import { useParams } from 'react-router';
import './TeamDetails.css';
import banner from '../../banner.jpg';
import { Container } from 'react-bootstrap';
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

export const TeamDetails = () => {
  const { teamId } = useParams();
  return (
    <div className="team-details">
      <div style={background} className="banner">
        <h3>Premier Leagues Team</h3>
      </div>
      <Container>
        <h3>{teamId}</h3>
      </Container>
    </div>
  );
};
