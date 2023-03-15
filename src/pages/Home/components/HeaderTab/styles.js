import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    width: '100%',
    backgroundColor: '#070012',
    paddingTop: 25,
    padding: 10
  },
  title: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 20,
    fontStyle: 'italic'
  },
  infoHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 50,
    marginBottom: 5
  },
  configUserButton: {
    height: 45,
    width: 45,
    borderRadius: 50,
    backgroundColor: '#fff',
    position: 'absolute',
    right: 0
  },
  barHeader: {
    height: 45,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    width: '100%',
  },
  selectText: {
    color: '#fff',
    fontWeight: '500',
    fontSize: 18,
  },
  selectButton: {
    backgroundColor: '#fff',
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10
  },
  logo: {
    height: 40,
    width: 70,
  }
});

export default styles;