'use client';

import React from 'react';
import { motion, MotionProps } from 'framer-motion';

interface AnimateWrapperProps extends MotionProps {
    children: React.ReactNode;
}

function MotionHeadline({ children, ...motionProps }: AnimateWrapperProps) {
    return (
        <motion.div
            {...motionProps}
        >
            {children}
        </motion.div>
    );
};

export default MotionHeadline;
