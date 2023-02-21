import { DistrictType, DistrictTypeRus, MetroType, MetroTypeRus } from '../../../types/formTypes';
import { CityType, CityRusType } from '../../../types/formTypes';
 
export const cityNameConverters = (city: CityRusType): string => {
    let newCity: string = city; // для дефолтного возврата если входящий формат не нужно изменять     
    const lastSymbol = newCity[newCity.length - 1];
    
        switch (lastSymbol) {
            case 'о': break;                 // в Гродно
            case 'в':                        // в Могилеве
            case 'к':                        // в Минске, в Витебске 
            case 'т':                        // в Бресте
                 newCity = newCity+'е'; break; 
            case 'ь':                        // в Гомеле
                newCity = newCity.substring(0, newCity.length-1 ) + 'е'; break; 
            default: break;
        }; 
    
    return newCity;
}


export const cityNameEngToRus = (cityEng: CityType): CityRusType => {
    switch (cityEng) {
        case 'Minsk': return 'Минск' ;               
        case 'Gomel': return 'Гомель' ;               
        case 'Brest': return 'Брест' ;              
        case 'Vitebsk': return 'Витебск' ;               
        case 'Grodno': return 'Гродно' ;               
        case 'Mogilev': return 'Могилев' ;               
        default: return cityEng; 
    };  
}



export const districtNameEngToRus = (districtEng: DistrictType): DistrictTypeRus => {
    switch (districtEng) {
        case 'factory': return 'Заводской р.';
        case 'lenin': return 'Ленинский р.';
        case 'moscow': return 'Московский р.';
        case 'october': return 'Октябрьский р.';
        case 'partizan': return 'Партизанский р.';
        case '1may': return 'Первомайский р.';
        case 'soviet': return 'Советский р.';
        case 'frunze': return 'Фрунзенский р.';
        case 'center': return 'Центральный р.';
        default: return districtEng;
    };
} 
  

export const metroNameEngToRus = (districtEng: MetroType): MetroTypeRus => {
    switch (districtEng) {
        case 'mogilev': return 'Могилёвская';
        case 'carfactory': return 'Автозаводская';
        case 'partisan': return 'Партизанская';
        case 'proletarian': return 'Пролетарская';
        case '1may': return 'Первомайская';
        case 'frunze': return 'Фрунзенская';
        case 'youth': return 'Молодёжная';
        case 'pushkin': return 'Пушкинская';
        case 'sports': return 'Спортивная';
        default: return districtEng;
    };
} 
 



export const ucFirst = (str:string): string => {
    if (!str) return str;

    return str[0].toUpperCase() + str.slice(1);
}