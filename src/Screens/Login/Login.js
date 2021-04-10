import React, {useEffect, useState} from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import BorderTextInput from '../../Components/BorderTextInput';
import ButtonWithLoader from '../../Components/ButtonWithLoader';
import GradientButton from '../../Components/GradientButton';
import WrapperContainer from '../../Components/WrapperContainer';
import strings from '../../constants/lang';
import {
  moderateScaleVertical,
  moderateScale,
} from '../../styles/responsiveSize';
import styles from './styles';
import {otpTimerCounter} from '../../utils/helperFunctions';
import colors from '../../styles/colors';
import fontFamily from '../../styles/fontFamily';
import imagePath from '../../constants/imagePath';
import navigationStrings from '../../constants/navigationStrings';
import TextInputWithLabel from '../../Components/TextInputWithLabel';
import actions from '../../redux/actions/index';

export default function OtpVerification({navigation}) {
  const [state, setState] = useState({
    email: '',
    password: '',
  });
  const updateState = data => setState(state => ({...state, ...data}));

  const moveToNewScreen = (screenName, data) => () => {
    navigation.navigate(screenName, {});
  };

  const _onLogin = () => {
    // actions.login({
    //   email:"ha@hyp.com",
    //   pwd:'122132'
    // }).then(res=>{

    // })
    navigation.navigate(navigationStrings.OTP_VERIFICATION);
  };
  const {timer} = state;
  return (
    <WrapperContainer>
      <View style={styles.topBar}>
        <Image
          source={imagePath.dp}
          style={styles.dpImage}
          resizeMode={'cover'}
        />
        <Image source={imagePath.search} style={styles.searchStyle} />
        <Image source={imagePath.mail} style={{tintColor: colors.sapphire}} />
      </View>
      <KeyboardAwareScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.blueBox}>
          <View style={{height: moderateScaleVertical(10)}} />
          <Image source={imagePath.logo} style={styles.logo} />
          <Text style={styles.header}>{strings.WALLET_KYC}</Text>
          <Text style={styles.header}>{strings.PAY_DIRECTLY}</Text>
          <View style={styles.blueBox1}>
            <Image source={imagePath.addedImage} style={styles.payLogo} />
            <Image source={imagePath.payLogo} style={styles.payLogo} />
            <Image source={imagePath.plusLogo} style={styles.payLogo} />
          </View>
          <View style={styles.blueBox2}>
            <Text style={styles.txtSmaller}>{strings.PAY}</Text>
            <Text style={styles.txtSmaller}>{strings.SEND_MONEY}</Text>
            <Text style={styles.txtSmaller}>{strings.RECHARGE_PAY_BILL}</Text>
          </View>
          <View style={{height: moderateScaleVertical(30)}} />
          <Image
            source={imagePath.card}
            style={{height: 100, width: 150, alignSelf: 'center'}}
          />
          <Text style={styles.cashbackText}>{strings.CASHBACK}</Text>
          <View style={styles.creditCard}>
            <ButtonWithLoader btnText={strings.APPLY} />
          </View>
          <View style={{height: moderateScaleVertical(30)}} />
        </View>
      </KeyboardAwareScrollView>
    </WrapperContainer>
  );
}
