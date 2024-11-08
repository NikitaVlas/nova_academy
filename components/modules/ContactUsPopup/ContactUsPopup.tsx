import React from "react";
import { useLang } from "@/hooks/useLang";
import ContactUsPopupClose from "@/components/modules/ContactUsPopup/ContactUsPopupClose";
import NameInput from "@/components/modules/ContactUsPopup/NameInput";
import EmailInput from "@/components/modules/ContactUsPopup/EmailInput";
import { useAuthForm } from "@/hooks/useAuthFrom";

const ContactUsPopup = () => {
  const { lang, translations } = useLang()
  const { register, errors } = useAuthForm();

  return (
    <div className="container auth-popup">
      <div>
        <div className="starsec" />
        <div className="starthird" />
        <div className="starfourth" />
        <div className="starfifth" />
      </div>
      <div className="auth-popup__card__inner">
        <div className="card-front">
          <ContactUsPopupClose />
          <div className="card-body wow-bg">
            <h3 className="card-body__title">
              {translations[lang].auth_popup.registration_title}
            </h3>
            <p className="card-body__description">
              {translations[lang].auth_popup.registration_description}
            </p>
            <form>
              <NameInput register={register} errors={errors} />
              <EmailInput register={register} errors={errors} />
              <div className="card-body__inner">
                {/*<div className="inner__top">*/}
                {/*  <button className="inner__btn" type="submit" disabled={spinner}>*/}
                {/*    {spinner ? (*/}
                {/*      <FontAwesomeIcon icon={faSpinner} spin/>*/}
                {/*    ) : (*/}
                {/*      translations[lang].auth_popup.registration_text*/}
                {/*    )}*/}
                {/*  </button>*/}
                {/*</div>*/}
                <div className="inner__bottom">
                  <button type="button" className="btn-reset inner__switch">
                    {translations[lang].auth_popup.login_text}!
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUsPopup;
