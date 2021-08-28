import React, { Component } from 'react';
import { Text, View, Image, TouchableOpacity } from 'react-native';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as action from '../../actions';

import style from './style';
import { RNCamera } from 'react-native-camera';
import BarcodeMask from 'react-native-barcode-mask'
import Spinner from 'react-native-loading-spinner-overlay';
import CustomButton from '../../../../../common/components/customButton';

import BarIcon from '../../../../../assets/images/barreCode.png'
import TypingIcon from '../../../../../assets/images/typing.png'
import Maticon from 'react-native-vector-icons/MaterialIcons';
import color from '../../../../../assets/themes/color';

import Input from '../../../../../common/components/input';

import Icon from 'react-native-vector-icons/FontAwesome5';
// touch-app
class barcodeScanning extends Component {
    constructor(props) {
        super(props);
        this.camera = null;
        this.barcodeCodes = [];
        this.state = {
          barcode: '5N1AT2MT0KC773740',
          loading: false,
          show: false,
          type: undefined,
          isBarcodeScannerEnabled: true,
          camera: {
            type: RNCamera.Constants.Type.back,
            flashMode: RNCamera.Constants.FlashMode.auto,
          }
        }

      }
      
      nextStep = () => {
        console.log('okk');
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

        if (this.state.isBarcodeScannerEnabled) {
          this.setState({loading: true, isBarcodeScannerEnabled: false})
          this.props.fetchCarData ({vindata: 'AHTKK8CD100676394'});
          
          setTimeout(() => {
            this.setState({loading: false, show: true})
            this.nextStep();
          }, 2000);
        }
      }
      
      onGetItemPress = () => {
        // do something with button press
      }
      
      handleChange = () => {
        // handle user input
      }
      

      onBarCodeRead(scanResult) {
        console.warn(scanResult.type);
        console.warn(scanResult.data);
        if (scanResult.data != null) {
      if (!this.barcodeCodes.includes(scanResult.data)) {
        this.barcodeCodes.push(scanResult.data);
        console.warn('onBarCodeRead call');
      }
        }
        return;
      }
    
      async takePicture() {
        if (this.camera) {
          const options = { quality: 0.5, base64: true };
          const data = await this.camera.takePictureAsync(options);
          console.log(data.uri);
        }
      }

  

      pendingView() {
        return (
          <View
            style={{
              flex: 1,
              backgroundColor: 'lightgreen',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <Text>Waiting</Text>
          </View>
        );
      }
      
      componentDidMount () { 
        this.setState({type: undefined})
      }
      render () {
  
        
        return (
          <View style={style.root}>  
  
          {!this.state.type && <View style = {style.choice}
          >

            <TouchableOpacity style = {style.choiceItem}
            onPress = {() => {this.setState({type: 1})}}
            >
              <Text><Maticon style = {style.touch} name ='touch-app' color = {color.grey} /></Text>
              <Image
              source = {BarIcon}
              resizeMode = 'contain'
              style = {{
                width: 150
              }}
              />
            
            <CustomButton
            style = {{...wrapper}}
                      onPress={() => {console.log('Not')}} 
                      primary
                      title="Scanner  le code  barre  sur la  carte  grise"
                      />
            </TouchableOpacity>

            <TouchableOpacity style = {style.choiceItem2}
            onPress = {() => {this.setState({type: 2})}}
            >
            <Text><Maticon style = {style.touch} name ='touch-app'  color = {color.grey}/></Text>
              <Image
              source = {TypingIcon}
              resizeMode = 'contain'
              style = {{
                width: 150
              }}
              />
            
            <CustomButton
            style = {{...wrapper}}
                      onPress={() => {console.log('Not')}} 
                      danger
                      title="Saisir le numéro de chassis sur la carte grise"
                      />
            </TouchableOpacity>
            
            
          </View>}
  
          {(this.state.type && this.state.type === 1) && (<View style={style.upperSection}>
            <RNCamera
            ref={ref => {
              this.camera = ref;
            }}
            defaultTouchToFocus
            flashMode={this.state.camera.flashMode}
            mirrorImage={false}
            onBarCodeRead={this.onBarCodeRead.bind(this)}
            onFocusChanged={() => {}}
            onZoomChanged={() => {}}
            androidCameraPermissionOptions={{
              title: 'Permission to use camera',
              message: 'We need your permission to use your camera',
              buttonPositive: 'Ok',
              buttonNegative: 'Cancel',
            }}
            androidRecordAudioPermissionOptions={{
              title: 'Permission to use audio recording',
              message: 'We need your permission to use your audio',
              buttonPositive: 'Ok',
              buttonNegative: 'Cancel',
            }}
            style={style.preview}
            type={this.state.camera.type}
        >

                 <BarcodeMask
                  width={300} height={100} showAnimatedLine={false} outerMaskOpacity={0.8}
                />
                </RNCamera>
            
              <View style={[style.overlay, style.bottomOverlay]}>

                <TouchableOpacity style = {style.choiceItem1}
              onPress = {() => {this.setState({type: 2})}}
              >
              <Maticon style = {[style.touch, {elevation: 10}]} name ='touch-app'  color = {color.grey}/>
              
              <CustomButton
              style = {{...wrapper}}
                        onPress={() => {console.log('Not')}} 
                        danger
                        title="Ou Saisir le numéro de chassis"
                        />
              </TouchableOpacity>
            
              </View>
          </View>)}

  

          {(this.state.type && this.state.type === 2) && (<View style={style.upperSection2}>
            <View style = {style.instruction}>
              <Text style = {style.instructionText}>
                Veuillez entrer le numéro de chassis
              </Text>
            </View>
            <View style={style.form}>
                <Input
                    placeholder="Numéro de chassis *"
                    labelColor = {style.labelColor}
                    iconPosition="right"
                    value={null}
                    // onChangeText={(value) => {
                    //     setLastName(value)
                    // }}

                    leftIcon={
                        <Text>
                            <Icon  name = "user" style = {{color: color.grey, fontSize: 15}}/>
                        </Text>
                        
                    }
                  />

                <CustomButton
                  
                    primary
                    title="Valider"
                /> 
                </View>

                <View style={[style.overlay, style.bottomOverlay]}>

                    <TouchableOpacity style = {style.choiceItem1}
                    onPress = {() => {this.setState({type: 1})}}
                    >
                    <Maticon style = {[style.touch, {elevation: 10}]} name ='touch-app'  color = {color.danger}/>
                  
                          <CustomButton
                          style = {{...wrapper}}
                                    onPress={() => {console.log('Not')}} 
                            primary
                            title="Ou Scanner le code barre"
                            />
                    </TouchableOpacity>
              
                </View>
          </View>)}


          <Spinner
              visible={this.state.loading}
              textContent={'Chargement...'}
              textStyle={{ color: '#fff', fontFamily : 'CaviarDreams' }} />
        </View>
        );
      }
  
  }
  
  const wrapper = {
    padding: 0,
    marginVertical: 0,
    borderRadius: 0,
    width: '100%'
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