import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import Container from '../components/container';
import Header from '../components/header';
import Body from '../components/body';

const SobreNos = () => {
  return (
    <Container>
      <Header title={'Campanha do Kilo'} />
      <Body>
        <Text style={styles.title}>SOBRE NÓS</Text>
        <View style={styles.box}>
          <Text style={styles.sobreNs}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam ut
            posuere turpis, vitae luctus lacus Morbi sodales ultrices enim, a
            porttitor risus aliquam ac. Nullam dictum metus vel pharetra
            interdum. Donec eu lacus ac nisi suscipit hendrerit placerat ornare
            lectus. Nulla fringilla at nulla non varius. Cras pulvinar venenatis
            volutpat. Sed eu velit nec erat vulputate finibus quis at mi. Nullam
            quis ligula sed urna lacinia bibendum at in lectus. Proin quis
            semper est.
          </Text>
        </View>
      </Body>
    </Container>
  );
};

const styles = StyleSheet.create({
  title: { fontSize: 16, color: '#FE7277', textAlign: 'center', fontWeight: 900, lineHeight: 30, paddingTop: 20},
  box: { Width: '100%', borderWidth: 1, margin: 20, borderColor: '#FE7277' },
  sobreNs: {
    flex: 1,
    display: 'flex',
    textAlign: 'Justify',
    // fontWeight: '700',
    letterSpacing: 1,
    alignItems: 'center',
    fontSize: 16,
    width: '95%',
    height: 363,
    margin: 10,
  },
});

export default SobreNos;
