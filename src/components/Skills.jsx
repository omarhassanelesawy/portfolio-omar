import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Code, Wrench, Globe, Server, Brain } from 'lucide-react';

const Skills = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: '-100px' });

    const skillCategories = [
        {
            title: 'Languages',
            icon: Code,
            skills: ['C', 'C++', 'Python', 'GoLang', 'C#', 'Java'],
        },
        {
            title: 'Automation',
            icon: Wrench,
            skills: ['Robot Framework', 'Selenium', 'Web Scraping', 'Bash', 'Power Automate'],
        },
        {
            title: 'Web Development',
            icon: Globe,
            skills: ['HTML', 'CSS', 'JavaScript', 'React', 'RESTful APIs', 'Razor .NET'],
        },
        {
            title: 'DevOps/Cloud',
            icon: Server,
            skills: ['Docker', 'Jenkins', 'GitLab CI/CD', 'AWS', 'Linux'],
        },
        {
            title: 'AI/Data',
            icon: Brain,
            skills: ['Machine Learning', 'NumPy', 'Pandas', 'Computer Vision', 'Tesseract'],
        },
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
        hidden: { opacity: 0, scale: 0.8 },
        visible: {
            opacity: 1,
            scale: 1,
            transition: { duration: 0.5 },
        },
    };

    return (
        <section id="skills" className="py-20 relative bg-slate-900/30">
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
                            Technical <span className="gradient-text">Skills</span>
                        </h2>
                        <div className="w-20 h-1 bg-gradient-to-r from-primary-500 to-accent-500 mx-auto"></div>
                    </motion.div>

                    {/* Skills Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {skillCategories.map((category, index) => {
                            const Icon = category.icon;
                            return (
                                <motion.div
                                    key={index}
                                    variants={itemVariants}
                                    className="glass-effect rounded-xl p-6 hover:bg-slate-800/70 transition-all duration-300 group"
                                >
                                    {/* Category Header */}
                                    <div className="flex items-center gap-3 mb-6">
                                        <div className="p-3 bg-gradient-to-br from-primary-500/20 to-accent-500/20 rounded-lg group-hover:scale-110 transition-transform duration-300">
                                            <Icon className="w-6 h-6 text-primary-400" />
                                        </div>
                                        <h3 className="text-xl font-bold text-white">{category.title}</h3>
                                    </div>

                                    {/* Skills List */}
                                    <div className="flex flex-wrap gap-2">
                                        {category.skills.map((skill, i) => (
                                            <span
                                                key={i}
                                                className="px-3 py-1.5 text-sm bg-slate-800/50 border border-slate-700 rounded-lg text-slate-300 hover:border-primary-500/50 hover:text-primary-300 transition-all duration-200"
                                            >
                                                {skill}
                                            </span>
                                        ))}
                                    </div>
                                </motion.div>
                            );
                        })}
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Skills;
