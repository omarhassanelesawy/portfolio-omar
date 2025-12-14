import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { ExternalLink, Github } from 'lucide-react';

const Projects = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: '-100px' });

    const projects = [
        {
            title: 'Grocery Price Tracker',
            description:
                'Full-stack grocery price tracking application enabling users to scan receipts and monitor price trends across supermarkets. Features AI-powered OCR using Google Gemini API for automatic data extraction, drag-and-drop image upload, and interactive price history charts.',
            technologies: ['React.js', 'FastAPI', 'Python', 'SQLAlchemy', 'SQLite', 'Google Gemini API', 'Docker', 'Vercel'],
            link: 'https://prices-tracker-eta.vercel.app/',
            github: 'https://github.com/omarhassanelesawy/PricesTracker',
        },
        {
            title: 'Oigitalization',
            description:
                'A comprehensive web application for football enthusiasts featuring fantasy leagues and real-time price tracking. Built with Django for robust backend functionality.',
            technologies: ['Django', 'Python', 'Web Development', 'Real-time Data'],
            link: '#',
            github: '#',
        },
        {
            title: 'SonarQube Pipeline Automation',
            description:
                'Created a GitLab CI/CD pipeline to automate SonarQube analysis for internal projects, improving code quality and reducing manual review time.',
            technologies: ['GitLab CI/CD', 'SonarQube', 'DevOps', 'Automation'],
            link: '#',
            github: '#',
        },
        {
            title: 'SQL Web Page Optimization',
            description:
                'Optimized C# Razor application database queries, achieving a dramatic performance improvement by reducing page load time from 1.5 minutes to just 3 seconds.',
            technologies: ['C#', 'Razor', 'SQL', 'Performance Optimization'],
            link: '#',
            github: '#',
        },
        {
            title: 'Cloud-Connected AGV',
            description:
                'Graduation project: Created a cloud interface to control an Automated Guided Vehicle with a Qt Configurator. Achieved Excellent grade (4.0).',
            technologies: ['Qt', 'Cloud Computing', 'IoT', 'C++'],
            link: '#',
            github: '#',
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
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.6 },
        },
    };

    return (
        <section id="projects" className="py-20 relative">
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
                            Featured <span className="gradient-text">Projects</span>
                        </h2>
                        <div className="w-20 h-1 bg-gradient-to-r from-primary-500 to-accent-500 mx-auto"></div>
                    </motion.div>

                    {/* Projects Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {projects.map((project, index) => (
                            <motion.div
                                key={index}
                                variants={itemVariants}
                                className="glass-effect rounded-xl p-6 hover:bg-slate-800/70 transition-all duration-300 group hover:scale-105 hover:shadow-xl hover:shadow-primary-500/10"
                            >
                                {/* Project Header */}
                                <div className="flex items-start justify-between mb-4">
                                    <h3 className="text-2xl font-bold text-white group-hover:text-primary-400 transition-colors">
                                        {project.title}
                                    </h3>
                                    <div className="flex gap-3">
                                        {project.github && (
                                            <a
                                                href={project.github}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="text-slate-400 hover:text-primary-400 transition-colors"
                                                aria-label="GitHub"
                                            >
                                                <Github className="w-5 h-5" />
                                            </a>
                                        )}
                                        {project.link && (
                                            <a
                                                href={project.link}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="text-slate-400 hover:text-primary-400 transition-colors"
                                                aria-label="External Link"
                                            >
                                                <ExternalLink className="w-5 h-5" />
                                            </a>
                                        )}
                                    </div>
                                </div>

                                {/* Project Description */}
                                <p className="text-slate-300 mb-6 leading-relaxed">
                                    {project.description}
                                </p>

                                {/* Technologies */}
                                <div className="flex flex-wrap gap-2">
                                    {project.technologies.map((tech, i) => (
                                        <span
                                            key={i}
                                            className="px-3 py-1 text-xs bg-slate-800/50 border border-slate-700 rounded-full text-accent-300 group-hover:border-accent-500/50 transition-colors"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Projects;
