import sauna from './../../../public/images/main/sauna.png'
import cottage from './../../../public/images/main/cottage.png'
import room from './../../../public/images/main/room.png'
import car from './../../../public/images/main/car.png'
import { CategoryType, citiesList, CityType } from '../../../types/formTypes'
import { StaticImageData } from 'next/image'


type CategoryCard = {
    filter: { category: CategoryType }
    header: string,
    additional_header: string,
    hashtags?: Array<CityType>,
    background: StaticImageData
    arrow_button: boolean
}



export const categories: CategoryCard[] = [
    {
        filter: { category: 'room' },
        header: 'Квартиры на сутки',
        additional_header: 'Снять квартиру',
        hashtags: citiesList,
        background: room,
        arrow_button: false,
    },
    {
        filter: { category: 'cottage' },
        header: 'Коттеджи и усадьбы',
        additional_header: 'Снять коттедж на праздник',
        background: cottage,
        arrow_button: true,
    },
    {
        filter: { category: 'sauna' },
        header: 'Бани и сауны',
        additional_header: 'Пoпариться в бане с друзьями',
        background: sauna,
        arrow_button: true,
    }, {
        filter: { category: 'auto' },
        header: 'Авто на прокат',
        additional_header: 'Если срочно нужна машина',
        background: car,
        arrow_button: true,
    }



]


