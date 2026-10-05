import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, CheckCircle2 } from "lucide-react";

export const AdmissionsModal = ({ isOpen, onClose }) => {
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        setSubmitted(true);
        setTimeout(() => {
            setSubmitted(false);
            onClose();
        }, 2500);
    };

    return (
        <AnimatePresence>
            {isOpen && (
                <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="absolute inset-0 bg-tis-deep/80 backdrop-blur-sm"
                    />

                    <motion.div
                        initial={{ scale: 0.95, opacity: 0, y: 20 }}
                        animate={{ scale: 1, opacity: 1, y: 0 }}
                        exit={{ scale: 0.95, opacity: 0, y: 20 }}
                        className="relative w-full max-w-lg bg-tis-navy border border-tis-gold/30 rounded-2xl p-6 sm:p-8 shadow-2xl text-tis-white z-10"
                    >
                        <button
                            onClick={onClose}
                            className="absolute top-5 right-5 text-tis-slate hover:text-tis-white transition-colors"
                        >
                            <X className="w-5 h-5" />
                        </button>

                        {submitted ? (
                            <div className="text-center py-10">
                                <CheckCircle2 className="w-16 h-16 text-tis-gold mx-auto mb-4" />
                                <h3 className="font-serif text-2xl font-bold">Inquiry Received</h3>
                                <p className="text-tis-slate text-sm mt-2">
                                    Our admissions office will reach out within 24 working hours.
                                </p>
                            </div>
                        ) : (
                            <>
                <span className="text-xs uppercase tracking-widest text-tis-gold font-semibold">
                  Tula's Admissions
                </span>
                                <h3 className="font-serif text-2xl font-bold mt-1">Apply for 2026-27</h3>
                                <p className="text-tis-slate text-xs mt-1 mb-6">
                                    Fill in your details below to schedule an assessment or campus visit.
                                </p>

                                <form onSubmit={handleSubmit} className="space-y-4 text-xs sm:text-sm">
                                    <div>
                                        <label className="block text-tis-lightSlate mb-1 font-medium">Parent / Guardian Name</label>
                                        <input
                                            required
                                            type="text"
                                            placeholder="e.g. Rajesh Sharma"
                                            className="w-full bg-tis-deep/80 border border-tis-gold/20 rounded-lg px-3.5 py-2.5 text-tis-white placeholder:text-tis-slate/50 focus:outline-none focus:border-tis-gold transition-colors"
                                        />
                                    </div>

                                    <div>
                                        <label className="block text-tis-lightSlate mb-1 font-medium">Email Address</label>
                                        <input
                                            required
                                            type="email"
                                            placeholder="e.g. rajesh@example.com"
                                            className="w-full bg-tis-deep/80 border border-tis-gold/20 rounded-lg px-3.5 py-2.5 text-tis-white placeholder:text-tis-slate/50 focus:outline-none focus:border-tis-gold transition-colors"
                                        />
                                    </div>

                                    <div className="grid grid-cols-2 gap-3">
                                        <div>
                                            <label className="block text-tis-lightSlate mb-1 font-medium">Phone Number</label>
                                            <input
                                                required
                                                type="tel"
                                                placeholder="+91 98765 43210"
                                                className="w-full bg-tis-deep/80 border border-tis-gold/20 rounded-lg px-3.5 py-2.5 text-tis-white placeholder:text-tis-slate/50 focus:outline-none focus:border-tis-gold transition-colors"
                                            />
                                        </div>
                                        <div>
                                            <label className="block text-tis-lightSlate mb-1 font-medium">Grade Seeking</label>
                                            <select className="w-full bg-tis-deep border border-tis-gold/20 rounded-lg px-3.5 py-2.5 text-tis-white focus:outline-none focus:border-tis-gold transition-colors">
                                                <option value="4">Grade IV - VI</option>
                                                <option value="7">Grade VII - VIII</option>
                                                <option value="9">Grade IX - X</option>
                                                <option value="11">Grade XI - XII</option>
                                            </select>
                                        </div>
                                    </div>

                                    <button
                                        type="submit"
                                        className="w-full mt-4 py-3 bg-tis-gold text-tis-deep font-semibold rounded-lg hover:bg-tis-goldLight transition-colors"
                                    >
                                        Submit Application
                                    </button>
                                </form>
                            </>
                        )}
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
};