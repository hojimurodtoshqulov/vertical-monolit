import Title from "../title";
import add from "./add.module.scss";

export default function Adventure() {
	return (
		<>
			<div className={add.adventure}>
				<div className={add.vector}>
					<img src="/vlogo.png" />
				</div>
				<div className={add.vector2}>
					<img src="/vlogo2.png" />
				</div>
				<div className="container">
					<div className={add.addbox}>
						<div className={add.leftside}>
							{/* <h2 className={add.h22}></h2> */}
							<Title
								titleName={"Наша преимущества"}
								color="white"
								spanColor="#ffffff27"
							/>
							<div className={add.card}>
								<fieldset className={add.border}>
									<legend className={add.legend}>
										<img src="/add1.png" />
									</legend>
									<h2 className={add.h2}> Комплексные услуги</h2>
									<p className={add.p}>
										Мы предоставляем все виды услуг которые взаимосвязаны с
										проектом, выполняем работу под ключ
									</p>
								</fieldset>
							</div>
							<div className={add.card}>
								<fieldset className={add.border}>
									<legend className={add.legend}>
										<img src="/add2.png" alt="/add2.png" />
									</legend>
									<h2 className={add.h2}> Квалифицированные специалисты</h2>
									<p className={add.p}>
										Молодые перспективные инженеры с опытом работы в 10 лет под
										руководством старших инженеров с опытом более 20 лет
									</p>
								</fieldset>
							</div>
							<div className={add.card}>
								<fieldset className={add.border}>
									<legend className={add.legend}>
										<img src="/add3.png" />
									</legend>
									<h2 className={add.h2}> Амбициозная компания</h2>
									<p className={add.p}>
										С большим опытом и знаний. Решают самые сложные задачи с
										которыми сталкиваются в момент строительства
									</p>
								</fieldset>
							</div>
							<div className={add.card}>
								<fieldset className={add.border}>
									<legend className={add.legend}>
										<img src="/add4.png" />
									</legend>
									<h2 className={add.h2}> Опыт с гос.заказами</h2>
									<p className={add.p}>
										Все наши проекты были связаны с стратегически важными
										объектами, таких как снабжение теплом населения города
										Ташкент и социально важные объекты
									</p>
								</fieldset>
							</div>
							<div className={add.card}>
								<fieldset className={add.border}>
									<legend className={add.legend}>
										<img src="/add5.png" />
									</legend>
									<h2 className={add.h2}> Материалы по стандарту</h2>
									<p className={add.p}>
										Использование строительных материалов, только известных и
										проверенных годами производителей с наличием сертификатов
										качества.
									</p>
								</fieldset>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}
