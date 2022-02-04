import React, {useState, useEffect} from 'react';

export const NavMenu = ({setAirline}) => {
    const [toggleMenu, setToggleMenu] = useState(false);
    const [screenWidth, setScreenWidth] = useState(window.innerWidth);
    
   
    const toggleNav = () => {
        setToggleMenu(!toggleMenu)
      }
      const handleAirline = (name)=>{
        setAirline(name);
        toggleNav();
    }
    useEffect(() => {

        const changeWidth = () => {
          setScreenWidth(window.innerWidth);
        }
        
        window.addEventListener('resize', changeWidth)
        return () => {
            window.removeEventListener('resize', changeWidth)
        }
      }, [])
  const navItems = { 
    "aerolineas": [
        {
        "name":"Viva air",
         "id": "1"
        } ,
        {
        "name":"Avianca",
         "id": "2"
         },
         {
            "name":"Latam",
            "id": "3"
         },
         {
            "name":"Copa Airlines",
            "id": "4"
         }
         ]
   
    }
  return ( 
 
  <nav>
  {(toggleMenu || screenWidth > 920) && (
  <ul className="list">
      {
          navItems.aerolineas.map((aerolinea)=>{return(
            <li className="items"
             key={aerolinea.id}
             onClick={e =>handleAirline(aerolinea.name)}>
                 {aerolinea.name}
            </li> 
          )
           
          })
      }
  

  
</ul>
  )}
    
  <a onClick={toggleNav} className="btn"><i className="fa fa-bars fa-2x"></i></a>

</nav>


 

)
}


