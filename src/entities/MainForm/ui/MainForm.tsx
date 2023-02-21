import React, { FC, useState } from 'react'
import { useForm } from 'react-hook-form'
import classNames from 'classnames'
import styles from './MainForm.module.scss'
import { useRouter } from 'next/router'


import { MoreOptionsModal } from '../../MoreOptionsModal/MoreOptionsModal'
import { InputWithProps, SelectWithProps } from './FormComponentsWithProps'
import { onSubmit } from '../lib/helpers'


import { citiesList, MainFiltersFormType } from '../../../../types/formTypes'
import { categoriesItems } from '../../../../types/main_data'
import { cityNameEngToRus } from '../../../shared/helpers/nameConverters'
 
import SvgNavIcon from '../../../shared/ui/icons/NavigationIcon'
import SvgMoreOptions from '../../../shared/ui/icons/MoreOptions'
import SvgArrowRight from '../../../shared/ui/icons/ArrowRight'



export const MainForm: FC = () => {

    // визуальные эффекты
    const [currentCategory, setCurrentCategory] = useState('room');
    const [isMoreOptions, setIsMoreOptions] = useState(false)

    const router = useRouter();
    const { handleSubmit, register, formState: { errors } } = useForm<MainFiltersFormType>();


    
    
    return (
        <form className={styles.heading__form} onSubmit={handleSubmit((values)=>{onSubmit(values, router)})} >

                    <ul className={styles.form__сategories}>
                        {categoriesItems.map(({name, value}, index) =>
                            <li key={index} id={name}
                                className={(currentCategory == name) ? styles.active : ''}
                                onClick={() => setCurrentCategory(name)}>
                                    <label htmlFor={`categories${index}`}>{value}</label>
                                    <input {...register("category")} type="radio" id={`categories${index}`} name="category" value={name} />
                            </li>)}
                    </ul>

                    <div className={classNames(  styles.form__filters,  { [styles.Active]: isMoreOptions }  )}>
                        <div className={styles.filters__city}>
                            <SelectWithProps
                                options={[ 
                                    { text: 'Выберите', value: -1 },
                                    ...citiesList.map(с => ({ text: cityNameEngToRus(с), value: с }))                                    
                                    ]}
                                label={'city'}
                                labelRus={{ label: 'Город', flexDirection: 'column' }}
                                register={register}
                            />
                        </div>


                        <div className={styles.filters__rooms}>
                            <SelectWithProps
                                options={[
                                    { text: 'Выберите', value: -1 },
                                    ...[1, 2, 3, 4, 5].map(i => ({ text: i + ' комн.', value: i }))
                                ]}
                                label={'rooms'}
                                labelRus={{ label: 'Комнаты', flexDirection: 'column' }}
                                register={register}
                            />
                        </div>


                        <div className={styles.filters__price}>
                            <legend className={styles.price__legend}>
                                Цена за сутки (BYN)
                                <div className={styles.legend__inputs}>
                                    <InputWithProps placeholder={'От'} label={'priceMin'} register={register}/>
                                    <InputWithProps placeholder={'До'} label={'priceMax'} register={register}/>
                                </div>
                            </legend>
                        </div>



                    <div className={classNames(   styles.filters__moreOptions,  { [styles.active]: isMoreOptions }   )} >
                        <button type="button" onClick={() => setIsMoreOptions(actual => !actual)}>
                            Больше опций
                            <SvgMoreOptions/>
                        </button>
                    </div>

                    <div className={styles.filters__toMap}>
                        <button type="button">    На карте   <SvgNavIcon fill='#664EF9'/>    </button>
                    </div>

                    <div className={styles.filters__submit}>
                        <button type="submit">
                            Показать 
                            <SvgArrowRight stroke='black'/>
                         </button>
                    </div>
                    </div>

                    <MoreOptionsModal 
                        register={register} 
                        style={{ 
                            display: isMoreOptions ? 'block': 'none',
                            borderRadius: ' 0 0 10px 10px'}}/>

        </form>

    )
}