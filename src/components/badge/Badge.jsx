import React from 'react';

import './Badge.css';

const Badge = ({ type, content }) => <span className={`badge badge-${type}`}> {content} </span>;

export default Badge