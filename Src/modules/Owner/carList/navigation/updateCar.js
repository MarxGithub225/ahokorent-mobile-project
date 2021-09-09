import React, { useState, useEffect } from 'react'
import { View, Text, ScrollView, TouchableOpacity, Image, SafeAreaView } from 'react-native';


import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as action from '../actions';
import * as globalAction from '../../../../config/globalReducers/action'

import Input from '../../../../common/components/input';

import Icon from 'react-native-vector-icons/FontAwesome5';
import color from '../../../../assets/themes/color';
import CustomButton from '../../../../common/components/customButton';
import SnackBar from 'rn-snackbar';
import Spinner from 'react-native-loading-spinner-overlay';
import validator from 'validator';
import InfoText from '../components/InfoText';
import AsyncStorage from '@react-native-community/async-storage';

import ImagePicker from 'react-native-image-crop-picker';
import Modal from 'react-native-modal';
import style from './style';

import http from "../../../..//config/baseUrl";
import { RadioButton, Button } from 'react-native-paper';
import { DatePickerModal } from 'react-native-paper-dates';
import Textarea from 'react-native-textarea';
import ImgToBase64 from 'react-native-image-base64';
import moment from 'moment';
import MatIcon from 'react-native-vector-icons/MaterialCommunityIcons';

