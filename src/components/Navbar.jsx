import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useInView } from 'framer-motion';
// --- DEPENDENCIA DE ICONOS: LUCIDE-REACT ---
// Para instalar: npm install lucide-react
import { 
    Menu, X, Landmark, Home, CreditCard, BarChart, Star, ChevronDown, 
    Twitter, Instagram, Gamepad2, BrainCircuit, Users, Map, Rocket, 
    ShieldCheck, GraduationCap, Briefcase, Feather, HeartHandshake,
    AlertTriangle, Sparkles, MessageSquareQuote, UserCheck, Search, Lightbulb,
    Leaf, PiggyBank, HandCoins, Sprout
} from 'lucide-react';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => setIsScrolled(window.scrollY > 10);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'El Problema', href: '#problema' },
        { name: 'La Solución', href: '#solucion' },
        { name: 'Dino Dinero', href: '#dino-dinero' },
        { name: 'Testimonios', href: '#testimonios' },
        { name: 'FAQ', href: '#faq' },
    ];
    
    const scrollTo = (e, href) => {
        e.preventDefault();
        const targetElement = document.querySelector(href);
        if (targetElement) {
            targetElement.scrollIntoView({ behavior: 'smooth' });
        }
        setIsOpen(false);
    };

    return (
        <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-[#0F2B5B]/90 shadow-lg backdrop-blur-md' : 'bg-transparent'}`}>
            <div className="container mx-auto px-6 py-4">
                <div className="flex justify-between items-center">
                    <a href="#" className="flex items-center space-x-2" onClick={(e) => scrollTo(e, '#hero')}>
                        <img src="logo-dinamo.png" alt="Logo de Dinamo" className="w-10 h-10" />
                        <span className="text-2xl font-bold text-[#0095FF] font-display">Dinamo</span>
                    </a>
                    <div className="hidden md:flex items-center space-x-8">
                        {navLinks.map((link) => (
                            <a key={link.name} href={link.href} onClick={(e) => scrollTo(e, link.href)} className="text-blue-200 hover:text-[#0066FF] font-medium transition-colors duration-300">{link.name}</a>
                        ))}
                        <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="bg-[#0066FF] text-white font-semibold px-6 py-2.5 rounded-full shadow-lg shadow-blue-600/30 hover:bg-[#0055DD] transition-all duration-300">
                            Únete a la beta
                        </motion.button>
                    </div>
                    <div className="md:hidden">
                        <button onClick={() => setIsOpen(!isOpen)} className="text-blue-200 focus:outline-none hover:text-white transition-colors">
                            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                        </button>
                    </div>
                </div>
            </div>
            <AnimatePresence>
                {isOpen && (
                    <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} exit={{ opacity: 0, height: 0 }} className="md:hidden bg-[#0F2B5B]/95 backdrop-blur-lg border-t border-blue-800/30">
                        <div className="flex flex-col items-center space-y-5 py-6 px-4">
                            {navLinks.map((link) => (
                                <a key={link.name} href={link.href} onClick={(e) => scrollTo(e, link.href)} className="text-blue-200 hover:text-[#0066FF] text-lg font-medium transition-colors duration-300 w-full text-center py-3">{link.name}</a>
                            ))}
                            <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="bg-[#0066FF] text-white font-semibold px-8 py-4 rounded-full shadow-lg shadow-blue-600/40 hover:bg-[#0055DD] transition-all duration-300 w-full max-w-sm">
                                Únete a la beta
                            </motion.button>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default Navbar;