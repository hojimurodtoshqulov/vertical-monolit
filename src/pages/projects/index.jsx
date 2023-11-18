import Showcase from "../../components/showcase/showcase";
import Workscard from "../../components/workscard";
import { useTranslation } from "react-i18next";
const Projects = () => {
	const { t } = useTranslation();
	return (
		<>
			<Showcase head1={t("projects.title").toUpperCase()} />
			<Workscard />
		</>
	);
};

export default Projects;
