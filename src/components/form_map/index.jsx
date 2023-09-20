import scss from "./form_map.module.scss";
import { FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";

const FormMap = () => {
  return (
    <div className={scss.wrapper}>
      <h3 className={scss.heading}>Мы находимся тут</h3>
      <div className={scss.form__map}>
        <div className={scss.map}>
          <div className={scss.map__iframe}>
            <p>There is location map here.</p>
            <p>Check your network or wait some time, please!</p>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d47962.75854538797!2d69.2518912!3d41.2942336!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae8bf3870c714d%3A0x6ddece20c220333b!2sMagic%20City%20Park!5e0!3m2!1sen!2s!4v1693118668940!5m2!1sen!2s"
              loading="lazy"
            ></iframe>
          </div>
          <div className={scss.map__footer}>
            <a
              href="https://www.google.com/maps?ll=41.304287,69.246528&z=11&t=m&hl=en&gl=US&mapclient=embed&cid=7916991835055076155"
              target="_blank"
              rel="noopener noreferrer"
            >
              <>
                <FaLocationDot />
              </>
              <span>Беш Агач, Furkat St, Tashkent</span>
            </a>
            <a href="tel:+998991234567"  rel="noopener noreferrer">
              <>
                <FaPhoneAlt />
              </>
              <span>+998 99 123 45 67</span>
            </a>
            <a
              href="mailto:hello@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <>
                <FaEnvelope />
              </>
              <span>hello@gmail.com</span>
            </a>
          </div>
        </div>
        <form className={scss.form}>
          <h4 className={scss.form__heading}>Contact us</h4>
          <div className={scss.input__wrapper}>
            <input required type="text" placeholder="First name*" />
            <input required type="password" placeholder="Email address*" />
            <textarea required placeholder="Message"></textarea>
          </div>
          <button type="submit">
            <FaPhoneAlt />
            <span>Request a call</span>
          </button>
        </form>
      </div>
    </div>
  );
};

export default FormMap;
