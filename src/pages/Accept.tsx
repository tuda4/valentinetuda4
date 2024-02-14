import { useState } from "react";
import Modal from '../components/Modal';

export default function Accept() {
  const [isModalOpen, setIsModalOpen] = useState(true);
  const handleCloseModal = () => {
    setIsModalOpen(false);
  }
  return (
    <div className="flex w-full justify-center items-center">
      <div className="grid gap-[10px] m-auto place-items-center w-[100vw] text-center">
        <img alt="bugcat yayyy" className="h-[300px]" src="/bugcat-yay.gif" />
        Yayyy~ I'm so happy, let's go out!
      </div>
      {isModalOpen && <Modal onClose={handleCloseModal} />}
    </div>
  );
}
