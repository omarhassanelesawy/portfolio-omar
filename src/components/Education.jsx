import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { GraduationCap, Award } from 'lucide-react';

const Education = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: '-100px' });

    const certifications = [
        'AWS Cloud Practitioner (Aug 2024)',
        'Programming with Google Go Specialization (Mar 2024)',
        'IBM Scrum Master (Nov 2023)',
        'Deep Learning Specialization (Andrew Ng)',
        '5G Concepts & Network Architecture (Award Solutions)',
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.15,
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

    return (
        <section id="education" className="py-20 relative">
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
                            Education & <span className="gradient-text">Certifications</span>
                        </h2>
                        <div className="w-20 h-1 bg-gradient-to-r from-primary-500 to-accent-500 mx-auto"></div>
                    </motion.div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                        {/* Education */}
                        <motion.div
                            variants={itemVariants}
                            className="glass-effect rounded-xl p-8 hover:bg-slate-800/70 transition-all duration-300 group"
                        >
                            <div className="flex items-start gap-4">
                                <div className="p-4 bg-gradient-to-br from-primary-500/20 to-accent-500/20 rounded-xl group-hover:scale-110 transition-transform duration-300">
                                    <GraduationCap className="w-8 h-8 text-primary-400" />
                                </div>
                                <div className="flex-1">
                                    <h3 className="text-2xl font-bold text-white mb-2">
                                        Bachelor of Science
                                    </h3>
                                    <p className="text-lg text-accent-400 font-semibold mb-2">
                                        Computer Engineering & Software Systems
                                    </p>
                                    <p className="text-slate-300 mb-2">Ain Shams University</p>
                                    <div className="flex items-center gap-4 text-slate-400">
                                        <span>2017 - 2021</span>
                                        <span className="text-primary-400 font-semibold">GPA: 3.52</span>
                                    </div>
                                </div>
                            </div>
                        </motion.div>

                        {/* Certifications */}
                        <motion.div
                            variants={itemVariants}
                            className="glass-effect rounded-xl p-8 hover:bg-slate-800/70 transition-all duration-300 group"
                        >
                            <div className="flex items-start gap-4 mb-6">
                                <div className="p-4 bg-gradient-to-br from-primary-500/20 to-accent-500/20 rounded-xl group-hover:scale-110 transition-transform duration-300">
                                    <Award className="w-8 h-8 text-accent-400" />
                                </div>
                                <div>
                                    <h3 className="text-2xl font-bold text-white">Certifications</h3>
                                </div>
                            </div>
                            <ul className="space-y-3">
                                {certifications.map((cert, index) => (
                                    <li
                                        key={index}
                                        className="flex items-start text-slate-300 hover:text-primary-300 transition-colors"
                                    >
                                        <span className="text-primary-400 mr-3 flex-shrink-0 mt-1">✓</span>
                                        <span>{cert}</span>
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Education;
