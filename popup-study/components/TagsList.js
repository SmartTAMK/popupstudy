import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

import TagCard from './TagCard';

export default class TagsList extends React.Component {
  render() {
    const { tags } = this.props;
    return (
      <View style={styles.container}>
        {tags.map((tag, idx) => (
          <View
            key={tag}
            style={idx !== tags.length - 1 && styles.tagIntersperse}
          >
            <TagCard tag={tag} />
          </View>
        ))}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#fff',
  },
  tagIntersperse: {
    paddingRight: 5,
  },
});
