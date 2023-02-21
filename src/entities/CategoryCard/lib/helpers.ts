import { NextRouter } from "next/router"
import { CategoryType, CityType } from "../../../../types/formTypes"
import { filtersToUrlString } from "../../../shared/helpers/urlHelpers"

export const onClick = (filters: { category: CategoryType, city?: CityType }, router: NextRouter) => {
    let searchString = filtersToUrlString(filters)
    router.push(`/catalogue${searchString}`)
}