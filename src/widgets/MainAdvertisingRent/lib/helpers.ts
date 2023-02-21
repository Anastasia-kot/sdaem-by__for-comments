import { CatalogueType } from "../../../../types/catalogue_data"
import { DistrictType, MetroType } from "../../../../types/formTypes"

export type FiltersType = { metro: null | MetroType, district: null | DistrictType, city: 'Minsk' }




export const filterItems = (items: CatalogueType[], filters: FiltersType) => {
     
    return items?.filter(
        ({ addressFeatures }) => {
            let result = true // по дефолту все элементы проходят фильтрацию

            if (filters.district && filters.district != addressFeatures.district) {
                result = false
            } else if (filters.metro && filters.metro != addressFeatures.metro) {
                result = false
            } else if (filters.city && filters.city != addressFeatures.city) {
                result = false
            }
            return result
        }
    )
}
