import { CategoriesEnum } from "../../../../types/formTypes"

export const getTitle = (query) => {
    let title = 'Аренда'
    query.rooms && (title = title + ' ' + query.rooms + '-комнатных')
    query.category && typeof (query.category) === 'string'
        ? title = title + ' ' + CategoriesEnum[query.category]
        : title = title + ' квартир'
    title = title + ' на сутки'
    query.city && typeof (query.city) === 'string'
        ? (
            title = title + ' в ' + query.city
            // title = title + ' в ' + cityNameConverters(cityNameEngToRus(query.city))
        )
        : title = title + ' в Минске'


    return title
}

