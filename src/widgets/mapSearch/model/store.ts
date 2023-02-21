import { StaticImageData } from "next/image"
import clients from '../../../../public/images/main/clients.svg'
import move from '../../../../public/images/main/move.svg'

type prefCardsType = {
    logo: StaticImageData | null,
    header: string,
    description: {
        text: Array<string>
        bold: Array<string>
    },
    button: {
        text: string
        image: boolean
    },
    isGold: boolean,
}[]

export const prefCards: prefCardsType = [
    {
        logo: clients,
        header: 'Начните привлекать клиентов бесплатно!',
        description: {
            text: ['Пройдя простую регистрацию на сайте у Вас появится личный кабинет, в котором возможно бесплатно создавать и публиковать объявления на сайте. '],
            bold: ['бесплатно создавать и публиковать']
        },
        button: {

            text: '+ Разместить объявление',
            image: false
        },
        isGold: false,
    },
    {
        logo: move,
        header: 'Поднимайте объявления',
        description: {
            text: ['Вы в любое время можете поднимать объявления вверх первой страницы каталога, они разместятся сразу после платных объявлений до тех пор, пока другой пользователь не повторит процедуру. '],
            bold: ['поднимать', 'вверх первой страницы']
        },
        button: {

            text: 'Узнать стоимость услуги ',
            image: true
        },

        isGold: false,
    },
    {
        logo: null,
        header: 'Приоритет Gold ',
        description: {
            text: [
                'Приоритетное размещение Gold позволяет закрепить ваше объявление в верхней части каталога!',
                'Gold объявления перемещаются каждые 5 мин на 1 позицию, что делает размещение одинаковым для всех.'
            ],
            bold: ['Gold', 'закрепить ваше объявление', 'перемещаются каждые 5 мин']
        },
        button: {
            text: 'Еще о тарифе Gold  ',
            image: true
        },

        isGold: true,
    },

]


export const mapProps = {
    title : 'Поиск квартир на карте',
    description : 'Ищите квартиры на сутки в центре города, возле парка или в живописном районе',
    descriptionWidth : 390,
    isDotes : true,
    buttonText : 'Открыть карту',
    minHeight : 440,
}