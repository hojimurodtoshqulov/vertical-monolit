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
							<h2 className={add.h22}>Наша преимущества</h2>
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
									<h2 className={add.h2}>Lorem ispum</h2>
									<p className={add.p}>
										Lorem ipsum dolor sit amet consectetur. Magnis dictumst
										dictum eget vestibulum interdum enim vitae. Lorem ipsum
									</p>
								</fieldset>
							</div>
							<div className={add.card}>
								<fieldset className={add.border}>
									<legend className={add.legend}>
										<img src="/add5.png" />
									</legend>
									<h2 className={add.h2}>Lorem ispum</h2>
									<p className={add.p}>
										Lorem ipsum dolor sit amet consectetur. Magnis dictumst
										dictum eget vestibulum interdum enim vitae. Lorem ipsum
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
