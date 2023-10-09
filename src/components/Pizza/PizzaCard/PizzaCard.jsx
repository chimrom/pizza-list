import { useState } from "react";
import { groupPizza } from "../../../utils/groupPizza";
import { useResize } from "../../../hooks/useResize";
import { SizePizza } from "./SizePizza";

import classes from "./PizzaCard.module.scss";

const buttons = [{ value: 20 }, { value: 30 }, { value: 40 }];

export const PizzaCard = ({ name, composition, price, type, img }) => {
    const { isScreenSm } = useResize();
    const [currentIndex, setCurrentIndex] = useState(0);
    const currentGroups = groupPizza.filter((el) => type.includes(el.type));
    const currentPrice = price[currentIndex];

    let scaleImg = "";
    if (currentIndex === 0) {
        scaleImg = classes.imgSm;
    } else if (currentIndex === 1) {
        scaleImg = classes.imgMd;
    } else {
        scaleImg = "";
    }
    return (
        <div className={classes.wrapper}>
            <span className={classes.groupsList}>
                {currentGroups.map((el) => (
                    <img src={el.img} alt={el.title} />
                ))}
            </span>
            <span className={classes.imgsWrapper}>
                <SizePizza />
                <img
                    src={img}
                    alt={name}
                    className={`${classes.pizzaImg} ${scaleImg}`}
                />
            </span>
            <div className={classes.pizzaInfo}>
                <h3 className={classes.name}>{name}</h3>
                <p>{composition}</p>
                <div className={classes.cardActive}>
                    <p>Размер, см:</p>
                    <div className={classes.buttonGroup}>
                        {buttons.map((el, index) => (
                            <button
                                className={
                                    index === currentIndex
                                        ? `${classes.activeButton} ${classes.button}`
                                        : `${classes.button}`
                                }
                                key={el.value}
                                onClick={() => setCurrentIndex(index)}
                            >
                                {el.value}
                            </button>
                        ))}
                    </div>
                </div>
                {isScreenSm ? (
                    <>
                        <h3 className={classes.price}>
                            от {currentPrice} руб.
                        </h3>
                        <button className={classes.payButton}>Заказать</button>
                    </>
                ) : (
                    <button className={classes.payButton}>
                        от {currentPrice} руб
                    </button>
                )}
            </div>
        </div>
    );
};
