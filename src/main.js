import { useState } from "react";
import { CustomCursor } from "./components/CustomCursor";
import { ScrollProgress } from "./components/ScrollProgress";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { Pillars } from "./components/Pillars";
import { AdmissionsModal } from "./components/AdmissionsModal";
import { Footer } from "./components/Footer";

export default function App() {
    const [modalOpen, setModalOpen] = useState(false);

    return (
        <div className="min-h-screen bg-tis-deep text-tis-white selection:bg-tis-gold selection:text-tis-deep">
            <ScrollProgress />
            <CustomCursor />
            <Navbar onOpenAdmissions={() => setModalOpen(true)} />
            <Hero onOpenAdmissions={() => setModalOpen(true)} />
            <Pillars />
            <AdmissionsModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
            <Footer />
        </div>
    );
}