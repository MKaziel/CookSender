import AsyncStorage from "@react-native-async-storage/async-storage";

export default function StorageTools() {

    const storeStrData = async (value, storage_key) => {
        try {
            await AsyncStorage.setItem(storage_key, value);
        } catch (e) {
            // saving error
        }
    };

    const storeObjectData = async (value, storage_key) => {
        try {
            const jsonValue = JSON.stringify(value);
            await AsyncStorage.setItem(storage_key, jsonValue);
        } catch (e) {
            // saving error
        }
    };

    const getStrData = async (storage_key) => {
        try {
            const value = await AsyncStorage.getItem(storage_key);
            if (value !== null) {
                // value previously stored
            }
        } catch (e) {
            // error reading value
        }
    };

    const getObjectData = async (storage_key) => {
        try {
            const jsonValue = await AsyncStorage.getItem(storage_key);
            return jsonValue != null ? JSON.parse(jsonValue) : null;
        } catch (e) {
            // error reading value
        }
    };
}
