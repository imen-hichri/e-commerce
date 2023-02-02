
import React from 'react'
import { Categorie } from '../applidore/Appcategories'
import Category from './Category'

const Categories = () => {
  return (
    <div className="flex justify-between items-center p-5">
       {
        Categorie.map((category, index) => {

          return <Category item = {category} key = {index}/>

}
        )
       }
    </div>
  )
}

export default Categories