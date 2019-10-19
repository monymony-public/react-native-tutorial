import React from 'react';
import CounterList from './CounterList';
import {StyleSheet, Text, TouchableOpacity, View, ScrollView} from 'react-native';
import PropTypes from 'prop-types';

const App = ({counter, handleAddCounter, handleRemoveCounter, handleIncrement, handleDecrement}) => {
    return (
        <ScrollView style={styles.container}>
            <View style={styles.counterAddRemoveContainer}>
                <TouchableOpacity
                    style={styles.counterAddRemoveButton}
                    onPress={handleAddCounter}>
                    <Text
                        style={{textAlign: 'center', color: 'white', fontWeight: '700'}}>
                        Add Counter
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.counterAddRemoveButton}
                    onPress={handleRemoveCounter}>
                    <Text
                        style={{textAlign: 'center', color: 'white', fontWeight: '700'}}>
                        Remove Counter
                    </Text>
                </TouchableOpacity>
            </View>

            <View>
                <CounterList
                    counter={counter}
                    handleIncrement={handleIncrement}
                    handleDecrement={handleDecrement}
                />
            </View>
        </ScrollView>
    );
};

App.propTypes = {
    counter: PropTypes.arrayOf(PropTypes.shape({
        counterNum : PropTypes.number,
    })),
    handleIncrement : PropTypes.func,
    handleDecrement : PropTypes.func,
    handleAddCounter : PropTypes.func,
    handleRemoveCounter : PropTypes.func,
};

App.defaultProps = {
    counter : [],
    handleIncrement : () => console.warn('handleIncrement not defined'),
    handleDecrement : () => console.warn('handleDecrement not defined'),
    handleAddCounter : () => console.warn('handleAddCounter not defiend'),
    handleRemoveCounter : () => console.warn('handleRemoveCounter not defiend'),
}


const styles = StyleSheet.create({
    container: {
      flex: 1,
      width: '100%',
      backgroundColor: '#F6F6F6',
      paddingTop: '15%',
      paddingBottom : '15%',
    },
    counterAddRemoveContainer: {
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
    },
    counterAddRemoveButton: {
        margin: 10,
        padding: 10,
        flex: 1,
        backgroundColor: '#8041D9',
    },
});

export default App;
