import React from 'react'
import scss from "./title.module.scss";

const Title = ({titleName}) => {
    return (
            <h1 className={scss.title}>{titleName}</h1>
    )
}

export default Title