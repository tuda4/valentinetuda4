import React, { useState } from "react";
type Props = {
  onClose: () => void;
};

const Modal = ({ onClose }: Props) => {
  const [selectedOptions, setSelectedOptions] = useState<number>(0);

  const options = [
    { id: 1, label: "Cafe + Dinner + Movie (home)" },
    { id: 2, label: "Cafe + (Dinner + Movie) (home) " },
    { id: 3, label: "Cafe + Dinner + Movie (Cinema)" },
    // Add more options as needed
  ];

  const handleOptionToggle = (optionId: number) => {
    setSelectedOptions(optionId);
  };

  const handleSave = () => {
    console.log(selectedOptions);
    console.log(new Date());
    onClose();
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-500 bg-opacity-50 w-full h-full place-items-center">
      <div className="bg-white p-4 rounded shadow w-[50vw] h-[80vh]">
        <h2 className="text-lg font-bold mb-4">
          What do u want date with me ?
        </h2>
        {options.map((option) => (
          <div
            key={option.id}
            className="flex items-center mb-2 gap-4"
            onClick={() => handleOptionToggle(option.id)}
          >
            <input
              type="checkbox"
              id={`option-${option.id}`}
              checked={option.id === selectedOptions}
              className="mr-2"
            />
            <label htmlFor={`option-${option.id}`}>{option.label}</label>
          </div>
        ))}
        <div className="flex justify-around items-center">
          <button
            onClick={onClose}
            className="bg-gray-500 text-white px-4 py-2 rounded mt-4"
          >
            Cancel
          </button>
          <button
            onClick={handleSave}
            className="bg-blue-500 text-white px-4 py-2 rounded mt-4"
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
