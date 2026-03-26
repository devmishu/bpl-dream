import React from 'react';
import { MdDelete } from 'react-icons/md';

const SelectedPlayerCard = ({ selectedPlayers, selectedPlayer,setSelectedPlayers,coin, setCoin }) => {
    const { name, role, image } = selectedPlayer;

    const handleDeleteSelectedPlayers = (selectedPlayer) => {
        const filterSelectedPlayers = selectedPlayers.filter(players => selectedPlayer.id !== players.id);
        console.log(filterSelectedPlayers);
        setSelectedPlayers(filterSelectedPlayers);
        setCoin(coin + selectedPlayer.price);
    }
    return (
        <div className='flex justify-between items-center border border-[#11111136] p-5 rounded-sm'>
            <div className='flex items-center gap-2 '>
                <img className='w-20 h-20 rounded-md' src={image} alt="" />
                <div>
                    <h3>{name}</h3>
                    <p>{role}</p>
                </div>
            </div>
            <div onClick={() => handleDeleteSelectedPlayers(selectedPlayer)} className='p-5 bg-[#11111127] rounded-md hover:cursor-pointer hover:bg-[#11111113]'>
                <MdDelete />
            </div>
        </div>
    );
};

export default SelectedPlayerCard;