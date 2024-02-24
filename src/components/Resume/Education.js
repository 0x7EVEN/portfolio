import React from 'react';
import PropTypes from 'prop-types';

import Ranks from './Education/Ranks';

const Achievements = ({ data }) => (
  <div className="Achievements">
    <div className="link-to" id="Achievements" />
    <div className="title">
      <h3>Achievements</h3>
    </div>
    {data.map((degree) => (
      <Ranks
        data={degree}
        key={degree.platoform}
      />
    ))}
  </div>
);

Achievements.propTypes = {
  data: PropTypes.arrayOf(PropTypes.shape({
    platoform: PropTypes.string,
    rank: PropTypes.string,
    link: PropTypes.string,
    year: PropTypes.number,
  })),
};

Achievements.defaultProps = {
  data: [],
};

export default Achievements;
