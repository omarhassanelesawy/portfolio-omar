import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { Mail, Phone, Linkedin, Github, Send } from 'lucide-react';

const Contact = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: '-100px' });
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    });

    const contactInfo = [
        {
            icon: Mail,
            label: 'Email',
            value: 'omarhassanelesawy@gmail.com',
            href: 'mailto:omarhassanelesawy@gmail.com',
        },
        {
            icon: Phone,
            label: 'Phone',
            value: '+20 114 823 8944',
            href: 'tel:+201148238944',
        },
        {
            icon: Linkedin,
            label: 'LinkedIn',
            value: 'omarhassanelesawy',
            href: 'https://www.linkedin.com/in/omarhassanelesawy',
        },
        {
            icon: Github,
            label: 'GitHub',
            value: 'omarhassanelesawy',
            href: 'https://github.com/omarhassanelesawy',
        },
    ];

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission
        console.log('Form submitted:', formData);
    };

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

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
        <section id="contact" className="py-20 relative bg-slate-900/30">
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
                            Get In <span className="gradient-text">Touch</span>
                        </h2>
                        <div className="w-20 h-1 bg-gradient-to-r from-primary-500 to-accent-500 mx-auto mb-4"></div>
                        <p className="text-slate-400 text-lg max-w-2xl mx-auto">
                            I'm always open to discussing new projects, creative ideas, or opportunities
                            to be part of your visions.
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                        {/* Contact Information */}
                        <motion.div variants={itemVariants} className="space-y-6">
                            <h3 className="text-2xl font-bold text-white mb-6">Contact Information</h3>
                            {contactInfo.map((info, index) => {
                                const Icon = info.icon;
                                return (
                                    <a
                                        key={index}
                                        href={info.href}
                                        target={info.label === 'LinkedIn' || info.label === 'GitHub' ? '_blank' : undefined}
                                        rel={info.label === 'LinkedIn' || info.label === 'GitHub' ? 'noopener noreferrer' : undefined}
                                        className="flex items-center gap-4 glass-effect rounded-xl p-4 hover:bg-slate-800/70 transition-all duration-300 group"
                                    >
                                        <div className="p-3 bg-gradient-to-br from-primary-500/20 to-accent-500/20 rounded-lg group-hover:scale-110 transition-transform duration-300">
                                            <Icon className="w-6 h-6 text-primary-400" />
                                        </div>
                                        <div>
                                            <p className="text-sm text-slate-400">{info.label}</p>
                                            <p className="text-white font-medium group-hover:text-primary-400 transition-colors">
                                                {info.value}
                                            </p>
                                        </div>
                                    </a>
                                );
                            })}
                        </motion.div>

                        {/* Contact Form */}
                        <motion.div variants={itemVariants}>
                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div>
                                    <label htmlFor="name" className="block text-sm font-medium text-slate-300 mb-2">
                                        Name
                                    </label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        required
                                        className="w-full px-4 py-3 bg-slate-800/50 border border-slate-700 rounded-lg focus:outline-none focus:border-primary-500 text-white transition-colors"
                                        placeholder="Your Name"
                                    />
                                </div>
                                <div>
                                    <label htmlFor="email" className="block text-sm font-medium text-slate-300 mb-2">
                                        Email
                                    </label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        required
                                        className="w-full px-4 py-3 bg-slate-800/50 border border-slate-700 rounded-lg focus:outline-none focus:border-primary-500 text-white transition-colors"
                                        placeholder="your.email@example.com"
                                    />
                                </div>
                                <div>
                                    <label htmlFor="message" className="block text-sm font-medium text-slate-300 mb-2">
                                        Message
                                    </label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        required
                                        rows="5"
                                        className="w-full px-4 py-3 bg-slate-800/50 border border-slate-700 rounded-lg focus:outline-none focus:border-primary-500 text-white transition-colors resize-none"
                                        placeholder="Your message..."
                                    ></textarea>
                                </div>
                                <button
                                    type="submit"
                                    className="w-full px-8 py-4 bg-gradient-to-r from-primary-600 to-accent-600 rounded-lg font-semibold hover:shadow-lg hover:shadow-primary-500/50 transition-all duration-300 flex items-center justify-center gap-2 group"
                                >
                                    Send Message
                                    <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                                </button>
                            </form>
                        </motion.div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Contact;
