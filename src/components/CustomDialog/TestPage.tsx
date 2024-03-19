import UpdateRecipe from "./UpdateDialog";
import { useState } from "react";
import Modal from "./Modal";




function Test() {
    const [isDialogOpen, setIsDialogOpen] = useState(false);
    const [isModalOpen, setIsModalOpe] = useState(false);

    const openDialog = () => {
        setIsDialogOpen(true)
    }

    const openModal = () => {
        setIsModalOpe(true);
    }

    const closeModal = () => {
        setIsModalOpe(false)
    }


    return (
        <div>
            hej
            <div>
            <button onClick={openDialog}>Ändra receptet</button>
            <UpdateRecipe isOpen={isDialogOpen} onClose={(() => setIsDialogOpen(false))}/>
        </div>  
        <div>
            <button onClick={openModal}>Testa öppna Modal</button>
            <Modal
            isOpen = {isModalOpen}
            onCancel= {closeModal}
            imageUrl="https://images.immediate.co.uk/production/volatile/sites/30/2023/06/Ultraprocessed-food-58d54c3.jpg?quality=90&resize=440,400"
            />
        </div>
        </div>
    )
}

export default Test;
