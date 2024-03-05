// Alexander 

import React, { useState } from "react";

interface InstructionListProps {
    instructions: string[];
    setInstructions: React.Dispatch<React.SetStateAction<string[]>>;
}

function InstructionList ({instructions, setInstructions }: InstructionListProps): JSX.Element {
    const [newInstruction, setNewInstruction] = useState("");
    

    const handleAddInstructions = () => {
        if (newInstruction.trim() !== "") {
            setInstructions([...instructions, newInstruction]);
            setNewInstruction("");
        }
        // alert("Instructions can't be empty")
    }


    const handleRemoveInstruction = (index: number) => {  setInstructions(instructions.filter((_, i) => i !== index)); }


    return (
        <div>
          <ul>
            {instructions.map((instruction, index) => (
              <li key={index}>
                {instruction}
                <button onClick={() => handleRemoveInstruction(index)}>Remove</button>
              </li>
            ))}
          </ul>
          <input
            type="text"
            value={newInstruction}
            onChange={(e) => setNewInstruction(e.target.value)}
          />
          <button onClick={handleAddInstructions}>Add Instruction</button>
        </div>
    )
}

export default InstructionList;