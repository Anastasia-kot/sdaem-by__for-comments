import { Select } from './Select/Select'
import styles from './Select_block.module.scss'
import { FC } from 'react'; 
import { CSSProperties } from "node_modules/@types/react/index.d.ts"


type Props = {
    options: {
        text: string
        value: string | number | null
    }[]

    label: any // Path<ContactFormType> | Path<AuthFormType> | Path<RegisterFormType> 
    register: any   // register: UseFormRegister<ContactFormType> | UseFormRegister<AuthFormType> | UseFormRegister<RegisterFormType>
    required: boolean
    onChange?: ({ filter, value }) => void

    labelRus: {label: string, flexDirection: 'row' | 'column'} | null
    style: CSSProperties 
    
}

export const SelectBlock: FC<Props> = ({
    options,
    label,
    register,
    required,
    onChange,

    style,
    labelRus,
}) => {

    return (<div
            className={styles.SelectBlock}
            style={{
                 gridTemplateColumns: (labelRus && labelRus.flexDirection == 'row') ? '1fr qfr' : '1fr',
                 gridTemplateRows: (labelRus && labelRus.flexDirection == 'column') ? '1fr qfr' : '1fr',
            }} 
            >
                {labelRus &&  <span
                                    className={styles.LabelSelect}
                                    style={{
                                        gridColumn: (labelRus && labelRus.flexDirection == 'row') ? '1/2' : 'auto',
                                        gridRow: (labelRus && labelRus.flexDirection == 'column') ? '1/2' : 'auto',

                                    }}> 
                                        {labelRus.label}
                                </span>
                }
            
    
            <Select 
                options={options}
                label={label}
                register={register}
                required={required}
                onChange={onChange ? onChange : (e)=>{}}

                style={{...style,
                    gridColumn: (labelRus && labelRus.flexDirection == 'row') ? '2/3' : 'auto',
                    gridRow: (labelRus && labelRus.flexDirection == 'column') ? '2/3' : 'auto',
                    }}
            /> 
</div>)
}