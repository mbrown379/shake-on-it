import React from 'react';
import {View, StyleSheet, Text, Image} from 'react-native';
import {windowHeight, windowWidth} from '../utils/Dimensions';

import AntDesign from 'react-native-vector-icons/AntDesign';

import {Card, ListItem, Button, Icon} from 'react-native-elements';

// const bet =
//   {
//      name: 'This is the first bet',
//      users: [
//        {
//          username: "griffindominguez",
//          payout: 129
//        },
//        {
//          username: "matthewbrown",
//          payout: 121
//        }
//      ]
//   }

const BetCard = props => {
  return (
    <Card>
      <Card.Title>{props.name}</Card.Title>
      <Card.Divider />
      {bet.users.map((u, i) => {
        return (
          <View key={i}>
            <Text>
              {u.username} {u.payout}
            </Text>
          </View>
        );
      })}
    </Card>
  );
};

export default BetCard;
