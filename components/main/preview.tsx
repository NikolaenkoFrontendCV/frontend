'use client'

import { motion} from "framer-motion";
import TypingText from "../typography/typing-text";

const variants = {
    hidden: {opacity: 0, display: 'none'},
    visible: {opacity: 1}
}

export default function Preview() {
    return (
        <motion.div
            variants={variants}
            initial={'visible'}
            animate={'hidden'}
            transition={{delay: 2, duration: 1.3}}
            className="fixed flex items-center justify-center top-0 z-110 left-0 w-screen h-screen bg-gray-900"
        > 
            <motion.div
                initial={{opacity: 1, scale: 1}}
                animate={{opacity: 0, scale: 10}}
                transition={{delay: 1.3, duration: 1}}
                >
                <TypingText className="font-bold text-8xl tracking-wide" text={'Welcome!'} typingSpeed={90}></TypingText>
            </motion.div>
        </motion.div>
    )
}