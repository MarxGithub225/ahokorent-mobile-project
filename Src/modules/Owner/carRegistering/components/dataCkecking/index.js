import React, { Component } from 'react';
import { Text, View, TouchableOpacity, Image} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import color from '../../../../../assets/themes/color';

import style from './style';
import { ScrollView } from 'react-native-gesture-handler';
import CustomButton from '../../../../../common/components/customButton';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as action from '../../actions';

import Input from '../../../../../common/components/input';
import { ActivityIndicator } from 'react-native-paper';
import SelectDropdown from 'react-native-select-dropdown';

import RNMultiSelect, {
  IMultiSelectDataTypes,
} from "@freakycoder/react-native-multiple-select";
const needs = [
  {label : 'Make', placeHoler: 'Marque *', level: 1},
  {label : 'Manufacturer', placeHoler: 'Fabricant *', level: 0},
  {label : 'ProductType', placeHoler: 'Type de véhicule', level: 0},
  {label : 'CheckDigitValidity', placeHoler: '', level: 0},
  {label : 'SequentialNumber', placeHoler: 'Numéro sequentiel', level: 0},
  {label : 'Body', placeHoler: 'Carrosserie', level: 1},
  {label : 'EngineCylinders', placeHoler: 'Nombre de cylindre*', level: 1},
  {label : 'NumberOfDoors', placeHoler: 'Nombre de porte *', level: 1},
  {label : 'FuelTypePrimary', placeHoler: 'Carburant*', level: 0},
  {label : 'Model', placeHoler: 'Modèle', level: 1},
  {label : 'ModelYear', placeHoler: 'Année de la voiture', level: 1},
  {label : 'Series', placeHoler: 'Numéro de série', level: 0},
  {label : 'Transmission', placeHoler: 'Transmission', level: 0},
  {label : 'Engine', placeHoler: '', level: 0},
  {label : 'NumberOfSeats', placeHoler: 'Nombre de sièges', level: 1},
  {label : 'Drive', placeHoler: 'Type', level: 0},
  {label : 'FuelSystem', placeHoler: 'Système de carburant', level: 0},
  {label : 'FuelCapacity', placeHoler: 'Capacité du réservoir', level: 0},
  {label : 'FrontBreaks', placeHoler: '', level: 0}

];

const replaceAll = (string, search, replace) => {
  return string.split(search).join(replace);
}
const replaceFonction = (text) => {
  const t = replaceAll(text, '-', '');
  const p = replaceAll(t, '-', '');
  const z = replaceAll(p, '\/', '');
  const y = replaceAll(z, '%', '');
  const k = y.split('(').length ? y.split('(')[0] : y;
  const m = k.replace(/[0-9]/g, '');
  const splitStr  = m.toLowerCase().split(' ');

  for (var i = 0; i < splitStr.length; i++) {
    // You do not need to check if i is larger than splitStr length, as your for does that for you
    // Assign it back to the array
      splitStr[i] = splitStr[i].charAt(0).toUpperCase() + splitStr[i].substring(1);     
  }
  const r = splitStr.join('');

  return r; 
}

class dataCkecking extends Component {

