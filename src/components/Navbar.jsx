import { useState } from "react";
import { motion } from "framer-motion";
import { ShieldCheck, Menu, X, ArrowUpRight } from "lucide-react";

export const Navbar = ({ onOpenAdmissions }) => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    return (
        <header className="fixed top-0 left-0 right-0 z-40 bg-tis-deep/90 backdrop-blur-md border-b border-tis-gold/15">
            <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
                <a href="#" className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-tis-navy border border-tis-gold/30 flex items-center justify-center text-tis-gold">
                        <ShieldCheck className="w-6 h-6" />
                    </div>
                    <div>
            <span className="font-serif text-lg tracking-wider text-tis-white font-bold block">
              TULA'S
            </span>
                        <span className="text-[10px] tracking-widest text-tis-gold block uppercase font-medium">
              International School
            </span>
                    </div>
                </a>

                <nav className="hidden md:flex items-center gap-8 text-sm text-tis-lightSlate font-medium">
                    <a href="#about" className="hover:text-tis-gold transition-colors">About TIS</a>
                    <a href="#pillars" className="hover:text-tis-gold transition-colors">Pillars</a>
                    <a href="#campus" className="hover:text-tis-gold transition-colors">Campus Life</a>
                </nav>

                <div className="hidden md:flex items-center gap-4">
                    <button
                        onClick={onOpenAdmissions}
                        className="px-5 py-2.5 rounded-full border border-tis-gold text-tis-gold hover:bg-tis-gold hover:text-tis-deep transition-all duration-300 text-sm font-semibold flex items-center gap-1.5"
                    >
                        Apply for 2026-27
                        <ArrowUpRight className="w-4 h-4" />
                    </button>
                </div>

                <button
                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                    className="md:hidden text-tis-white p-2"
                    aria-label="Toggle Navigation"
                >
                    {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                </button>
            </div>

            {mobileMenuOpen && (
                <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="md:hidden bg-tis-deep border-b border-tis-gold/20 px-6 py-6 space-y-4"
                >
                    <a href="#about" onClick={() => setMobileMenuOpen(false)} className="block text-tis-lightSlate">About TIS</a>
                    <a href="#pillars" onClick={() => setMobileMenuOpen(false)} className="block text-tis-lightSlate">Pillars</a>
                    <button
                        onClick={() => {
                            setMobileMenuOpen(false);
                            onOpenAdmissions();
                        }}
                        className="block text-tis-gold font-semibold"
                    >
                        Apply for 2026-27 →
                    </button>
                </motion.div>
            )}
        </header>
    );
};