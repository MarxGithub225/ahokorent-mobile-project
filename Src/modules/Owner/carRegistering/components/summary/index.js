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

import moment from 'moment';
class Summary extends Component {

    constructor(props) {
        super(props);
        this.state = {
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
          Description: this.state.inputData.Description
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
            <Text style = {style.instruction}>Résumé
            </Text>
            
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
    
    export default connect(mapStateToProps, mapDispatchToProps)( Summary );