import React from 'react'
import Link from 'next/link'
import {API} from '../../config'
import Gallery from '../../components/admin/Gallery'
import StyleLinks from '../../components/StyleLinks'

const gallery = ({images}) => {

  
  return (
  <>
 
  <Gallery images={images}/>
  <StyleLinks/>
  </>
  )
}

export const getServerSideProps = async () => {
    const photos = await fetch(`${API}/posts`);
    const images = await photos.json();
    return {
        props: {
        images
        }
    }
}

export default gallery