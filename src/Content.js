import React from 'react';
import Box from './Box';

const Content = ({ data, }) => {
    return (
        <div className="content">

            <h2 className="popular">Popular</h2>
            <div className="box-container">
                {
                    data.popular.map(city =>
                        <Box key={city.id} data={city} />)
                }
            </div>


            <h2 className="others">Others</h2>
            <div className="box-container">
                {
                    data.others.map(city =>
                        <Box key={city.id} data={city} />)
                }
            </div>
        </div>
    )
}

export default Content;