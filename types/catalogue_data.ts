import { AddressFeaturesType, CategoryType, ComfortFeaturesType, RoomFeaturesType } from "./formTypes"

export interface CatalogueState {
    items: CatalogueType[] | null,
    totalCount: number | null,
}

export interface CatalogueType {
    id: number
    category: CategoryType
    gold: boolean
    image: string | string[] | null

    title: string
    description: string
    price: number

    addressFeatures: AddressFeaturesType
    roomFeatures: RoomFeaturesType
    comfortFeatures: ComfortFeaturesType

    roomOwner: RoomOwnerType
}



export type RoomOwnerType = {
    ownerStatus: string
    name: string
    phone: string
    email: string
}
