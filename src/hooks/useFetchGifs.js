import { useEffect, useState } from "react";
import { getGifs } from '../helpers/getGifs';


export const useFetchGifs = ( category ) => {
    const [loading, setLoading] = useState(true);
    const [images, setimages] = useState([]);

    const getImages = async () => {
      const newImages = await getGifs(category);
      setimages(newImages);
      setLoading(false);
    }; 
  
    useEffect(() => {
      getImages();
    }, []);

      
    return{
        images,
        loading,
    }
}
