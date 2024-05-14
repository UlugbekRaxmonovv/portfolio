import React from 'react';
import './Floting.css'

const Floting = ({img,tixt,tixt1}) => {
    return (
        <div>
            <div className="floting">
                <img  src={img} alt="" />
                <span>
               {tixt}
                    <br />
                  {tixt1}
                </span>
            </div>
        </div>
    );
}

export default Floting;
