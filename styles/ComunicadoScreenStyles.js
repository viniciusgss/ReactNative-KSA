import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f9fa',
  },
  title: {
    fontSize: 24,
    margin: 16,
    fontWeight: 'bold',
  },
  BgEffect: {
    position: 'absolute',
    top: '0%',
    right: '-5%',
    zIndex: 0,
  },
  tabsContainer: {
    flexDirection: 'row',
    marginHorizontal: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  tab: {
    fontSize: 16,
    paddingVertical: 8,
    paddingHorizontal: 16,
    color: '#E3E1E1',
  },
  activeTab: {
    color: '#4a00e0',
    borderBottomWidth: 2,
    borderBottomColor: '#4a00e0',
  },
  comunicadoContainer: {
    backgroundColor: '#022036',
    margin: 16,
    paddingTop: 90,
    paddingBottom: 10,
    paddingHorizontal: 16,
    borderRadius: 8,
  },
  comunicadoTitulo: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  messageContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    marginHorizontal: 16,
    padding: 10,
    borderRadius: 8,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },
  usericon: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#ddd',
    marginRight: 8,
  },
});

export default styles;