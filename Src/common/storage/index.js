import AsyncStorage from '@react-native-community/async-storage';

export const storeData = async (data) => {

    await AsyncStorage.setItem(data.key, JSON.stringify(data.value))
}


export const getData = async (key) => {

    try {
        const value = await AsyncStorage.getItem(key)
        return {value: value};
    } 
    catch(e) 
    {
        return null;
    }
}