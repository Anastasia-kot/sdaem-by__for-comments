import { NextRouter } from 'next/router';
import { FiltersPayloadType } from '../../../../types/filter_data';
import { filtersToUrlString, formValuesFormatter } from "../../../shared/helpers/urlHelpers"

export const onSubmit = (values, router: NextRouter) => {
    setUrlFilters(formValuesFormatter(values), router)
}


export const setUrlFilters = (filter: FiltersPayloadType, router: NextRouter): void => {
    let searchString = filtersToUrlString(filter)
    router.push(`/catalogue${searchString}`, undefined, { shallow: true })
}
