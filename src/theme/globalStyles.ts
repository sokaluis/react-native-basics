import { StyleSheet } from 'react-native';

export const colors = {
  primary: '#5856D6',
  white: '#FFF',
};

export const globalStyles = StyleSheet.create({
  globalMargin: {
    marginHorizontal: 20,
  },
  bgColor: {
    backgroundColor: 'white',
  },
  title: {
    fontSize: 30,
    marginBottom: 30,
  },
  btnPersonas: {
    flexDirection: 'row',
  },
  btnGrande: {
    width: 100,
    height: 100,
    backgroundColor: 'red',
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    margin: 10,
  },
  btnText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  avatarContainer: {
    alignItems: 'center',
    marginTop: 20,
    marginBottom: 20,
  },
  avatar: {
    width: 150,
    height: 150,
    borderRadius: 100,
  },
});
