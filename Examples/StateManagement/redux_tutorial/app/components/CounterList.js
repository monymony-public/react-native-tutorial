import React from 'react';
import Counter from './Counter';
import {StyleSheet, View} from 'react-native';
import PropTypes from 'prop-types';

const CounterList = ({counter, handleAddCounter, handleRemoveCounter, handleIncrement, handleDecrement}) => {
    const counterModule = counter.map((item, index) => (
            <Counter
                key={index}
                index={index}
                value={item}
                handleIncrement={handleIncrement}
                handleDecrement={handleDecrement}
            />
      ));

    return (
        <View style={styles.counterFrame}>
            {counterModule}
        </View>
    );
};

CounterList.propTypes = {
    counter: PropTypes.array,
    handleIncrement : PropTypes.func,
    handleDecrement : PropTypes.func,
    handleAddCounter : PropTypes.func,
    handleRemoveCounter : PropTypes.func,
};

CounterList.defaultProps = {
    counter : [],
    handleIncrement : () => console.warn('handleIncrement not defined'),
    handleDecrement : () => console.warn('handleDecrement not defined'),
    handleAddCounter : () => console.warn('handleAddCounter not defiend'),
    handleRemoveCounter : () => console.warn('handleRemoveCounter not defiend'),
};

const styles = StyleSheet.create({
    counterFrame: {
        padding: 10,
    },
});

export default CounterList;