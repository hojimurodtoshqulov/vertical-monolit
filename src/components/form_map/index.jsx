import scss from "./form_map.module.scss";
import { FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import Title from "../title";
import { useTranslation } from "react-i18next";
import { useState } from "react";
import axios from "axios";
const FormMap = () => {
	const { t } = useTranslation();
	const [formValues, setFormValues] = useState({
		name: "",
		phone: "",
		comment: "",
	});
	const handle = (e) => {
		const newData = { ...formValues };
		newData[e.target.id] = e.target.value;
		setFormValues(newData);
		console.log(newData);
	};
	const onSubmit = async (e) => {
		e.preventDefault();
		try {
			const url = `https://api.telegram.org/bot6624056078:AAFNCrZW2Pfv-VhrKYNfXPv61Jf3Qsmq0ZA/sendMessage?chat_id=-1002009408304&text=${
				"\n              Ismi:" +
				formValues.name +
				" " +
				"\n              Tel:" +
				formValues.phone +
				"\n              Comment:" +
				formValues.comment
			}`;
			await axios
				.post(url, {
					name: formValues.name,
					phone: formValues.phone,
					// project: formProject,
				})
				.then((res) => {
					console.log(res.data);
				});
		} catch (error) {
			console.error(error);
		}
		console.log("submit", formValues);
		setFormValues({ name: "", phone: "", comment: "" });
	};
	return (
		<div className={scss.wrapper}>
			<Title
				titleName={t("home.form.title")}
				color="white"
				spanColor="#ffffff27"
			/>
			<div className={scss.form__map}>
				<div className={scss.map}>
					<div className={scss.map__iframe}>
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
							<span>{t("home.form.address")}</span>
						</a>
						<a href="tel:+998991234567" rel="noopener noreferrer">
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
				<form className={scss.form} onSubmit={onSubmit}>
					<h4 className={scss.form__heading}>{t("home.form.contact")}</h4>
					<div className={scss.input__wrapper}>
						<input
							id="name"
							onChange={(e) => handle(e)}
							value={formValues.name}
							required
							type="text"
							placeholder={t("home.form.input1")}
						/>
						<input
							id="phone"
							onChange={(e) => handle(e)}
							value={formValues.phone}
							required
							type="text"
							placeholder={t("home.form.input2")}
						/>
						<textarea
							id="comment"
							onChange={(e) => handle(e)}
							value={formValues.comment}
							required
							placeholder={t("home.form.input3")}
						></textarea>
					</div>
					<button type="submit">
						<FaPhoneAlt />
						<span>{t("home.form.btn")}</span>
					</button>
				</form>
			</div>
		</div>
	);
};

export default FormMap;
