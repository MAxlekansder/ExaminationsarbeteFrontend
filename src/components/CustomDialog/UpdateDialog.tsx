import React from "react";


interface UpdateProps {
    isOpen: boolean;
    onClose: () => void;


}

function UpdateRecipe({isOpen, onClose }:UpdateProps ) {


    return (
        <div>
            {isOpen && (
                <div className="dialog-overlay">
                    <div className="dialog-content">
                        <h2>Uppdatera recept!</h2>
                        <button onClick={onClose}></button>
                    </div>
                </div>
            )}
        </div>
    )
}

export default UpdateRecipe