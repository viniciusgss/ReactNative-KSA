import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    marginTop: 40,
    paddingHorizontal: 20,
  },
  questionText: {
    fontSize: 14,
    fontFamily: 'Open Sans Semi Bold',
    fontWeight: '600',
    color: '#000',
    textAlign: 'left',
  },
  asterisk: {
    color: '#FF0606',
  },
  imagesContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 30,
  },
  circleWithText: {
    alignItems: 'center',
  },
  circleWrapper: {
    width: 96,
    height: 96,
    borderRadius: 48,
    justifyContent: 'center',
    alignItems: 'center',
  },
  circleImage: {
    width: 80,
    height: 71,
    borderRadius: 31.5,
  },
  selectedOption: {
    borderWidth: 3,
    borderColor: '#5A9BD5',
  },
  optionTextWrapper: {
    marginTop: 10,
    alignItems: 'center',
  },
  optionText: {
    fontSize: 12,
    fontFamily: 'Open Sans Semi Bold',
    fontWeight: '700',
    color: '#000',
  },
  selectedTextOption: {
    color: '#28a745',
  },
});
