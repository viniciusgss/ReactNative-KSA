import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    paddingTop: 30,
    backgroundColor: '#F5F5F5',
    zIndex: 2,
  },
  header: {
    width: '100%',
    height: 60,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 15,
    shadowColor: 'rgba(0, 0, 0, 0.25)',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 1,
    shadowRadius: 4,
    elevation: 4,
  },
  title: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
    fontFamily: 'Open Sans Semi Bold',
    flex: 1,
  },
  icon: {
    padding: 10,
  },
});
