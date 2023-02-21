import SvgAvatar from './../../shared/ui/icons/Avatar'
import SvgPostalEnvelop from './../../shared/ui/icons/PostalEnvelope'

export const defaultInputProps = {
    flexDirection: 'column' as 'column' | 'row',
    width: 260,
    height: 50,
    required: true,
}

export const nameInputProps = {
    type: 'text',
    labelRus: 'Ваше имя',
    placeholder: 'Алексей',
    // imageSrc: ()=>{return <SvgAvatar/> },
    label: 'Name',
    pattern: /^[а-яА-ЯёЁa-zA-Z]+$/i,
}


export const emailInputProps = {
    type: 'email',
    labelRus: 'Ваша электронная почта',
    placeholder: 'Введите',
    // imageSrc: ()=>(<SvgPostalEnvelop/>),
    label: 'Email',
}

export const textareaInputProps = {
    type: 'textarea',
    labelRus: 'Ваше сообщение',
    placeholder: 'Сообщение',
    imageSrc: null,
    label: 'Message',
    width: 548,
    height: 200,
}


export const sendButtonProps = {
    text: 'Отправить',
    width: 200,
    colorScheme: 'violet' as 'yellow' | 'violet' | 'yellowBlack',
    onClick: null,
    type: 'submit' as 'button' | 'reset' | 'submit'

}

export const closeButtonProps = {
    text: 'Закрыть окно',
    width: 161,
    colorScheme: 'yellow' as 'yellow' | 'violet' | 'yellowBlack',
    type: 'reset' as 'button' | 'reset' | 'submit'
}

 