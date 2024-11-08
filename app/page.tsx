"use client"
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import CookieAlert from "@/components/modules/CookieAlert/CookieAlert";
import MainPage from "@/components/templates/MainPage/MainPage";
import { handleCloseAuthPopup } from "@/lib/utils/common";
import { useUnit } from "effector-react";
import { $openAuthPopup } from "@/context/auth/state";


export default function Home() {
  const [cookieAlertOpen, setCookieAlertOpen] = useState(false)
  const openAuthPopup = useUnit($openAuthPopup);

  useEffect(() => {
    const checkCookie = document.cookie.indexOf("CookieBy=NovaAcademy");
    checkCookie != -1
      ? setCookieAlertOpen(false)
      : setTimeout(() => setCookieAlertOpen(true), 3000)
  }, []);

  return (
    <>
      <MainPage/>
      {cookieAlertOpen && (
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.5 }}
          className="cookie-popup"
        >
          <CookieAlert setCookieAlertOpen={setCookieAlertOpen}/>
        </motion.div>
      )}
      <div
        className={`auth-overlay ${openAuthPopup ? "overlay-active" : ""}`}
        onClick={handleCloseAuthPopup}
      />
    </>
  );
}
