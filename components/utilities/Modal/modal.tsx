import { motion } from "framer-motion";
import Backdrop from "../backdrop/backdrop";
import React from "react";
import { AiOutlineClose } from "react-icons/ai";

interface ModalProps {
    handleClose: () => void;
    text: string;
    children?: React.ReactNode;
}

const dropIn = {
    hidden: {
        y: "-100vh",
        opacity: 0,
    },
    visible: {
        y: "0",
        opacity: 1,
        transition: {
            duration: 0.1,
            type: "spring",
            damping: 25,
            stiffness: 500,
        }
    },
    exit: {
        y: "100vh",
        opacity: 0,
    }
}

const Modal = ({children = null, handleClose, text}: ModalProps) => {
    return(
        <Backdrop onClick={handleClose}>
            <motion.div
                onClick={(e) => e.stopPropagation()}
                className="modal"
                variants={dropIn}
                initial="hidden"
                animate="visible"
                exit="exit"
                >
                    <p className='p-4'>{text}</p>
                    {children}
                    <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        onClick={handleClose}
                        className='rounded-full shadow-lg shadow-gray-950 p-3 cursor-pointer hover:scale-105 ease-in duration-300'
                    >
                        <AiOutlineClose size={25} />
                    </motion.button>
                </motion.div>
        </Backdrop>
    )
}

export default Modal;