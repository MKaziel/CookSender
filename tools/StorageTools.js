import AsyncStorage from "@react-native-async-storage/async-storage";

export default class StorageTools {

    constructor() {}

    storeStrData = async (value, storage_key) => {
        try {
            await AsyncStorage.setItem(storage_key, value);
        } catch (e) {
            console.error(e);
        }
    };

    storeObjectData = async (value, storage_key) => {
        try {
            const jsonValue = JSON.stringify(value);
            await AsyncStorage.setItem(storage_key, jsonValue);
        } catch (e) {
            console.error(e);
        }
    };

    getStrData = async (storage_key) => {
        try {
            const value = await AsyncStorage.getItem(storage_key);
            if (value !== null) {
                return value
            }
            return null
        } catch (e) {
            console.error(e);
        }
    };

    getObjectData = async (storage_key) => {
        try {
            const jsonValue = await AsyncStorage.getItem(storage_key);
            return jsonValue != null ? JSON.parse(jsonValue) : null;
        } catch (e) {
            console.error(e);
        }
    };

    getColorsChatData = async () => {
        try {
            const jsonValue = await AsyncStorage.getItem("colorChatStorage");
            return jsonValue != null ? JSON.parse(jsonValue) : null;
        } catch (e) {
            console.error(e);
        }
    };

    deleteItem = async (key) => {
        try {
            await AsyncStorage.removeItem(key)
        } catch (error) {
            console.error(error);
        }
    }

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
