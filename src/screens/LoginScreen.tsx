import { useNavigation } from '@react-navigation/native';
import { useState } from 'react';
import {
  Pressable,
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
} from 'react-native';
import { ArrowLeftIcon } from 'react-native-heroicons/solid';
import { SafeAreaView } from 'react-native-safe-area-context';
import {ErrorToast} from "react-native-toast-message"

const selectionColor: string = 'gray';
export default function LoginScreen() {
  const navigation = useNavigation();

  const [email, setEmail] = useState<string>("")
  const [password, setPassword] = useState<string>("")


  const validateLogin: any = () => {
    if (email !== '' && password !== '') {
      //@ts-ignore
      navigation.navigate('welcome');
    }
    else {
      <ErrorToast text1='grwgwrgg' text2='thhthhht' />
    }
  };

  const toSignup:any =()=> {
      //@ts-ignore
    navigation.navigate('signup');
  }
  const handleEmail:any =(e:string)=> {
    setEmail(e)
  }

  const handlePassword:any =(e:string)=> {
    setPassword(e)
  }

  return (
    <View style={styles.container}>
      <SafeAreaView>
        <View style={styles.topContainer}>
          <Pressable style={styles.btn} onPress={() => navigation.goBack()}>
            <View>
              <ArrowLeftIcon size='30' color='black' />
            </View>
          </Pressable>
        </View>
        <View style={styles.imgContainer}>
          <Image
            source={require('../../assets/images/login.png')}
            style={styles.img}
          />
        </View>
      </SafeAreaView>
      <View style={styles.bottom}>
        <View style={styles.form}>
          <Text style={styles.email}>E-mail</Text>
          <View style={styles.field}>
            <TextInput
            defaultValue=''
            value={email}
            onChangeText={handleEmail}
              selectionColor={selectionColor}
              placeholder='E-mail'
              style={styles.input}
            />
          </View>
          <Text style={styles.password}>Password</Text>
          <View style={styles.field}>
            <TextInput
            defaultValue=''
            value={password}
            onChangeText={handlePassword}
              selectionColor={selectionColor}
              placeholder='Password'
              secureTextEntry
              style={styles.input}
            />
          </View>
        </View>
        <View style={styles.loginBtnContainer}>
          <Pressable  onPress={validateLogin} style={styles.loginBtn}>
            <Text style={styles.btnText}>Log in</Text>
          </Pressable>
        </View>
        <View style={styles.bottomContainer}>
          <Text style={styles.warning}>Do not have an account?</Text>
          {/* @ts-ignore */}
          <Pressable onPress={toSignup}>
            <Text style={styles.signup}>Sign up</Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  bottom: {
    justifyContent: 'flex-start',
    alignItems: 'center',
    borderTopLeftRadius: 30,
    marginTop: 10,
    flex: 1,
    width: '100%',
    borderTopRightRadius: 30,
    backgroundColor: '#FFFFFF',
  },

  form: { marginTop: 20, width: '70%', alignItems: 'center' },
  field: {
    width: '100%',
    height: 50,
    justifyContent: 'center',
    borderColor: 'gray',
    marginBottom: 10,
    borderStyle: 'solid',
    borderWidth: 0.5,
    paddingVertical: 4,
    paddingLeft: 8,
    borderRadius: 9,
    backgroundColor: 'lightgray',
  },
  email: { paddingLeft: 10, marginBottom: 10, width: '100%' },
  password: { paddingLeft: 10, marginBottom: 10, width: '100%' },
  input: { color: 'black', fontSize: 17 },
  container: {
    flex: 1,
    backgroundColor: '#877dfa',
  },
  safeArea: { display: 'flex' },
  topContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
  },
  btn: {
    margin: 20,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFCD06',
    width: 50,
    height: 50,
    borderTopEndRadius: 20,
    borderBottomLeftRadius: 20,
  },
  imgContainer: {
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  img: { width: 250, height: 250 },
  loginBtnContainer: {
    width: '100%',
    marginTop: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  loginBtn: {
    backgroundColor: '#FFCD06',
    width: '70%',
    justifyContent: 'center',
    height: 50,
    borderRadius: 9,
  },
  btnText: { textAlign: 'center', fontSize: 17 },
  bottomContainer: { flexDirection: 'row', marginTop: 20 },
  warning: { color: 'black', fontWeight: '600' },
  signup: { color: '#877dfa', fontWeight: '800', marginLeft: 10 },
});
