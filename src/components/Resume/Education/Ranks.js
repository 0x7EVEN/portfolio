import React from 'react';
import PropTypes from 'prop-types';

const Ranks = ({ data }) => (
  <article className="degree-container">
    <header>
      <h4 className="degree"><b>{data.platform}</b></h4>
      <p className="school"><a href={data.link} style={{ backgroundColor: data.color }}>{data.rank} </a><a href={data.link}>↗</a> {data.year},
        <br />
        <span style={{ lineHeight: '1.5em', letterSpacing: '1px' }}>{data.info}</span>
      </p>
    </header>
  </article>
);

Ranks.propTypes = {
  data: PropTypes.shape({
    rank: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
    info: PropTypes.string.isRequired,
    platform: PropTypes.string.isRequired,
    color: PropTypes.string.isRequired,
    year: PropTypes.number.isRequired,
  }).isRequired,
};

export default Ranks;
