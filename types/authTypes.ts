export interface ContactFormType {
    name: string
    email: string
    message: string
}
// export type ContactFormKeysType = keyof ContactFormType;

interface LoginPasswordType {
    login: string
    password: string
}

export interface AuthFormType 
        extends LoginPasswordType {
    rememberMe: boolean
}


export interface RegisterFormType 
        extends LoginPasswordType {
    email: string
    password2: string
    captcha: boolean
}
 