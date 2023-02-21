
export const selectOptions = {
    options:
        [
            { text: 'Выберите', value: -1 },
            ...[1, 2, 3, 4, 5].map(i => ({ text: i + ' комн.', value: i }))
        ],
    label: 'rooms',
    required: false,

    style: {
        width: '150px',
        height: '37px',
    },
    labelRus: { label: 'Комнаты', flexDirection: 'row' as 'row' | 'column' }
}

export const inputProps = {
    type: 'number',
    labelRus: null,
    flexDirection: null,
    width: 100,
    height: 37,
    imageSrc: null,
    pattern: /^ [0 - 9]{ 1, 20}$/i,
    required: false
}
