import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Briefcase, Calendar } from 'lucide-react';

const Experience = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: '-100px' });

    const experiences = [
        {
            title: 'Software Engineer',
            company: 'Siemens Digital Industries Software',
            period: 'May 2024 - Present',
            description: [
                'Directed end-to-end release lifecycle of a critical debugging tool for ~80 developers',
                'Modernized DevOps infrastructure by migrating build pipelines from TeamCity to GitLab',
                'Executed strategic migration of source code repositories from Mercurial to Git',
                'Developed an AI-driven agent to automate detection and analysis of daily build failures',
            ],
            technologies: ['GitLab CI/CD', 'Python', 'DevOps', 'AI/ML', 'Git', 'TeamCity'],
        },
        {
            title: '5G Automation Engineer',
            company: 'Dell Technologies',
            period: 'Mar 2022 - May 2024',
            description: [
                'Engineered a comprehensive 5G End-to-End (E2E) framework for system validation',
                'Built a web-based visualization tool for granular comparison of pcap files and packet traffic',
                'Integrated AI algorithms to identify critical discrepancies and predict failure points',
            ],
            technologies: ['5G', 'Python', 'Web Development', 'AI/ML', 'Network Analysis'],
        },
        {
            title: 'Software Engineer',
            company: 'Codilime',
            period: 'Sept 2021 - Feb 2022',
            description: [
                'Developed Python-based automation framework for SD-WAN validation',
                'Ensured regression suite health for SD-WAN Forwarding team',
                "Contributed to 'vtest' tool development in an ecosystem of 100+ developers",
            ],
            technologies: ['Python', 'SD-WAN', 'Automation', 'Testing'],
        },
        {
            title: 'Data Steward',
            company: 'Veeva Systems',
            period: 'Nov 2021 - May 2024',
            description: [
                'Managed data gathering for German hospitals and doctors',
            ],
            technologies: ['Data Management', 'Healthcare'],
        },
        {
            title: 'Freelance Developer',
            company: 'Upwork',
            period: '2021 - 2024',
            description: [
                '"Top Rated" Freelancer',
                'Delivered 14+ projects focused on Python scripting, web scraping, and automation',
            ],
            technologies: ['Python', 'Web Scraping', 'Automation', 'Scripting'],
        },
    ];

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
        hidden: { opacity: 0, x: -20 },
        visible: {
            opacity: 1,
            x: 0,
            transition: { duration: 0.6 },
        },
    };

    return (
        <section id="experience" className="py-20 relative bg-slate-900/30">
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
                            Work <span className="gradient-text">Experience</span>
                        </h2>
                        <div className="w-20 h-1 bg-gradient-to-r from-primary-500 to-accent-500 mx-auto"></div>
                    </motion.div>

                    {/* Timeline */}
                    <div className="relative">
                        {/* Vertical Line */}
                        <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-gradient-to-b from-primary-500 via-accent-500 to-primary-500"></div>

                        {/* Experience Items */}
                        <div className="space-y-12">
                            {experiences.map((exp, index) => (
                                <motion.div
                                    key={index}
                                    variants={itemVariants}
                                    className={`relative flex flex-col md:flex-row gap-8 ${index % 2 === 0 ? 'md:flex-row-reverse' : ''
                                        }`}
                                >
                                    {/* Timeline Dot */}
                                    <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-gradient-to-br from-primary-500 to-accent-500 rounded-full ring-4 ring-slate-950"></div>

                                    {/* Content */}
                                    <div className="md:w-1/2">
                                        <div className="glass-effect rounded-xl p-6 hover:bg-slate-800/70 transition-all duration-300 group">
                                            {/* Header */}
                                            <div className="mb-4">
                                                <div className="flex items-start justify-between mb-2">
                                                    <h3 className="text-xl font-bold text-white group-hover:text-primary-400 transition-colors">
                                                        {exp.title}
                                                    </h3>
                                                    <Briefcase className="w-5 h-5 text-primary-400 flex-shrink-0 ml-2" />
                                                </div>
                                                <p className="text-lg text-accent-400 font-semibold mb-2">
                                                    {exp.company}
                                                </p>
                                                <div className="flex items-center text-slate-400 text-sm">
                                                    <Calendar className="w-4 h-4 mr-2" />
                                                    {exp.period}
                                                </div>
                                            </div>

                                            {/* Description */}
                                            <ul className="space-y-2 mb-4">
                                                {exp.description.map((item, i) => (
                                                    <li key={i} className="text-slate-300 text-sm flex items-start">
                                                        <span className="text-primary-400 mr-2 flex-shrink-0">▹</span>
                                                        <span>{item}</span>
                                                    </li>
                                                ))}
                                            </ul>

                                            {/* Technologies */}
                                            <div className="flex flex-wrap gap-2">
                                                {exp.technologies.map((tech, i) => (
                                                    <span
                                                        key={i}
                                                        className="px-3 py-1 text-xs bg-slate-800/50 border border-slate-700 rounded-full text-primary-300"
                                                    >
                                                        {tech}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>
                                    </div>

                                    {/* Spacer for alternating layout */}
                                    <div className="hidden md:block md:w-1/2"></div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Experience;
