import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
    position: 'relative',
  },
  title: {
    fontWeight: 'bold',
    fontSize: 20,
    fontFamily: 'Open Sans Semi Bold',
    color: '#000',
  },
  line: {
    borderBottomWidth: 1,
    borderBottomColor: 'black',
    paddingTop: 10, 
    paddingBottom: 10,
    marginLeft: 20,
    marginRight: 20,
    flexDirection: 'row',
    alignItems: 'center'
  },
  triangle: {
    width: 0,
    height: 0,
    borderLeftWidth: 7,
    borderRightWidth: 7,
    borderBottomWidth: 7,
    borderStyle: 'solid',
    backgroundColor: 'transparent',
    borderLeftColor: 'transparent',
    borderRightColor: 'transparent',
    borderBottomColor: '#FF9900',
    transform: [{ rotate: '90deg' }],
    marginRight: 5,
  },
  listContainer: {
    paddingHorizontal: 10,
    paddingVertical: 20,
  },
  turmaContainer: {
    flex: 1,
    margin: 10,
    backgroundColor: '#f0f0f0',
    alignItems: 'center',
    maxWidth: '45%', // Adicione esta linha para limitar a largura máxima
    borderStyle: 'solid',
    borderColor: '#333',
    borderWidth: 1,
    paddingBottom: 15,
  },
  turmaName: {
    fontWeight: 'bold',
    fontSize: 16,
    color: '#333',
  },
  turmaDesc: {
    fontSize: 14,
    color: '#333',
  },
  turmaLine: {
    borderBottomWidth: 1,
    borderBottomColor: '#FF9900',
    paddingTop: 20, 
    paddingBottom: 10,
    width: '70%',
    alignItems: 'center',
  },
  turmaBanner: {
    backgroundColor: '#FF9900',
    padding: 20,
    width: '100%',
    alignItems: 'center',
  },
  turmaImage: {
    width: 20,
    height: 15, 
    marginRight: 5,
  },
  turmaMembers: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingTop: 5,
    width: '65%',
    maxWidth: '100%',
  },
  turmaMemberText: {
    fontSize: 12,
    color: '#333',
    flexShrink: 1,
  },
});
