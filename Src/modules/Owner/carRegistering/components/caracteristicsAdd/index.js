import React, { Component } from 'react';
import { Text, View, TouchableOpacity, Dimensions, SafeAreaView} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import color from '../../../../../assets/themes/color';

import style from './style';
import CustomButton from '../../../../../common/components/customButton';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as action from '../../actions';
const deviceHeight = Dimensions.get('window').height;

import RNMultiSelect, {
  IMultiSelectDataTypes,
} from "@freakycoder/react-native-multiple-select";



class caracteristicsAdd extends Component {


    constructor(props) {
        super(props);
        this.state = {
          selectedItems : []
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

      
      validate = () =>{
        const data = []
        this.state.selectedItems.forEach(itm => {
          data.push(itm.value)
        })

        this.props.setData({caracteristics : data.toString()}, this.props)
      }
    render() {
      const {carRegisterReducer} = this.props;
          const caracteristics = []


          this.props.globalReducer.caracteristics.forEach((element, i) => {
            caracteristics.push({
              id: i,
              value: element.libelle,
              isChecked: false,
            })
          });
          
          // if(carRegisterReducer.inputData.caracteristics.length) {

          //   carRegisterReducer.inputData.caracteristics.split(",").forEach((element, i) => {
          //     const carIt = {
          //       id: i,
          //       value: element,
          //       isChecked: true,
          //     }
              

          //     caracteristics.forEach((elt) => {

          //       if(elt.value == carIt.value) {
          //         elt.isChecked = carIt.isChecked;
          //       }
                
          //     });
          //   });
          // }
        return (
            <View style = {style.container}>
                <TouchableOpacity
                style = {style.backArrow}
                onPress={() => {this.goBack()}}>
                <Icon style = {style.backArrowIcon} name = "arrow-left" />
                </TouchableOpacity>  
                
                <View>
                <Text style = {style.instruction}>Options du v??hicule 
                </Text>
                
                </View>

                    

                    <SafeAreaView
                    style = {style.flex}
                    >
                      <RNMultiSelect
                      fillColor={color.primary}
                      spinnerColor = {color.primary}
                      menuBarContainerHeight ={deviceHeight - 300}
                      doneButtonBackgroundColor = {color.grey}
                      doneButtonText = "Selectionner" 
                      buttonContainerStyle = {{background: 'red'}}
                      width = '100%'
                      multiSelectionText = "??l??ments s??lectionn??s"
                      menuItemTextStyle = {style.buttonTextStyle}
                          placeholder = "Selectionner"
                          placeholderTextStyle = {{fontFamily: 'CaviarDreamsBold',}}
                          data={caracteristics}
                          onSelect={(selectedItems) => {this.setState({selectedItems: selectedItems})}}
                        />

                        <TouchableOpacity
                        style = {{marginTop: 25}}
                        onPress={ () => {this.validate()}}
                        >
                          <CustomButton
                                    primary
                                    title="Suivant"
                                        />
                        </TouchableOpacity>
                    </SafeAreaView>
                    

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
  
  export default connect(mapStateToProps, mapDispatchToProps)( caracteristicsAdd );