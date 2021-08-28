import React, { Component } from 'react';
import { Text, View, TouchableOpacity, Image, SafeAreaView} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import color from '../../../../../assets/themes/color';
import ImagePicker from 'react-native-image-crop-picker';
import Modal from 'react-native-modal';

import style from './style';
import { ScrollView } from 'react-native-gesture-handler';
import CustomButton from '../../../../../common/components/customButton';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as action from '../../actions';

import face from '../../../../../assets/images/carIcons/face.png';
import arriere from '../../../../../assets/images/carIcons/arriere.png';
import boot from '../../../../../assets/images/carIcons/boot2.png';
import interriorBack from '../../../../../assets/images/carIcons/interriorBack.png';
import interriorFront from '../../../../../assets/images/carIcons/interriorFront.png';
import profile from '../../../../../assets/images/carIcons/profile.png';


class imagesUploading extends Component {

    constructor(props) {
        super(props);
        this.state = {
            images: [],
            visible: false,
            forme : [
              {label: 'Face' , value: null, illustration: face},
              {label: 'Arrière' , value: null, illustration: arriere},
              {label: 'Profile' , value: null, illustration: profile},
              {label: 'Intérieur avant' , value: null, illustration: interriorFront},
              {label: 'Intérieur arrière' , value: null, illustration: interriorBack},
              {label: 'Coffre', value: null, illustration: boot}
            ], 
            selectedForm: null,
            isReady: false
        }
      }

      delete = (i) => {

          for(let [index,v] of this.state.images.entries()){
            if(i===v){
               this.state.images.splice(index,1);
               this.setState({images: this.state.images})
            }
          }
      }

      verif = () => {
        let error = false;

        this.state.forme.forEach(data => {
          if(!data.value) {
            error = true
          }
        })

        if(error) {
          return;
        }else {
          this.nextStep()
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

      
       close = () => this.setState({visible: false});
        open = (value) => this.setState({visible: true, selectedForm: value});

      chooseImage = () => {
        ImagePicker.openPicker({
          width: 300,
          height: 400,
          cropping: true,
        })
          .then(image => {

            for (let v of this.state.forme) {
              if(v.label === this.state.selectedForm) {
                v.value = image.path
              }
            }
            const state= this.state.forme;
            console.log(state)
            return;
            this.setState({forme: state})
          })
          .finally(this.close);
      };
    
      openCamera = () => {
        ImagePicker.openCamera({
          width: 300,
          height: 400,
          cropping: true,
        })
          .then(image => {

            for (let v of this.state.forme) {
              if(v.label === this.state.selectedForm) {
                v.value = image.path
              }
            }
            const state= this.state.forme;
            console.log(state)
            return;
            this.setState({forme: state})
          })
          .finally(this.close);
      };
    
    render() {

      const {carRegisterReducer} = this.props
        return (
            <View style = {style.container}>
                <TouchableOpacity
                style = {style.backArrow}
                onPress={() => {this.goBack()}}>
                <Icon style = {style.backArrowIcon} name = "arrow-left" />
                </TouchableOpacity>  
                
                <View>
                <Text style = {style.instruction}>Ajouter les images du véhicules 
                </Text>
                
                </View>

                    

                    <ScrollView
                    showsVerticalScrollIndicator={false}
                    showsHorizontalScrollIndicator={false}
                    >
                    <View style = {style.formList}>
                    {this.state.forme.map((form, key) => {

                    return (
                        <View style = {style.formItem}
                        key = {key}
                        >
                            <TouchableOpacity
                            style = {style.formItemButton}
                            onPress = {() => {this.open(form.label)}}
                            >
                                <Image
                                resizeMode = "contain"
                                style={[style.uploadImage, {borderRadius: 15}]}
                                source={form.value ? { uri: form.value}: form.illustration}
                                />

                                      {!form.value &&<Text style = {{color: color.danger, fontFamily: 'CaviarDreamsBold', fontSize: 20}}>{form.label}</Text>}
                            </TouchableOpacity>
                        </View>


                        )
                    })}
                    </View>


                    
                    </ScrollView>
                    <View style = {style.FlatButton}>
                    <TouchableOpacity
                    onPress={ () => {this.verif()}}
                    >
                    <CustomButton
                    
                    
                    primary
                    title="Suivant"
                />
                    </TouchableOpacity>
                    </View>

                    <Modal
                        isVisible={this.state.visible}
                        onBackButtonPress={this.close}
                        onBackdropPress={this.close}
                        style={{justifyContent: 'flex-end', margin: 0}}>
                        <SafeAreaView style={style.options}>
                        <TouchableOpacity style={style.option} onPress={this.chooseImage}>
                        <Image
                        style={style.avatar}
                        {...this.props}
                        source={require('../../../../../assets/images/icons/image-gallery.png')}
                        />
                            <Text style = {style.itemText}>Galérie </Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={style.option} onPress={this.openCamera}>
                        <Image
                        style={style.avatar}
                        {...this.props}
                        source={require('../../../../../assets/images/icons/photo-camera.png')}
                        />
                            <Text style = {style.itemText}>Caméa</Text>
                        </TouchableOpacity>
                        </SafeAreaView>
                    </Modal>
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
  
  export default connect(mapStateToProps, mapDispatchToProps)( imagesUploading );