import * as firebase from 'firebase'
import {CONFIG_SERVEUR} from '../config'


class Fire {
    constructor(){
        this.init()
        this.checkAuth()
    }

    //Authentification à la base firebase
    checkAuth = () => {
        firebase.auth().onAuthStateChanged(user => {
            if(!user ){
                firebase.auth().signInAnonymously()
            }
        })
    }
    // observAuth = () =>{
    //     firebase.auth().onAuthStateChanged(this.onAuthStateChanged)
    // }

    send = messages => {
        messages.forEach(item => {
            const message = {
                text: item.text,
                timestamp: firebase.database.ServerValue.TIMESTAMP,
                user: item.user
            }
            this.db.push(message)
        })
    }

    parse = message => {
        const {user, text, timestamp} = message.val()
        const {key: _id} = message
        const createdAt = new Date(timestamp)

        return {
            _id,
            createdAt,
            text,
            user
        }
    }

    get = (callback) => {
        this.db.on('child_added', snapshot => callback(this.parse(snapshot)))
    }

    off(){
        this.db.off()
    }

    get db(){
        return firebase.database().ref("messages")
    }

    get uid(){
        return (firebase.auth().currentUser || {}).uid
    }


    //Définition des paramètres de connexion à Firebase
    init = () =>{
        if(!firebase.apps.length){
            firebase.initializeApp ({
                apiKey: CONFIG_SERVEUR.apiKey,
                authDomain: CONFIG_SERVEUR.authDomain,
                databaseURL: CONFIG_SERVEUR.databaseURL,
                projectId: CONFIG_SERVEUR.projectId,
                storageBucket: CONFIG_SERVEUR.storageBucket,
                messagingSenderId: CONFIG_SERVEUR.messagingSenderId,
                appId: CONFIG_SERVEUR.appId,
                measurementId: CONFIG_SERVEUR.measurementId
            })

        }

    } 
}

//Fire.shared = new Fire()
export default new Fire()