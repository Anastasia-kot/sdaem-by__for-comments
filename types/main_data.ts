import { CategoryType } from "./formTypes"

type NavItemsType = {
    id: number,
    name: string,
    value: string,
}[]
export const navItems: NavItemsType = [
    {
        id:0,
        name: 'index',
        value: 'Главная',

    },
    {
        id: 1,
        name: 'news',
        value: 'Новости',

    },
    {
        id: 2,
        name: 'catalogue',
        value: 'Размещение и тарифы',

    },
    {
        id: 3,
        name: 'map',
        value: 'Объявления на карте',
    },
    {
        id: 4,
        name: 'contacts',
        value: 'Контакты',
    },
]



type CategoriesItemsType = {
    id: number,
    name: CategoryType,
    value: string,
}[]

export const categoriesItems: CategoriesItemsType = [
    {
        id: 0,
        name: 'room' as CategoryType,
        value: 'Квартиры на сутки',

    },
    {
        id: 1,
        name: 'cottage' as CategoryType,
        value: 'Коттеджи и усадьбы',

    },
    {
        id: 2,
        name: 'sauna' as CategoryType,
        value: 'Бани и сауны',

    },
    {
        id: 3,
        name: 'auto' as CategoryType,
        value: 'Авто на прокат',
    },
]