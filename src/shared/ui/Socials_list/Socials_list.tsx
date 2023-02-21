import styles from './Socials_list.module.scss'
import React, {FC} from 'react'

import SvgInstagram from "./../icons/socials/Instagram";
import SvgVk from "./../icons/socials/Vk";
import SvgFacebook from "./../icons/socials/Facebook";
import SvgViber from '../icons/socials/Viber';
import SvgTelegram from '../icons/socials/Telegram';
import SvgWhatsapp from '../icons/socials/Whatsapp';
import SvgPostalEnvelope from '../icons/PostalEnvelope';


type SocialsType = 'vk' | 'fb' | 'viber' | 'tg' | 'wa' | 'mail' | 'inst'

type Props = {
    socials: SocialsType[]
} & any // React.HTMLAttributes<HTMLAllCollection>

export const Socials_list: FC<Props> = ({ socials, background, ...props }) => {

    
    function createArray(socials) {

        return socials.map((item, index) =>
            <li className={styles.socials__item} key={index} style={{ background: background }}>
                
                {item === 'vk' && <SvgVk {...props}/>}
                {item === 'fb' && <SvgFacebook {...props} />  }
                {item === 'viber' && <SvgViber {...props} />  }
                {item === 'tg' && <SvgTelegram {...props} />  }
                {item === 'wa' && <SvgWhatsapp {...props} />  }
                {item === 'mail' && <SvgPostalEnvelope {...props} />  }
                {item === 'inst' && <SvgInstagram {...props} />   }

            </li>

        )
    }

    return (
        <ul className={styles.socials}>
            {createArray(socials)}
        </ul>


    )
}
