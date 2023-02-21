import { Obj } from "reselect/es/types";
import { FiltersPayloadType } from "../../store/filtersSlice";



// очищает от незаполненных полей формы, проводит конвертацию значений из '1' -> 1
export const formValuesFormatter = (values: object): FiltersPayloadType => {  
 
    let formatValues: FiltersPayloadType = {};

    for (let key in values) {
        if (values[key]) {
            // только заполненные (чекнутые)


            if ((typeof values[key] === 'boolean')) {
                //только булевы параметры (т.е.  чекбоксы из модалки)


                if ((String(key).substr(-1)) !== '2' && (String(key).substr(-1)) !== '1') {
                    //последний символ ключа не число (то есть не дублирующие gas1, microwave2 ...)
                    formatValues[key] = values[key]
                }
            } else if (!Number.isNaN(+values[key])) {
                // значение параметра - число
                 if (+values[key]>=0){
                    formatValues[key] = +values[key]
                }
                
                
            } else {
                formatValues[key] = values[key]
            }
        }
    }
    return formatValues
}


// переводит данные из прошлой функции в URL строку
export const filtersToUrlString = (filters: FiltersPayloadType): string => {
     
    let searchString = '' // дефолтное на случай пустого filters

    if (Object.keys(filters).length > 0) {
        searchString = '?'

        for (const [key, value] of Object.entries(filters)) {
            searchString = searchString + `${key}=${value}&`
        }

        searchString = searchString.slice(0, -1)
    }

    return searchString
}


