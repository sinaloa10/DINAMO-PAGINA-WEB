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

const Footer = () => {
    return (
        <footer className="bg-[#0F2B5B] text-[#E0F2FE]">
            <div className="container mx-auto px-6 py-12">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    <div className="col-span-1 md:col-span-2">
                        <a href="#" className="flex items-center space-x-2">
                            <img src="logo-dinamo.png" alt="Logo de Dinamo" className="w-10 h-10" />
                            <span className="text-2xl font-bold text-[#0095FF] font-display">Dinamo</span>
                        </a>
                        <p className="mt-4 max-w-md text-[#94A3B8]">Convirtiendo la confusión financiera en confianza para los jóvenes de México.</p>
                        <p className="mt-4 text-sm text-[#64748B]">Hecho en México con <HeartHandshake className="inline w-4 h-4 text-emerald-400" /></p>
                    </div>
                    <div>
                        <h4 className="font-semibold text-white tracking-wider uppercase">Producto</h4>
                        <ul className="mt-4 space-y-2">
                            <li><a href="#solucion" className="hover:text-[#0066FF] transition-colors duration-300">La Solución</a></li>
                            <li><a href="#dino-dinero" className="hover:text-[#0066FF] transition-colors duration-300">Dino Dinero</a></li>
                            <li><a href="#minigame" className="hover:text-[#0066FF] transition-colors duration-300">Mini-Juego</a></li>
                            <li><a href="#faq" className="hover:text-[#0066FF] transition-colors duration-300">FAQ</a></li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="font-semibold text-white tracking-wider uppercase">Legal</h4>
                        <ul className="mt-4 space-y-2">
                            <li><a href="#" className="hover:text-[#0066FF] transition-colors duration-300">Términos de Servicio</a></li>
                            <li><a href="#" className="hover:text-[#0066FF] transition-colors duration-300">Política de Privacidad</a></li>
                        </ul>
                    </div>
                </div>
                <div className="mt-12 border-t border-[#1E3A8A] pt-8 flex flex-col sm:flex-row justify-between items-center">
                    <p className="text-sm text-[#64748B]">&copy; {new Date().getFullYear()} Dinamo. Todos los derechos reservados.</p>
                    <div className="flex space-x-6 mt-4 sm:mt-0">
                        <a href="#" className="text-[#94A3B8] hover:text-[#0066FF] transition-colors duration-300"><Twitter className="w-6 h-6" /></a>
                        <a href="#" className="text-[#94A3B8] hover:text-[#0066FF] transition-colors duration-300"><Instagram className="w-6 h-6" /></a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;