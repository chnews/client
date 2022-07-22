import styles from '../../styles/Layout.module.css'
import styled from 'styled-components';
import { useEffect, useState } from 'react';
import { API } from '../../config';
import SquareIcon from '@mui/icons-material/Square';
import Link from 'next/link';





const Scrollbar = () => {
    
    const [lastNews, setLastNews] = useState([]);

    useEffect(() => {
        fetch(`${API}/scroll`).then((res)=>{return res.json()}).then((data)=>{setLastNews(data)})}, []); 




  return (
      <>
       <div style={{margin: "0px 12px 0px 12px"}}>
            <div className="row">
                <div className="col-1 bg-dark">
                    <h6 className="text-white fw-bold pt-2">শিরোনাম</h6>
                </div>

                <div className="col-11 bg-danger">
                <marquee className="text-white fw-bold pt-1">
                    {lastNews && lastNews.slice(0, 5).map((last) =>
                            <Link href={`/blogs/${last?.slug}`}>
                               <span style={{cursor: "pointer"}}><SquareIcon fontSize='small'/>&nbsp;{last?.title}&nbsp;&nbsp;&nbsp;&nbsp;</span>
                            </Link>
                    )}
                </marquee>  
                
                </div>
            </div>
            </div>



        
      </>
  );
};

export default Scrollbar;