const init =
 [
    {label: 'Face' , value: null},
    {label: 'Arrière' , value: null},
    {label: 'Profile' , value: null},
    {label: 'Intérieur avant' , value: null},
    {label: 'Intérieur arrière' , value: null},
    {label: 'Coffre', value: null}
]
const UpdateCar =  (props) => {

    const {selected} = props.carListReducer;
    const {current_user} = props.globalReducer;
    
    
    const [forme, setForme] = useState([])
    const [images, setImages] = useState([])
    const [visible, setVisible] = useState(false)
    const [selectedForm, setSelectForm] = useState(null)
    const [isReady, setReady] = useState(false)

    const [checked, setChecked] = useState('noDelay');
    const [range, setRange] = useState({
      startDate: Date | selected.RentingSart,
      endDate: Date | selected.RentingEnd
    });
    const [openM, setOpen] = useState(false);
    const [modalVisible, setModalVisible] = useState(false);
    const [driver, setDriver] = useState(selected.IsDriver === '0' ? 'no' : 'yes');
    const [inputData, setInputData] = useState({
      CoutJour: selected.facture.PrixProprio,
      Gain: selected.facture.RevenuProprio,
      Description: selected.Description,
      PrixProprio : selected.facture.PrixProprio,
      ComissionAhoko : selected.facture.CommissionAhoko,
      Tva : selected.facture.Tva,
      Tdt : selected.facture.Tdt,
      Ardsi : selected.facture.Ardsi,
      PrixAfficher : selected.facture.PrixAfficher,
      BeneficeAhoko: selected.facture.BeneficeAhoko,
      IsDriver : selected.IsDriver
    });


    const onDismiss = () => {
      if(!range.startDate) {
        setChecked ('noDelay')
      }
      setOpen(false)
    }
  
    const onConfirm = ({ startDate, endDate }) => {
      if(!range.startDate) {
        setChecked ('noDelay')
      }
      setOpen(false)
      setRange({startDate: startDate, endDate: endDate})
    }

    const onOpen = () => {
      setModalVisible(true)
    }

    const onClose = () => {
      setModalVisible(false)
    }

    const getDataUrl = (img, id) => { 
      
      ImgToBase64.getBase64String(img)
        .then((base64String) => {
          returnValue(base64String, id)
        })
        .catch(err => {console.log(err); return img});

    }


    const returnValue = (string, id) => {
      if(images.length === 0) {
        images.push({
          value : `${string}` ,
          id : id
        })
        const state = images
        setImages(state) ;
        return;
      }

      for (let v of images) {
        if(v.id === id) {
          v.value = `${string}`
        }else {
          images.push({
            value : `${string}` ,
            id : id
          })
        }
      }
      const state = images
      setImages(state) ;
    }


    const calculate = (cout) => {
        
      let CoutJour = Number(cout);
      let ComissionAhoko = Number(CoutJour * 0.1);
      let Tva = Number(ComissionAhoko * 0.18);
      let Tdt = Number(ComissionAhoko * 0.015);
      let PrixAfficher = Number(CoutJour + ComissionAhoko + Tva + Tdt);
      let Ardsi = Number (CoutJour * 0.05);
      let Gain = Number (CoutJour - (Ardsi + ComissionAhoko));
      let BeneficeAhoko = Number (ComissionAhoko * 2);

      setInputData({
        CoutJour: CoutJour,
        Gain : Gain.toString(),
        ComissionAhoko : ComissionAhoko,
        Tva : Tva,
        Tdt : Tdt,
        Ardsi : Ardsi,
        PrixAfficher : PrixAfficher,
        BeneficeAhoko : BeneficeAhoko,
      })
    }

    const convertDate = (date) => {
      return (new Date(date).getTime())
    }

    const longToDate = (millisec) => {
      moment.locale('fr');
        return moment((new Date(millisec).toUTCString())).format('ll');
    }

    const updateImages = () => {

      
      const data = [];

      forme.forEach(f => {
        images.forEach(i => {
          if(i.id === f.id) {
            data.push({value: i.value, modified : 1, id : f.id})
          }else {
            data.push({value: f.value.split(http).join(""), modified : 0, id : f.id})
          }
        })
      })

      props.updateImage({images: data}, props)
      
    };


    const close = () =>setVisible(false);
    const open = (value) => {setVisible(true); setSelectForm(value)};

  const chooseImage = () => {
    ImagePicker.openPicker({
      idth: 1200, // Add this 
      height: 1500, // Add this
      cropping: true,
      cropperStatusBarColor: 'white',
      cropperToolbarColor: 'white',
      cropperActiveWidgetColor: 'white',
      cropperToolbarWidgetColor: color.primary,
      freeStyleCropEnabled: true,
      compressImageQuality: 1
    })
      .then(image => {

        for (let v of forme) {
          if(v.label === selectedForm) {
            v.value = image.path 

            getDataUrl(image.path, v.id)
          }
        }
        const state = forme
         setForme(state);
      })
      .finally(close);
  };

  const openCamera = () => {
    ImagePicker.openCamera({
      width: 1200, // Add this 
      height: 1500, // Add this
      cropping: true,
      cropperStatusBarColor: 'white', 
      cropperToolbarColor: 'white',
      cropperActiveWidgetColor: 'white',
      cropperToolbarWidgetColor: color.primary,
      freeStyleCropEnabled: true,
      mediaType: 'photo',
      compressImageQuality: 1
    })
      .then(image => {

        for (let v of forme) {
          if(v.label === selectedForm) {
            v.value = image.path 
            getDataUrl(image.path, v.id)
          }
        }
        const state = forme
         setForme(state);
      })
      .finally(close);
  };

  
  useEffect(() => {
    calculate(selected.facture.PrixProprio)
    setInputData({
      CoutJour: selected.facture.PrixProprio,
      Gain: selected.facture.RevenuProprio,
      Description: selected.Description,
      PrixProprio : selected.facture.PrixProprio,
      ComissionAhoko : selected.facture.CommissionAhoko,
      Tva : selected.facture.Tva,
      Tdt : selected.facture.Tdt,
      Ardsi : selected.facture.Ardsi,
      PrixAfficher : selected.facture.PrixAfficher,
      BeneficeAhoko: selected.facture.BeneficeAhoko,
    })
  }, [])

  useEffect(() => {
    init.forEach((it, i) => {
      selected.images.forEach((img, index) => {
        if(i === index) {
          it.value = http + img.link,
          it.id = img.id 
        }
      })
    })

    setForme(init)
  }, [forme])
    const {carListReducer} = props;
    return (
        <ScrollView style={style.container}
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false} 
        >

            <TouchableOpacity
                    style = {style.backArrow}
                    onPress={() => {props.navigation.goBack()}}>
            <Icon style = {style.backArrowIcon} name = "arrow-left" />
          </TouchableOpacity> 

            <Text style = {style.loginInstruction}>MODIFIER LE VEHICULE</Text>
    
            <InfoText text="Modifier les images" />
            <View style = {style.formList}>
                    {forme.map((form, key) => {

            return (
                <View style = {style.formItem}
                key = {key}
                >
                    <TouchableOpacity
                    style = {style.formItemButton}
                    onPress = {() => {open(form.label)}}
                    >
                        <Image
                        resizeMode = "contain" 
                        style={[style.uploadImage, {borderRadius: 15}]}
                        source={{ uri: form.value}}
                        />

                    <Text style = {{color: color.danger, fontFamily: 'CaviarDreamsBold', fontSize: 10}}>{form.label}</Text>
                    </TouchableOpacity>
                </View>


                )
            })}

        
            </View>

            <View style = {[style.FlatButton, {marginBottom: 100}]}>
              <TouchableOpacity
              onPress = {() => {updateImages()}}
              >
              <CustomButton
            
                primary
                title="Enregister"
              />
              </TouchableOpacity>
            </View>
            <InfoText  text="Modifier les informations" />
            <View style={style.form}>

              <Text style = {style.label}>Coût journalier de location</Text>
              <Input
                placeholder="Coût journalier de location *"
                labelColor = {style.labelColor}
                iconPosition="right"
                value={inputData.CoutJour}
                onChangeText={(value) => {calculate(value)}}
                keyboardType={Platform.OS === 'ios' ? 'number-pad' : 'numeric'}
                leftIcon={
                  <Text>
                      <Icon  name = "money-bill" style = {{color: color.grey, fontSize: 15}}/>
                  </Text>
                  
                }
              />

              {inputData.Gain && <View >
                <Text style = {style.label}>Votre revenu</Text>
                  <Input
                    placeholder="Votre revenu"
                    editable = {false}
                    labelColor = {style.labelColor}
                    iconPosition="right"
                    value={inputData.Gain}
                    onChangeText={(value) => {console.log(value)}}
                    keyboardType={Platform.OS === 'ios' ? 'number-pad' : 'numeric'}
                    leftIcon={
                      <Text>
                          <MatIcon  name = "handshake" style = {{color: color.grey, fontSize: 15}}/>
                      </Text> 
                      
                    }
                  />
            <Text style = {style.explain}>Votre revenu = 85% du coût journalier</Text>
            <Text style = {style.explain2}>10% Commission Ahoko + 5% Taxe ARDSI <Text style = {{color: color.primary}}>(Voir la loi)</Text></Text>
            </View>}
            <View style = {{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginVertical: 25}}>
            <View style = {{justifyContent: 'center', alignItems: 'center'}}>
              <RadioButton
              color = {color.primary}
              uncheckedColor = {color.grey}
              value="noDelay"
              status={ !range.startDate || checked === 'noDelay' ? 'checked' : 'unchecked' }
              onPress={() => setChecked('noDelay')}
              />
              <Text style = {{fontFamily : 'CaviarDreamsBold',}}>Location continue</Text>
            </View>
            <View style = {{justifyContent: 'center', alignItems: 'center'}}>
          <RadioButton
          color = {color.primary}
          uncheckedColor = {color.grey}
              value="delay"
              status={ range.endDate || checked === 'delay' ? 'checked' : 'unchecked' }
              onPress={() => {setChecked('delay') ; setOpen(true)}}
          />
        <Text style = {{fontFamily : 'CaviarDreamsBold',}}>Location périodique</Text>
        </View>
        
       
        </View>

        {range.startDate ?
        (<View style = {style.periodikZone}>
          <Text style = {style.periodik}>Début : {range.startDate ? longToDate(Number(range.startDate)) : longToDate(convertDate(range.startDate))} </Text>
          <Text style = {style.periodik}>Fin : {range.endDate ? longToDate(Number(range.endDate)) : range.endDate ? longToDate(convertDate(range.endDate)) : '----'}</Text>
        </View>): (<></>)
        } 
          <View style = {style.descriptionSide}>
          <Text style = {style.label}>Description du véhicule</Text>
          <Textarea
            containerStyle={style.textareaContainer}
            style={style.textarea}
            defaultValue = {inputData.Description}
            onChangeText={value => {setInputData({...inputData , Description: value})}}
            maxLength={255}
            placeholder={'Description ici...'}
            placeholderTextColor={'#c7c7c7'}
            underlineColorAndroid={'transparent'}
        />
          </View>

          <View style = {{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 25}}>
          <View style = {{justifyContent: 'center', alignItems: 'center'}}>
            <RadioButton
            color = {color.danger}
            uncheckedColor = {color.grey}
            value="no"
            status={inputData.IsDriver === 0 ||  driver === 'no' ? 'checked' : 'unchecked' }
            onPress={() => setDriver('no')}
            />
            <Text style = {{fontFamily : 'CaviarDreamsBold',}}>Sans chauffeur</Text>
          </View>
          <View style = {{justifyContent: 'center', alignItems: 'center'}}>
            <RadioButton
            color = {color.danger}
            uncheckedColor = {color.grey}
                value="yes"
                status={inputData.IsDriver === 1 || driver === 'yes' ? 'checked' : 'unchecked' }
                onPress={() => {setDriver('yes'); setModalVisible(true)}}
            />
            <Text style = {{fontFamily : 'CaviarDreamsBold',}}>Avec chauffeur</Text>
          </View>
        
        </View>
        <View style = {style.FlatButton}>
          <TouchableOpacity
          onPress = {() => {this.validate()}}
          >
          <CustomButton
         
            primary
            title="Enregister"
          />
          </TouchableOpacity>
        </View>

        <Spinner
            visible={carListReducer.loading}
            textContent={'Patientez...'}
            textStyle={{ color: '#fff', fontFamily : 'CaviarDreams' }} />
      </View>


            <Modal
                isVisible={visible}
                onBackButtonPress={close}
                onBackdropPress={close}
                style={{justifyContent: 'flex-end', margin: 0}}>
                <SafeAreaView style={style.options}>
                <TouchableOpacity style={style.option} onPress={chooseImage}>
                <Image
                style={style.avatar}
                {...props}
                source={require('../../../../assets/images/icons/image-gallery.png')}
                />
                    <Text style = {style.itemText}>Galérie </Text>
                </TouchableOpacity>
                <TouchableOpacity style={style.option} onPress={openCamera}>
                <Image
                style={style.avatar}
                {...props}
                source={require('../../../../assets/images/icons/photo-camera.png')}
                />
                    <Text style = {style.itemText}>Caméra</Text>
                </TouchableOpacity>
                </SafeAreaView>
            </Modal>


            <DatePickerModal
        // locale={'en'} optional, default: automatic
        mode="range"
        visible={openM}
        onDismiss={onDismiss}
        startDate={range.startDate}
        endDate={range.endDate}
        onConfirm={onConfirm}
        validRange={{
            startDate: new Date(),
        }}

        locale={'nl'}
        
        onChange={e => {
          setRange({e})
        }} // same props as onConfirm but triggered without confirmed by user
        saveLabel="Ok" // optional
        label="Selectionner une période" // optional
        startLabel="Du" // optional
        endLabel="Au" // optional
        animationType="slide" // optional, default is slide on ios/android and none on web
      />

        <Modal
        animationType="fade"
        fullScreen = {true}
        transparent={false}
        visible={modalVisible}
        onRequestClose={() => {onClose()}}
      >
        <View style={style.centeredView}>
          <View style={style.modalView}>

          <View style={style.form}>
          <Input
          placeholder="Nom du chauffeur *"
          labelColor = {style.labelColor}
          iconPosition="right"
          value={null}
          onChangeText={(value) => {console.log(value)}}
          leftIcon={
            <Text>
                <Icon  name = "user" style = {{color: color.grey, fontSize: 15}}/>
            </Text>
            
          }
        />

        <Input
          placeholder="Prénom du chauffeur *"
          labelColor = {style.labelColor}
          iconPosition="right"
          value={null}
          onChangeText={(value) => {console.log(value)}}
          leftIcon={
            <Text>
                <Icon  name = "user-circle" style = {{color: color.grey, fontSize: 15}}/>
            </Text>
            
          }
        />  
          </View>
          
          </View>
        </View>
      </Modal>
            
        </ScrollView>
    )
}

const mapStateToProps = state => {
return {...state}
}

const mapDispatchToProps = (dispatch) => {
return bindActionCreators({
  ...globalAction,
    ...action,
}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)( UpdateCar);