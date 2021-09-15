import React, { useEffect, useState } from 'react';
import { Text, View, TouchableOpacity, SafeAreaView, Image, FlatList, Dimensions, Modal, TextInput} from 'react-native';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as action from './actions';
import * as globalAction from '../../../config/globalReducers/action';
import http from "../../../config/baseUrl";

import Icon from 'react-native-vector-icons/FontAwesome5';
import Ionicon from 'react-native-vector-icons/Ionicons';
import color from '../../../assets/themes/color';

import styles from './style';
import TextTruncate from 'react-native-text-truncate';
import car from '../../../assets/images/car.jpg';
import CardView from 'react-native-cardview';

import ImageViewer from 'react-native-image-zoom-viewer';
import { ScrollView } from 'react-native-gesture-handler';
import moment from 'moment';
import { ActivityIndicator } from 'react-native-paper';
import style from './style';
import GestureRecognizer, {swipeDirections} from 'react-native-swipe-gestures';
import StarRating from 'react-native-star-rating';
import CustomButton from '../../../common/components/customButton';
import SnackBar from 'rn-snackbar';
import Share from 'react-native-share';
const windowWidth = Dimensions.get('window').width;

const _snackError = (text) => {
  return (
      SnackBar.show(text, {
      style: { marginBottom: 10,marginRight: 10, marginLeft: 10, borderRadius: 5, textAlign: 'center' },
      backgroundColor: color.danger,
      textColor: color.white,
      })
  )
}
const config = {
  velocityThreshold: 0.3,
  directionalOffsetThreshold: 80
};

const FiveStars = () => (
  <Text style = {styles.stars}>
      <Icon name = "star" color = '#dba911' />
      <Icon name = "star" color = '#dba911' />
      <Icon name = "star" color = '#dba911' />
      <Icon name = "star" color = '#dba911' />
      <Icon name = "star" color = '#dba911' />
  </Text>
)

const FourStars = () => (
  <Text style = {styles.stars}>
      <Icon name = "star" color = '#dba911' />
      <Icon name = "star" color = '#dba911' />
      <Icon name = "star" color = '#dba911' />
      <Icon name = "star" color = '#dba911' />
      <Icon name = "star" />
  </Text>
)

const ThreeStars = () => (
  <Text style = {styles.stars}>
      <Icon name = "star" color = '#dba911' />
      <Icon name = "star" color = '#dba911' />
      <Icon name = "star" color = '#dba911' />
      <Icon name = "star"  />
      <Icon name = "star" />
  </Text>
)

const TwoStars = () => (
  <Text style = {styles.stars}>
      <Icon name = "star" color = '#dba911' />
      <Icon name = "star" color = '#dba911' />
      <Icon name = "star"  />
      <Icon name = "star"  />
      <Icon name = "star" />
  </Text>
)

const OneStars = () => (
  <Text style = {styles.stars}>
      <Icon name = "star" color = '#dba911' />
      <Icon name = "star" />
      <Icon name = "star"  />
      <Icon name = "star"  />
      <Icon name = "star" />
  </Text>
)


const ZeroStars = () => (
  <Text style = {styles.stars}>
      <Icon name = "star" />
      <Icon name = "star" />
      <Icon name = "star"  />
      <Icon name = "star"  />
      <Icon name = "star" />
  </Text>
)


const renderExpandor=()=>{
  return(<Text style = {styles.instruction}>
      {'Lire plus'}
  </Text>);
}
const renderCollapsar=()=>{
      return(<Text style = {styles.instruction}>
          {'Lire moins'}
      </Text>);
}



