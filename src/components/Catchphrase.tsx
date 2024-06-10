// src/Catchphrase.tsx
import React from 'react';
import { Box, Typography } from '@mui/material';
import { styled } from '@mui/system';

const Circle = styled(Box)(({ theme }) => ({
    position: 'absolute',
    borderRadius: '50%',
    backgroundColor: 'orange',
    zIndex: -1,
}));

const InnerCircle = styled(Circle)(({ theme }) => ({
    width: '50vw', // 外側の円に対する割合で設定
    height: '50vw',
    opacity: 0.2, // 内側の円の透明度を薄く
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
}));

const MiddleCircle = styled(Circle)(({ theme }) => ({
    width: '75vw', // 外側の円に対する割合で設定
    height: '75vw',
    opacity: 0.1, // 中間の円の透明度
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
}));

const OuterCircle = styled(Circle)(({ theme }) => ({
    width: '95vw', // 画面幅の80%に設定
    height: '95vw',
    opacity: 0.05, // 外側の円の透明度
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
}));

const CatchphraseContainer = styled(Box)(({ theme }) => ({
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    position: 'relative',
    textAlign: 'center',
    marginTop: 'auto',
    marginBottom: 'auto',
    [theme.breakpoints.down( 'md')]: {
        paddingTop: '-20vh', 
        paddingBottom: '-20vh', 
        marginTop: '-20vh', // 900pxから1200pxの画面サイズ
        marginBottom:'-20vh'
    },
    [theme.breakpoints.between('sm', 'md')]: {
        paddingTop: '-15vh', 
        paddingBottom: '-15vh', 
        marginTop: '-15vh', // 900pxから1200pxの画面サイズ
        marginBottom:'-15vh'
    },
    [theme.breakpoints.between('md', 'lg')]: {
        paddingTop: '-10vh', 
        paddingBottom: '-10vh', 
        marginTop: '-10vh', // 900pxから1200pxの画面サイズ
        marginBottom: '-10vh',
    },
    [theme.breakpoints.up('lg')]: {
        paddingTop: '5vh', 
        paddingBottom: '-5vh', 
        marginTop: '5vh', // 900pxから1200pxの画面サイズ
        marginBottom: '-5vh',
    },
    //paddingTop: '5vh',
    //backgroundColor: 'white',][
}));

const CatchphraseText = styled(Typography)(({ theme }) => ({
    fontFamily: 'Montserrat',
    fontSize: '8rem',
    [theme.breakpoints.down('xs')]: {
        fontSize: '1rem', // 600px未満の画面サイズ
      },
    [theme.breakpoints.between('xs','sm')]: {
      fontSize: '3rem',
    },
    [theme.breakpoints.between('sm', 'md')]: {
        fontSize: '5rem', // 900pxから1200pxの画面サイズ
    },
    [theme.breakpoints.up('lg')]: {
      fontSize: '11rem',
    },
}));

const Catchphrase: React.FC = () => {
    return (
        <CatchphraseContainer>
            <OuterCircle />
            <MiddleCircle />
            <InnerCircle />
            <CatchphraseText variant="h1" color="textPrimary" fontWeight="bold">
                新しい技術で<br/>
                広がる世界
            </CatchphraseText>
        </CatchphraseContainer>
    );
};

export default Catchphrase;
