import React from 'react';
import Cards from '../Card';
import './chooseus.css'

export default function ChooseUs(){
    return(
        <div className="choose-wrapper">
            <div className="heading-wrapper">
                <h1>Why Choose us?</h1>
            </div>
            <div className='cards-wrapper'>
                <Cards title = "98% success" content="Amet minim mollit non deserunt ullamco estsit aliqua dolor do amet sint. Velit official consequatduis enim velit mollit Exer." img = './gift_icon.png'/>
                <Cards title = "98% success" content="Amet minim mollit non deserunt ullamco estsit aliqua dolor do amet sint. Velit official consequatduis enim velit mollit Exer." img = './gift_icon.png'/>
                <Cards title = "98% success" content="Amet minim mollit non deserunt ullamco estsit aliqua dolor do amet sint. Velit official consequatduis enim velit mollit Exer." img = './gift_icon.png'/>
            </div>
        </div>
    )
}
