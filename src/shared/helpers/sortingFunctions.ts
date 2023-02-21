import { NewsType } from "../../store/newsSlice";

 
export const sortingNewsPerDate = (arr: NewsType[]): NewsType[] => {

    function compare(a: NewsType, b: NewsType) {
        if (a.date < b.date) return 1; // если первое значение больше второго
        if (a.date == b.date) return 0; // если равны
        if (a.date > b.date) return -1; // если первое значение меньше второго
    }
    return ([...arr].sort(compare))
 
 
}