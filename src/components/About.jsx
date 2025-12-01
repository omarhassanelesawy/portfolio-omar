import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Globe, Code, Award } from 'lucide-react';

const About = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: '-100px' });

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
            },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.6 },
        },
    };

    const highlights = [
        {
            icon: Code,
            title: 'Computer Engineering',
            description: 'Ain Shams University Graduate (GPA 3.52)',
        },
        {
            icon: Award,
            title: 'Military Service',
            description: 'Completed Oct 2022 - Nov 2023',
        },
        {
            icon: Globe,
            title: 'Multilingual',
            description: 'Arabic (Native), English (C1), German (B1)',
        },
    ];

    return (
        <section id="about" className="py-20 relative">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    ref={ref}
                    variants={containerVariants}
                    initial="hidden"
                    animate={isInView ? 'visible' : 'hidden'}
                >
                    {/* Section Title */}
                    <motion.div variants={itemVariants} className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-bold mb-4">
                            About <span className="gradient-text">Me</span>
                        </h2>
                        <div className="w-20 h-1 bg-gradient-to-r from-primary-500 to-accent-500 mx-auto"></div>
                    </motion.div>

                    {/* Bio */}
                    <motion.div
                        variants={itemVariants}
                        className="glass-effect rounded-2xl p-8 md:p-12 mb-12"
                    >
                        <p className="text-lg text-slate-300 leading-relaxed mb-6">
                            Computer Engineering graduate from <span className="text-primary-400 font-semibold">Ain Shams University</span> with a GPA of 3.52.
                            After completing my military service (Oct 2022 - Nov 2023), I've been passionate about
                            <span className="text-accent-400 font-semibold"> DevOps, Automation, and 5G technologies</span>.
                        </p>
                        <p className="text-lg text-slate-300 leading-relaxed">
                            I have extensive experience in migrating large-scale build pipelines and developing
                            <span className="text-primary-400 font-semibold"> AI-driven agents</span> to solve complex automation challenges.
                            My work focuses on creating scalable solutions that modernize infrastructure and improve developer productivity.
                        </p>
                    </motion.div>

                    {/* Highlights Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {highlights.map((highlight, index) => {
                            const Icon = highlight.icon;
                            return (
                                <motion.div
                                    key={index}
                                    variants={itemVariants}
                                    className="glass-effect rounded-xl p-6 hover:bg-slate-800/70 transition-all duration-300 group"
                                >
                                    <div className="flex flex-col items-center text-center">
                                        <div className="p-4 bg-gradient-to-br from-primary-500/20 to-accent-500/20 rounded-full mb-4 group-hover:scale-110 transition-transform duration-300">
                                            <Icon className="w-8 h-8 text-primary-400" />
                                        </div>
                                        <h3 className="text-xl font-semibold mb-2 text-white">
                                            {highlight.title}
                                        </h3>
                                        <p className="text-slate-400">{highlight.description}</p>
                                    </div>
                                </motion.div>
                            );
                        })}
                    </div>

                    {/* Languages */}
                    <motion.div
                        variants={itemVariants}
                        className="mt-12 text-center"
                    >
                        <h3 className="text-2xl font-semibold mb-6 text-white">Languages</h3>
                        <div className="flex flex-wrap justify-center gap-4">
                            <div className="px-6 py-3 glass-effect rounded-full">
                                <span className="text-slate-300">Arabic</span>
                                <span className="text-primary-400 ml-2 font-semibold">(Native)</span>
                            </div>
                            <div className="px-6 py-3 glass-effect rounded-full">
                                <span className="text-slate-300">English</span>
                                <span className="text-primary-400 ml-2 font-semibold">(C1 Certified)</span>
                            </div>
                            <div className="px-6 py-3 glass-effect rounded-full">
                                <span className="text-slate-300">German</span>
                                <span className="text-primary-400 ml-2 font-semibold">(B1 Certified)</span>
                            </div>
                        </div>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
};

export default About;
