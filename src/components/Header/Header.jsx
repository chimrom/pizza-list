import { useState } from "react";
import { NavLink } from "react-router-dom";
import telephone from "../../assets/header/telephone copy.svg";
import cart from "../../assets/header/Cart Copy.svg";
import menuBurger from "../../assets/header/Menu.svg";
import { useResize } from "../../hooks/useResize";
import { NavMenu } from "../NavMenu/NavMenu";
import { Logo } from "../Logo/Logo";
import Modal from "../Modal/Modal";

import classes from "./Header.module.scss";

export const Header = () => {
    const { isScreenSm } = useResize();
    const [open, setOpen] = useState(false);
    const [openModal, setOpenModal] = useState(false);

    return (
        <>
            <Modal open={openModal} onClose={() => setOpenModal(false)} />
            <header className={classes.header}>
                <NavLink to="/">
                    <Logo />
                </NavLink>
                <NavMenu />
                <span className={classes.headerRight}>
                    <div className={classes.buttonsNavBlock}>
                        <img src={telephone} alt="telephone" />
                        <img
                            src={cart}
                            alt="cart"
                            onClick={() => setOpenModal(true)}
                        />
                    </div>
                    {isScreenSm && <span className={classes.language}>EN</span>}
                    <button onClick={() => setOpen(true)}>
                        <img src={menuBurger} alt="menuBurger" />
                    </button>
                    {open && (
                        <div className={classes.divider}>
                            <span>
                                <div className={classes.topDivider}>
                                    {isScreenSm ? null : <Logo />}

                                    <div
                                        className={classes.close}
                                        onClick={() => setOpen(false)}
                                    ></div>
                                </div>
                                <ul className={classes.navList}>
                                    <li>Меню</li>
                                    <li>О нас</li>
                                    <li>Контакты</li>
                                </ul>
                            </span>
                            <div className={classes.bottomDivider}>
                                <span>
                                    <p className={classes.title}>
                                        Заказать по телефону
                                    </p>
                                    <h2>+7 (918) 432-65-87</h2>
                                    <p className={classes.time}>
                                        Ежедневно с 9:00 до 23:00
                                    </p>
                                </span>
                                {isScreenSm ? null : (
                                    <p className={classes.english}>English</p>
                                )}
                            </div>
                        </div>
                    )}
                </span>
            </header>
        </>
    );
};
