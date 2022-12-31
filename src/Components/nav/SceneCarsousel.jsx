import React from 'react'
import image1  from './sceneImages/image1.jpg'
import image2  from './sceneImages/image2.jpg'
import image3  from './sceneImages/image3.jpg'
import image4  from './sceneImages/image4.jpg'
import image5  from './sceneImages/image5.jpg'
import '../../App.css'

const SceneCarsousel = () => {
  return (
    <div className='content'>
      <div  className='objectif-title'> Veuillez sélectionner une scène : </div>
      <div className='image-container'> 
      <img src={image1}/>
      <img src={image2}/>
      <img src={image3}/>
      <img src={image4}/>
      <img src={image5}/>
      </div>
    </div>
  )
}

export default SceneCarsousel
