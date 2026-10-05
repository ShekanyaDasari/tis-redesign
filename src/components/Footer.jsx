export const Footer = () => {
    return (
        <footer className="bg-tis-deep border-t border-tis-gold/10 pt-16 pb-8 text-tis-slate text-sm">
            <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-10 pb-12 border-b border-tis-gold/10">
                <div>
          <span className="font-serif text-lg font-bold text-tis-white tracking-wider block">
            TULA'S INTERNATIONAL
          </span>
                    <span className="text-xs text-tis-gold block mt-0.5">The Modern Gurukul</span>
                    <p className="mt-4 text-xs leading-relaxed text-tis-slate">
                        Dhoolkot, P.O. Selaqui, Chakrata Road, Dehradun, Uttarakhand - 248011, India.
                    </p>
                </div>

                <div>
                    <h4 className="text-tis-white font-semibold text-xs tracking-wider uppercase mb-4">
                        Curriculum
                    </h4>
                    <ul className="space-y-2 text-xs">
                        <li><a href="#" className="hover:text-tis-gold transition-colors">CBSE Senior Secondary</a></li>
                        <li><a href="#" className="hover:text-tis-gold transition-colors">STEM & Robotics Lab</a></li>
                        <li><a href="#" className="hover:text-tis-gold transition-colors">Career Pathways</a></li>
                    </ul>
                </div>

                <div>
                    <h4 className="text-tis-white font-semibold text-xs tracking-wider uppercase mb-4">
                        Residential Life
                    </h4>
                    <ul className="space-y-2 text-xs">
                        <li><a href="#" className="hover:text-tis-gold transition-colors">Air-Conditioned Hostels</a></li>
                        <li><a href="#" className="hover:text-tis-gold transition-colors">Pure Organic Mess</a></li>
                        <li><a href="#" className="hover:text-tis-gold transition-colors">Horse Riding Club</a></li>
                    </ul>
                </div>

                <div>
                    <h4 className="text-tis-white font-semibold text-xs tracking-wider uppercase mb-4">
                        Contact TIS
                    </h4>
                    <p className="text-xs text-tis-slate mb-2">
                        Admissions Desk is active Mon - Sat (9:00 AM - 6:00 PM IST).
                    </p>
                    <span className="text-tis-gold text-xs font-semibold block">info@tis.edu.in</span>
                    <span className="text-tis-gold text-xs font-semibold block">+91-0135-2699444</span>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-6 pt-6 flex flex-col sm:flex-row items-center justify-between text-xs text-tis-slate/60">
                <p>© 2026 Tula's International School. All rights reserved.</p>
                <p className="mt-2 sm:mt-0">Dehradun, Uttarakhand, India</p>
            </div>
        </footer>
    );
};