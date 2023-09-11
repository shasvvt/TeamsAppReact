import React from 'react';
import classes from './Destination.module.css'

const Destination = (props) => {
    return (
        <div className={classes.destination}>
          <img src={props.image} alt={props.title} />
          <div className={classes.info}>
            <h2>{props.title}</h2>
            <div>{props.duration} days</div>
          </div>
        </div>
      );
}

export default Destination;