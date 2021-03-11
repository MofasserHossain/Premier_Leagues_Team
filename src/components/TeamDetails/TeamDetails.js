import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import './TeamDetails.css';
import { Container } from 'react-bootstrap';
import DetailsCard from '../DetailsCard/DetailsCard';
import SocialIcon from '../SocialIcon/SocialIcon';
import NotFound from '../NotFound/NotFound';

export const TeamDetails = () => {
  const { teamId } = useParams();
  const [teamDetails, setTeamDetails] = useState([]);
  useEffect(() => {
    const url = `https://www.thesportsdb.com/api/v1/json/1/lookupteam.php?id=${teamId}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setTeamDetails(data.teams[0]));
  }, [teamId]);

  const { strTeamBanner } = teamDetails;

  return (
    <div className="team-details">
      {teamDetails ? (
        <>
          <div className="banner2">
            {strTeamBanner ? (
              <img src={strTeamBanner} alt="banner" />
            ) : (
              <h5 className="text-center">Banner Not Found</h5>
            )}
          </div>
          <Container>
            <DetailsCard teamDetails={teamDetails}></DetailsCard>
            <SocialIcon></SocialIcon>
          </Container>
        </>
      ) : (
        <NotFound></NotFound>
      )}
    </div>
  );
};
