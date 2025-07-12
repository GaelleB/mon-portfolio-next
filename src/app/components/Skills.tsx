'use client';

import { motion } from 'framer-motion';

const skills = {
    frontend: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'GSAP'],
    backend: ['Node.js', 'Express', 'MongoDB', 'MySQL'],
    outils: ['Git', 'GitHub', 'Figma', 'Vercel'],
};

export default function Skills() {
    return (
        <section id="skills" className="py-20 px-4 bg-white text-gray-800">
        <div className="max-w-5xl mx-auto text-center">
            <h2 className="text-4xl md:text-6xl font-bold mb-12 text-yellow-500 font-handwriting">
            Mes compétences
            </h2>

            <div className="grid md:grid-cols-3 gap-8 text-left">
            {Object.entries(skills).map(([cat, items], idx) => (
                <motion.div
                key={cat}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.2 }}
                >
                <h3 className="text-2xl font-bold mb-4 capitalize text-gray-900">{cat}</h3>
                <ul className="space-y-2">
                    {items.map(skill => (
                    <li
                        key={skill}
                        className="bg-yellow-100 text-gray-800 px-4 py-2 rounded-lg shadow-sm inline-block"
                    >
                        {skill}
                    </li>
                    ))}
                </ul>
                </motion.div>
            ))}
            </div>
        </div>
        </section>
    );
}