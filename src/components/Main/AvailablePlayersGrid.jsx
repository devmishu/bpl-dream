

import { use } from "react";
import AvaileablePlayersCard from "./AvaileablePlayersCard";

const AvailablePlayersData = ({ availeablePlayers, selectedPlayers, setSelectedPlayers, coin, setCoin }) => {
    const availeablePlayersData = use(availeablePlayers);

    return (
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 my-5 ">
            {
                availeablePlayersData.map(player => <AvaileablePlayersCard
                    player={player}
                    key={player.id}
                    selectedPlayers={selectedPlayers}
                    setSelectedPlayers={setSelectedPlayers}
                    coin={coin}
                    setCoin={setCoin}
                // availeablePlayersData={availeablePlayersData}
                />)
            }
        </div>
    );
};

export default AvailablePlayersData;