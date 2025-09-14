import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { AnimatePresence, motion } from "framer-motion";

function MainLayouts() {
    const location = useLocation();

    return (
        <>
            <header>
                <AnimatePresence mode="wait">
                    <motion.div
                        key={location.pathname + "-navbar"}
                        initial={{ y: -80, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        exit={{ y: -80, opacity: 0 }}
                        transition={{ duration: 0.5, ease: "easeInOut" }}
                    >
                        <Navbar />
                    </motion.div>
                </AnimatePresence>
            </header>

            <main>
                <Outlet />
            </main>

            <footer>
                <Footer />
            </footer>
        </>
    );
}

export default MainLayouts;
