import { initializeApp } from "firebase/app"
import {collection, doc, getDoc, getDocs, getFirestore, query, where} from "firebase/firestore/lite"

const firebaseConfig = {
  apiKey: "AIzaSyCIXQ0SN-_GkfISeJytnERGvJ9ZgDfhSk4",
  authDomain: "van-life-84536.firebaseapp.com",
  projectId: "van-life-84536",
  storageBucket: "van-life-84536.appspot.com",
  messagingSenderId: "869087020626",
  appId: "1:869087020626:web:d0efe433fe2bee3f0e018b"
}

const app = initializeApp(firebaseConfig)
const db = getFirestore(app)
const vansCollectionRef = collection(db,'vans')

export async function getVans(){

    const snapshot = await getDocs(vansCollectionRef)
    return(
        snapshot.docs.map(doc=>{
            return {
                ...doc.data(),
                id:doc.id
            }
        })
    )

    
}


export async function getVan(id){
    const docRef = doc(db,'vans',id)
    const snapshot = await getDoc(docRef)
    return {
        ...snapshot.data(),
        id:snapshot.id
    }

}


export async function getHostVans(hostId){

    const q = query(vansCollectionRef,where('hostId','==',hostId))
    const snapshot = await getDocs(q)
    return(
        snapshot.docs.map(doc=>{
            return {
                ...doc.data(),
                id:doc.id
            }
        })
    )
}