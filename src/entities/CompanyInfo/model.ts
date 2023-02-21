type ContactType = {
    type: string | null
    image: string
    text: string | string[]
    additional_image: null | string[]
}

export const contactsList: ContactType[] = [
  {
    type: null,
    image: "navigation_icon",
    text: "220068, РБ, г. Минск, ул. Осипенко, 21, кв.23 ",
    additional_image: null,
  },
  {
    type: "tel",
    image: "mobile",
    text: " +375 29 621-48-33",
    additional_image: ["viber", "tg", "wa"],
  },
  {
    type: "mailto",
    image: "postal_envelope",
    text: " sdaem@sdaem.by",
    additional_image: null,
  },
  {
    type: null,
    image: "clock",
    text: ["Режим работы: ", " 08:00-22:00"],
    additional_image: null,
  },
]



