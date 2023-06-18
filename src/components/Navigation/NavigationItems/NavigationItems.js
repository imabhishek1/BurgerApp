import React from 'react';
import { withTranslation} from 'react-i18next';
import classes from './NavigationItems.css';
import NavigationItem from './NavigationItem/NavigationItem';

const navigationItems = (props) => {

    console.log(props)
    const {i18n } = props;
    console.log(i18n)
    const changeLanguage = lng => {
    i18n.changeLanguage(lng);

    };

    const {t} = props;
    return(

    <ul className={classes.NavigationItems}>
        <NavigationItem link="/" exact>{t('home.Burger Builder')}</NavigationItem>
        <NavigationItem link="/orders">{t('home.Order')}</NavigationItem>
        <button onClick={() => changeLanguage('en')}>English</button>
        <button onClick={() => changeLanguage('fr')}>French</button>
    </ul>

    )

};

export default withTranslation() (navigationItems);