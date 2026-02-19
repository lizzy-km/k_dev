import { motion, useInView, useSpring, useTransform } from "framer-motion";
import { useEffect, useRef } from "react";

export default function AnimateNumber({ skill, sIdx }: {
    skill: { level: number };
    sIdx: number;
}) {



    const ref = useRef(null);
    // 1. Check if the element is in the viewport
    const isInView = useInView(ref, {  margin: "-50px" });

    // 2. Setup the springy number logic
    const count = useSpring(0, { stiffness: 50, damping: 20 });
    const displayCount = useTransform(count, (latest) => `${Math.round(latest)}%`);

    useEffect(() => {
        if (isInView) {
            // 3. Start the animation when in view (with your staggered delay)
            const timer = setTimeout(() => {
                count.set(skill.level);
            }, sIdx * 100);
            return () => clearTimeout(timer);
        }
        count.set(0); // Reset if out of view
    }, [isInView, skill.level, sIdx, count]);

    return <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 10 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        className="text-xs text-primary font-bold"
    >
        <motion.span>{displayCount}</motion.span>
    </motion.div>
}