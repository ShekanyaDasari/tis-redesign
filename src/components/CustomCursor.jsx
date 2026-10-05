import { useEffect, useState } from "react";
import { motion, useSpring } from "framer-motion";

export const CustomCursor = () => {
    const [isPointer, setIsPointer] = useState(false);
    const [isVisible, setIsVisible] = useState(false);

    const cursorX = useSpring(0, { damping: 25, stiffness: 250 });
    const cursorY = useSpring(0, { damping: 25, stiffness: 250 });

    useEffect(() => {
        // Disable on mobile/touch screens
        if (window.matchMedia("(pointer: coarse)").matches) return;

        const moveCursor = (e) => {
            cursorX.set(e.clientX);
            cursorY.set(e.clientY);
            if (!isVisible) setIsVisible(true);

            const target = e.target;
            setIsPointer(
                Boolean(
                    target.closest("button") ||
                    target.closest("a") ||
                    window.getComputedStyle(target).cursor === "pointer"
                )
            );
        };

        const handleMouseLeave = () => setIsVisible(false);

        window.addEventListener("mousemove", moveCursor);
        document.addEventListener("mouseleave", handleMouseLeave);

        return () => {
            window.removeEventListener("mousemove", moveCursor);
            document.removeEventListener("mouseleave", handleMouseLeave);
        };
    }, [cursorX, cursorY, isVisible]);

    if (!isVisible) return null;

    return (
        <motion.div
            className="fixed top-0 left-0 pointer-events-none z-50 rounded-full border border-tis-gold/70 mix-blend-difference"
            style={{
                x: cursorX,
                y: cursorY,
                translateX: "-50%",
                translateY: "-50%",
            }}
            animate={{
                width: isPointer ? 48 : 22,
                height: isPointer ? 48 : 22,
                backgroundColor: isPointer ? "rgba(212, 175, 55, 0.2)" : "transparent",
            }}
            transition={{ type: "spring", damping: 20, stiffness: 300 }}
        />
    );
};