import React from 'react';
import { View } from 'react-native';
import { StyledContainer, InnerContainer, PageLogo, PageTitle } from './components/styles';
const Login = () => {
  return (
    <View>
      <StyledContainer>
        <InnerContainer>
          <PageLogo resizeMode="cover" source={require('./assets/icon.png')} />
          <PageTitle>WasteManage</PageTitle>
        </InnerContainer>
      </StyledContainer>
    </View>
  );
};
export default Login;
