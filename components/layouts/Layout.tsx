"use client"
import Header from "@/components/modules/Header/Header";
import Footer from "@/components/modules/Footer/Footer";
import { AnimatePresence, motion } from "framer-motion";
import ContactUsPopup from "@/components/modules/ContactUsPopup/ContactUsPopup";
import { useUnit } from "effector-react";
import { $openAuthPopup } from "@/context/auth/state";
import { MutableRefObject, useRef } from "react";
import { handleCloseAuthPopup } from "@/lib/utils/common";
import { $showSizeTable } from "@/context/modals";

const Layout = ({ children }: {
  children: React.ReactNode;
}) => {
  const showSizeTable = useUnit($showSizeTable)
  const openAuthPopup = useUnit($openAuthPopup);
  const authWrapperRef = useRef() as MutableRefObject<HTMLDivElement>;

  const handleCloseAuthPopupByTarget = (
    e: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => {
    const target = e.target as Element

    if (target === authWrapperRef.current) {
      handleCloseAuthPopup()
    }
  };

  return (
    <>
      <Header />
      {children}
      <AnimatePresence>
        {openAuthPopup && (
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3 }}
            exit={{ opacity: 0, scale: 0.5 }}
            className="auth-popup-wrapper"
            onClick={handleCloseAuthPopupByTarget}
            ref={authWrapperRef}
          >
            <ContactUsPopup />
          </motion.div>
        )}
      </AnimatePresence>
      <Footer />
    </>
  );
};

export default Layout;
