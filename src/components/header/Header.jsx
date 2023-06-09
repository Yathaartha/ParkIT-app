import React from 'react';
import styled from 'styled-components';
import {Image, Text, TouchableHighlight, TouchableOpacity} from 'react-native';
import {backgroundColors} from '../../constants/colors';
import logo from '../../assets/images/logo.png';
import helpIcon from '../../assets/icons/question.png';
import adminIcon from '../../assets/icons/setting.png';

const HeaderWrap = styled.View`
  background-color: ${backgroundColors.main};
  padding: 20px;
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  height: 120px;
  align-items: center;
`;

const Icon = styled.Image`
  width: 30px;
`;

const Logo = styled.Image`
  width: 100px;
`;

const Header = ({navigation}) => {
  return (
    <HeaderWrap>
      <TouchableOpacity onPress={() => navigation.navigate('FAQ')}>
        <Icon source={helpIcon} resizeMode="contain" />
      </TouchableOpacity>
      <Logo source={logo} resizeMode="contain" />
      <TouchableOpacity onPress={() => navigation.navigate('Login')}>
        <Icon source={adminIcon} resizeMode="contain" />
      </TouchableOpacity>
    </HeaderWrap>
  );
};

export default Header;
