import React from 'react';
import { Row, Col } from 'react-bootstrap';
import './Acheivments.css';

const achievements = [
  { title: '5+ TIMES GLOBAL #1 WEEKLY BLOG WRITER', platform: 'Dev', date: 'January, 2022', icon: '📝' },
  { title: 'TOP RATED FREELANCER', platform: 'Upwork', date: 'September, 2021', icon: '🏆' },
  { title: 'RISING TALENT', platform: 'Upwork', date: 'July, 2021', icon: '🚀' },
  { title: 'MARS 2020 HELICOPTER MISSION CONTR.', platform: 'GitHub & NASA', date: 'April, 2021', icon: '🚁' },
  { title: 'GLOBAL RANK 750', platform: 'Google Kickstart 2020 Round H', date: 'November, 2020', icon: '⭐' }
];

const Achievements = () => {
  return (
    <section className='achievements' id="ACHIEVEMENTS">
      <h2 className='text-center'>Achievements</h2>
      <Row className='justify-content-center'>
        <Col lg={7}>
          {achievements.map((ach, index) => (
            <div key={index} className='achievement-item d-flex align-items-center'>
              <div className={`icon-container me-3 icon-${index}`}>
                <span className='icon'>{ach.icon}</span>
              </div>
              <div className='achievement-details'>
                <h4>{ach.title}</h4>
                <p className='platform'>{ach.platform}</p>
                <p className='date special'>{ach.date}</p>
              </div>
            </div>
          ))}
        </Col>
      </Row>
    </section>
  );
};

export default Achievements;
