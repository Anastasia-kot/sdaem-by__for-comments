import { NextRouter } from "next/router"
import { sortingNewsPerDate } from "../../../shared/helpers/sortingFunctions"
import { NewsType } from "../../../../types/news_data"

export const sortingFunc = (searchWord: string, items: NewsType[]): NewsType[] => {
    let newNewsList: NewsType[]
    searchWord === ''
        ? newNewsList = items
        : newNewsList = items.filter(
            (item: NewsType) => (
                item.title.includes(searchWord)
                || item.shortDescription.includes(searchWord)
                || item.description.join(';').includes(searchWord)
            )
        )

    newNewsList = sortingNewsPerDate(newNewsList)
    return newNewsList
}


export const routingFunc = (string: string, router: NextRouter): void => {
    if (string.length > 0) {
        router.push(`/news?search=${string}`, undefined, { shallow: true })
    } else {
        router.push(`/news`, undefined, { shallow: true })
    }
}