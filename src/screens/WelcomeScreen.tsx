import { useNavigation } from '@react-navigation/native';
import { Image, Pressable, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function WelcomeScreen() {
  const navigator = useNavigation();

const toSignup: any =()=> {
  //@ts-ignore
  navigator.navigate("signup")
}

  return (
    <SafeAreaView style={styles.main}>
      <View style={styles.view}>
        <Text style={styles.title}>Let's Get Started</Text>
        <View style={styles.imgView}>
          <Image
            source={require('../../assets/images/welcome.png')}
            style={styles.img}
          />
        </View>
        <View style={styles.btnContainer}>
          <Pressable onPress={toSignup} style={styles.btn}>
            <Text style={styles.btnText}>Sign up</Text>
          </Pressable>
          <View style={styles.bottom}>
            <Text style={styles.warning}>Already have an account?</Text>
          
            <Pressable
              onPress={() =>  
                /* @ts-ignore */
                navigator.navigate('login')
              }
            >
              <Text style={styles.login}>Log in</Text>
            </Pressable>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  login: { paddingLeft: 10, fontWeight: '700', color: '#FFCD06' },
  bottom: { flexDirection: 'row', justifyContent: 'center', paddingTop: 20 },
  btnContainer: { alignItems: 'center', justifyContent: 'flex-start' },
  btn: {
    backgroundColor: '#FFCD06',
    width: '70%',
    justifyContent: 'center',
    height: 50,
    borderRadius: 9,
  },
  btnText: {
    textAlign: 'center',
    color: '#111215',
    fontWeight: 'bold',
    fontSize: 24,
  },
  img: { width: 350, height: 350 },
  warning: { color: '#FFFFFF', fontWeight: '700' },
  imgView: { justifyContent: 'flex-start', alignItems: 'center' },
  main: { backgroundColor: '#877dfa', flex: 1 },
  view: { flex: 1, display: 'flex', justifyContent: 'space-around' },
  title: {
    fontWeight: 'bold',
    color: '#FFFFFF',
    fontSize: 40,
    textAlign: 'center',
  },
});
