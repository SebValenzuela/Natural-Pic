    import { createContext, useState, useEffect } from "react";

    const PHOTO_URL = "./../public/photos.json";

    export const PhotosContext = createContext()

    const MyPhotosContextProvider = ({children})=> {
        const [photos, setPhotos] = useState([])

        const getThePhotos = async () => {
            const response = await fetch(PHOTO_URL);
            const{photos:photosPexels} = await response.json()
            setPhotos(photosPexels.map((photo) => ({...photo, esFavorita:false})))
        }

        useEffect(() => {
            getThePhotos();
        }, []);

        return (
            <PhotosContext.Provider value={{ photos, setPhotos }}>
                {children}
            </PhotosContext.Provider>
        )
    }

    export default MyPhotosContextProvider