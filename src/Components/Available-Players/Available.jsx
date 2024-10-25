import { useState, useEffect } from 'react';
import Selected from './Selected'; // Import the Selected component

const Available = () => {
    const [allPlayers, setAllPlayers] = useState([]);
    const [selectedPlayers, setSelectedPlayers] = useState([]);
    const [showAvailable, setShowAvailable] = useState(true);
    const [isSelectModalOpen, setSelectModalOpen] = useState(false);
    const [isDeleteModalOpen, setDeleteModalOpen] = useState(false);
    const [playerToDelete, setPlayerToDelete] = useState(null);

    useEffect(() => {
        // Fetch players data
        fetch('FakeData.json')
            .then(res => res.json())
            .then(data => setAllPlayers(data));
    }, []);

    const handleSelectPlayer = (player) => {
        if (!selectedPlayers.includes(player)) {
            setSelectedPlayers([...selectedPlayers, player]);
            setSelectModalOpen(true); // Open select modal
        }
    };

    const handleDeletePlayer = (index) => {
        setPlayerToDelete(index);
        setDeleteModalOpen(true); // Open delete confirmation modal
    };

    const confirmDeletePlayer = () => {
        const updatedPlayers = selectedPlayers.filter((_, i) => i !== playerToDelete);
        setSelectedPlayers(updatedPlayers);
        setDeleteModalOpen(false);
    };

    return (
        <div className="w-11/12 mx-auto my-10">
            <div className="flex justify-between items-center mb-5">
                <div><p>Available Players</p></div>
                <div>
                    <button 
                        className={`p-2 border rounded-l-xl ${showAvailable ? 'bg-blue-500 text-white' : ''}`} 
                        onClick={() => setShowAvailable(true)}
                    >
                        Available
                    </button>
                    <button 
                        className={`p-2 border rounded-r-xl ${!showAvailable ? 'bg-blue-500 text-white' : ''}`} 
                        onClick={() => setShowAvailable(false)}
                    >
                        Selected (<span>{selectedPlayers.length}</span>)
                    </button>
                </div>
            </div>

            <div className="grid md:grid-cols-3 gap-4">
                {showAvailable ? (
                    allPlayers.map((player, index) => (
                        <div key={index} className="border p-4 rounded space-y-3">
                            <img className="rounded-lg w-full h-[280px]" src={player.player_image} alt={player.player_name} />
                            <div className='flex gap-3 items-center'>
                                <img className="rounded-full h-11 w-12" src={player.player_image} alt={player.player_name} />
                                <p>{player.player_name}</p>
                            </div>
                            <div className='flex justify-between'>
                                <div className='flex items-center gap-2'>
                                    <i className="fa-solid fa-flag"></i>
                                    <p>{player.country}</p>
                                </div>
                                <div><p className='border rounded p-1 font-bold text-gray-600 text-sm'>{player.role}</p></div>
                            </div>
                            <p><strong>Rating</strong> {player.rating}</p>
                            <div className='flex justify-between'>
                                <p><strong>{player.batting_style}</strong></p>
                                <p><strong>{player.bowling_style}</strong></p>
                            </div>
                            <div className='flex justify-between'>
                                <p><strong>Price: {player.price}</strong></p>
                                <button 
                                    className='border p-1 rounded-lg text-sm font-bold' 
                                    onClick={() => handleSelectPlayer(player)}
                                >
                                    Choose Player
                                </button>
                            </div>
                            
                        </div>
                    ))
                ) : (
                    <Selected selectedPlayers={selectedPlayers} handleDeletePlayer={handleDeletePlayer} />
                )}
            </div>

            {/* Select Modal */}
            {isSelectModalOpen && (
                <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
                    <div className="bg-white p-5 rounded">
                        <h3>Player Selected</h3>
                        <button onClick={() => setSelectModalOpen(false)} className="mt-3 border p-2 rounded">Close</button>
                    </div>
                </div>
            )}

            {/* Delete Confirmation Modal */}
            {isDeleteModalOpen && (
                <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
                    <div className="bg-white p-5 rounded">
                        <h3>Are you sure you want to delete this player?</h3>
                        <button onClick={confirmDeletePlayer} className="mt-3 border p-2 rounded">Yes</button>
                        <button onClick={() => setDeleteModalOpen(false)} className="mt-3 border p-2 rounded">No</button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Available;
