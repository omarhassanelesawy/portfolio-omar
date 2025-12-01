import { Github, Linkedin, Mail, Heart } from 'lucide-react';

const Footer = () => {
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

    return (
        <footer className="py-8 border-t border-slate-800/50 bg-slate-900/50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col items-center gap-6">
                    {/* Social Links */}
                    <div className="flex gap-6">
                        {socialLinks.map((social) => {
                            const Icon = social.icon;
                            return (
                                <a
                                    key={social.name}
                                    href={social.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="p-2 text-slate-400 hover:text-primary-400 transition-colors"
                                    aria-label={social.name}
                                >
                                    <Icon className="w-5 h-5" />
                                </a>
                            );
                        })}
                    </div>

                    {/* Copyright */}
                    <div className="text-center text-slate-400 text-sm">
                        <p className="flex items-center gap-2 justify-center">
                            © {new Date().getFullYear()} Omar Hassan Elesawy. Built with
                            <Heart className="w-4 h-4 text-red-500 fill-current" />
                            using React & Tailwind CSS
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
