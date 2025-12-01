import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Phone, Download, ArrowRight } from 'lucide-react';

const Hero = () => {
    const socialLinks = [
        {
            name: 'LinkedIn',
            url: 'https://www.linkedin.com/in/omarhassanelesawy',
            icon: Linkedin,
        },
        {
            name: 'GitHub',
            url: 'https://github.com/omarhassanelesawy',
            icon: Github,
        },
        {
            name: 'Email',
            url: 'mailto:omarhassanelesawy@gmail.com',
            icon: Mail,
        },
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
                delayChildren: 0.3,
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
        <section
            id="home"
            className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20"
        >
            {/* Animated Background */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute -top-1/2 -left-1/2 w-full h-full bg-gradient-to-br from-primary-900/20 to-transparent rounded-full blur-3xl animate-pulse"></div>
                <div className="absolute -bottom-1/2 -right-1/2 w-full h-full bg-gradient-to-tl from-accent-900/20 to-transparent rounded-full blur-3xl animate-pulse delay-1000"></div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                    className="text-center"
                >
                    {/* Name */}
                    <motion.h1
                        variants={itemVariants}
                        className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold mb-6"
                    >
                        <span className="gradient-text">Omar Hassan Elesawy</span>
                    </motion.h1>

                    {/* Title */}
                    <motion.h2
                        variants={itemVariants}
                        className="text-2xl sm:text-3xl md:text-4xl text-slate-300 mb-4"
                    >
                        Software Engineer | Automation & DevOps Specialist
                    </motion.h2>

                    {/* Tagline */}
                    <motion.p
                        variants={itemVariants}
                        className="text-lg sm:text-xl text-slate-400 max-w-3xl mx-auto mb-8"
                    >
                        Delivering scalable software automation solutions and modernizing DevOps
                        infrastructure.
                    </motion.p>

                    {/* Contact Info */}
                    <motion.div
                        variants={itemVariants}
                        className="flex flex-wrap justify-center gap-4 mb-10 text-slate-400"
                    >
                        <a
                            href="mailto:omarhassanelesawy@gmail.com"
                            className="flex items-center gap-2 hover:text-primary-400 transition-colors"
                        >
                            <Mail className="w-5 h-5" />
                            <span className="hidden sm:inline">omarhassanelesawy@gmail.com</span>
                        </a>
                        <a
                            href="tel:+201148238944"
                            className="flex items-center gap-2 hover:text-primary-400 transition-colors"
                        >
                            <Phone className="w-5 h-5" />
                            <span>+20 114 823 8944</span>
                        </a>
                    </motion.div>

                    {/* CTA Buttons */}
                    <motion.div
                        variants={itemVariants}
                        className="flex flex-wrap justify-center gap-4 mb-12"
                    >
                        <a
                            href="#contact"
                            className="group px-8 py-4 bg-gradient-to-r from-primary-600 to-accent-600 rounded-lg font-semibold hover:shadow-lg hover:shadow-primary-500/50 transition-all duration-300 flex items-center gap-2"
                        >
                            Contact Me
                            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </a>
                        <a
                            href="#"
                            className="px-8 py-4 glass-effect rounded-lg font-semibold hover:bg-slate-800/70 transition-all duration-300 flex items-center gap-2"
                        >
                            <Download className="w-5 h-5" />
                            Download CV
                        </a>
                    </motion.div>

                    {/* Social Links */}
                    <motion.div
                        variants={itemVariants}
                        className="flex justify-center gap-6"
                    >
                        {socialLinks.map((social) => {
                            const Icon = social.icon;
                            return (
                                <a
                                    key={social.name}
                                    href={social.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="p-3 glass-effect rounded-full hover:bg-slate-800/70 hover:scale-110 transition-all duration-300"
                                    aria-label={social.name}
                                >
                                    <Icon className="w-6 h-6" />
                                </a>
                            );
                        })}
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
