

const ModalClose = ({ onConfirm, onCancel }) => {
    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
            <div className="bg-white p-5 rounded">
                <h3 className="text-center">Are you sure you want to delete this player?</h3>
                <div className="flex justify-around mt-5">
                    <button onClick={onConfirm} className="border p-2 rounded bg-red-500 text-white">
                        Confirm
                    </button>
                    <button onClick={onCancel} className="border p-2 rounded bg-gray-300">
                        Cancel
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ModalClose;
