import React from 'react';
import './Track.css';

export class Track extends React.Component {
  render() {
    const renderAction = () => {
      let isRemoval = true; // isRemoval does what???
      if (isRemoval) {
        <button className="Track-action">-</button>
      } else {
        <button className="Track-action">+</button>
      }
    }
    return (
      <div className="Track">
          <div className="Track-information">
            <h3>track name will go here </h3>
            <p>track artist will go here | track album will go here</p>
          </div>
          <button className="Track-action">+ or - will go here{renderAction}</button>
      </div>
    )
  }
}
