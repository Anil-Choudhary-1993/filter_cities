import React from 'react';

const Box = React.memo(({ data }) => {
    return (
        <div className="Box">
            <img className="cityImage"  src={data.icon} alt={data.name}/>
            <div className="cityName">
                {data.name}
            </div>
        </div>
    )
})

export default Box;