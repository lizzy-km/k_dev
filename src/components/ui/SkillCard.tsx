import { useSpring, useTransform } from "motion/react";
import { Card, CardContent } from "./card";
import { useEffect } from "react";
import { motion } from "motion/react"
import AnimateNumber from "./AnimateNumber";

export default function SkillCard({ skill, sIdx }: { skill: { name: string; level: number }, sIdx: number }) {



    return (
        <Card className="bg-card/50 border-border/50">
            <CardContent className="p-4 flex flex-col gap-2">
                <div className="flex justify-between items-center">
                    <span className="font-semibold text-sm">{skill.name}</span>
                    <AnimateNumber skill={{
                        level: skill.level
                    }} sIdx={sIdx * 0.1} />
                </div>
                <div className="w-full h-1.5 bg-secondary rounded-full overflow-hidden">
                    <motion.div initial={{ width: 0 }} whileInView={{ width: `${skill.level}%` }} transition={{ duration: 0.4, delay: sIdx * 0.1 }}
                        className="h-full bg-primary rounded-full transition-all duration-1000"
                    />
                </div>
            </CardContent>
        </Card>
    );
}