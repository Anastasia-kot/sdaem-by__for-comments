import classNames from 'classnames'
import styles from './Simple.module.scss'
import React, { FC } from 'react'

type ButtonType = 'button' | 'reset' | 'submit'

type Props = {
    text: string
    width: number
    colorScheme: 'yellow' | 'violet' | 'yellowBlack'
    type?: ButtonType
    onClick: () => void  | null
}
export const SimpleButton: FC<Props> = 
    ({ text, width, colorScheme, type = 'button' as ButtonType, onClick }) => {
    return (
        <button
            type={type}
            style={{
                width: width
            }}
            className={classNames(
                styles.Button,
                { [styles.Yellow]: colorScheme === 'yellow' },
                { [styles.YellowBlack]: colorScheme === 'yellowBlack' },
                { [styles.Violet]: colorScheme === 'violet' },
            )}
            onClick={onClick ? onClick : ()=>{}}
        >
            {text}
        </button>

    )
}


// SimpleButton.propTypes = {
//     text: PropTypes.string.isRequired,
//     width: PropTypes.number.isRequired,
//     colorScheme: PropTypes.oneOf(['yellow', 'violet', 'yellowBlack']).isRequired,
//     type: PropTypes.oneOf(['button' , 'reset' , 'submit']),
//     onClick: PropTypes.func.isRequired,
// }

// SimpleButton.defaultProp = {
//     text: '',
//     width: 100,
//     colorScheme: 'yellow',
//     type:  'button',
//     onClick: {},
// }