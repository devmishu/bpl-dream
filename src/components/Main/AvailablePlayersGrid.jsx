
import { use } from "react";
import AvaileablePlayersCard from "./AvaileablePlayersCard";

const AvailablePlayersData = ({ availeablePlayers }) => {
    const availeablePlayersData = use(availeablePlayers)
    return (
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 my-5 ">

            {/* <AvaileablePlayersCard availeablePlayersData={availeablePlayersData}/> */}
            {
                availeablePlayersData.map(player => <AvaileablePlayersCard player={player} key={player.id} />)
            }
        </div>
    );
};

export default AvailablePlayersData;