/*
 * @flow
 */
import ColorPropType from 'ColorPropType'
import React, { Component } from 'react'
import {
  Platform,
  StyleSheet,
  Text,
  TouchableNativeFeedback,
  TouchableOpacity,
  View
} from 'react-native'

const invariant = require('fbjs/lib/invariant');

/* Example usage:
 *
 * ```
 * <Button
 *   onPress={onPressLearnMore}
 *   title="Learn More"
 *   color="#841584"
 *   accessibilityLabel="Learn more about this purple button"
 * />
 * ```
 *
 */

class Button extends Component {

  props: {
    title: string,
    onPress: () => any,
    color?: ?string,
    accessibilityLabel?: ?string,
    disabled?: ?boolean,
    backgroundColor?: ?string
  };

  static propTypes = {
    /**
     * Text to display inside the button
     */
    title: React.PropTypes.string.isRequired,
    /**
     * Text to display for blindness accessibility features
     */
    accessibilityLabel: React.PropTypes.string,
    /**
     * Color of the text
     */
    color: ColorPropType,
    /**
     * Color of the background
     */
    backgroundColor: ColorPropType,
    /**
     * If true, disable all interactions for this component.
     */
    disabled: React.PropTypes.bool,
    /**
     * Handler to be called when the user taps the button
     */
    onPress: React.PropTypes.func.isRequired,
  };

  render() {
    const {
      accessibilityLabel,
      backgroundColor,
      color,
      onPress,
      title,
      disabled,
    } = this.props;
    const buttonStyles = [styles.button];
    const textStyles = [styles.text];
    const Touchable = Platform.OS === 'android' ? TouchableNativeFeedback : TouchableOpacity;
    if (color) {
      textStyles.push({color: color});
    }
    if (backgroundColor) {
      buttonStyles.push({backgroundColor: backgroundColor});
    }
    if (disabled) {
      buttonStyles.push(styles.buttonDisabled);
      textStyles.push(styles.textDisabled);
    }
    invariant(
      typeof title === 'string',
      'The title prop of a Button must be a string',
    );

    return (
      <Touchable
        accessibilityComponentType='button'
        accessibilityLabel={accessibilityLabel}
        accessibilityTraits={['button']}
        disabled={disabled}
        onPress={onPress}>
        <View style={buttonStyles}>
          <Text style={textStyles}>{title}</Text>
        </View>
      </Touchable>
    );
  }
}

// Material design blue from https://material.google.com/style/color.html#color-color-palette
let defaultBlue = '#2196F3';
if (Platform.OS === 'ios') {
  // Measured default tintColor from iOS 10
  defaultBlue = '#0C42FD';
}

const styles = StyleSheet.create({
  button: {
    height: 44,
    elevation: 4,
    backgroundColor: defaultBlue,
    borderRadius: 2,
    justifyContent: 'center',
    alignItems: 'center'
  },
  text: {
    textAlign: 'center',
    color: 'white',
    padding: 8,
    fontWeight: '500',
  },
  buttonDisabled: Platform.select({
    ios: {},
    android: {
      elevation: 0,
      backgroundColor: '#dfdfdf',
    }
  }),
  textDisabled: Platform.select({
    ios: {
      color: '#cdcdcd',
    },
    android: {
      color: '#a1a1a1',
    }
  }),
});

module.exports = Button;
