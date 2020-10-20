import { Grid, makeStyles, Typography } from '@material-ui/core';
import React, { useState } from 'react';
import ProductModel from '../../models/product.model';
import FooterSection from './footer-section';

const useStyle = makeStyles({
    bodyCard: {
        paddingTop: '1rem' , 
        width: '20%', 
        margin: '2rem', 
        borderRadius: '1rem',
        boxShadow: '0px 2px 6px #888888'
    },
    headerTitle: {
        backgroundColor: '#202020', 
        color: '#ffffff', 
        padding: '0.3rem 1.6rem', 
        marginLeft: '-0.1rem'  
    },
    headerSale:{
        backgroundColor: '#DE293C', 
        color: '#ffffff', 
        padding: '0.3rem 1.4rem' , 
        borderRadius: '3rem' , 
        marginRight: '1rem' 
    },
    imgStyle: {
        width: '75%' , 
        margin: '0.4rem 0rem' , 
        borderRadius: '0.2rem',
        height: '20rem'
    },
});
const ViewProduct = () => {
    const classes = useStyle();
    const [product] = useState<ProductModel>({
        id: 1,
        imagePath: './phone.jpg',
        title: 'One PLus',
        description:'One Plus description lkmlk mlkm kmlm kmlkk mlmlkmk',
        cashPrice: 15.999,
        installmentPrice: 20.999
    });

    return (
        <>
        <Grid container className={classes.bodyCard}>
            <Grid item xs={12}>
                <Grid container justify='space-between' alignItems='center'> 
                    <Grid item className={classes.headerTitle}>
                        <span>Dokany</span>
                    </Grid>
                    <Grid item className={classes.headerSale}>
                        <span>SALE</span>
                    </Grid>
                </Grid>
            </Grid>
            <Grid item xs={12}>
                <Typography align='center'>
                    <img src={require('./phone.jpg')} alt='product' className={classes.imgStyle}/>
                </Typography>
            </Grid>
            <FooterSection product={product}/>
        </Grid>
        </>
    );
}

export default ViewProduct;