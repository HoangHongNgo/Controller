import react, { useState } from 'react';
import axios from 'axios';

const Get = (probs) => {
    const setGameClass = (isplay) => {
        if (isplay) return "border border-success"
        else return "border border-danger"
    }

    return (
        <div className="d-flex justify-content-center flex-wrap">
            {probs.list.map(data =>
                <button className={`m-3 card ${setGameClass(data.isplay)}`} key={data._id} style={{ width: '18rem', height: '20rem' }}>
                    <img src={data.img} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <p>{data.title}</p>
                        <p>{data.genre}</p>
                        <p>{data.developper}</p>
                    </div>
                </button>)}
        </div>
    )
}

export default Get