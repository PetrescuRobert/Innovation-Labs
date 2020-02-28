import React, { Component } from 'react';
import { Dimensions, Image} from 'react-native';
import { Container, Header, View, DeckSwiper, Card, CardItem, Thumbnail, Text, Left, Body, Icon, Title } from 'native-base';

import SlidingUpPanel from 'rn-sliding-up-panel';
import GestureRecognizer, {swipeDirections} from 'react-native-swipe-gestures';

const {height} = Dimensions.get('window');


const cards = [
  {
    text: 'Pub 18',
    location: 'Regie',
    image: require('../assets/taietorul-de-lemne-wide.jpg'),
    imageSmall: require('../assets/pub18_small.jpeg')
  },
  {
    text: 'Pub 18',
    location: 'Regie',
    image: require('../assets/maria_si_ion.jpg'),
    imageSmall: require('../assets/maria_si_ion_profile.png')
  }
];

const styles = {
  container: {
    flex: 1,
    backgroundColor: '#f8f9fa',
    alignItems: 'center',
    justifyContent: 'center'
  },
  panel: {
    flex: 1,
    backgroundColor: 'white',
    position: 'relative'
  },
  panelHeader: {
    height: 120,
    backgroundColor: '#b197fc',
    alignItems: 'center',
    justifyContent: 'center'
  },
  favoriteIcon: {
    position: 'absolute',
    top: -24,
    right: 24,
    backgroundColor: '#2b8a3e',
    width: 48,
    height: 48,
    padding: 8,
    borderRadius: 24,
    zIndex: 1
  }
}

export default class Recommandation extends Component {
  render() {
    return (
      <Container>
        <Header> 
            <Body>
            <Title>OutGoing</Title>
            </Body>
        </Header>
        <View>
          <DeckSwiper
            dataSource={cards}
            renderItem={item =>
              <Card style={{ elevation: 3 }}>
                <CardItem>
                  <Left>
                    <Thumbnail source={item.imageSmall} />
                    <Body>
                      <Text>{item.text}</Text>
                      <Text note>{item.location}</Text>
                    </Body>
                  </Left>
                </CardItem>
                <CardItem cardBody>
                  <Image style={{ height: 400, flex: 1 }} source={item.image} />
                </CardItem>
                <CardItem>
                  <Icon name="chatbubbles" style={{ color: 'blue' }} />
                  <Text>Reviews</Text>
                </CardItem>
              </Card>
            }
          />
        </View>
        <SlidingUpPanel
          ref={c => (this._panel = c)}
          draggableRange={{top: height, bottom: 120}}
          animatedValue={this._draggedValue}
          showBackdrop={false}>
          <View style={styles.panel}>
            <View style={styles.panelHeader}>
              <Text style={{color: '#FFF'}}>SwipeUp for more</Text>
            </View>
            <View style={styles.container}>
              <Text>SwipeUp for more</Text>
            </View>
          </View>
        </SlidingUpPanel>
        
      </Container>
    );
  }
}