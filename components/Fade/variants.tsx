export const container = {
    hidden: { opacity: 0, x: -100 },
    visible: {
        opacity: 1,
        x: 0,
        transition: {
//            duration: 1.5,
            delayChildren: 0.1,
            staggerChildren: 0.2
      }
    }
};
    
export const item = {
    hidden: { x: -100, opacity: 0 },
    visible: {
        x: 0,
        opacity: 1
    }
};

const variants = {
    container,
    item
}

export default variants;