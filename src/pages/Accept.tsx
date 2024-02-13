import { useState } from "react";
import Modal from '../components/Modal';

export default function Accept() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const handleOpenModal = () => {
    setIsModalOpen(true);
  };
  console.log(isModalOpen)
  const handleCloseModal = () => {
    setIsModalOpen(false);
  }
  return (
    <div>
      <div className="grid gap-[10px] m-auto place-items-center w-[100vw]">
        <img alt="bugcat yayyy" className="h-[400px]" src="/bugcat-yay.gif" />
        Yayyy~
          <button className="bg-cyan-500 hover:bg-cyan-700 text-white font-bold py-2 px-4 rounded-full" onClick={handleOpenModal}>please choose one</button>
      </div>
      {isModalOpen && <Modal onClose={handleCloseModal} />}
    </div>
  );
}
