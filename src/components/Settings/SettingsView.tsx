import { useTheme } from '@react-navigation/native';
import React, { FC, useState } from 'react';
import {
  ScrollView,
  Switch,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import { useDispatch } from 'react-redux';
import { COLOR } from '../../constants';
import { userAction } from '../../store/actions/UserAction';

import { ThemeTypes } from '../../theme/type';
import { Button } from '../Button';
import { EditIcon } from '../Icons/EditIcon';
import { styles } from './style';
import { SettingsViewType } from './type';

export const SettingsView: FC<SettingsViewType> = (props) => {
  const { theme, toggleSwitch, userName } = props;

  const { colors }: ThemeTypes = useTheme();
  const [isEdit, setEdit] = useState(false);
  const [name, setName] = useState(userName);
  const dispatch = useDispatch();

  const themeColors = {
    backgroundColor: colors.text,
    borderColor: colors.background,
    color: colors.btnBackground,
  };

  return (
    <View style={styles.container}>
      <View style={styles.switchContainer}>
        <Text style={{ ...styles.title, color: colors.text }}>
          {'Color theme '}
          <Text style={styles.comment}>{theme ? '( Dark )' : '( Light )'}</Text>
        </Text>
        <Switch
          trackColor={{ false: COLOR.LIGHT_PRIMARY, true: COLOR.DARK_PRIMARY }}
          thumbColor={theme ? COLOR.DARK_BTN : COLOR.LIGHT_TEXT}
          onValueChange={(value) => toggleSwitch(value)}
          value={theme}
        />
      </View>

      <View>
        <Text style={{ ...styles.title, color: colors.text }}>
          {'Username:'}
        </Text>
        {isEdit ? (
          <ScrollView keyboardShouldPersistTaps="handled" scrollEnabled={false}>
            <View style={styles.editNameContainer}>
              <TextInput
                onChangeText={(e: string) => setName(e)}
                defaultValue={userName}
                style={{ ...styles.input, ...themeColors }}
              />
              <Button
                title={'OK'}
                onPress={() => {
                  setEdit(false);
                  dispatch(userAction(name));
                }}
              />
            </View>
          </ScrollView>
        ) : (
          <View style={styles.userNameContainer}>
            <Text style={{ ...styles.comment, color: colors.text }}>
              {userName}
            </Text>
            <EditIcon onPress={() => setEdit(true)} />
          </View>
        )}
      </View>
    </View>
  );
};
