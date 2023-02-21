
export const validate = values => {
    const errors = {};

    if (!values.email) {
        //@ts-ignore
        errors.email = 'Required';
    } else if (
        !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
    ) {
        //@ts-ignore

        errors.email = 'Invalid email address';
    }

    if (!values.login) {
        //@ts-ignore

        errors.login = 'Required';
    } else if (
        !/^[a-zA-Z][a-zA-Z0-9-_\.]{1,20}$/i.test(values.login)
    ) {                    //@ts-ignore

        errors.login = 'Invalid login';
    }

    if (!values.password) {
        //@ts-ignore
        errors.password = 'Required';
    }

    if (!values.password2) {
        //@ts-ignore
        errors.password2 = 'Required';
    } else if (
        values.password !== values.password2
    ) {
        //@ts-ignore
        errors.password2 = 'Passwords must be same';
    }
    return errors;
}