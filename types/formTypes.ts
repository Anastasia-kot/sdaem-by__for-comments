export enum CategoriesEnum {
    room = 'квартир',
    cottage = 'коттеджей',
    sauna = 'сауны',
    auto = 'автомобилей',
}
 
///////////////////////////

export const citiesList: CityType[] = ['Minsk',  'Gomel', 'Brest', 'Vitebsk', 'Grodno', 'Mogilev' ]
export type CityType = 'Minsk' | 'Gomel' |   'Brest'|   'Vitebsk'|   'Grodno'|  'Mogilev'

export const citiesListRus: CityRusType[] = ['Минск', 'Гомель', 'Брест', 'Витебск', 'Гродно', 'Могилев' ]
export type CityRusType = 'Минск'|'Гомель'| 'Брест'| 'Витебск'| 'Гродно'| 'Могилев'

//////////////////////////////

export const districtsList: DistrictType[]  = [ 'factory', 'lenin', 'moscow', 'october', 'partizan', '1may', 'soviet', 'frunze', 'center']
export type DistrictType = 'factory' | 'lenin' | 'moscow' | 'october' | 'partizan' | '1may' | 'soviet' | 'frunze' | 'center'   
export const districtsListRus: DistrictTypeRus[] = ['Заводской р.', 'Ленинский р.', 'Московский р.', 'Октябрьский р.', 'Партизанский р.', 'Первомайский р.', 'Советский р.', 'Фрунзенский р.', 'Центральный р.']
export type DistrictTypeRus =   'Заводской р.' | 'Ленинский р.' | 'Московский р.' | 'Октябрьский р.' | 'Партизанский р.' | 'Первомайский р.' | 'Советский р.' | 'Фрунзенский р.' | 'Центральный р.'

///////////////// 


export const MetroList: MetroType[] = ['mogilev',  'carfactory',  'partisan',  'proletarian',  '1may',  'frunze',  'youth',  'pushkin',  'sports']
export type MetroType =                'mogilev' | 'carfactory' | 'partisan' | 'proletarian' | '1may' | 'frunze' | 'youth' | 'pushkin' | 'sports' 

export const MetroListRus: MetroTypeRus[] = ['Могилёвская' , 'Автозаводская' , 'Партизанская' , 'Тракторный завод' , 'Пролетарская' , 'Первомайская' , 'Фрунзенская' , 'Молодёжная' , 'Пушкинская' , 'Спортивная' ]
export type MetroTypeRus = 'Могилёвская' | 'Автозаводская' | 'Партизанская' | 'Тракторный завод' | 'Пролетарская' | 'Первомайская' | 'Фрунзенская' | 'Молодёжная' | 'Пушкинская' | 'Спортивная' 

/////////////////////

export interface DistrictMetroType {
    district: DistrictType
    metro: string
}


export interface ComfortFeaturesType {
    gas: boolean  | null
    oven: boolean | null
    coffeeMachine: boolean| null
    microwave: boolean| null
    dishes: boolean | null
    dishwasher: boolean | null
}


export interface MoreOptionsModalFormType 
    extends ComfortFeaturesType, DistrictMetroType {
    sleepPlaces: number
}

export interface CatalogueFiltersFormType 
        extends MoreOptionsModalFormType {
    rooms: number
    priceMin: number
    priceMax: number

}

export type CategoryType = 'room' | 'cottage' | 'sauna' | 'auto'  

export interface MainFiltersFormType 
    extends CatalogueFiltersFormType  {
    category: CategoryType
    city: string
}

export type MainFiltersKeysType = keyof MainFiltersFormType;
 






export type AddressFeaturesType = {
    city: string,
    metro: string,
    district: string,
    address: string
}

export type RoomFeaturesType = {
    sizeAsPeople: string | number | null
    rooms: number | null
    sizeAsMeters: number | null
}
