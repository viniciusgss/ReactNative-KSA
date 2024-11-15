import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
    marginTop: 40,
  },
  content: {
    paddingBottom: 50,
  },
  inputContainer: {
    marginBottom: 20,
    width: '100%',
  },
  label: {
    fontSize: 14,
    fontFamily: 'Open Sans Semi Bold',
    fontWeight: '600',
    color: '#000',
    marginBottom: 5,
  },
  input: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    fontSize: 14,
    fontFamily: 'Open Sans',
    backgroundColor: '#FFF',
  },
  errorText: {
    color: 'red',
    fontSize: 14,
    marginTop: 10,
  },
  buttonText: {
    color: '#FFF',
    fontSize: 14,
    fontWeight: '600',
  },
  enterButton: {
    width: 126,
    height: 29,
    backgroundColor: '#F90',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    marginTop: 40,
    alignSelf: 'center',
  },
  forgotPasswordText: {
    color: '#007BFF',
    fontSize: 14,
    textAlign: 'left',
  },
});
