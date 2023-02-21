const DateRegExp =/[0-9]{4}-(0[1-9]|1[012])-(0[1-9]|1[0-9]|2[0-9]|3[01])/;



export const dateConverter = (date: string): string => {
    let newDate: string = date; // для дефолтного возврата если входящий формат битый  

    if ( date.search(DateRegExp) !== -1 ) {  // если дата формата 1995-12-17
        let day = (+date.split('-')[2]) % 100;
        let month = date.split('-')[1];
        switch (month) {
            case '01': month = 'января'; break;
            case '02': month = 'февраля'; break;
            case '03': month = 'марта'; break;
            case '04': month = 'апреля'; break;
            case '05': month = 'мая'; break;
            case '06': month = 'июня'; break;
            case '07': month = 'июля'; break;
            case '08': month = 'августа'; break;
            case '09': month = 'сентября'; break;
            case '10': month = 'октября'; break;
            case '11': month = 'ноября'; break;
            case '12': month = 'декабря'; break;
            default: break;
        };
        let year = date.split('-')[0];

        newDate = day + ' ' + month + ' ' + year;
    }
    
    return newDate;
}