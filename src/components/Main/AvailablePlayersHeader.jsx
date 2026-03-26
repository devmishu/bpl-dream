
const AvailablePlayersHeader = ({ selectedType, setSelectedType, selectedPlayers }) => {
    return (
        <div className="flex gap-3 flex-col md:flex-row justify-between items-center ">
            <h2 className="text-3xl font-bold ">{selectedType === 'Available' ? 'Available Players' : `Selected Players(${selectedPlayers.length}/70)`}</h2>

            <div className="w-[320px] flex rounded-xl overflow-hidden border border-gray-300 bg-gray-100">

                <button onClick={() => setSelectedType('Available')} className={`flex-1 py-2 text-sm font-semibold ${selectedType === 'Available' && 'bg-lime-400'} text-black hover:cursor-pointer`}>
                    Available
                </button>

                <button onClick={() => setSelectedType('Selected')} className={`flex-1 py-2 text-sm font-medium ${selectedType === 'Selected' && 'bg-lime-400'} hover:cursor-pointer`}>
                    Selected ({selectedPlayers.length})
                </button>

            </div>
        </div>
    );
};

export default AvailablePlayersHeader;