import React, {Component} from 'react';
import AnimatedMultistep from "react-native-animated-multistep";
import barcodeScanning from './components/barcodeScanning';
import completedInformations from './components/completedInformations';
import imagesUploading from './components/imagesUploading';

const allSteps = [
  { name: "step 1", component: barcodeScanning },
  { name: "step 2", component: imagesUploading },
  { name: "step 3", component: completedInformations },
];
class  carRegistering extends Component {

   onNext = () => {
    console.log("Next");
  };

  /* define the method to be called when you go on back step */

   onBack = () => {
    console.log("Back");
  };

  /* define the method to be called when the wizard is finished */

   finish = finalState => {
    console.log(finalState);
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


export default carRegistering;