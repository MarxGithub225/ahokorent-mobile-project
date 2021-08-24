import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as action from '../../actions';

import style from './style';
import { RNCamera } from 'react-native-camera';
import BarcodeMask from 'react-native-barcode-mask'
import Spinner from 'react-native-loading-spinner-overlay';
import CustomButton from '../../../../../common/components/customButton';

class barcodeScanning extends Component {
    constructor(props) {
        super(props);
        this.state = {
          barcode: '5N1AT2MT0KC773740',
          loading: false,
          show: false
        }
      }
      
      nextStep = () => {

        const { next } = this.props;
    
        // Go to next step
        next();
      };
    
     goBack = () =>{
        const { back } = this.props;
        // Go to previous step
        back();
      }

      onBarCodeRead = (scanResult) => {
        this.setState({loading: true})
        
        // this.props.fetchCarData ({vindata: 'AHTKK8CD100676394'})
        setTimeout(() => {
          this.setState({loading: false, show: true})

          
        }, 1000);
      }
      
      onGetItemPress = () => {
        // do something with button press
      }
      
      handleChange = () => {
        // handle user input
      }
      
  
      render () {
  
        
        return (
          <View style={style.root}>  
  
          <View style = {style.instruction}>
            <Text style = {style.instructionText}>Veuillez scanner le code-barres de votre carte grise</Text>
          </View>
  
          <View style={style.upperSection}>
            <RNCamera
                onBarCodeRead={this.onBarCodeRead}
                ref={ref => {
                  this.camera = ref;
                }}
                style={style.preview}
                type={RNCamera.Constants.Type.back}
                flashMode={RNCamera.Constants.FlashMode.on}
                captureAudio = {true}
              >
              <BarcodeMask
                  width={300} height={100} showAnimatedLine={false} outerMaskOpacity={0.8}
                />
            </RNCamera>
          </View>

          {this.state.show && <View style = {style.bottomSide}>
              <Text>Numéro de chassis : <Text style = {{fontWeight: 'bold'}}>{this.state.barcode}</Text> </Text>

              <CustomButton
                    
                        onPress={this.nextStep}
                        primary
                        title="Suivant"
                    />
          </View>}
  
          <Spinner
              visible={this.state.loading}
              textContent={'Chargement...'}
              textStyle={{ color: '#fff', fontFamily : 'CaviarDreams' }} />
        </View>
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
  
  export default connect(mapStateToProps, mapDispatchToProps)( barcodeScanning );