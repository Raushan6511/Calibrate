import React from 'react';
import {Pressable, View} from 'react-native';
import {styles} from './esButton-styles';
import ESText from '../text/ESText';
import colors from '../../theme/colors';

interface IESButton {
  isPairButton?: boolean;
  values?: string[];
  primaryButtonColor?: string;
}

export const ESButton: React.FC<IESButton> = ({
  isPairButton = false,
  values = ['Cancel', 'Save'],
  primaryButtonColor = colors.primary,
}) => {
  const renderButton = (text: string, isSecondary = false) => (
    <Pressable
      style={[
        styles.button,
        isSecondary && styles.secondaryButton,
        {backgroundColor: isSecondary ? undefined : primaryButtonColor},
      ]}>
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
        renderButton(values[1])
      )}
    </View>
  );
};

// export default ESButton;
