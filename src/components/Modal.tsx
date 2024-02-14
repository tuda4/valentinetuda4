import { useState } from "react";
type Props = {
  onClose: () => void;
};

const Modal = ({ onClose }: Props) => {
  const [selectedOptions, setSelectedOptions] = useState<number>(0);

  const options = [
    { id: 1, label: "Cafe" },
    { id: 2, label: "Movie" },
    { id: 3, label: "Dinner" },
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
      <div className="bg-white p-4 rounded shadow w-[100vw] h-[80vh] overflow-y-auto flex gap-10 flex-col justify-evenly">
        <h2 className="text-[24px] text-center font-bold mb-4">
          What do u want date with me ?
        </h2>
        <div>
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
              className="mr-2 size-8  focus:ring-cyan-500"
            />
            <label htmlFor={`option-${option.id}`}>{option.label}</label>
          </div>
        ))}
        </div>
        <div className="flex justify-around items-center">
          <button
            onClick={handleSave}
            className={ selectedOptions ? "bg-blue-500 text-white px-4 py-2 rounded mt-4 w-[140px]" : "bg-gray-300 text-gray-500 px-4 py-2 rounded mt-4 w-[140px]"}
            disabled={Boolean(!selectedOptions)}
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
