import { motion } from "framer-motion";
import { Compass, Sparkles } from "lucide-react";

export const Hero = ({ onOpenAdmissions }) => {
    return (
        <section className="relative min-h-screen flex items-center justify-center pt-28 pb-16 overflow-hidden bg-gradient-to-b from-tis-deep via-tis-navy to-tis-deep">
            <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] bg-tis-gold/5 blur-[120px] rounded-full pointer-events-none" />

            <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-tis-gold/30 bg-tis-navy/60 text-tis-gold text-xs font-semibold uppercase tracking-widest mb-6"
                >
                    <Sparkles className="w-3.5 h-3.5" />
                    The Modern Gurukul • Dehradun, India
                </motion.div>

                <motion.h1
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="font-serif text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight text-tis-white max-w-4xl mx-auto leading-tight"
                >
                    Nurturing Tomorrow's Leaders with{" "}
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-tis-gold via-tis-goldLight to-amber-200">
            Timeless Values
          </span>
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="mt-6 text-base sm:text-lg text-tis-slate max-w-2xl mx-auto leading-relaxed"
                >
                    Ranked among India's top boarding institutions, Tula's combines academic rigor with traditional Indian ethos across a 22-acre Himalayan campus in Dehradun.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                    className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
                >
                    <button
                        onClick={onOpenAdmissions}
                        className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-tis-gold text-tis-deep font-semibold shadow-lg shadow-tis-gold/20 hover:bg-tis-goldLight transition-all duration-300"
                    >
                        Admissions Inquiry
                    </button>
                    <a
                        href="#tour"
                        className="w-full sm:w-auto px-8 py-3.5 rounded-full border border-tis-slate/30 text-tis-lightSlate hover:border-tis-gold hover:text-tis-gold transition-all duration-300 flex items-center justify-center gap-2"
                    >
                        <Compass className="w-4 h-4" />
                        Explore Campus
                    </a>
                </motion.div>

                {/* Stats Row */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.8 }}
                    className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto border-t border-tis-gold/15 pt-8"
                >
                    <div className="text-left p-3">
                        <span className="font-serif text-3xl font-bold text-tis-gold block">#1</span>
                        <span className="text-xs text-tis-slate tracking-wide">Co-Ed Boarding School in Dehradun</span>
                    </div>
                    <div className="text-left p-3">
                        <span className="font-serif text-3xl font-bold text-tis-gold block">22+</span>
                        <span className="text-xs text-tis-slate tracking-wide">Acres Eco-Friendly Campus</span>
                    </div>
                    <div className="text-left p-3">
                        <span className="font-serif text-3xl font-bold text-tis-gold block">1:8</span>
                        <span className="text-xs text-tis-slate tracking-wide">Teacher-Student Ratio</span>
                    </div>
                    <div className="text-left p-3">
                        <span className="font-serif text-3xl font-bold text-tis-gold block">100%</span>
                        <span className="text-xs text-tis-slate tracking-wide">Premier Global Placements</span>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};