import scss from "./title.module.scss";

const Title = ({titleName}) => {
    return (
            <h2 className={scss.title}>{titleName}</h2>
    )
}

export default Title