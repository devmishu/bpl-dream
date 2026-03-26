import React from 'react';
import SelectedPlayerCard from './SelectedPlayerCard';

const SelectedPlayers = ({ selectedPlayers, setSelectedPlayers, coin, setCoin }) => {
    return (
        <div className='mt-10 flex flex-col gap-5 '>
            {
                selectedPlayers.map(selectedPlayer => <SelectedPlayerCard
                    key={selectedPlayer.id}
                    selectedPlayers={selectedPlayers}
                    selectedPlayer={selectedPlayer}
                    setSelectedPlayers={setSelectedPlayers}
                    coin={coin}
                    setCoin={setCoin}
                />)
            }
        </div>
    );
};

export default SelectedPlayers;