import Link from "next/link";
import React, { FC } from "react";
import styles from "./AuthModal.module.scss";

type Props = {
  title: string;
  description?: string;
  buttonText?: string;
  onClick?: () => void;
};

export const AuthModal: FC<Props> = ({
  title,
  description = "Письмо для подтверждения аккаунта отправлено почту. Перейдите по ссылке, указанной в письме. Если письма нет, то проверьте спам.",
  buttonText = "Понятно",
}) => (
  <div className={styles.modal}>
    <h2 className={styles.modal__title}> {title} </h2>
    <p className={styles.modal__description}> {description}</p>
    <Link href="/">
      <button type="button" className={styles.modal__button}>
        {buttonText}
      </button>
    </Link>
  </div>
);
