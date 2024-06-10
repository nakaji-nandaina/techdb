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
    //backgroundColor: 'white',][
}));

const CatchphraseText = styled(Typography)(({ theme }) => ({
    fontFamily: 'Montserrat',
    fontSize: '6rem',
    [theme.breakpoints.down('sm')]: {
      fontSize: '4rem',
    },
    [theme.breakpoints.up('lg')]: {
      fontSize: '8rem',
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
