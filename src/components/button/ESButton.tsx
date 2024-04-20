import React from 'react';
import {Pressable, View} from 'react-native';
import {styles} from './esButton-styles';
import ESText from '../text/ESText';
import colors from '../../theme/colors';

interface IESButton {
  isPairButton?: boolean;
  values?: string[];
  primaryButtonColor?: string;
  handleButtonPress: () => void;
}

export const ESButton: React.FC<IESButton> = ({
  isPairButton = false,
  values = ['Cancel', 'Save'],
  primaryButtonColor = colors.primary,
  handleButtonPress,
}) => {
  const renderButton = (text: string, isSecondary = false) => (
    <Pressable
      style={[
        styles.button,
        isSecondary && styles.secondaryButton,
        {backgroundColor: isSecondary ? undefined : primaryButtonColor},
      ]}
      onPress={handleButtonPress}>
      <ESText style={isSecondary ? styles.secondaryTitle : styles.title}>
        {text}
      </ESText>
    </Pressable>
  );

  return (
    <View style={styles.buttonContainer}>
      {isPairButton ? (
        <>
          {renderButton(values[0], true)}
          {renderButton(values[1])}
        </>
      ) : (
        renderButton(values[0])
      )}
    </View>
  );
};

// export default ESButton;
