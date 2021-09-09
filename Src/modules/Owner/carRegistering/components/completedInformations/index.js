import React, { Component } from 'react';
import { Text, View, TouchableOpacity, Platform, Modal} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import MatIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import color from '../../../../../assets/themes/color';
import { ScrollView } from 'react-native-gesture-handler';
import CustomButton from '../../../../../common/components/customButton';
import Input from '../../../../../common/components/input';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as action from '../../actions';
import style from './style';

import { RadioButton, Button } from 'react-native-paper';
import { DatePickerModal } from 'react-native-paper-dates';
import Textarea from 'react-native-textarea';
import SnackBar from 'rn-snackbar';
import Spinner from 'react-native-loading-spinner-overlay';
import ImgToBase64 from 'react-native-image-base64';
import base64 from 'react-native-base64';
import moment from 'moment';
class completedInformations extends Component {

    constructor(props) {
        super(props);
        this.state = {
          images : [],
          checked : 'noDelay',
          range : {
            startDate: Date | undefined,
            endDate: Date | undefined
          },
          open: false,
          driver: 'no',
          modalVisible: false, 
          inputData : {
            CoutJour: null, 
            Gain: null,
            Description: null,
            PrixProprio : null,
            ComissionAhoko : null,
            Tva : null,
            Tdt : null,
            Ardsi : null,
            PrixAfficher : null,
            BeneficeAhoko: null
          }
        }
    }

    goBack = () =>{
        const { back } = this.props;
        // Go to previous step
        back();
      }

      onDismiss = () => {
        if(!this.state.range.startDate) {
          this.setState ({checked: 'noDelay'})
        }
        this.setState({open: false})
      }
    
      onConfirm = ({ startDate, endDate }) => {
        if(!this.state.range.startDate) {
          this.setState ({checked: 'noDelay'})
        }
        this.setState({open: false})
        this.setState({range: {startDate: startDate, endDate: endDate}})
      }

      onOpen = () => {
        this.setState({modalVisible: true})
      }

      onClose = () => {
          this.setState({modalVisible: false})
      }

      _snackError = (text) => {
        return (
          SnackBar.show(text, {
            style: { marginTop: 10,marginRight: 10, marginLeft: 10, borderRadius: 5, textAlign: 'center' },
            backgroundColor: color.danger,
            textColor: color.white,
            position: 'top'
          })
        )
      }

      getDataUrl(img) { 
        
        ImgToBase64.getBase64String(img)
          .then((base64String) => {
            this.returnValue(base64String)
          })
          .catch(err => {console.log(err); return img});

      } 


      returnValue = (string) => {
        this.setState({images : [...this.state.images, string]})
      }
      validate = () => {
        
        const {carRegisterReducer} = this.props;
        const {current_user} = this.props.globalReducer;

       
        const data = {
          ...carRegisterReducer.inputData,
          RentingStart : this.state.range.startDate ? new Date(this.state.range.startDate).getTime() : null,
          RentingEnd: this.state.range.endDate ? new Date(this.state.range.endDate).getTime() : null,
          IsDriver: this.state.driver === 'no' ? 0 : 1,
          Date: new Date().getTime(),
          PrixProprio: this.state.inputData.CoutJour,
          CommissionAhoko: this.state.inputData.ComissionAhoko,
          BeneficeAhoko: this.state.inputData.BeneficeAhoko,
          Tva: this.state.inputData.Tva,
          Tdt: this.state.inputData.Tdt,
          Ardsi: this.state.inputData.Ardsi,
          PrixAfficher: Math.round(this.state.inputData.PrixAfficher),
          RevenuProprio: this.state.inputData.Gain,
          IsPromo: 0,
          PromoStart: null,
          PromoEnd: null,
          UpdateDate : new Date().getTime(),
          Owner: current_user.reference,
          Description: this.state.inputData.Description,
          images: [] = this.state.images
        }

        if(!this.state.inputData.CoutJour) {
          this._snackError('Veuillez renseigner le côut journalier de location')
          return;
        }

        if(!this.state.inputData.Description) {
          this._snackError('Veuillez ajouter une description du véhicule')
          return;
        }

        
        this.props.Register(data, this.props)
      }

      calculate = (cout) => {
        
        let CoutJour = Number(cout);
        let ComissionAhoko = Number(CoutJour * 0.1);
        let Tva = Number(ComissionAhoko * 0.18);
        let Tdt = Number(ComissionAhoko * 0.015);
        let PrixAfficher = Number(CoutJour + ComissionAhoko + Tva + Tdt);
        let Ardsi = Number (CoutJour * 0.05);
        let Gain = Number (CoutJour - (Ardsi + ComissionAhoko));
        let BeneficeAhoko = Number (ComissionAhoko * 2);

        
        this.setState({inputData: {
          CoutJour: CoutJour,
          Gain : Gain.toString(),
          ComissionAhoko : ComissionAhoko,
          Tva : Tva,
          Tdt : Tdt,
          Ardsi : Ardsi,
          PrixAfficher : PrixAfficher,
          BeneficeAhoko : BeneficeAhoko,
        }})
      }

