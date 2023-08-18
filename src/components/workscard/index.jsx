import style from "./cards.module.scss"

export default function Workscard(){
    return(
        <>
        <div className={style.workscard} >
            <div className="container">
                <div className={style.cards}>
                    <div className={style.card}>
                        <h2 className={style.h2}>1. Lorem ipsum</h2>
                    </div>
                    <div className={`${style.card} ${style.card22}`}>
                        <h2 className={style.h2}>2. Lorem ipsum</h2>
                    </div>
                    <div className={style.card}>
                        <h2 className={style.h2}>3. Lorem ipsum</h2>
                    </div>
                    <div className={`${style.card} ${style.card22}`}>
                        <h2 className={style.h2}>4. Lorem ipsum</h2>
                    </div>
                    <div className={style.card}>
                        <h2 className={style.h2}>5. Lorem ipsum</h2>
                    </div>
                    <div className={`${style.card} ${style.card22}`}>
                        <h2 className={style.h2}>6. Lorem ipsum</h2>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}