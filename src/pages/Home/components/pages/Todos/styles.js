import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    alignItems: 'center',
    paddingBottom: 170,
  },
  adNews: {
    width: '95%',
    height: 200,
    backgroundColor: '#2e1458',
    borderRadius: 10,
    marginTop: 5,
    marginBottom: 20
  },
  containerBox: {
    width: '100%',
    height: 210,
    marginBottom: 20,
  },
  title: {
    color: '#fff',
    fontWeight: 'bold',
    fontStyle: 'italic',
    fontSize: 20,
    marginLeft: 10
  },
  contentBox: {
    width: '100%',
    height: 190,
    alignItems: 'center',
    flexDirection: 'row',
    overflow: 'hidden'
  },
  boxImage: {
    width: 140,
    height: 170,
    borderRadius: 10,
    marginLeft: 5,
    marginRight: 5,
  },
  image: {
    width: 140,
    height: 170,
    borderRadius: 10
  },
  boxCurso: {
    width: 220,
    height: 140,
    marginLeft: 5,
    marginRight: 5,
    borderRadius: 10
  },
  curso: {
    width: 220,
    height: 140,
    borderRadius: 10
  },
});

export default styles;