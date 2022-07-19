import React from 'react'
import {API} from '../../config'

const gallery = ({images}) => {

    console.log(images)

    
  return (
  <>
    {images?.map((image) => 
        <div><img source={{uri: image.photo}} /></div>
    )}
  </>
  )
}

export const getServerSideProps = async () => {
    const photos = await fetch(`${API}/blog/images`);
    const images = await photos.json();
    return {
        props: {
        images
        }
    }
}

export default gallery