import React from 'react';
import { AppBar, Toolbar } from '@mui/material';
import { styled } from '@mui/system';
import logo from '../image/logo.png';

const StyledAppBar = styled(AppBar)({
  backgroundColor: 'white',
  color: 'black',
  borderRadius: '25px',
  boxShadow: '0px 2px 6px rgba(0, 0, 0, 0.5)',
  padding: '0 1rem',
  position: 'fixed',
  top: '1rem',
  left: '1rem',
  width: 'calc(100% - 2rem)',
  height: '3.125rem',
  zIndex: 1100,
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  minWidth: '20rem', // 最小幅を設定
  minHeight: '3.125rem', // 最小高さを設定
});

const StyledToolbar = styled(Toolbar)({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  width: '100%',
  minHeight: 'auto',
  padding: '0',
});

const Logo = styled('img')({
  height: '100%',
  maxHeight: '4rem', // ロゴの最大高さを設定（40px = 2.5rem）
  padding: '0.9375rem 0',
  boxSizing: 'border-box',
});

const Header: React.FC = () => {
  return (
    <StyledAppBar position="fixed">
      <StyledToolbar>
        <Logo src={logo} alt="ロゴ" />
      </StyledToolbar>
    </StyledAppBar>
  );
};

export default Header;
