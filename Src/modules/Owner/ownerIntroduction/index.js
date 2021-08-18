import React, { useEffect } from 'react';
import {
    View} from 'react-native';

import AnimatedMultistep from "react-native-animated-multistep";

import { connect } from 'react-redux';

import style from './style';
import Confirmation from '../../../commonModules/Confirmation';
import OwnerRules from './components/OwnerRules';
  
const allSteps = [
  { name: "step 1", component: Confirmation },
  { name: "step 2", component: OwnerRules }
];

const ownerIntroduction = (props) => {

      const onNext = () => {
        console.log("Next");
      };

      /* define the method to be called when you go on back step */

      const onBack = () => {
        console.log("Back");
      };

      /* define the method to be called when the wizard is finished */

      const finish = finalState => {
        console.log(finalState);
      };

      
      return (

        <View style = {style.container}>
            
            <AnimatedMultistep
            steps={allSteps}
            onFinish={finish}
            onBack={onBack}
            onNext={onNext}
            comeInOnNext="bounceInUp"
            OutOnNext="bounceOutDown"
            comeInOnBack="bounceInDown"
            OutOnBack="bounceOutUp"
            duration = {10}
          />

        </View>
        );

   
}

const mapStateToProps = state => {
  return {...state}
}

export default connect(mapStateToProps)( ownerIntroduction);