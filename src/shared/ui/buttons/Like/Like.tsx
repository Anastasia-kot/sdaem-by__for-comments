import classNames from 'classnames'
import { useState } from 'react'
import styles from './Like.module.scss'
import React, { FC } from 'react'

// import PropTypes from 'prop-types';
 
type Props = {
    style: 'main' | 'list' | 'tile'
}
export const LikeButton: FC<Props> =     ({  style }) => {
     
const [liked, setLiked] = useState(false);

    return (
        <button
            className={classNames(
                styles.button,
                { [styles.main]: style === 'main' },
                { [styles.list]: style === 'list' },
                { [styles.tile]: style === 'tile' },
                { [styles.liked]: liked },
            )}
            onClick={() => setLiked(actual => { return (!actual) })}>

         
     
        
          

            <span className={styles.button__text}>{style === 'list' && (liked ?'Добавлено' : 'В закладки')}</span>
            <svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" fill="none" >
                <path d="m10 15.417-.25-.229q-1.979-1.792-3.271-3.042-1.291-1.25-2.021-2.167-.729-.917-1-1.635-.27-.719-.27-1.448 0-1.334.947-2.281.948-.948 2.303-.948 1.02 0 1.947.573.927.572 1.615 1.677.708-1.105 1.625-1.677.917-.573 1.958-.573 1.334 0 2.282.948.947.947.947 2.281 0 .729-.26 1.427-.26.698-.99 1.604-.729.906-2.02 2.177-1.292 1.271-3.334 3.125Z"
                    stroke="#EB5757"
                    strokeWidth="1"
                />
            </svg>

      
        </button>
    )
}

// LikeButton.propsType={
//     isListView: PropTypes.bool.isRequired,
//     style: PropTypes.shape({
//         order: PropTypes.string ,
//         marginRight: PropTypes.string,
//         display: PropTypes.oneOf([ 'none',   'block',  'flex' ])
//     }).isRequired
// }

// LikeButton.defaultProp = {
//     isListView: false,
//     style: PropTypes.object
// } 