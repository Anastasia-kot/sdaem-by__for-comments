import React, { FC } from "react";
import styles from './MainAdvertisingFilter.module.scss'
import { useForm } from 'react-hook-form'

import { SelectBlock } from './../../../shared/ui/Select_block/Select_block'
import { DistrictMetroType } from './../../../../types/formTypes'
import { districtSelectOptions, metroSelectOptions } from "../model/store";

 
export const MainAdvertisingFilter: FC<{ onChange: (args) => void }> = ({ onChange }) => {

    const { register, formState: { errors } } = useForm<DistrictMetroType>();

    const RentSelect = (props) => {
        return <SelectBlock
            register={register}
            required={false}
            onChange={onChange}

            labelRus={null}
            style={{
                width: '185px',
                height: '40px',
                backgroundColor: '#FFFFFF',
                boxShadow: '0px 10px 20px rgba(0, 96, 206, 0.1)',
            }}
            {...props} />
    }

    return (
        <form className={styles.form}>


            <div className={styles.form__container} >
                <RentSelect
                    options={metroSelectOptions}
                    label={'metro'} />
                <svg width="20" height="13" viewBox="0 0 20 13" fill="#BDBDBD" xmlns="http://www.w3.org/2000/svg">
                    <path d="M19.6401 11.4773H18.3812L14.4755 0.509766L9.99979 7.19943L5.21594 0.589264L1.61882 11.4773H0.359905L0 12.9373H4.77911L6.65514 7.59981L10.0565 12.2942L10.0769 12.3238L10.0978 12.2942L13.3449 7.59981L15.2209 12.9373H20L19.6401 11.4773Z" />
                </svg>

            </div>

            <RentSelect
                options={districtSelectOptions}
                label={'district'}
            />


        </form>

    )
}