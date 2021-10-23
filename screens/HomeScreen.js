import React from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';

import BetCard from '../components/BetCard';

const betsList = [
    {
        id: 1,
        name: 'This is the first bet',
        users: [
          {
            username: "griffindominguez",
            payout: 129
          },
          {
            username: "matthewbrown",
            payout: 121
          }
        ]
     }
]

const styles = StyleSheet.create({
  container: {
   flex: 1,
   paddingTop: 22
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },
});

const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <FlatList
        data={this.betsList}
        renderItem={({item})=>
            <BetCard props={item}>
            </BetCard>
        }
        keyExtractor={item=item.id}
      />
    </View>
  );
}

export default HomeScreen;