import React from 'react';
import { Grid, makeStyles, Typography } from '@material-ui/core';
import ProductModel from '../../models/product.model';

const useStyle = makeStyles({
    headerSale:{
        backgroundColor: '#DE293C', 
        color: '#ffffff', 
        padding: '0.3rem 1.4rem' , 
        borderRadius: '3rem' , 
        marginRight: '1rem' 
    },
    cashBtn:{
        borderRadius: '0.7rem'    
    },
    colorText: {
        color: '#CFCFCF'
    },
    descriptionStyle:{
        lineHeight: 'inherit'
    },
    cashSection: {
        margin:'1rem 0rem 0.5rem 0rem'
    },
    footer: {
        backgroundColor: '#202020', 
        padding: '1rem 0rem', 
        borderRadius: '0rem 0rem 1rem 1rem', 
    }
});

const FooterSection: React.FC<{
    product: ProductModel
}> = ({product}) => {
    const classes = useStyle();
    return (
        <>
        <Grid item xs={12} className={classes.footer}>
                <Typography align='center' style={{color: '#6C6C6C'}}>
                    {product.title}
                </Typography>
                <Typography align='center' className={classes.colorText + ' '+ classes.descriptionStyle}>
                    {product.description}
                </Typography>
                <Typography align='center' className={classes.colorText + ' ' + classes.cashSection}>
                    <span className={classes.headerSale + ' ' + classes.cashBtn}>CASH</span> 
                    <br />
                    {product.cashPrice} EGP
                </Typography>
                <Typography align='center' className={classes.colorText}>
                    <span className={classes.headerSale + ' ' + classes.cashBtn}>INSTALLMENT</span> 
                    <br />
                    {product.installmentPrice} EGP
                </Typography>
            </Grid>
        </>
    );
}

export default FooterSection;