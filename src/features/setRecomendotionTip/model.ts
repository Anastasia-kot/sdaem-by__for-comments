import { FiltersPayloadType } from "../../../types/filter_data"
import { districtsList } from "../../../types/formTypes"
import { districtNameEngToRus } from "../../shared/helpers/nameConverters"

//base data
type FiltersRecommendationsListTipe = {
    value: string
    filter: FiltersPayloadType
}[]

export const recommendationTipList: FiltersRecommendationsListTipe = [

    {
        value: 'Недорогие',
        filter: {
            priceMax: 100,
        }
    },
    ...[1, 2, 3, 4, 5].map(n => ({
        value: n + '-комнатные',
        filter: {
            rooms: n,
        }
    })),
    ...districtsList.map(d => ({
        value: districtNameEngToRus(d),
        filter: {
            district: d,
        }
    }))
]
