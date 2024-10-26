

const Selected = ({ selectedPlayers, handleDeletePlayer }) => {
   


    return (
        <div className="mt-5">
            <h2></h2>
            {selectedPlayers.length === 0 ? (
                <p></p>
            ) : (
                selectedPlayers.map((player, index) => (
                    <div key={index} className="border p-3 rounded-xl mb-4  flex justify-between items-center">
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
        </div>
    );
};

export default Selected; 


