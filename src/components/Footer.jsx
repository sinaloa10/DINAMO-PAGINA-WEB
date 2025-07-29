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
        <footer className="bg-slate-800 text-slate-300">
            <div className="container mx-auto px-6 py-12">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    <div className="col-span-1 md:col-span-2">
                        <a href="#" className="flex items-center space-x-2">
                            <img src="logo-dinamo.png" alt="Logo de Dinamo" className="w-10 h-10" />
                            <span className="text-2xl font-bold text-white font-display">Dinamo</span>
                        </a>
                        <p className="mt-4 max-w-md">Convirtiendo la confusión financiera en confianza para los jóvenes de México.</p>
                        <p className="mt-4 text-sm text-slate-400">Hecho en México con <HeartHandshake className="inline w-4 h-4 text-emerald-400" /></p>
                    </div>
                    <div>
                        <h4 className="font-semibold text-white tracking-wider uppercase">Producto</h4>
                        <ul className="mt-4 space-y-2">
                            <li><a href="#solucion" className="hover:text-emerald-500 transition-colors">La Solución</a></li>
                            <li><a href="#dino-dinero" className="hover:text-emerald-500 transition-colors">Dino Dinero</a></li>
                            <li><a href="#minigame" className="hover:text-emerald-500 transition-colors">Mini-Juego</a></li>
                            <li><a href="#faq" className="hover:text-emerald-500 transition-colors">FAQ</a></li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="font-semibold text-white tracking-wider uppercase">Legal</h4>
                        <ul className="mt-4 space-y-2">
                            <li><a href="#" className="hover:text-emerald-500 transition-colors">Términos de Servicio</a></li>
                            <li><a href="#" className="hover:text-emerald-500 transition-colors">Política de Privacidad</a></li>
                        </ul>
                    </div>
                </div>
                <div className="mt-12 border-t border-slate-700 pt-8 flex flex-col sm:flex-row justify-between items-center">
                    <p className="text-sm text-slate-400">&copy; {new Date().getFullYear()} Dinamo. Todos los derechos reservados.</p>
                    <div className="flex space-x-4 mt-4 sm:mt-0">
                        <a href="#" className="text-slate-400 hover:text-emerald-500 transition-colors"><Twitter className="w-6 h-6" /></a>
                        <a href="#" className="text-slate-400 hover:text-emerald-500 transition-colors"><Instagram className="w-6 h-6" /></a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;