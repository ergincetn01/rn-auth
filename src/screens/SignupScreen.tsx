import { View, Text, Pressable, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
function SignupScreen() {
  const navigation = useNavigation();

  const goToLogin:any=()=> {
    // navigation.navigate("login")
  }
  return (
    <View style={styles.container}>
      <Text>signupppp</Text>
      <Text>
        Already have an account?
        {/* @ts-ignore */}
        <Pressable onPress={()=> navigation.navigate("login")}>
          <Text>Log in</Text>
        </Pressable>
      </Text>
    </View>
  );
}

const styles= StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
})

export default SignupScreen;
