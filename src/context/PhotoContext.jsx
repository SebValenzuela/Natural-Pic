import { createContext, useState, useEffect } from "react"

export const PhotoContext = createContext() 

const PHOTO_URL = "/photos.json"

const PhotoProvider = ({children}) => {
    const [ photos, setPhotos ] = useState([])
    const getPhotos = async () => {
        try {
            const response = await fetch(PHOTO_URL)
            const {photos:photosData} = await response.json()
            setPhotos(photosData)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect( () => {
        getPhotos()
    }, [])
    return <PhotoContext.Provider value={{setPhotos, photos}}>
        {children}
    </PhotoContext.Provider>
}

export default PhotoProvider