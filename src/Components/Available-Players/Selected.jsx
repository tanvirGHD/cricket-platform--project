import { useState } from "react";

const Selected = ({ selectedPlayers, handleDeletePlayer }) => {
    const [showAvailable, setShowAvailable] = useState(true);

    return (
        <div className="flex flex-col mt-5">
            <h2></h2>
            {selectedPlayers.length === 0 ? (
                <p></p>
            ) : (
                selectedPlayers.map((player, index) => (
                    <div key={index} className="border p-3 rounded-xl mb-4 w-11/12 flex justify-between items-center">
                        <div className="flex items-center gap-4">
                            <img className="rounded-xl w-16 h-16" src={player.player_image} alt={player.player_name} />
                            <div>
                                <p>{player.player_name}</p>
                                <p><strong>{player.batting_style}</strong></p>
                            </div>
                        </div>
                        <div>
                            <button onClick={() => handleDeletePlayer(index)}>
                                <i className="fa-regular fa-trash-can"></i>
                            </button>
                        </div>
                    </div>
                ))
            )}
            <button 
                className={`p-2 border rounded-xl ${showAvailable ? 'bg-gradient-to-r from-yellow-400 to-pink-500 text-white' : ''}`} 
                onClick={() => setShowAvailable(true)}
            >
                Add More Player
            </button>

        </div>
    );
};

export default Selected; 