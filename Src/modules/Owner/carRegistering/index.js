import React, {Component} from 'react';
import AnimatedMultistep from "react-native-animated-multistep";
import { OWNERPROFILE } from '../../../common/rootNames';
import barcodeScanning from './components/barcodeScanning';
import caracteristicsAdd from './components/caracteristicsAdd';
import completedInformations from './components/completedInformations';
import dataCkecking from './components/dataCkecking';
import imagesUploading from './components/imagesUploading';
import summary from './components/summary';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as action from '../../../config/globalReducers/action';
const allSteps = [
  { name: "step 1", component: barcodeScanning },
  { name: "step 2", component: dataCkecking },
  { name: "step 3", component: caracteristicsAdd },
  { name: "step 4", component: imagesUploading },
  { name: "step 5", component: completedInformations }
];
class  carRegistering extends Component {

  constructor (props) {
    super(props);
  }

   onNext = () => {
    console.log("Next");
  };

  /* define the method to be called when you go on back step */

   onBack = () => {
    console.log("Back");
  };

  /* define the method to be called when the wizard is finished */

   finish = finalState => {
    this.props.setHide(false);
    this.props.navigation.navigate(OWNERPROFILE)
  };

 
  render () {
    return (

      <AnimatedMultistep
          steps={allSteps}
          onFinish={this.finish}
          onBack={this.onBack}
          onNext={this.onNext}
          comeInOnNext="bounceInUp"
          OutOnNext="bounceOutDown"
          comeInOnBack="bounceInDown"
          OutOnBack="bounceOutUp"
          duration = {10}
        />
      );
  }

}

const mapStateToProps = state => {
  return {...state}
  }
  
  const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
      ...action,
  }, dispatch);
  }
export default connect(mapStateToProps, mapDispatchToProps)( carRegistering );