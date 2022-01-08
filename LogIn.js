import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { View } from 'react-native';
import { StyledContainer, InnerContainer, PageLogo, PageTitle, StyledFormArea, SubTitle } from './components/styles';

import { Formik } from 'formik';

const LogIn = () => {
  return (
    <View>
      <StyledContainer>
        <StatusBar style="dark" />
        <InnerContainer>
          <PageLogo resizeMode="cover" source={require('./assets/icon.png')} />
          <PageTitle>WasteManage</PageTitle>
          <SubTitle>Account Login</SubTitle>
          <Formik
            initialValues={{ email: '', password: '' }}
            onSubmit={(value) => {
              console.log(value);
            }}
          >
            {() => <StyledFormArea></StyledFormArea>}
          </Formik>
        </InnerContainer>
      </StyledContainer>
    </View>
  );
};
export default LogIn;
