import React, {useState} from 'react';
import Allnav from './Allnav';
import AllnavEng from './english-view/AllnavEng';
import NavbarEng from './english-view/NavbarEng';
import TopnavEng from './english-view/TopnavEng';
import Topnav from './frontend/Topnav';
import Footer from './Footer';
import Navbar from './frontend/Navbar';
import BanglaView from './AllViews/BanglaView';




const Layout2 = ({children}) => {

  const [view, setView] = useState(true);
  const handleChangeVersion = () => {
    setView(!view);
  }


  const banglaVersion = () => {
    return (
      <>
        
        <div className='container'>
         
          <Allnav/>
          <Navbar onNavButtonClick={handleChangeVersion}/>
            {children}
        </div>
        <Footer/>
      </>
    );
  }



  const englishVersion = () => {
    return (
      <>
        
        <div className='container'>
         
          <AllnavEng/>
          <NavbarEng onNavButtonClick={handleChangeVersion}/>
            {children}
        </div>
        <Footer/>
      </>
    );
  }

  return (
    
  <>
  {/* <div className='container'>
    {children} */}
    {view ? banglaVersion() : englishVersion()}
    {/* </div> */}
  </>
  
  )
};

export default Layout2;