    constructor(props) {
        super(props);
        this.state = {
            images: [],
            visible: false,
            inputItems : [],
            isLoading : true,
            inpuData : {
              Make : null,
              Manufacturer : null,
              ProductType : null,
              ValidCheckDigit : null,
              CheckDigitValidity : null,
              SequentialNumber : null,
              Body : null,
              EngineCylinders : null,
              NumberOfDoors : null,
              FuelTypePrimary : null,
              Model : null,
              ModelYear : null,
              Series : null,
              Transmission : null,
              Engine : null,
              NumberOfSeats : null,
              Drive : null,
              FuelSystem : null,
              FuelCapacity : null,
              FrontBreaks : null,

              // Make
              // Body
              // EngineCylinders
              // NumberOfDoors
              // Model
              // ModelYear
              // NumberOfSeats
              // Tansmission
              // Carburant
              // Type
            },
            brandSelected: this.props.globalReducer.brands[0].libelle
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

      setDataItems = () => {
        const returnDatas = [];
        const {carRegisterReducer} = this.props

        
        
        needs.forEach(n => {
              
          const exist = returnDatas.filter(rd => rd.label === n.label).length > 0 ? true : false;
          if(!exist) {
            let item = {}
            let filter = carRegisterReducer.data.filter(dat => replaceFonction(dat.label) === n.label);
            
            const isExist = filter.length ? filter[0] : null;
            console.log('LOGO2', isExist)
            if(isExist) { 
           
              item = {
                label: n.label,
                value: isExist.value.toString(),
                placeholder: n.placeHoler,
                level: n.level
              }
    
              returnDatas.push(item)
            }else {
            
              item = {
                label: n.label,
                value: null,
                placeholder: n.placeHoler,
                level: n.level
              }
    
              returnDatas.push(item);
            }
          }
         

        })

        

        this.setState({inputItems: returnDatas});
      }

      componentDidMount() {
        this.setDataItems()

        setTimeout(() => {
          this.setState({isLoading: false})
      }, 3000);
      }
    
    render() {

            if(this.state.isLoading) {
              return (
                <View style = {{flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: color.white, flexDirection: 'column'}}>
                  <Image
                  source = {require('../../../../../assets/images/ico2.png')}
                  resizeMode = "contain"
                  style = {{
                      width: 190,
                      height: 190 
                  }}
                  />
                  <View  style = {{textAlign: 'center'}}>
                      <ActivityIndicator color = {color.primary} size = 'small' />
                      <Text>Récupération des données...</Text>
                  </View>
                </View>
              )
          }
          const {transmissions, inputItems} = this.state;
          const {carRegisterReducer, globalReducer} = this.props

          const transmitions = []
          for (let i = 0; i < globalReducer.gearbox.length; i++) {
            transmitions.push(globalReducer.gearbox[i].libelle)
            
          }

          const brands = []
          for (let i = 0; i < globalReducer.brands.length; i++) {
            brands.push(globalReducer.brands[i].libelle)
            
          }

          let models = []
          let modelsFilter = []


          const brandGiven = inputItems.filter(m => m.label === 'Make')[0].value; 
          const brandId = brandGiven ? 
          globalReducer.brands.filter(b => b.libelle.toLowerCase() === brandGiven.toLowerCase())[0].id
          : globalReducer.brands.filter(b => b.libelle.toLowerCase() === this.state.brandSelected.toLowerCase())[0].id
          modelsFilter = globalReducer.models.filter(m => m.brand === brandId);
          
          for (let i = 0; i < modelsFilter.length; i++) {
            models.push(modelsFilter[i].libelle)
            
          }

          const types = [];

          for (let i = 0; i < this.props.globalReducer.types.length; i++) {
            types.push(this.props.globalReducer.types[i].libelle)
            
          }

          const caracteristics = []

          this.props.globalReducer.caracteristics.forEach((element, i) => {
            caracteristics.push({
              id: i,
              value: element.libelle,
              isChecked: false,
            })
          });
          
        return (
            <View style = {style.container}>
                <TouchableOpacity
                style = {style.backArrow}
                onPress={() => {this.goBack()}}>
                <Icon style = {style.backArrowIcon} name = "arrow-left" />
                </TouchableOpacity>  
                
                <View>
                <Text style = {style.instruction}>Informations du véhicule 
                </Text>
                
                </View>

                    

                    <ScrollView
                    showsVerticalScrollIndicator={false}
                    showsHorizontalScrollIndicator={false}
                    >
                    <View style={style.form}>
                      {inputItems.map((inp, key) => {
                        if(inp.label === 'Make' && !inp.value) {
                          return (
                            <View key = {key}>
                            <SelectDropdown
                            dropdownIconPosition = {'right'}
                            buttonStyle = {style.buttonStyle}
                            buttonTextStyle = {style.buttonTextStyle}
                            renderDropdownIcon={() => {
                              return (
                                <Icon  name="chevron-down" color={"#666"} size={15} />
                              );
                              }}
                              defaultButtonText = {"Marque"}
                              data={brands.sort((a,b) => a < b ? -1 : 1)}
                              // defaultValue = {'Automatique'}
                              onSelect={(selectedItem, index) => {
                                this.setState({brandSelected: selectedItem})
                                console.log(selectedItem)
                              }}

                              buttonTextAfterSelection={(selectedItem, index) => {
                                // text represented after item is selected
                                // if data array is an array of objects then return selectedItem.property to render after item is selected
                                return selectedItem
                              }}
                              rowTextForSelection={(item, index) => {
                                // text represented for each item in dropdown
                                // if data array is an array of objects then return item.property to represent item in dropdown
                                return item
                              }}
                            />

                            </View>
                          ) 
                        }

                        if(inp.label === 'Model' && !inp.value) {
                          return (
                            <View key = {key}>
                            

                          <SelectDropdown
                            dropdownIconPosition = {'right'}
                            buttonStyle = {style.buttonStyle}
                            buttonTextStyle = {style.buttonTextStyle}
                            renderDropdownIcon={() => {
                              return (
                                <Icon  name="chevron-down" color={"#666"} size={15} />
                              );
                              }}
                              defaultButtonText = {"Modèle"}
                              data={models.length ? models.sort((a,b) => a < b ? -1 : 1) : ['Aucun modèle']}
                              // defaultValue = {'Automatique'}
                              onSelect={(selectedItem, index) => {
                                console.log(selectedItem)
                              }}

                              buttonTextAfterSelection={(selectedItem, index) => {
                                // text represented after item is selected
                                // if data array is an array of objects then return selectedItem.property to render after item is selected
                                return selectedItem
                              }}
                              rowTextForSelection={(item, index) => {
                                // text represented for each item in dropdown
                                // if data array is an array of objects then return item.property to represent item in dropdown
                                return item
                              }}
                            />
                            </View>
                          ) 
                        }
                        return (
                          < View key = {key}>
                          {inp.level === 1 && <Input
                            style = {{color: color.primary}}
                            placeholder={inp.placeholder}
                            labelColor = {style.labelColor}
                            iconPosition="right"
                            value={inp.value}
                            onChangeText={(value) => {console.log(value)}}
                          />}
                          </View>
                        )
                      })

                      }

                        <SelectDropdown
                            dropdownIconPosition = {'right'}
                            buttonStyle = {style.buttonStyle}
                            buttonTextStyle = {style.buttonTextStyle}
                            renderDropdownIcon={() => {
                              return (
                                <Icon  name="chevron-down" color={"#666"} size={15} />
                              );
                            }}
                            defaultButtonText = {"Tansmission"}
                            data={transmitions.sort((a,b) => a < b ? -1 : 1)}
                            // defaultValue = {'Automatique'}
                            onSelect={(selectedItem, index) => {
                              console.log(selectedItem, index)
                            }}
                            buttonTextAfterSelection={(selectedItem, index) => {
                              // text represented after item is selected
                              // if data array is an array of objects then return selectedItem.property to render after item is selected
                              return selectedItem
                            }}
                            rowTextForSelection={(item, index) => {
                              // text represented for each item in dropdown
                              // if data array is an array of objects then return item.property to represent item in dropdown
                              return item
                            }}
                          />


                        <SelectDropdown
                            dropdownIconPosition = {'right'}
                            buttonStyle = {style.buttonStyle}
                            buttonTextStyle = {style.buttonTextStyle}
                            drow
                            
                            renderDropdownIcon={() => {
                              return (
                                <Icon  name="chevron-down" color={"#666"} size={15} />
                              );
                            }}
                            defaultButtonText = {"Carburant"}
                            data={['Diesel', 'Super']}
                            // defaultValue = {'Diesel'}
                            onSelect={(selectedItem, index) => {
                              console.log(selectedItem, index)
                            }}
                            buttonTextAfterSelection={(selectedItem, index) => {
                              // text represented after item is selected
                              // if data array is an array of objects then return selectedItem.property to render after item is selected
                              return selectedItem
                            }}
                            rowTextForSelection={(item, index) => {
                              // text represented for each item in dropdown
                              // if data array is an array of objects then return item.property to represent item in dropdown
                              return item
                            }}
                          />
                        <SelectDropdown
                            dropdownIconPosition = {'right'}
                            buttonStyle = {style.buttonStyle}
                            buttonTextStyle = {style.buttonTextStyle}
                            drow
                            
                            renderDropdownIcon={() => {
                              return (
                                <Icon  name="chevron-down" color={"#666"} size={15} />
                              );
                            }}
                            defaultButtonText = {"Type de véhicule"}
                            data={types.sort((a,b) => a < b ? -1 : 1)}
                            // defaultValue = {'Diesel'}
                            onSelect={(selectedItem, index) => {
                              console.log(selectedItem, index)
                            }}
                            buttonTextAfterSelection={(selectedItem, index) => {
                              // text represented after item is selected
                              // if data array is an array of objects then return selectedItem.property to render after item is selected
                              return selectedItem
                            }}
                            rowTextForSelection={(item, index) => {
                              // text represented for each item in dropdown
                              // if data array is an array of objects then return item.property to represent item in dropdown
                              return item
                            }}
                          />
                       
                      <TouchableOpacity
                        onPress={ () => {this.nextStep()}}
                        >
                          <CustomButton
                                    primary
                                    title="Valider"
                                        />
                        </TouchableOpacity>
                      </View>

                    
                      
                    </ScrollView>
                    

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
  
  export default connect(mapStateToProps, mapDispatchToProps)( dataCkecking );