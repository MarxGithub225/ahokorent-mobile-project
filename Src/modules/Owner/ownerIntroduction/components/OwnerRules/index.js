import { useNavigation } from '@react-navigation/native';
import React, { Component } from 'react';
import { ScrollView, Text, View, BackHandler} from 'react-native';

import CustomButton from '../../../../../common/components/customButton';


import {LOGIN, WELCOME} from '../../../../../common/rootNames';
import style from './style';

const  OwnerRules = (props) => {

    const {navigate} = useNavigation();

      
      

      return (
        <View style = {style.container}>
          <Text style = {style.bigText}>Welcome page</Text>   
          
          <ScrollView>
          <Text style = {style.cguText}>
            <Text style = {style.cguTitle}> The standard Lorem Ipsum passage, used since the 1500s </Text>
          The standard Lorem Ipsum passage, used since the 1500s
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
          </Text>
          
          <Text style = {style.cguText}>
            <Text style = {style.cguTitle}> The standard Lorem Ipsum passage, used since the 1500s </Text>
          The standard Lorem Ipsum passage, used since the 1500s
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
          </Text>

          <Text style = {style.cguText}>
            <Text style = {style.cguTitle}> The standard Lorem Ipsum passage, used since the 1500s </Text>
          The standard Lorem Ipsum passage, used since the 1500s
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
          </Text>

          <Text style = {style.cguText}>
            <Text style = {style.cguTitle}> The standard Lorem Ipsum passage, used since the 1500s </Text>
          The standard Lorem Ipsum passage, used since the 1500s
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
          </Text>


          <Text style = {style.cguText}>
            <Text style = {style.cguTitle}> The standard Lorem Ipsum passage, used since the 1500s </Text>
          The standard Lorem Ipsum passage, used since the 1500s
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
          </Text>


          <Text style = {style.cguText}>
            <Text style = {style.cguTitle}> The standard Lorem Ipsum passage, used since the 1500s </Text>
          The standard Lorem Ipsum passage, used since the 1500s
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
          </Text>

          <Text style = {style.cguText}>
            <Text style = {style.cguTitle}> The standard Lorem Ipsum passage, used since the 1500s </Text>
          The standard Lorem Ipsum passage, used since the 1500s
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
          </Text>

          </ScrollView>


          <View style = {style.FlatButton}>
                <CustomButton
                  onPress={() =>{navigate(LOGIN)}}
                  white
                  title="Commencer"
                />

                
            </View>
        </View>
      );
}

export default OwnerRules;