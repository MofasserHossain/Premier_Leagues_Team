import React from 'react';
import './DetailsCard.css';
import { Col, Row } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faFlag,
  faFutbol,
  faMapMarkerAlt,
  faMars,
} from '@fortawesome/free-solid-svg-icons';
import male from '../../male.png';
import female from '../../female.png';

const DetailsCard = (props) => {
  const {
    strTeam,
    intFormedYear,
    strCountry,
    strGender,
    strSport,
    strDescriptionEN,
    strDescriptionDE,
  } = props.teamDetails;
  return (
    <>
      <div className="teamDetails__card my-4">
        <Row>
          <Col md={6}>
            <div className="teamDetails__info">
              <h1 className="ml-2">{strTeam}</h1>
              <p>
                <span>
                  <FontAwesomeIcon className="ml-2" icon={faMapMarkerAlt} />
                </span>
                Founded : {intFormedYear}
              </p>
              <p>
                <span>
                  <FontAwesomeIcon className="ml-2" icon={faFlag} />
                </span>
                Country : {strCountry}
              </p>
              <p>
                <span>
                  <FontAwesomeIcon className="ml-2" icon={faFutbol} />
                </span>
                Sport Type : {strSport}
              </p>
              <p>
                <span>
                  <FontAwesomeIcon className="ml-2" icon={faMars} />
                </span>
                Gender : {strGender}
              </p>
            </div>
          </Col>
          <Col md={6}>
            {strGender &&
              (strGender === 'Male' ? (
                <img src={male} alt="male" />
              ) : (
                <img src={female} alt="male" />
              ))}
          </Col>
        </Row>
      </div>
      <div className="team__desc">
        {strDescriptionDE && <p>{strDescriptionDE}</p>}
        {strDescriptionEN && <p>{strDescriptionEN}</p>}
      </div>
    </>
  );
};

export default DetailsCard;
