

const AvailablePlayersHeader = () => {
    return (
        <div className="flex justify-between items-center ">
            <h2 className="text-3xl font-bold ">Available Players</h2>
            <div className="flex">
                <button className="btn btn-primary">Available</button>
                <button className="btn btn-primary">Selected</button>
            </div>
        </div>
    );
};

export default AvailablePlayersHeader;