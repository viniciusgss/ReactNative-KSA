import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    marginTop: -35,
  },
  triangle: {
    width: 189,
    height: 201,
    position: 'absolute',
    top: -90,
    left: -40,
  },
  textContainer: {
    marginTop: 160,
    alignItems: 'center',
    justifyContent: 'center',
  },
  helloText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#021320',
    borderBottomWidth: 4,
    borderBottomColor: '#0C476F',
    paddingBottom: 10,
    fontFamily: 'Open Sans Semi Bold',
  },
  welcomeText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#021320',
    fontFamily: 'Open Sans Semi Bold',
  },
  subText: {
    color: '#A8A8A8',
    fontFamily: 'Open Sans',
    fontSize: 14,
    fontWeight: '600',
    lineHeight: 18,
    marginTop: 25,
    textAlign: 'center',
  },
});
