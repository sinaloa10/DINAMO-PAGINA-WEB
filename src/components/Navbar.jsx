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
        <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white/80 shadow-sm backdrop-blur-sm' : 'bg-transparent'}`}>
            <div className="container mx-auto px-6 py-3">
                <div className="flex justify-between items-center">
                    <a href="#" className="flex items-center space-x-2" onClick={(e) => scrollTo(e, '#hero')}>
                        <img src="logo-dinamo.png" alt="Logo de Dinamo" className="w-10 h-10" />
                        <span className="text-2xl font-bold text-slate-800 font-display">Dinamo</span>
                    </a>
                    <div className="hidden md:flex items-center space-x-8">
                        {navLinks.map((link) => (
                            <a key={link.name} href={link.href} onClick={(e) => scrollTo(e, link.href)} className="text-slate-600 hover:text-emerald-500 transition-colors duration-300">{link.name}</a>
                        ))}
                        <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="bg-emerald-500 text-white font-semibold px-5 py-2 rounded-full shadow-lg shadow-emerald-500/20 hover:bg-emerald-600 transition-all duration-300">
                            Únete a la beta
                        </motion.button>
                    </div>
                    <div className="md:hidden">
                        <button onClick={() => setIsOpen(!isOpen)} className="text-slate-700 focus:outline-none">
                            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                        </button>
                    </div>
                </div>
            </div>
            <AnimatePresence>
                {isOpen && (
                    <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} exit={{ opacity: 0, height: 0 }} className="md:hidden bg-white/95 backdrop-blur-sm">
                        <div className="flex flex-col items-center space-y-4 p-4">
                            {navLinks.map((link) => (
                                <a key={link.name} href={link.href} onClick={(e) => scrollTo(e, link.href)} className="text-slate-600 hover:text-emerald-500 transition-colors duration-300 text-lg w-full text-center py-2">{link.name}</a>
                            ))}
                            <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="bg-emerald-500 text-white font-semibold px-6 py-3 rounded-full shadow-lg shadow-emerald-500/20 hover:bg-emerald-600 transition-all duration-300 w-full">
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