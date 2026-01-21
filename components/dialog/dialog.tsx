'use client'

import {motion} from 'framer-motion'
import Button from '../buttons/button';
import { useSelector } from 'react-redux';
import { RootState } from '@/lib/store';
import { experience } from '@/data/experience';
import { useAppDispatch } from '@/lib/hooks/redux-store';

const variants = {
    hidden: { opacity: 0, display: 'none', transition: { duration: 0.2 } },
    visible: { opacity: 1, transition: { duration: 0.2 } }
}

export default function Dialog() {
    const dialogContent = useSelector((state: RootState) => state.dialogContent);
    const dispatch = useAppDispatch();

    function handleCloseDialog() {
        dispatch({ type: 'dialogContent/closeDialog' });
    }

    return (
        <motion.div 
                variants={variants}
                animate={dialogContent.isOpen ? 'visible' : 'hidden'}
                className='fixed w-full h-screen z-100 bg-gray-900/50 top-0 left-0 flex items-center justify-center backdrop-blur-sm'>
            <motion.div
                className='bg-gray-900 border border-gray-400 flex flex-col items-center gap-4 rounded-lg p-6 w-full max-w-xl'
                animate={dialogContent.isOpen ? { scale: 1 } : { scale: 0.8 }}
            >
                {
                    (getContent(dialogContent))()
                }
                <Button onClick={handleCloseDialog}>
                    Close
                </Button>
            </motion.div>
        </motion.div>
    )
}

function getContent(data: { type: string; itemId: number }) {
    const defaultValue = () => <div>No Content</div>;
    switch (data.type) {
        case 'experience':
            return experience[data.itemId].content;
        default:
            return defaultValue;
    }
}