import React, { Component } from 'react';
import {withTranslation} from 'react-i18next';
import Ax from '../../../hoc/Ax/Ax';
import Button from '../../UI/Button/Button';

class OrderSummary extends Component {
    // This could be a functional component, doesn't have to be a class
    componentWillUpdate() {
        console.log('[OrderSummary] WillUpdate');
    }

    render () {
        const ingredientSummary = Object.keys( this.props.ingredients )
            .map( igKey => {
                return (
                    <li key={igKey}>
                        <span style={{ textTransform: 'capitalize' }}>{igKey}</span>: {this.props.ingredients[igKey]}
                    </li> );
            } );

            const {t} = this.props;

        return (
            <Ax>
                <h3>{t('home.YourPrice')}</h3>
                <p>{t('home.description')}</p>
                <ul>
                    {ingredientSummary}
                </ul>
                <p><strong>{t('home.totalPrice')}: {this.props.price.toFixed( 2 )}</strong></p>
                <p>{t('home.checkout')}</p>
                <Button btnType="Danger" clicked={this.props.purchaseCancelled}>{t('home.cancel')}</Button>
                <Button btnType="Success" clicked={this.props.purchaseContinued}>{t('home.continue')}</Button>
            </Ax>
        );
    }
}

export default withTranslation()(OrderSummary);