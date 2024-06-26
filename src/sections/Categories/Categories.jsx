import CategoriesCard from '../../components/CategoriesCard'
import Categoriesmobile from '../../components/Categoriesmobile'
import { categoryData } from '../../constants'
import { categoryData1 } from '../../constants';
import { categoryData2 } from '../../constants';
import {categoryMobile} from '../../constants';
import {categoryMobile1} from '../../constants';
import {categoryMobile2} from '../../constants';
import './Categories.css'
import { AiOutlineLineChart } from "react-icons/ai";
import { BiSelectMultiple } from "react-icons/bi";
import { IoPricetagOutline } from "react-icons/io5";
import { GrUserExpert } from "react-icons/gr";
import { Link } from 'react-router-dom';


const Categories = () => {
  return (
    <>
    
 <section id="categories">

  <div className="title">
    <h2>Our Products</h2>
    </div>

    <div className="row">
      <div className="col-md-4">
    <div className="categories-container container">
      {
        categoryData.map((category) => (
          <Link to='/Products'><CategoriesCard key={category.imgURL} {...category} /></Link>
        )) 
      }
 
</div>
<div className="hoses">
<Link to='/Products'><p className="headerr">Packing Items</p></Link>
</div>
    </div>
    
    <div className="col-md-4">
    <div className="categories-container container">
      {
        categoryData1.map((category1) => (
          <Link to='/Yibco tools'><CategoriesCard key={category1.imgURL} {...category1} /></Link>
        )) 
      }
         </div>
         <div className="hoses1">
         <Link to='/Yibco tools'><p className="headerr">Yibco Tools</p></Link>
         </div>
    </div>

    <div className="col-md-4">
    <div className="categories-container container">
      {
        categoryData2.map((category2) => (
          <Link to='/Hoses'><CategoriesCard key={category2.imgURL} {...category2} /></Link>
        )) 
      }
    
  </div>
  <div className="hoses3">
  <Link to='/Hoses'><p className="headerr">Hoses</p></Link>
  </div>
    </div>
    
</div>
    <div className='services'>
    <h2>Why Choose Us?</h2>
   <p>We source our packing items from trusted suppliers to ensure exceptional quality and reliability,
    Enjoy competitive prices without compromising on quality, making packing affordable for everyone 
    Our knowledgeable team is here to provide expert advice and guidance to help you find the perfect 
    packing solutions for your specific needs.</p>
    <div className='service-container'>
     <div className="service-card">
    <i className='line-chart'><AiOutlineLineChart /></i>
    <h4>Quality Assurance</h4>
     </div>

     <div className="service-card">
    <i className='line-chart'><BiSelectMultiple /></i>
    <h4>Wide Selection</h4>
     </div>

     <div className="service-card">
    <i className='line-chart'><IoPricetagOutline /></i>
    <h4>Competitive Pricing</h4>
     </div>
     
     <div className="service-card">
    <i className='line-chart'><GrUserExpert /></i>
    <h4>Expert Advice</h4>
     </div>
     </div>
    </div>
    <div className='services10'>
      <h2><span className="banner6">Need our packing products? </span> Contact Now </h2>
      </div>
    
 </section>
 

 <section id="categoriesmobile">

  <div className="title-mobile">
    <h2>Our Products</h2>
    </div>

    <div className="row-mobile">
      <div className="col-md-4">
    <div className="categories-containers container">
      {
        categoryMobile.map((mobile) => (
          <Link to='/Products'><Categoriesmobile key={mobile.imgURL} {...mobile} /></Link>
        )) 
      }
 
</div>
<div className="mobile-hoses">
<Link to='/Products'><p className="header1">Packing Items</p></Link>
</div>
    </div>
    
    <div className="col-md-4">
    <div className="categories-containers container">
      {
        categoryMobile1.map((mobile1) => (
          <Link to='/Yibco tools'><Categoriesmobile key={mobile1.imgURL} {...mobile1} /></Link>
        )) 
      }
         </div>
         <div className="mobile-hoses1">
         <Link to='/Yibco tools'><p className="header1">Yibco Tools</p></Link>
         </div>
    </div>

    <div className="col-md-4">
    <div className="categories-containers container">
      {
        categoryMobile2.map((mobile2) => (
          <Link to='/Hoses'><Categoriesmobile key={mobile2.imgURL} {...mobile2} /></Link>
        )) 
      }
    
  </div>
  <div className="mobile-hoses2">
  <Link to='/Hoses'><p className="header1">Hoses</p></Link>
  </div>
    </div>
    
</div>
    <div className='servicesmobile'>
    <h2>Why Choose Us?</h2>
   <p>We source our packing items from trusted suppliers to ensure exceptional quality and reliability,
    Enjoy competitive prices without compromising on quality, making packing affordable for everyone 
    Our knowledgeable team is here to provide expert advice and guidance to help you find the perfect 
    packing solutions for your specific needs.</p>
    <div className='service-mobile'>
     <div className="service-card9">
    <i className='line-chart'><AiOutlineLineChart /></i>
    <h4>Quality Assurance</h4>
     </div>

     <div className="service-card9">
    <i className='line-chart'><BiSelectMultiple /></i>
    <h4>Wide Selection</h4>
     </div>

     <div className="service-card9">
    <i className='line-chart'><IoPricetagOutline /></i>
    <h4>Competitive Pricing</h4>
     </div>
     
     <div className="service-card9">
    <i className='line-chart'><GrUserExpert /></i>
    <h4>Expert Advice</h4>
     </div>
     </div>
    </div>
    </section>

    
 </>
  )
}
export default Categories