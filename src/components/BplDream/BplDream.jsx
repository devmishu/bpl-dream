import { useState } from "react";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import AvailablePlayers from "../Main/AvailablePlayers";


const BplDream = () => {
    const [coin, setCoin] = useState(50000);
    const [selectedPlayers, setSelectedPlayers] = useState([])
    return (
        <div>
            <Header coin={coin} setCoin={setCoin} />
            <AvailablePlayers
                selectedPlayers={selectedPlayers}
                setSelectedPlayers={setSelectedPlayers}
                coin={coin}
                setCoin={setCoin}
            />
            <Footer />
        </div>
    );
};

export default BplDream;