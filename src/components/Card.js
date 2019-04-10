import React from 'react';

const Card = ( props) => {
  const {name, email, id } = props;
    
    return (
<div className="robotCard tc dib br3 pa3 ma2 grow bw2 shadow-5">
        <img alt='robots' src={`https://robohash.org/${id}?200x200x`} />
        <div>
        <h2>{name} </h2>
        <p>{email} </p>
    </div> 
</div>
    );
}

export default Card;