import React from 'react';
import './display.css';

const Display = ({ tabs }) => {
    const onClickHandler = (e, value) => {
        alert(value);
    };

    return (
        <div className='flex'>
            {tabs.map((tab, index) => (
                <div key={index} className="flex gap-5 m-auto">
                    <div className="flex flex-col items-center">
                        <button
                            onClick={(e) => {
                                onClickHandler(e, tab.content);
                            }}
                          
                        >
                            Tab {index + 1}
                        </button>
                        <div>
                            <h5 key={index}>{tab.content}</h5>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Display;