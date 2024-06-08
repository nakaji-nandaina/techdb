import React from 'react';
import { AppBar, Toolbar } from '@mui/material';
import { styled } from '@mui/system';
import logo from '../image/logo.png'; // ロゴ画像への正しいパスを指定してください

const CustomAppBar = styled(AppBar)(({ theme }) => ({
  borderRadius: '1rem',
  margin: '1rem auto 0 auto', // 上部にマージンを追加
  padding: '0 1rem', // 左右にパディングを設定
  backgroundColor: '#ffffff',
  width: '95%',
  left: 0,
  right: 0,
  height: '3rem', // AppBarの高さを設定
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
}));

const Logo = styled('img')({
  height: '2rem', // ロゴの高さを調整
});

const Header: React.FC = () => {
  return (
    <CustomAppBar position="fixed" elevation={6}>
      <Toolbar sx={{ width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', padding: 0, minHeight: '3rem' }}> {/* Toolbarの高さをAppBarに合わせて調整 */}
        <Logo src={logo} alt="Logo" />
      </Toolbar>
    </CustomAppBar>
  );
};

export default Header;
