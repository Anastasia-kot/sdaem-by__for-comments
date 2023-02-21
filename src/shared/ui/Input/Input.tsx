import React, { FC } from 'react'
import styles from './Input.module.scss'
import Image from 'next/image'
import { ValidationRule } from 'react-hook-form'


type Props = {
    type: string  // type of input or textarea   
    labelRus: string | null
    placeholder: string
    flexDirection: 'row' | 'column' | null
    width: number
    height?: number
    nonActivePlaceholderColor?: string
    imageSrc?: string 

    label: any     // label: Path<ContactFormType> | Path<AuthFormType> | Path<RegisterFormType> 
    pattern?: ValidationRule<RegExp>
    register: any     // register: UseFormRegister<ContactFormType> | UseFormRegister<AuthFormType> | UseFormRegister<RegisterFormType>
    defaultValue?: string
    required: boolean
    errors?: any       //Partial<FieldErrorsImpl<RegisterFormType>>
    errorPatternMessage?: string
    onChange?: (arg) => void
 
 
}
export const InputBlock: FC<Props> = ({ 
    type,
    labelRus,
    placeholder,
    flexDirection,
    width,
    height,
    nonActivePlaceholderColor = '#686868',
    imageSrc,

    label,
    register,
    defaultValue,
    pattern,
    required,
    errors,
    errorPatternMessage,
    onChange
}) => {

 
    return (
        <label
            className={styles.Label}
            style={
                label
                    ?
                    {
                        display: 'flex',
                        flexDirection: flexDirection
                    }
                    : {
                        display: 'block',
                        height: 'min-content',
                        width: width
                    }

            }>

            {labelRus && <span>{labelRus}</span>}

            <div className={styles.InputWrapper}>
                
             
                {/* {imageSrc && <div className={styles.SvgImage}>{imageSrc}</div>} */}
                {imageSrc && <Image src={imageSrc} alt='icon' className={styles.SvgImage} />}
                
                {type === 'textarea'
                    ? <textarea
                         {...register(label, { required:{required} })}
                        className={styles.Textarea}
                        placeholder={placeholder}
                        style={{
                            width: "100%",
                            maxWidth: width,
                            height: height,
                            color: nonActivePlaceholderColor
                        }}


                         
                    ></textarea>
                    : <input 
                        {...register(label, { required: {required}, pattern: pattern })}
                        defaultValue={defaultValue}
                        className={styles.Input}
                        placeholder={placeholder}
                        type={type}
                        style={{
                            width: width,
                            height: height,
                            color: nonActivePlaceholderColor,
                            paddingLeft: imageSrc ? '40px' : 'auto',
                        }} 
                        onChange={onChange ? (e) => onChange(e.target.value) : ()=>{}}
                        />
                }

                {errors && errors[label] &&
                <>
                    {/* <Image src={error} alt='error' className={styles.ErrorSvg} />                      */}
                     <div className={styles.ErrorMessage}>
                        {errors[label]?.message}
                    </div> 
                </>}
            </div>
 
        </label>

      


    )
}