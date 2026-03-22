

const AvailablePlayersHeader = () => {
    return (
        <div className="flex gap-3 flex-col md:flex-row justify-between items-center ">
            <h2 className="text-3xl font-bold ">Available Players</h2>

            <div className="w-[320px] flex rounded-xl overflow-hidden border border-gray-300 bg-gray-100">

                {/* Active Button */}
                <button className="flex-1 py-2 text-sm font-semibold bg-lime-400 text-black hover:cursor-pointer">
                    Available
                </button>

                {/* Inactive Button */}
                <button className="flex-1 py-2 text-sm font-medium  text-gray-500 hover:cursor-pointer">
                    Selected (0)
                </button>

            </div>
        </div>
    );
};

export default AvailablePlayersHeader;