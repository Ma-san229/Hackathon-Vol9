import { useState } from "react";

const AlbumInfo = ({ image_url, ended_date }) => {
    const [isOpen, setIsOpen] = useState(false);

    const openModal = () => {
        setIsOpen(true);
    };

    const closeModal = () => {
        setIsOpen(false);
    };

    return (
        <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow-lg p-3" onClick={openModal}>
            <div className="flex justify-center items-center h-64 mb-1">
                <img className="object-contain h-full" src={image_url} alt="generated_image" />
            </div>

            <div className="border-t border-gray-300"></div>

            {isOpen && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-70" onClick={closeModal}>
                    <div className="relative bg-white rounded-lg shadow p-4 max-w-4xl overflow-auto" onClick={e => e.stopPropagation()}>
                        <button
                            className="absolute top-2 right-2 text-gray-700 "
                            onClick={closeModal}
                        >
                            ✕
                        </button>
                        <img className="w-auto h-auto max-w-full max-h-full" src={image_url} alt="Modal" />
                    </div>
                </div>
            )}

            <div className="p-2">
                <div className="flex justify-center items-center">
                    <p className="mb-2 tracking-tight text-gray-900">{ended_date}</p>
                </div>
            </div>
        </div>
    )
}


export default AlbumInfo;