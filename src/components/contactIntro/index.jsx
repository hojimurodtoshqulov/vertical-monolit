import React from "react";
import scss from "./contactIntro.module.scss";

const ContactIntro = () => {
  return (
    <div className={scss.wrapper}>
      <div className="container">
        <h2>Контакты</h2>
        <div className={scss.phones}>
          <a href="tel:+998991112233">+998 (99) 111 - 22 - 33</a>
          <a href="tel:+998991112233">+998 (99) 111 - 22 - 33</a>
        </div>
        <h2>Адрес</h2>
        <p className={scss.text}>
          Lorem ipsum dolor sit amet consectetur. Euismod turpis ac quam
          curabitur magna eu id varius.
        </p>
      </div>
    </div>
  );
};

export default ContactIntro;
