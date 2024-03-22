import React, { useState, useRef, useEffect } from "react";
import css from "./ButtonLang.module.css";
import sprite from "../../../assets/sprite.svg";

const ButtonLang = () => {
  const [language, setLanguage] = useState("uk");
  const [showModal, setShowModal] = useState(false);
  const modalRef = useRef(null);

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  const changeLanguage = (lang) => {
    setLanguage(lang);
    toggleModal();
  };

  const buttonText = {
    uk: "uk",
    ru: "ru",
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        setShowModal(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <>
      <button className={css.buttonLang} onClick={toggleModal}>
        {buttonText[language]}
        <svg className={css.svg}>
          <use href={sprite + "#arrow-dowm"}></use>
        </svg>
      </button>

      {showModal && (
        <div className={css.modal}>
          <div className={css.modalContent} ref={modalRef}>
            <div className={css.modalText}>
              <h2 className={css.title}>Оберіть мову</h2>
              <p className={css.text}>
                Щоб користуватись сайтом, треба зробити вибір
              </p>
            </div>
            <div className={css.modalLanguage}>
              <button
                className={css.buttonLanguage}
                onClick={() => changeLanguage("uk")}
              >
                {buttonText["uk"]}
              </button>

              <button
                className={css.buttonLanguage}
                onClick={() => changeLanguage("ru")}
              >
                {buttonText["ru"]}
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ButtonLang;