      convertDate (date) {
        return (new Date(date).getTime())
      }

      longToDate = (millisec) => {
        moment.locale('fr');
          return moment((new Date(millisec).toUTCString())).format('ll');
      }
    
      componentDidMount() {
        const {carRegisterReducer} = this.props;

        carRegisterReducer.inputData.images.forEach(img => {
          this.getDataUrl(img.value)
        })
      }
    render() {
      const {carRegisterReducer} = this.props
        return (
            <ScrollView style = {style.container}
            showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}  
            >
            <TouchableOpacity
            style = {style.backArrow}
            onPress={() => {this.goBack()}}>
            <Icon style = {style.backArrowIcon} name = "arrow-left" />
            </TouchableOpacity>  
            
            <View>
            <Text style = {style.instruction}>D'autres Informations
            </Text>
            
            </View>

            <View style={style.form}>

          <Text style = {style.label}>Coût journalier de location</Text>
          <Input
            placeholder="Coût journalier de location *"
            labelColor = {style.labelColor}
            iconPosition="right"
            value={this.state.inputData.CoutJour}
            onChangeText={(value) => {this.calculate(value)}}
            keyboardType={Platform.OS === 'ios' ? 'number-pad' : 'numeric'}
            leftIcon={
              <Text>
                  <Icon  name = "money-bill" style = {{color: color.grey, fontSize: 15}}/>
              </Text>
              
            }
          />

        {this.state.inputData.Gain && <View >
          <Text style = {style.label}>Votre revenu</Text>
            <Input
              placeholder="Votre revenu"
              editable = {false}
              labelColor = {style.labelColor}
              iconPosition="right"
              value={this.state.inputData.Gain}
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
          status={ this.state.checked === 'noDelay' ? 'checked' : 'unchecked' }
          onPress={() => this.setState({checked: 'noDelay'})}
          />
          <Text style = {{fontFamily : 'CaviarDreamsBold',}}>Location continue</Text>
        </View>
        <View style = {{justifyContent: 'center', alignItems: 'center'}}>
          <RadioButton
          color = {color.primary}
          uncheckedColor = {color.grey}
              value="delay"
              status={ this.state.checked === 'delay' ? 'checked' : 'unchecked' }
              onPress={() => {this.setState({checked: 'delay', open: true})}}
          />
        <Text style = {{fontFamily : 'CaviarDreamsBold',}}>Location périodique</Text>
        </View>
        
       
        </View>

        {this.state.range.startDate?
        (<View style = {style.periodikZone}>
          <Text style = {style.periodik}>Début : {this.longToDate(this.convertDate(this.state.range.startDate))} </Text>
          <Text style = {style.periodik}>Fin : {this.state.range.endDate ? this.longToDate(this.convertDate(this.state.range.endDate)) : '----'}</Text>
        </View>): (<></>)
        } 
          <View style = {style.descriptionSide}>
          <Text style = {style.label}>Description du véhicule</Text>
          <Textarea
            containerStyle={style.textareaContainer}
            style={style.textarea}
            defaultValue = {this.state.inputData.Description}
            onChangeText={value => {this.setState({inputData : {...this.state.inputData , Description: value}})}}
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
            status={ this.state.driver === 'no' ? 'checked' : 'unchecked' }
            onPress={() => this.setState({driver: 'no'})}
            />
            <Text style = {{fontFamily : 'CaviarDreamsBold',}}>Sans chauffeur</Text>
          </View>
          <View style = {{justifyContent: 'center', alignItems: 'center'}}>
            <RadioButton
            color = {color.danger}
            uncheckedColor = {color.grey}
                value="yes"
                status={ this.state.driver === 'yes' ? 'checked' : 'unchecked' }
                onPress={() => {this.setState({driver: 'yes', modalVisible: true})}}
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

        
      </View>

      <DatePickerModal
        // locale={'en'} optional, default: automatic
        mode="range"
        visible={this.state.open}
        onDismiss={this.onDismiss}
        startDate={this.state.range.startDate}
        endDate={this.state.range.endDate}
        onConfirm={this.onConfirm}
        validRange={{
            startDate: new Date(),
        }}

        locale={'nl'}
        
        onChange={e => {
          this.setState({range: e})
        }} // same props as onConfirm but triggered without confirmed by user
        saveLabel="Ok" // optional
        label="Selectionner une période" // optional
        startLabel="Du" // optional
        endLabel="Au" // optional
        animationType="slide" // optional, default is slide on ios/android and none on web
      />

<View style={style.centeredView}>
        <Modal
        animationType="fade"
        fullScreen = {true}
        transparent={false}
        visible={this.state.modalVisible}
        onRequestClose={() => {this.onClose()}}
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
        </View>   

        <Spinner
            visible={carRegisterReducer.loading}
            textContent={'Patientez...'}
            textStyle={{ color: '#fff', fontFamily : 'CaviarDreams' }} />     
            </ScrollView>



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
    
    export default connect(mapStateToProps, mapDispatchToProps)( completedInformations );