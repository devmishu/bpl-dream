import { CircleUserRound, Flag } from "lucide-react";
import profileImg from "../../assets/defelt-profile-img.png";

const AvaileablePlayersCard = ({ player }) => {
    const { name, country, role, price, rating, image, alt } = player;
    return (
        <div className="card gap-4 p-3  border-2 border-[#13131313] ">
            <div>
                <img className="w-full h-75 rounded-md" src={image ? image : profileImg} alt={alt} />
            </div>

            <div className="flex gap-2 items-center">
                <CircleUserRound />
                <h3 className="text-xl font-semibold">{name}</h3>
            </div>

            <div className="flex justify-between items-center border-b-2 border-[#11111136] pb-5 ">
                <div className="flex items-start gap-1">
                    <Flag />
                    <p>{country}</p>
                </div>
                <button className="btn btn-sm border-0">{role}</button>
            </div>


            <div className="flex justify-between items-center">
                <h2 className="text-xl font-semibold">Rating</h2>
                <h2 className="text-xl text-[#11111169]">{rating}</h2>
            </div>

            <div className="flex justify-between items-center">
                <h2 className="text-xl font-semibold">{role}</h2>
                <h2 className="text-xl text-[#11111169]">{role}</h2>
            </div>

            <div className="flex justify-between items-center">
                <h2 className="text-xl font-semibold">Price: ${price}</h2>
                <button className="btn btn-sm ">Choose Player</button>
            </div>
        </div>

    );
};

export default AvaileablePlayersCard;