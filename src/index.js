import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';


function Poster({info}) {
    return (
        <div className="container">
            <Image image={info.poster1.image}/>
            <Word word={info.poster1.word}/>
            <Quote quote={info.poster1.quote}/>
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

const Word = ({word}) => {
    return (
        <div className="word">
            {word}
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