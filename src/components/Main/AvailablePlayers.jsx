import React, { Suspense } from 'react';
import AvailablePlayersHeader from './AvailablePlayersHeader';
import AvailablePlayersGrid from './AvailablePlayersGrid';

// availeable players promice
const availeablePlayersPromice = async () => {
    const res = await fetch('../../../public/playersData.json');
    return res.json();
}

const AvailablePlayers = () => {
    const availeablePlayers = availeablePlayersPromice();

    return (
        <div className='container mx-auto px-5 my-10 '>
            <AvailablePlayersHeader />

            <Suspense fallback={<span className="loading loading-spinner loading-xl"></span>}>
                <AvailablePlayersGrid availeablePlayers={availeablePlayers} />
            </Suspense>
        </div>
    );
};

export default AvailablePlayers;