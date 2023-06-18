import React from 'react';

import classes from './BuildControl.css';

import {withTranslation} from 'react-i18next';

const buildControl = (props) => {
    console.log(props);
    const {t} = props;

    return (
    <div className={classes.BuildControl}>
        <div className={classes.Label}>{props.label}</div>
        <button 
            className={classes.Less} 
            onClick={props.removed} 
            disabled={props.disabled}>{t('home.Less')}</button>
        <button 
            className={classes.More} 
            onClick={props.added}>{t('home.More')}</button>
    </div>
    );
};

export default withTranslation() (buildControl);