import React from 'react';
import AvailablePlayersHeader from './AvailablePlayersHeader';
import AvailablePlayersData from './AvailablePlayersData';

const AvailablePlayers = () => {
    return (
        <div className='container mx-auto px-5 my-10 '>
            <AvailablePlayersHeader />
            <AvailablePlayersData />
        </div>
    );
};

export default AvailablePlayers;