const ownerProfile = (props) => {
  
  const [selectedCAr, setSelectedCAr] = useState(null);
  const [selectedComments, setSelectedComments] = useState([]);
  const [selectedRatings, setSelectedRatings] = useState([]);
  const [note, setNote] = useState(null);
  const [visible, setVisible] = useState(false);
  const [commentModalvisible, setVisibleCommentModal] = useState(false);
  const [ratingModalvisible, setVisibleRatingModal] = useState(false);
  const [DATA , setDATA] = useState([]);
  const [imagesData , setImages] = useState([]);
  const [starCount , setStarCount] = useState(3.6);
  
  const {current_user, loading, success, comments, profiles, sharings, ratings} = props.globalReducer;
  const open = (image) => {

      const images = [];

        image.forEach(i => {
          images.push(
            {
              url: `${http}${i.link}`
          }
          )
        })
    setImages(images);
    setVisible(true);
  }


  const close = () => {
    setVisible(false)
  }

  const onOpen = (vin) => {
    setSelectedCAr(vin)
    setVisibleCommentModal(true);

    const com = comments.filter(c => c.Car === vin).sort((a,b) => a.Date > b.Date ? -1 : 1);
    setSelectedComments (com);

  }


  const onClose = () => { 
    setVisibleCommentModal(false)  
  }

  const onRatingsOpen = (vin) => {
    setSelectedCAr(vin)
    setVisibleRatingModal(true);

    const com = ratings.filter(c => c.Car === vin).sort((a,b) => a.Date > b.Date ? -1 : 1);
    setSelectedRatings (com);

  }


  const onRatingsClose = () => { 
    setVisibleRatingModal(false)  
  }


  const convertDate = (date) => {
    return (new Date(date).getTime())
  }

  const longToDate = (millisec) => {
    moment.locale('fr');
      return moment((new Date(Number(millisec)).toUTCString())).format('ll');
  }
  const Item = ({data}) => (
    <View style={styles.MainContainer}>
      <CardView
      cardElevation={5}
              cardMaxElevation={5}
              cornerRadius={5}
              style={styles.cardViewStyle}>
      <View style = {styles.listTopSide}>
        <View style = {styles.listProfile}>
          <Image
            source = {require('../../../assets/images/profile_icons/user.png')}
  
            resizeMode = "contain"
            style = {{
                width: 35,
                height: 35,
                borderRadius: 100
            }}
            />
        </View>
  
        <View>
          <Text style = {styles.postUser}>
            {`${data.user.lastname} ${data.user.firstname}`}
          </Text>
  
          <Text style = {styles.postDate}>
            {longToDate(data.Date)}
          </Text>
        </View>
      </View>
  
      <View style = {styles.listMiddleSide}>
        <Text style = {styles.postTitle}>
        {`${data.Make} ${data.Model} ${data.ModelYear}`}
        </Text>
        <View >
          <TouchableOpacity
          activeOpacity = {.5}
          onPress = {() => {open (data.images)}}>
          
          <Image
            source = {{uri: `${http}${data.images[0].link}`}
            }
            resizeMode = 'cover'
            onLoad = {() => (<ActivityIndicator size = {20} color = {color.primary}/>)}
            style = {{
              width: windowWidth - 30,
              height: 190
            }}
            />
            </TouchableOpacity>
        </View>
  
        <View style = {styles.listBottomSide}>
  
          <TextTruncate
                  style={styles.postDescription}
                  numberOfLines={2}
                  renderExpandor={renderExpandor}
                  renderCollapsar={renderCollapsar}>
                      <Text>
                          {data.title}
                      </Text>
          </TextTruncate>
  
          <View style = {styles.listBottomSideTool}>
            {data.stars === 5 ? (
              <FiveStars/>
            )
            :data.stars === 4 ? (
              <FourStars/>
            )
            :data.stars === 3 ? (
              <ThreeStars/>
            )
            : data.stars === 2 ? (
              <TwoStars/>
            )
            : data.stars === 1 ? (
              <OneStars/>
            ): <ZeroStars/>} 
  
            <View style = {styles.listBottomSideToolTop}>
              <Text style = {styles.comment}>{comments.filter(c=> c.Car === data.Vin).length} Commentaire(s)</Text>
              <Text style = {styles.share}>{sharings.filter(c=> c.Car === data.Vin).length} Partage(s)</Text>
            </View> 
                
          </View>

          <View style = {styles.listBottomSideAction}>
            <TouchableOpacity 
            style = {styles.action}
            onPress = {() => {!ratings.filter(r => (r.Car === data.Vin) && (r.User === current_user.reference)).length ? onRatingsOpen (data.Vin) : _snackError('Vous avez déjà noté ce véhicule !')}}
            >
               
              {ratings.filter(r => (r.Car === data.Vin) && (r.User === current_user.reference)).length 
              
              ? <Text> {ratings.filter(r => (r.Car === data.Vin) && (r.User === current_user.reference))[0].NbrStars} <Ionicon name = 'star' color = {color.primary} size = {15} /> </Text> : <Text> <Icon name = 'star' /> </Text>}
              <Text> Noter </Text>
            </TouchableOpacity>

            <TouchableOpacity 
            style = {styles.action}
            onPress = {() => {onOpen (data.Vin)}}
            >
              <Text> <Icon name = 'comment' /> </Text> 
              <Text> Commenter </Text>
            </TouchableOpacity>
            
            <TouchableOpacity 
            style = {styles.action}
            onPress = {() => {shareSingleImage(data)}}
            > 
              <Text> <Icon name = 'share' /> </Text> 
              <Text> Partager </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </CardView>

  </View>
  );
  
  const renderItem = ({item}) => {
   
    return (
     
      <Item data={item} key = {item.id} />
    );
  }

  useEffect(() => { 
    
    const {current_user, cars, images, factures, profiles} = props.globalReducer;
    let ownerCars = cars.filter(c => c.Owner === current_user.reference)

    ownerCars.forEach(oc => {
      oc.images = images.filter(i => i.car == oc.Vin)
      oc.facture = factures.filter(i => i.Car == oc.Vin)[0]
      oc.user = profiles.filter(p => p.reference == oc.Owner)[0] 
    });


    setDATA (ownerCars.sort((a,b) => a.Date > b.Date ? -1 : 1))
    
  }, [])

  const comment = () => {
    const data = {
      User : current_user.reference,
      Car : selectedCAr,
      Note: note,
      Date: new Date().getTime(),
      UpdateDate: new Date().getTime()
    }

    props.setComment(data);

    if(success)
    {
      setNote(null);
      setVisibleCommentModal(false);

      const com = comments.filter(c => c.Car === selectedCAr);
      setSelectedComments (com);
    }
  }

  const rate = () => {
    const data = {
      User : current_user.reference,
      Car : selectedCAr,
      NbrStars: starCount,
      Date: new Date().getTime()
    }

    props.setRating(data);

    if(success)
    {
      setNote(null);
      setVisibleRatingModal(false);

      const com = ratings.filter(c => c.Car === selectedCAr);
      setSelectedRatings (com);
    }
  }

  const shareSingleImage = async (data, vin) => {
    setSelectedCAr(data.Vin)
    const shareOptions = {
      title: `${data.Make} ${data.Model} ${data.ModelYear}`,
      url: `${http}${data.images[0].link}`,
      message : `Bonjour, viens decouvrir mon véhicule ${data.Make} ${data.Model} ${data.ModelYear} sur AHOKO RENT. Clique sur le lien ci-dessous :`,
      failOnCancel: false,
    };

    try {
      const ShareResponse = await Share.open(shareOptions);
      console.log(ShareResponse)

      if(ShareResponse.success) {
        const donnees = {
          User : current_user.reference,
          Car : selectedCAr,
          Date: new Date().getTime()
        }

        props.setSharing(donnees);
    
      }
    } catch (error) {
      console.log('Error =>', error);
    }
  };
    return ( 
      <>
      <SafeAreaView style={styles.container}>

      <View style={styles.userInfoSection}>
          <View style={styles.profileTopIcons}>
              <View style={styles.profileHomeButtons}>
                <View style = {styles.menu}>
                  <Icon name="home" color={color.white} size={18}/>
                  <Text style = {styles.menuText}>Louer</Text>
                </View>
                <View style = {[styles.menu, {marginLeft: 15}]}>
                  <Icon name="windows" color={color.white} size={18}/>
                  <Text style = {styles.menuText}>Services</Text>
                </View>
              </View>

              <TouchableOpacity>
                <View>
                  <Icon name="bell" color={color.white} size={18}/>
                </View>
                <Text style = {styles.notifNumber}></Text>
              </TouchableOpacity>
          </View>

          <View style={styles.profile}>
              {/* <Text style = {styles.profileText}>Profile</Text> */}
              <View style={styles.profileImage}>
                <Image
                source = {require('../../../assets/images/profile_icons/user.png')}

                resizeMode = "contain"
                style = {{
                    width: 25,
                    height: 25,
                    tintColor: color.white,
                   
                }}
                />
              </View>
              {current_user && (<View style = {styles.info}>
                <Text style = {styles.infoItem}>{current_user.firstname} {current_user.lastname}</Text>
                <Text style = {styles.separator}>|</Text>
                <Text style = {styles.infoItem}>{current_user.phone.replace('00', '+')}</Text>
              </View>)}
          </View>
      </View>

 
      <View style = {styles.statistics}>
            <View style = {styles.statisticItem}>
                <View style = {styles.statisticICon}>
                  <Icon name = 'money-bill' size = {20} color = {color.primary} />
                </View>

                <View style = {styles.statisticWrapper}>
                    <Text style = {[styles.statsTitle]}>Gains</Text>
                    <Text style = {[styles.statsValue, {color: color.primary}]}>150K FCFA</Text>
                </View>
            </View>

            <View style = {styles.statisticItem}>
                <View style = {styles.statisticICon}>
                  <Icon name = 'money-bill' size = {20}  color = 'red' />
                </View>

                <View style = {styles.statisticWrapper}>
                    <Text style = {styles.statsTitle} >Gains</Text>
                    <Text style = {[styles.statsValue, {color: 'red'}]}>150K FCFA</Text>
                </View>
            </View>

            
      </View>

      
      <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        showsVerticalScrollIndicator ={false}
        showsHorizontalScrollIndicator={false}
      />

    </SafeAreaView>

    <Modal 
    animationType="fade"
    fullScreen = {false}
    visible={visible}
    transparent={true}>
    <ImageViewer 
    backgroundColor = 'rgba(0, 0, 0, 0.5)'
    enableImageZoom = {true}
    imageUrls={imagesData}
    />

    <TouchableOpacity
    style = {styles.close}
    onPress = {close}
    >
      <Text style = {{color: color.white}}>
        <Icon name = 'times' />
      </Text>
    </TouchableOpacity>
    </Modal>

    <GestureRecognizer
        onSwipeUp={ () => setVisibleCommentModal(true) }
        onSwipeDown={ () => setVisibleCommentModal(false) }
        config={config}
        style={{
          flex: 1,
          backgroundColor: color.primary
        }}
        >
        <Modal
            animationType="slide"
            presentationStyle="formSheet"
            transparent={false}
            visible={commentModalvisible}
            onRequestClose={() => {onClose()}}
          >

          <View style={styles.centeredView}>
            
            
            <View style = {{padding : 15,marginBottom: 60}}>

              <ScrollView 
              showsHorizontalScrollIndicator = {false}
              showsVerticalScrollIndicator = {false}
              >

                  {selectedComments.map((c,i) => {
                    const profile = profiles.filter(p => p.reference === c.User)[0]
                    return (
                      <View style = {style.commentSide}>
                      <View style = {style.commentItem} key = {i}>
                    
                        <View style = {style.commentText}>
                          <Text style = {styles.commentUser}>
                          {`${profile.lastname} ${profile.firstname}`} - <Text style = {style.commentDate}>{longToDate(c.UpdateDate)}</Text>
                          </Text>
                          <Text style = {{fontFamily : 'CaviarDreams'}}>{c.Note} </Text>
                        </View>
                      </View> 
                      
                      </View>
                    )
                  }) }

                
              </ScrollView>

            </View>

            <View style = {styles.commentBox}>
              <TextInput
              multiline
              style={styles.input}
              value = {note}
              onChangeText={(value) => {setNote(value)}}
              placeholder="Votre commentaire..."
            />

            <TouchableOpacity
             style = {styles.send}
             onPress = {() => {comment()}}
             >
              <Text
              >
                {!loading && <Ionicon name = 'send' size = {21} color = {color.primary} />}
                {loading && <ActivityIndicator size = {20} color = {color.primary}/>}
              </Text>
            </TouchableOpacity>
            </View>
          </View>
          </Modal>

          <Modal
            animationType="slide"
            transparent={true}
            visible={ratingModalvisible}
            onRequestClose={() => {onRatingsClose()}}
          >


        <View style={styles.centeredView2}>
          <StarRating
          fullStarColor	 = {color.primary}
            disabled={false}
            maxStars={5}
            rating={starCount}
            selectedStar={(rating) => setStarCount(rating)}
          />
          <TouchableOpacity
             onPress = {() => {rate()}}
             style = {{width : "100%"}}
             >
              <CustomButton
         
              primary
              title="Noter"
            />
            </TouchableOpacity>
          </View>
          </Modal>
          </GestureRecognizer>
    </>
    );
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

export default connect(mapStateToProps, mapDispatchToProps)( ownerProfile );