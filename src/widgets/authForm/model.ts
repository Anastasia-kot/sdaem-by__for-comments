
export const inputProps = {
    labelRus: null,
    flexDirection: null,
    width: 306,
    height: 50,
    required: true,
}

export const loginProps = {
    type: 'text',
    placeholder: 'Логин',
    // imageSrc: avatar,
    label: 'login',
    pattern: /^[a-zA-Z][a-zA-Z0-9-_\.]{1,20}$/i,
}

export const passwordProps = {
    type: 'password',
    placeholder: 'Пароль',
    // imageSrc: lock,
    label: 'password',
    pattern: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?!.*\s).*$/i
}


 