import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useTransition, animated } from 'react-spring';
import { addSquare, removeSquare } from './squaresSlice';
import './App.css';

function App() {
    const dispatch = useDispatch();
    const squares = useSelector((state) => state.squares.squares);

    const handleAddSquare = () => {
        const newSquare = {
            id: Date.now(),
            color: getRandomColor(),
        };
        dispatch(addSquare(newSquare));
    };

    const handleRemoveSquare = () => {
        dispatch(removeSquare());
    };

    const getRandomColor = () => {
        const letters = '0123456789ABCDEF';
        let color = '#';
        for (let i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    };

    const transitions = useTransition(squares, {
        from: { opacity: 0, transform: 'translateX(-100%)' },
        enter: { opacity: 1, transform: 'translateX(0%)' },
        leave: (item, index) => ({ opacity: 0, transform: `translateX(${(5 - index) * 100}%)` }),
        keys: (item) => item.id,
    });

    return (
        <div className="App">
            <div className="buttons">
                <button className="add-button" disabled={squares.length > 4} onClick={handleAddSquare}>Добавить</button>
                <button className="remove-button" disabled={!squares.length} onClick={handleRemoveSquare}>Убрать</button>
            </div>
            <div className="squares">
                {transitions((style, item, t, index) => (
                    <animated.div
                        key={item.id}
                        className="square"
                        style={{ ...style, backgroundColor: item.color, left: `${index * 20}%` }}
                    />
                ))}
            </div>
        </div>
    );
}

export default App;
