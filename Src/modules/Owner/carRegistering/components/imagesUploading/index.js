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
class imagesUploading extends Component {

    constructor(props) {
        super(props);
        this.state = {
            images: [],
            visible: false
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
        open = () => this.setState({visible: true});

      chooseImage = () => {
        ImagePicker.openPicker({
          width: 300,
          height: 400,
          cropping: true,
        })
          .then(image => {
            const images = [] = this.state.images.push(image.path)
            this.setState({images: images})
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
            const images = [] = this.state.images.push(image.path)
            this.setState({images: images})
          })
          .finally(this.close);
      };
    
    render() {

      const {carRegisterReducer} = this.props
      console.log('DATA DECODED => ' , carRegisterReducer)
        return (
            <View style = {style.container}>
                <TouchableOpacity
                style = {style.backArrow}
                onPress={() => {this.goBack()}}>
                <Icon style = {style.backArrowIcon} name = "arrow-left" />
                </TouchableOpacity>  
                
                <View>
                <Text style = {style.instruction}>Ajouter les images du véhicules 
                <Text style = {style.instructionSmall}> (Min: 3 | Max: 6)</Text>
                </Text>
                
                </View>

                    

                    <ScrollView
                    showsVerticalScrollIndicator={false}
                    showsHorizontalScrollIndicator={false}
                    >
                    <View style = {style.imageList}>
                    {this.state.images.map((url, key) => {

                    return (
                        <View style = {style.imageItem}>
                        
                                <Image
                                style={style.uploadImage}
                                source={{ uri: url}}
                                key = {key}
                                />
                            
                            <TouchableOpacity
                            onPress={() => {this.delete(url)}}
                            style = {style.deleteButton}
                            >
                            <Text style = {{color: color.white}}><Icon name = "times" /></Text>
                        </TouchableOpacity>
                        </View>


                        )
                    })}
                    </View>


                    {this.state.images.length <=5 && (<View style = {style.AddButtonArea}>
                        <TouchableOpacity
                        onPress={this.open}
                        style = {style.AddButton}
                        >
                        <Image 
                            source = {require('../../../../../assets/images/profile_icons/plus.png')}
                            resizeMode = "contain"
                            style = {{
                                width: 30,
                                height: 30,
                                tintColor: color.white
                            }}
                        />
                        </TouchableOpacity>
                    </View>)}
                    </ScrollView>
                    <View style = {style.FlatButton}>
                   {(this.state.images.length >2 && this.state.images.length<6)  && <CustomButton
                    
                        onPress={ () => {this.nextStep()}}
                        primary
                        title="Suivant"
                    />}
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