import React  from 'react'
import { InputBlock } from '../../../shared/ui/Input/Input'

import { SelectBlock } from '../../../shared/ui/Select_block/Select_block'


export const SelectWithProps = (props) => {
        return <SelectBlock
            required={false}

            style={{
                width: '150px',
                height: '37px',
            }}
             {...props} />
    }




export const InputWithProps = (props) => {

    return <InputBlock
        type={'number'}
        labelRus={null}
        flexDirection={null}
        width={80}
        height={37}
        imageSrc={null}

        pattern={/^[0-9]{1,20}$/i}
        required={false}
        {...props} />
}


  