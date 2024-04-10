import React from 'react';
// import Card from '@mui/material/Card';
// import CardContent from '@mui/material/CardContent';
// import Typography from '@mui/material/Typography';
import './card.css';

export default function Cards({img,title,content,subtitle}) {

    return (
        <div className="box-container">
            <div className="img-wrapper">
                <img src={img} alt="giftImage" />
            </div>
            <h4>{title}</h4>
            <h5>{subtitle}</h5>
            <p>{content}</p>
            <button className="read-button">Read more</button>
      </div>
    )
}
