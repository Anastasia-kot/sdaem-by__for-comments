import styles from './CatalogueForm.module.scss'
import React, { FC, useState } from 'react'
import { useRouter } from 'next/router'
import classNames from 'classnames'
import { useForm } from 'react-hook-form'

import { SelectBlock } from '../../../shared/ui/Select_block/Select_block'
import { InputBlock } from '../../../shared/ui/Input/Input'
import { MoreOptionsModal } from '../../../entities/MoreOptionsModal/MoreOptionsModal'

import { CatalogueFiltersFormType } from '../../../../types/formTypes'

import { inputProps, selectOptions } from '../model';
import { onSubmit } from '../lib/helpers';
import SvgMoreOptions from '../../../shared/ui/icons/MoreOptions';
import SvgArrowRight from '../../../shared/ui/icons/ArrowRight';


export const CatalogueForm: FC = () => {

    const router = useRouter(); 
    const { handleSubmit, register, formState: { errors } } = useForm<CatalogueFiltersFormType>();

    //ui
    const [isMoreOptions, setIsMoreOptions] = useState<boolean>(false)

    return (
        <form onSubmit={handleSubmit((values)=>onSubmit(values, router))} className={styles.form}>

            <div className={styles.form__filters}>
                <div className={styles.RoomsBlockLabel}>
                    <SelectBlock {...selectOptions} register={register} />
                </div>

                <legend className={styles.PriceBlockLabel}>
                    <span>Цена за сутки (BYN)</span>
                    <div className={styles.InputsBlock}>
                        <InputBlock register={register} placeholder={'От'} label={'priceMin'} {...inputProps} />
                        <InputBlock register={register} placeholder={'До'} label={'priceMax'} {...inputProps} />
                    </div>
                </legend>

                <div className={classNames(  styles.MoreOptionsBlock,  { [styles.Active]: isMoreOptions }   )}  >
                    <button onClick={() => setIsMoreOptions(actual => !actual)}>
                        Больше опций        <SvgMoreOptions/>
                     </button>

                </div>

                <div className={styles.ToClear}>
                    <button type="reset"> Очистить </button>
                </div>

                <div className={styles.ToShow}>
                    <button type='submit'>
                        Показать объекты
                        <SvgArrowRight stroke="white"/>
                     </button>
                </div>

            </div>


            <div className={styles.form__modal}>
                <MoreOptionsModal register={register} style={{display: isMoreOptions ? 'block' : 'none' }} />
            </div>

        </form>

    )
}