import { CatalogueType } from "../../../../types/catalogue_data";
import { FiltersPayloadType } from "../../../../types/filter_data";

export const filterData = (items: CatalogueType[], filters: FiltersPayloadType): CatalogueType[]  => {

    return items.filter((element) => {

        let result = true // по дефолту все элементы проходят фильтрацию

        if (filters.category && filters.category != element.category) {
            result = false
        } else if (filters.city && filters.city != element.addressFeatures.city) {
            result = false
        } else if (filters.district && filters.district != element.addressFeatures.district) {
            result = false
        } else if (filters.metro && filters.metro != element.addressFeatures.metro) {
            result = false
        } else if (filters.rooms && filters.rooms != element.roomFeatures.rooms) {
            result = false
        } else if (filters.priceMin && filters.priceMin > element.price) {
            result = false
        } else if (filters.priceMax && filters.priceMax < element.price) {
            result = false
        } else if (filters.sleepPlaces && filters.sleepPlaces != +element.roomFeatures.sizeAsPeople[0]) {
            result = false

        } else if (filters.gas && !element.comfortFeatures.gas) {
            result = false
        } else if (filters.oven && !element.comfortFeatures.oven) {
            result = false
        } else if (filters.coffeeMachine && !element.comfortFeatures.coffeeMachine) {
            result = false
        } else if (filters.microwave && !element.comfortFeatures.microwave) {
            result = false
        } else if (filters.dishes && !element.comfortFeatures.dishes) {
            result = false
        } else if (filters.dishwasher && !element.comfortFeatures.dishwasher) {
            result = false
        }

        return result
    }
    );
}
