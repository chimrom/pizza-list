import classes from "./PizzaCardButton.module.scss";

export const PizzaCardButton = ({
    isScreenSm,
    handleAddToBasket,
    handleAddAmount,
    currentPrice,
    check,
}) => {
    if (isScreenSm) {
        return (
            <>
                <h3 className={classes.price}>от {currentPrice} руб.</h3>
                {check ? (
                    <button
                        className={classes.addButton}
                        onClick={handleAddAmount}
                    >
                        Добавить
                    </button>
                ) : (
                    <button
                        className={classes.payButton}
                        onClick={handleAddToBasket}
                    >
                        Заказать
                    </button>
                )}
            </>
        );
    }
    return (
        <>
            {check ? (
                <button className={classes.addButton} onClick={handleAddAmount}>
                    Добавить
                </button>
            ) : (
                <button
                    className={classes.payButton}
                    onClick={handleAddToBasket}
                >
                    Заказать
                </button>
            )}
        </>
    );
};
