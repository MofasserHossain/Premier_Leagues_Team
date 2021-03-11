import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import './TeamDetails.css';
import { Container } from 'react-bootstrap';
import DetailsCard from '../DetailsCard/DetailsCard';
import SocialIcon from '../SocialIcon/SocialIcon';

export const TeamDetails = () => {
  const { teamId } = useParams();
  const [teamDetails, setTeamDetails] = useState({});

  useEffect(() => {
    const url = `https://www.thesportsdb.com/api/v1/json/1/lookupteam.php?id=${teamId}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setTeamDetails(data.teams[0]));
  }, [teamId]);
  const { strTeamBanner, strTeamBadge } = teamDetails;
  const background = {
    backgroundImage: `url(${strTeamBanner})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    height: '50vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  };
  return (
    <div className="team-details">
      <div style={background} className="banner2">
        <img className="team__badge" src={strTeamBadge} alt="Badge" />
      </div>
      <Container>
        <DetailsCard teamDetails={teamDetails}></DetailsCard>
        <SocialIcon></SocialIcon>
      </Container>
    </div>
  );
};
