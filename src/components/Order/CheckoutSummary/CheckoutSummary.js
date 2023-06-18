import React from 'react';
import {withTranslation} from 'react-i18next';
import Burger from '../../Burger/Burger';
import Button from '../../UI/Button/Button';
import classes from './CheckoutSummary.css';

const checkoutSummary = (props) => {

    const {t} = props;

    return (
        <div className={classes.CheckoutSummary}>
            <h1>{t('home.message')}</h1>
            <div style={{width: '100%', margin: 'auto'}}>
                <Burger ingredients={props.ingredients}/>
            </div>
            <Button 
                btnType="Danger"
                clicked={props.checkoutCancelled}>{t('home.cancel')}</Button>
            <Button 
                btnType="Success"
                clicked={props.checkoutContinued}>{t('home.continue')}</Button>
        </div>
    );
}

export default  withTranslation()(checkoutSummary);