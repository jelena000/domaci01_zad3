import React from 'react';
import { Link } from 'react-router-dom';
import { useHistory } from "react-router-dom";

const Card = ({ id, title, content, imgUrl}) => {
        let history = useHistory();

        return(
            <div onClick={() => history.push('/post/'+id)}  className="card" >
                <div style={{height: '65%', backgroundImage: 'url("' + imgUrl + '")'}}>
                </div>
                <div style={{height: '35%', textAlign: 'center', paddingTop: 4}}>
                    <span className="card-title">{title}</span>
                    <p className="card-p">{content}</p>
                </div>
            </div>
        );
};
export default Card;