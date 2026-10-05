import { motion } from "framer-motion";
import { BookMarked, SunMedium, Trophy, Users } from "lucide-react";

const pillars = [
    {
        icon: SunMedium,
        title: "The Modern Gurukul",
        desc: "Ancient Indian values married with 21st-century inquiry, teaching humility, mental resilience, and self-discipline.",
    },
    {
        icon: BookMarked,
        title: "CBSE & STEM Excellence",
        desc: "Comprehensive academic framework complemented by robotics laboratories, creative arts, and international exchange programs.",
    },
    {
        icon: Trophy,
        title: "Olympic-Grade Athletics",
        desc: "Horse riding arena, international standard shooting ranges, all-weather swimming pools, and championship football turfs.",
    },
    {
        icon: Users,
        title: "Warm Residential Life",
        desc: "A safe, home-like environment with resident housemasters, organic dining, and 24/7 dedicated medical care.",
    },
];

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { staggerChildren: 0.15 },
    },
};

const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export const Pillars = () => {
    return (
        <section id="pillars" className="py-24 bg-tis-deep border-t border-tis-gold/10">
            <div className="max-w-7xl mx-auto px-6">
                <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-semibold text-tis-gold uppercase tracking-widest">
            Why Choose Tula's
          </span>
                    <h2 className="font-serif text-3xl sm:text-4xl font-bold text-tis-white mt-2">
                        The Pillars of Wholesome Growth
                    </h2>
                    <p className="text-tis-slate mt-4 text-sm sm:text-base">
                        Equipping scholars not just to clear examinations, but to think critically and lead with character.
                    </p>
                </div>

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
                >
                    {pillars.map((pillar, idx) => (
                        <motion.div
                            key={idx}
                            variants={cardVariants}
                            whileHover={{ y: -5 }}
                            className="bg-tis-navy/40 border border-tis-gold/15 rounded-2xl p-6 transition-all duration-300 hover:border-tis-gold/40 hover:bg-tis-navy/70 group"
                        >
                            <div className="w-12 h-12 rounded-xl bg-tis-gold/10 border border-tis-gold/20 flex items-center justify-center text-tis-gold mb-5 group-hover:bg-tis-gold group-hover:text-tis-deep transition-colors duration-300">
                                <pillar.icon className="w-6 h-6" />
                            </div>
                            <h3 className="font-serif text-lg font-bold text-tis-white mb-2">
                                {pillar.title}
                            </h3>
                            <p className="text-xs sm:text-sm text-tis-slate leading-relaxed">
                                {pillar.desc}
                            </p>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};