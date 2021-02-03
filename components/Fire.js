import * as firebase from 'firebase'


class Fire {
    constructor(){
        this.init()

        this.observAuth()
    }

    //Authentification à la base firebase
    observAuth = () =>{
        firebase.auth().onAuthStateChanged(this.onAuthStateChanged)
    }

    //Précision de l'authentification anonyme
    onAuthStateChanged = user => {
        if(!user){
            try{
                firebase.auth().signInAnonymously()
            } catch ({message}){
                alert(message)
            }
        }
    }

    //Créer la référence à la base de données des "messages"
    get ref(){
        return firebase.database().ref('messages')
    }

    //Récupérer les 20 derniers messages et envoyé les nouveaux pour être traiter et afficher 
    on = callback => 
        this.ref
            .limitToLast(20)
            .on('child_added', snapshot => callback(this.parse(snapshot))) 
    
    //Fonction de définition d'un message pouvant être accepté par "GiftedChat"   
    parse = snapshot => {
        const {timestamp: numberStamp, text, user} = snapshot.val()
        const {key: _id} = snapshot
        
        const message = {
            _id,
            timestamp,
            text,
            user,
        }
        const timestamp = new Date(numberStamp)

        return message
    }

    //Fonction pour se déconnecter de la base
    off(){
        this.ref.off()
    }

    //récupérer le user id
    get uid(){
        return (firebase.auth().currentUser || {}).uid
    }

    //récupérer le timestamp pour sauvegarder les messages
    get timestamp(){
        return firebase.database.ServerValue.TIMESTAMP
    }

    //Fonction d'envoie du message
    send = messages => {
        for(let i = 0; i<messages.length; i++){
            const {text, user} = messages[i]
            const message = {
                text,
                user,
                timestamp: this.timestamp,
            }
            this.append(message)
        }
    }

    //append = message => this.ref.push(message)
    append = message => alert(message.user.name)


    //Définition des paramètres de connexion à Firebase
    init = () => firebase.initializeApp ({
        apiKey: "AIzaSyCBg_c3PPWobQJEoQcHz4-u490TDxEzDHk",
        authDomain: "cooksender.firebaseapp.com",
        databaseURL: "https://cooksender-default-rtdb.firebaseio.com",
        projectId: "cooksender",
        storageBucket: "cooksender.appspot.com",
        messagingSenderId: "150526770311",
        appId: "1:150526770311:web:c7c79613ea3b855431cc22",
        measurementId: "G-JHV569NN87"
    })
}

Fire.shared = new Fire()
export default Fire