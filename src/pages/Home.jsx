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

// --- Elementos visuales y de fondo ---

const JurassicBackground = () => (
    <div className="absolute inset-0 -z-10 overflow-hidden bg-[#FBFBF8]">
        {/* Patrones sutiles de hojas */}
        <Leaf className="absolute -top-10 -left-10 w-48 h-48 text-emerald-500/5" strokeWidth={0.5} />
        <Leaf className="absolute -bottom-24 -right-12 w-64 h-64 text-emerald-500/5 rotate-45" strokeWidth={0.5} />
        <Sprout className="absolute top-1/2 left-1/4 w-32 h-32 text-emerald-500/5 -rotate-12" strokeWidth={0.5} />
    </div>
);


// --- Componente Reusable para Animación de Scroll ---
const ScrollReveal = ({ children, className }) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, amount: 0.2 });

    return (
        <motion.div
            ref={ref}
            className={className}
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, ease: "easeOut" }}
        >
            {children}
        </motion.div>
    );
};

// --- Componentes de la Página ---

// 2. Contenido Principal (Modularizado)
const MainContent = () => {

    const HeroSection = () => (
        <section id="hero" className="pt-30 pb-20 md:pt-10 md:pb-28 relative overflow-hidden">
            <div className="container mx-auto px-6">
                <div className="grid md:grid-cols-2 gap-10 items-center">
                    <motion.div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
                        <span className="inline-block bg-emerald-100 text-emerald-600 font-semibold px-3 py-1 rounded-full text-sm mb-4">Educación Financiera para la Nueva Era</span>
                        <h1 className="text-4xl md:text-6xl font-extrabold text-slate-800 leading-tight font-display">
                            Tus finanzas, <span className="text-emerald-500">libres de extinción</span>.
                        </h1>
                        <p className="mt-6 text-lg md:text-xl text-slate-600">
                            Dinamo es la app que convierte el miedo al SAT, las deudas y el ahorro en un juego que sí entiendes. Aprende con historias reales y simulaciones divertidas.
                        </p>
                        <div className="mt-10 flex flex-col sm:flex-row items-start gap-4">
                            <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="bg-emerald-500 text-white font-bold px-8 py-4 rounded-full shadow-lg shadow-emerald-500/30 hover:bg-emerald-600 transition-all duration-300 w-full sm:w-auto">
                                Empezar mi Aventura
                            </motion.button>
                        </div>
                    </motion.div>
                    <motion.div initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8, delay: 0.2 }} className="relative flex justify-center items-center mt-10 md:mt-0">
                         <img src="dinamo.png" alt="Dinosaurio amigable aprendiendo sobre finanzas" className="relative z-10 w-full max-w-md" />
                    </motion.div>
                </div>
            </div>
        </section>
    );

    const ProblemsSection = () => {
        const problems = [
            { icon: <Landmark className="w-8 h-8 text-amber-500"/>, title: 'Pánico al SAT', description: 'El RFC, las declaraciones y los impuestos se sienten como un meteorito a punto de caer.' },
            { icon: <CreditCard className="w-8 h-8 text-amber-500"/>, title: 'Deudas Prehistóricas', description: 'Las tarjetas y préstamos te cazan como un T-Rex. Se siente como un laberinto sin salida.' },
            { icon: <PiggyBank className="w-8 h-8 text-amber-500"/>, title: 'Ahorro Fósil', description: 'Tu sueldo se extingue más rápido que los dinosaurios y ahorrar parece imposible.' },
        ];
        return (
            <section id="problema" className="py-20 bg-white">
                <div className="container mx-auto px-6">
                    <ScrollReveal className="text-center">
                        <h2 className="text-3xl md:text-4xl font-bold text-slate-800 font-display">¿Tu vida financiera parece de la era de piedra?</h2>
                        <p className="mt-4 text-lg text-slate-600 max-w-2xl mx-auto">No estás solo. Te enfrentas a un sistema que nadie te enseñó a navegar.</p>
                    </ScrollReveal>
                    <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
                        {problems.map((problem) => (
                            <ScrollReveal key={problem.title} className="bg-amber-50 p-8 rounded-2xl border-2 border-amber-100 text-center transition-transform hover:-translate-y-2">
                                <div className="bg-amber-100 w-16 h-16 rounded-full flex items-center justify-center mb-6 mx-auto">{problem.icon}</div>
                                <h3 className="text-xl font-bold text-slate-800 font-display">{problem.title}</h3>
                                <p className="mt-2 text-amber-800">{problem.description}</p>
                            </ScrollReveal>
                        ))}
                    </div>
                </div>
            </section>
        );
    };

    const SolutionSection = () => (
         <section id="solucion" className="py-20">
            <div className="container mx-auto px-6">
                 <div className="grid md:grid-cols-2 gap-12 items-center">
                    <motion.div initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8, delay: 0.2 }} className="relative flex justify-center items-center">
                         <img src="interfaz-captura.jpeg" alt="Interfaz de la app Dinamo" className="relative z-10 w-full max-w-sm" />
                    </motion.div>
                     <ScrollReveal>
                        <span className="inline-block bg-emerald-100 text-emerald-600 font-semibold px-3 py-1 rounded-full text-sm mb-4">La Evolución Financiera</span>
                        <h2 className="text-3xl md:text-4xl font-bold text-slate-800 font-display">Aprende finanzas como si fuera un juego.</h2>
                        <p className="mt-4 text-lg text-slate-600">Dinamo convierte la educación financiera en una aventura divertida y relevante para ti:</p>
                        <ul className="mt-6 space-y-4">
                            <li className="flex items-start gap-4">
                                <div className="bg-emerald-100/50 p-2 rounded-full"><Gamepad2 className="w-6 h-6 text-emerald-500"/></div>
                                <div>
                                    <h4 className="font-bold text-slate-800">Misiones y Simulaciones</h4>
                                    <p className="text-slate-500">Enfrenta desafíos basados en la vida real, desde declarar impuestos hasta elegir tu primer crédito.</p>
                                </div>
                            </li>
                             <li className="flex items-start gap-4">
                                <div className="bg-emerald-100/50 p-2 rounded-full"><Users className="w-6 h-6 text-emerald-500"/></div>
                                <div>
                                    <h4 className="font-bold text-slate-800">Basado en Historias Reales</h4>
                                    <p className="text-slate-500">El contenido nace de las dudas y problemas de jóvenes mexicanos como tú.</p>
                                </div>
                            </li>
                             <li className="flex items-start gap-4">
                                <div className="bg-emerald-100/50 p-2 rounded-full"><Sparkles className="w-6 h-6 text-emerald-500"/></div>
                                <div>
                                    <h4 className="font-bold text-slate-800">Recompensas y Logros</h4>
                                    <p className="text-slate-500">Gana puntos y medallas por cada nuevo conocimiento adquirido. ¡Sube de nivel tus finanzas!</p>
                                </div>
                            </li>
                        </ul>
                    </ScrollReveal>
                 </div>
            </div>
        </section>
    );

    const FinancialMinigameSection = () => {
        const TOTAL_SALARY = 5000;
        const [rent, setRent] = useState(1500);
        const [food, setFood] = useState(1000);
        const [fun, setFun] = useState(500);
        const [savings, setSavings] = useState(TOTAL_SALARY - 3000);
        const [feedback, setFeedback] = useState('');

        useEffect(() => {
            const totalSpent = rent + food + fun;
            if (totalSpent > TOTAL_SALARY) {
                setSavings(0);
                setFeedback('¡Cuidado! Gastaste más de tu sueldo. Ajusta tus gastos.');
            } else {
                const newSavings = TOTAL_SALARY - totalSpent;
                setSavings(newSavings);
                if (newSavings / TOTAL_SALARY >= 0.2) {
                    setFeedback('¡Excelente! Ahorrar más del 20% es un gran paso para tu futuro.');
                } else if (newSavings > 0) {
                    setFeedback('¡Bien! Estás ahorrando, sigue así y trata de aumentar un poco cada mes.');
                } else {
                    setFeedback('No te quedó nada para ahorrar. ¡Intenta reducir otros gastos!');
                }
            }
        }, [rent, food, fun]);
        
        const handleReset = () => {
            setRent(1500);
            setFood(1000);
            setFun(500);
        };

        return (
            <section id="minigame" className="py-20 bg-white">
                <div className="container mx-auto px-6 text-center">
                    <ScrollReveal>
                        <h2 className="text-3xl md:text-4xl font-bold text-slate-800 font-display">Mini-Juego: Tu Primer Sueldo</h2>
                        <p className="mt-4 text-lg text-slate-600 max-w-2xl mx-auto">
                            ¡Recibiste $5,000! Distribúyelos sabiamente para sobrevivir en la jungla financiera.
                        </p>
                    </ScrollReveal>
                    <ScrollReveal className="mt-12 max-w-3xl mx-auto bg-slate-50 p-8 rounded-2xl border-2 border-slate-100">
                        <div className="grid md:grid-cols-2 gap-8 text-left">
                            <div>
                                <div className="mb-4">
                                    <label className="block font-bold text-slate-700">Renta de Caverna: ${rent}</label>
                                    <input type="range" min="1000" max="3000" step="100" value={rent} onChange={(e) => setRent(Number(e.target.value))} className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-emerald-500" />
                                </div>
                                <div className="mb-4">
                                    <label className="block font-bold text-slate-700">Comida (Bayas y Carne): ${food}</label>
                                    <input type="range" min="500" max="2500" step="100" value={food} onChange={(e) => setFood(Number(e.target.value))} className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-emerald-500" />
                                </div>
                                <div>
                                    <label className="block font-bold text-slate-700">Diversión (Jugar con Dinos): ${fun}</label>
                                    <input type="range" min="0" max="2000" step="100" value={fun} onChange={(e) => setFun(Number(e.target.value))} className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-emerald-500" />
                                </div>
                            </div>
                            <div className="bg-white p-6 rounded-lg border border-slate-200 flex flex-col justify-center items-center">
                                <h4 className="font-bold text-slate-500 text-lg">Huevo para el Futuro</h4>
                                <p className="text-4xl font-bold text-emerald-500 my-2">${savings}</p>
                                <p className={`text-sm font-semibold ${savings > 1000 ? 'text-emerald-600' : 'text-amber-600'}`}>{feedback}</p>
                                <button onClick={handleReset} className="mt-4 text-sm text-slate-500 hover:text-emerald-500">Reiniciar</button>
                            </div>
                        </div>
                    </ScrollReveal>
                </div>
            </section>
        );
    };

    const DinoDineroSection = () => (
        <section id="dino-dinero" className="py-20">
            <div className="container mx-auto px-6">
                 <div className="grid md:grid-cols-2 gap-12 items-center">
                    <ScrollReveal>
                        <span className="inline-block bg-emerald-100 text-emerald-600 font-semibold px-3 py-1 rounded-full text-sm mb-4">Tu Guía Personal</span>
                        <h2 className="text-3xl md:text-4xl font-bold text-slate-800 font-display">Conoce a Dino Dinero.</h2>
                        <p className="mt-4 text-lg text-slate-600">Dino Dinero es el cerebro de la app, una IA ( <a href="https://evasalud.com.mx" className="italic text-blue-400" >potenciado por EVA</a> ) que hace tu aprendizaje único.</p>
                        <ul className="mt-6 space-y-4">
                            <li className="flex items-start gap-4">
                                <div className="bg-emerald-100/50 p-2 rounded-full"><UserCheck className="w-6 h-6 text-emerald-500"/></div>
                                <div>
                                    <h4 className="font-bold text-slate-800">Entiende tu Perfil</h4>
                                    <p className="text-slate-500">Analiza tus respuestas y progreso para saber si eres un ahorrador nato, un gastador impulsivo o un futuro inversionista.</p>
                                </div>
                            </li>
                             <li className="flex items-start gap-4">
                                <div className="bg-emerald-100/50 p-2 rounded-full"><Rocket className="w-6 h-6 text-emerald-500"/></div>
                                <div>
                                    <h4 className="font-bold text-slate-800">Crea Actividades Efectivas</h4>
                                    <p className="text-slate-500">Diseña misiones y simulaciones a tu medida. Si te cuesta ahorrar, te dará más retos de ahorro.</p>
                                </div>
                            </li>
                             <li className="flex items-start gap-4">
                                <div className="bg-emerald-100/50 p-2 rounded-full"><BrainCircuit className="w-6 h-6 text-emerald-500"/></div>
                                <div>
                                    <h4 className="font-bold text-slate-800">Acelera tu Aprendizaje</h4>
                                    <p className="text-slate-500">Te explica los temas difíciles con ejemplos que conectan contigo, para que aprendas más rápido y sin aburrirte.</p>
                                </div>
                            </li>
                        </ul>
                    </ScrollReveal>
                    <motion.div initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8, delay: 0.2 }} className="relative flex justify-center items-center">
                         <img src="interfaz-chatbot.jpeg" alt="Dino Dinero, el asistente de IA" className="relative z-10 w-full max-w-md" />
                    </motion.div>
                 </div>
            </div>
        </section>
    );

    const TestimonialsSection = () => {
        const testimonials = [
            {
                quote: "Por primera vez no me sentí tonta preguntando sobre el SAT. Las misiones son súper claras y hasta divertidas. ¡Ya hice mi primera declaración!",
                name: "Sofía L.",
                role: "Diseñadora Freelance"
            },
            {
                quote: "Creí que ahorrar era imposible con mi sueldo. El minijuego me abrió los ojos sobre a dónde se iba mi dinero. ¡Ahora sí ahorro de verdad!",
                name: "America M.",
                role: "Programadora Jr."
            },
            {
                quote: "La mejor parte es Dino Dinero. Es como tener un amigo que sabe mucho de finanzas y te explica con paciencia. 100% recomendada.",
                name: "Valeria G.",
                role: "Estudiante de Universidad"
            }
        ];
        return (
            <section id="testimonios" className="py-20 bg-white">
                <div className="container mx-auto px-6">
                    <ScrollReveal className="text-center">
                        <h2 className="text-3xl md:text-4xl font-bold text-slate-800 font-display">Lo que dice nuestra manada</h2>
                        <p className="mt-4 text-lg text-slate-600 max-w-2xl mx-auto">La confianza es el primer paso para conquistar tus finanzas.</p>
                    </ScrollReveal>
                    <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
                        {testimonials.map((testimonial) => (
                             <ScrollReveal key={testimonial.name} className="bg-slate-50 p-8 rounded-2xl flex flex-col border border-slate-100">
                                <MessageSquareQuote className="w-8 h-8 text-emerald-400 mb-4" />
                                <p className="text-slate-600 flex-grow">"{testimonial.quote}"</p>
                                <div className="mt-6 pt-4 border-t border-slate-200">
                                    <p className="font-bold text-slate-800">{testimonial.name}</p>
                                    <p className="text-sm text-slate-500">{testimonial.role}</p>
                                </div>
                            </ScrollReveal>
                        ))}
                    </div>
                </div>
            </section>
        );
    };
    
    const FaqSection = () => {
        const [activeIndex, setActiveIndex] = useState(null);
        const faqs = [
            { q: '¿Dinamo es realmente gratis?', a: 'Sí, las funciones principales de educación y simulación son y siempre serán gratuitas. Creemos que la educación financiera es un derecho, no un privilegio.' },
            { q: '¿Necesito saber algo de finanzas para empezar?', a: '¡Absolutamente no! Dinamo está diseñado para llevarte de cero a héroe financiero. Empezamos con lo más básico y avanzas a tu propio ritmo.' },
            { q: '¿Es seguro? ¿Tengo que conectar mis cuentas de banco?', a: 'Tu seguridad es nuestra máxima prioridad. No te pedimos conectar ninguna cuenta bancaria. Toda la información que registras es para tu aprendizaje y usamos encriptación de grado bancario para proteger tus datos.' },
            { q: '¿Quién es Dino Dinero?', a: 'Es tu coach financiero personal dentro de la app. Una IA amigable (potenciada por la tecnología de EVA) que personaliza tu experiencia para que aprendas mejor y más rápido.' },
        ];
        
        return (
            <section id="faq" className="py-20">
                <div className="container mx-auto px-6 max-w-3xl">
                    <ScrollReveal className="text-center">
                        <h2 className="text-3xl md:text-4xl font-bold text-slate-800 font-display">Preguntas Frecuentes</h2>
                    </ScrollReveal>
                    <div className="mt-12 space-y-4">
                        {faqs.map((faq, index) => (
                            <ScrollReveal key={index}>
                                <div className="bg-white rounded-xl overflow-hidden border border-slate-200">
                                    <button onClick={() => setActiveIndex(activeIndex === index ? null : index)} className="w-full text-left p-6 flex justify-between items-center hover:bg-slate-50 transition-colors">
                                        <span className="font-semibold text-slate-800">{faq.q}</span>
                                        <ChevronDown className={`w-6 h-6 text-emerald-500 transition-transform duration-300 ${activeIndex === index ? 'rotate-180' : ''}`} />
                                    </button>
                                    <AnimatePresence>
                                    {activeIndex === index && (
                                        <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.3, ease: "easeInOut" }}>
                                            <p className="px-6 pb-6 text-slate-600">{faq.a}</p>
                                        </motion.div>
                                    )}
                                    </AnimatePresence>
                                </div>
                            </ScrollReveal>
                        ))}
                    </div>
                </div>
            </section>
        );
    };

    const FinalCtaSection = () => (
        <section id="cta" className="py-20">
            <div className="container mx-auto px-6">
                <ScrollReveal className="bg-slate-800 rounded-2xl p-10 md:p-16 text-center relative overflow-hidden">
                    <div className="absolute -bottom-20 -left-20 w-60 h-60 bg-emerald-500/10 rounded-full filter blur-2xl"></div>
                    <div className="absolute -top-20 -right-20 w-60 h-60 bg-emerald-500/10 rounded-full filter blur-2xl"></div>
                    <div className="relative">
                        <h2 className="text-3xl md:text-4xl font-bold text-white font-display">Evita la extinción financiera.</h2>
                        <p className="mt-4 text-lg text-slate-300 max-w-xl mx-auto">Únete a la lista de espera de la beta y sé de los primeros en transformar tu relación con el dinero. Es gratis, es fácil y es para ti.</p>
                        <div className="mt-10">
                             <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="bg-emerald-500 text-white font-bold px-8 py-4 rounded-full shadow-lg shadow-emerald-500/30 hover:bg-emerald-600 transition-all duration-300">
                                 Quiero unirme a la beta
                            </motion.button>
                        </div>
                    </div>
                </ScrollReveal>
            </div>
        </section>
    );

    // Renderiza todas las secciones en orden
    return (
        <main>
            <HeroSection />
            <ProblemsSection />
            <SolutionSection />
            <FinancialMinigameSection />
            <DinoDineroSection />
            <TestimonialsSection />
            <FaqSection />
            <FinalCtaSection />
        </main>
    );
};
// --- App.jsx (Archivo Raíz) ---
export default function App() {
    return (
        <>
            <style>
                {`
                    @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;700;800&family=Quicksand:wght@700&display=swap');
                    body {
                        font-family: 'Poppins', sans-serif;
                    }
                    .font-display {
                        font-family: 'Quicksand', sans-serif;
                    }
                `}
            </style>
            <div className="bg-[#FBFBF8] font-sans text-slate-700">
                <JurassicBackground />
                <MainContent />
            </div>
        </>
    );
}
