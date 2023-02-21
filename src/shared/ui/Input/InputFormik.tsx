import React, { FC, ReactElement } from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik';
import styles from './Input.module.scss'
import Image from 'next/image'
import SvgError from '../icons/Error';

type Props = {
    type:  'text' | 'password' | 'number'|'email' | 'textarea' 
    value: any
    required: boolean
    name: string
    errors: any
    touched: any

    labelRus: string | null
    placeholder: string
    flexDirection: 'row' | 'column' | null
    width: number
    height?: number
    nonActivePlaceholderColor?: string
    imageSrc?: string | null
    icon: boolean 


    onChange: any
    onBlur: any
    children?: ReactElement
}

export const InputFormik: FC<Props> = (props) => {
    const {
        type,
        value,
        required,
        name,
        errors,
        touched,


        labelRus,
        placeholder,
        flexDirection,
        width,
        height,
        nonActivePlaceholderColor = '#686868',
        imageSrc,
        icon,


        onChange,
        onBlur,
        children
    } = props;
    
    return (
        <label
            className={styles.Label}
            style={
                labelRus
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

                {type === 'textarea'
                    ? <textarea
 
                        className={styles.Textarea}
                        placeholder={placeholder}
                        style={{
                            width: width,
                            height: height,
                            color: nonActivePlaceholderColor
                        }}
                    ></textarea>
                    : <input
                        value={value}
                        required={required}
                        name={name}

                        className={styles.Input}
                        placeholder={placeholder}
                        type={type}
                        style={{
                            width: width,
                            height: height,
                            color: nonActivePlaceholderColor,
                            paddingLeft: imageSrc || icon ? '40px' : 'auto',
                            border: (errors && errors[name] && touched && touched[name]) ? '1px solid #EB5757' : '1px solid transparent' 


                        }} 
                        
                        
                        onChange={onChange}
                        onBlur={onBlur}
                    />
                }
                <div className={styles.SvgImage} >{children}</div>  
                
                {!!errors[name] && touched[name] && <>
                    <SvgError className={styles.ErrorSvg} />
                    <div className={styles.ErrorMessage}>
                            <ErrorMessage name={name} component="div" /> 
                     </div> 
                </>}

            </div>

        </label>
    )
}