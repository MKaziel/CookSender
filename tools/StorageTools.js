import AsyncStorage from "@react-native-async-storage/async-storage";

export default class StorageTools {

    constructor() {}

    storeStrData = async (value, storage_key) => {
        try {
            await AsyncStorage.setItem(storage_key, value);
        } catch (e) {
            // saving error
        }
    };

    storeObjectData = async (value, storage_key) => {
        try {
            const jsonValue = JSON.stringify(value);
            await AsyncStorage.setItem(storage_key, jsonValue);
        } catch (e) {
            // saving error
        }
    };

    getStrData = async (storage_key) => {
        try {
            const value = await AsyncStorage.getItem(storage_key);
            if (value !== null) {
                // value previously stored
                return value
            }
            return null
        } catch (e) {
            // error reading value
        }
    };

    getObjectData = async (storage_key) => {
        try {
            const jsonValue = await AsyncStorage.getItem(storage_key);
            return jsonValue != null ? JSON.parse(jsonValue) : null;
        } catch (e) {
            // error reading value
        }
    };

    initColorStorage = async () => {
        const colors = [
            '#e67e229f', // carrot
            '#2ecc719f', // emerald
            '#3498db9f', // peter river
            '#8e44ad9f', // wisteria
            '#e74c3c9f', // alizarin
            '#1abc9c9f', // turquoise
          '#2c3e509f', // midnight blue
        ];
        try {
            let result = await AsyncStorage.getItem("colorChatStorage")
            if(result === null){
                const jsonValue = JSON.stringify(colors);
                await AsyncStorage.setItem("colorChatStorage", jsonValue);
            } else {
                return false
            }
            return true
        } catch (error) {
            
        }
        
    }
}
