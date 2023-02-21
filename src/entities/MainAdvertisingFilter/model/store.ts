import { districtsList, MetroList } from "../../../../types/formTypes"
import { districtNameEngToRus, metroNameEngToRus } from "../../../shared/helpers/nameConverters"

export const metroSelectOptions = [
    { text: 'Выберите', value: -1 },
    ...MetroList.map(m => ({ text: metroNameEngToRus(m), value: m }))
]
export const districtSelectOptions = [
    { text: 'Выберите', value: -1 },
    ...districtsList.map(m => ({ text: districtNameEngToRus(m), value: m }))
]