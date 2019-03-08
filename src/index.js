import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';


function Poster(props) {
    return (
        <div className="container">
            <Image image={props.info.poster2.image}/>
            <Word word={props.info.poster2.word}/>
            <Quote quote={props.info.poster2.quote}/>
        </div>
    )
}

const Image = (props) => {
    return (
        <img 
            src={props.image}
            alt="puppy" 
            className="image"
        />
    )
}

const Word = (props) => {
    return (
        <div className="word">
            {props.word}
        </div>
    )
}

const Quote = (props) => {
    return (
        <div className="quote">
            {props.quote}
        </div>
    )
}

var info = {
    poster1: {
        image: 'https://www.allthingsdogs.com/wp-content/uploads/2018/08/History-of-Black-GSDs.jpg',
        word: 'React',
        quote: 'The best thing since jQuery, probably'
    },
    poster2: {
        image: 'https://www.feedfond.com/wp-content/uploads/2018/04/Health-Concerns-for-a-Black-German-Shepherd.jpg',
        word: 'Savannah',
        quote: 'The best dog in the world!'
    }
}

ReactDOM.render(<Poster info={info} />, document.querySelector('#root'))