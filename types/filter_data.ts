import { CategoryType, CityType, DistrictType, MetroType } from "./formTypes";

export interface FiltersPayloadType {
    category?: CategoryType | null,

    city?: CityType | null,
    district?: DistrictType | null,
    metro?: MetroType | null,

    rooms?: number | null,
    priceMin?: number | null,
    priceMax?: number | null,

    sleepPlaces?: number | null,

    gas?: boolean | null,
    oven?: boolean | null,
    coffeeMachine?: boolean | null,
    microwave?: boolean | null,
    dishes?: boolean | null,
    dishwasher?: boolean | null,

}

