import React, { Suspense, useState } from 'react';
import AvailablePlayersHeader from './AvailablePlayersHeader';
import AvailablePlayersGrid from './AvailablePlayersGrid';
import SelectedPlayers from './SelectedPlayers';

// availeable players promice
const availeablePlayersPromice = async () => {
    const res = await fetch('playersData.json');
    return res.json();
}

const AvailablePlayers = ({ selectedPlayers, setSelectedPlayers, coin, setCoin }) => {
    const availeablePlayers = availeablePlayersPromice();
    const [selectedType, setSelectedType] = useState('Available');

    return (
        <div className='container mx-auto px-5 my-10 '>

            <AvailablePlayersHeader selectedType={selectedType} setSelectedType={setSelectedType} availeablePlayers={availeablePlayers} selectedPlayers={selectedPlayers} />


            <Suspense fallback={<span className="loading loading-spinner loading-xl"></span>}>
                {
                    selectedType === 'Available' ? <AvailablePlayersGrid availeablePlayers={availeablePlayers} selectedPlayers={selectedPlayers} setSelectedPlayers={setSelectedPlayers} coin={coin}
                        setCoin={setCoin}
                    /> : <SelectedPlayers selectedPlayers={selectedPlayers} setSelectedPlayers={setSelectedPlayers} coin={coin} setCoin={setCoin} />
                }
            </Suspense>
        </div>
    );
};

export default AvailablePlayers;