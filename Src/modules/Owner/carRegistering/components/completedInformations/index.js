import React, { Component } from 'react';
import { Text, View, TouchableOpacity, Platform, Modal} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
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

import moment from 'moment';
class completedInformations extends Component {

    constructor(props) {
        super(props);
        this.state = {
          barcode: '',
          loading: false,
          checked : 'noDelay',
          range : {
            startDate: Date | undefined,
            endDate: Date | undefined
          },
          open: false,
          driver: 'no',
          modalVisible: false
        }
    }

    goBack = () =>{
        const { back } = this.props;
        // Go to previous step
        back();
      }

      onDismiss = () => {
        this.setState({open: false})
      }
    
      onConfirm = ({ startDate, endDate }) => {
        this.setState({open: false})
        this.setState({range: {startDate: startDate, endDate: endDate}})
      }

      onOpen = () => {
        this.setState({modalVisible: true})
      }

      onClose = () => {
        this.setState({modalVisible: false})
    }
    render() {
        return (
            <View style = {style.container}>
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

        <Input
          placeholder="Coût journalier de location *"
          labelColor = {style.labelColor}
          iconPosition="right"
          value={null}
          onChangeText={(value) => {console.log(value)}}
          keyboardType={Platform.OS === 'ios' ? 'number-pad' : 'numeric'}
          leftIcon={
            <Text>
                <Icon  name = "money-bill" style = {{color: color.grey, fontSize: 15}}/>
            </Text>
            
          }
        />

        <View>
        <View style = {{justifyContent: 'center', alignItems: 'center'}}>
        <RadioButton
        color = {color.primary}
        uncheckedColor = {color.grey}
        value="noDelay"
        status={ this.state.checked === 'noDelay' ? 'checked' : 'unchecked' }
        onPress={() => this.setState({checked: 'noDelay'})}
        />
        <Text>Location continue</Text>
        </View>
        <View style = {{justifyContent: 'center', alignItems: 'center'}}>
        <RadioButton
        color = {color.primary}
        uncheckedColor = {color.grey}
            value="delay"
            status={ this.state.checked === 'delay' ? 'checked' : 'unchecked' }
            onPress={() => {this.setState({checked: 'delay', open: true})}}
        />
        <Text>Location périodique</Text>
        </View>
        
        </View>


          <View style = {style.descriptionSide}>
          <Textarea
            containerStyle={style.textareaContainer}
            style={style.textarea}
            // onChangeText={console.log('')}
            maxLength={255}
            placeholder={'Description du véhicule'}
            placeholderTextColor={'#c7c7c7'}
            underlineColorAndroid={'transparent'}
        />
          </View>

          <View>
        <View style = {{justifyContent: 'center', alignItems: 'center'}}>
        <RadioButton
        color = {color.danger}
        uncheckedColor = {color.grey}
        value="no"
        status={ this.state.driver === 'no' ? 'checked' : 'unchecked' }
        onPress={() => this.setState({driver: 'no'})}
        />
        <Text>Véhicule sans chauffer</Text>
        </View>
        <View style = {{justifyContent: 'center', alignItems: 'center'}}>
        <RadioButton
        color = {color.danger}
        uncheckedColor = {color.grey}
            value="yes"
            status={ this.state.driver === 'yes' ? 'checked' : 'unchecked' }
            onPress={() => {this.setState({driver: 'yes', modalVisible: true})}}
        />
        <Text>Véhicule avec chauffeur</Text>
        </View>
        
        </View>
        <View style = {style.FlatButton}>
          <CustomButton
         
            onPress={ () => {console.log('ok')}}
            primary
            title="Enregister"
          />
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
        // validRange={{
        //   startDate: new Date(2021, 1, 2),  // optional
        //   endDate: new Date(), // optional
        // }}
        // onChange={} // same props as onConfirm but triggered without confirmed by user
        // locale={'nl'} // optional
        saveLabel="Ok" // optional
        label="Selectionner une période" // optional
        startLabel="Du" // optional
        endLabel="Au" // optional
        // animationType="slide" // optional, default is slide on ios/android and none on web
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
    
    export default connect(mapStateToProps, mapDispatchToProps)( completedInformations );