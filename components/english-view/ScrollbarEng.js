import styles from '../../styles/Layout.module.css'
import styled from 'styled-components';
import { useEffect, useState } from 'react';
import { API } from '../../config';
import SquareIcon from '@mui/icons-material/Square';
import Link from 'next/link';





const ScrollbarEng = () => {
    
    const [lastNews, setLastNews] = useState([]);

    useEffect(() => {
        fetch(`${API}/eposts`)
        .then((res)=>{
           return res.json()
        })
        .then((data)=>{
            setLastNews(data);
        })
    }, []);




  return (
      <>
       <div style={{margin: "0px 12px 0px 12px"}}>
            <div className="row">
                
                <div className="col-1 bg-dark px-2" >
                    <div className="bg-dark py-1 " >
                        <div className="text-white fw-bold" >Headlines</div>
                    </div>
                </div>
            

                <div className="col-11 bg-danger">
                    <div className="bg-danger py-1">
                    <marquee className="text-white fw-bold ">
                    <Link href={`/blogs/${lastNews[0]?.slug}`}>
                        <span style={{cursor: "pointer"}}><SquareIcon fontSize='small'/>&nbsp;{lastNews[0]?.title}&nbsp;&nbsp;&nbsp;&nbsp;</span>
                    </Link>
                    <Link href={`/blogs/${lastNews[1]?.slug}`}>
                        <span style={{cursor: "pointer"}}><SquareIcon fontSize='small'/>&nbsp;{lastNews[1]?.title}&nbsp;&nbsp;&nbsp;&nbsp;</span>
                    </Link>
                    <Link href={`/blogs/${lastNews[2]?.slug}`}>
                        <span style={{cursor: "pointer"}}><SquareIcon fontSize='small'/>&nbsp;{lastNews[2]?.title}&nbsp;&nbsp;&nbsp;&nbsp;</span>
                    </Link>
                    <Link href={`/blogs/${lastNews[3]?.slug}`}>
                        <span style={{cursor: "pointer"}}><SquareIcon fontSize='small'/>&nbsp;{lastNews[3]?.title}&nbsp;&nbsp;&nbsp;&nbsp;</span>
                    </Link>
                    <Link href={`/blogs/${lastNews[4]?.slug}`}>
                        <span style={{cursor: "pointer"}}><SquareIcon fontSize='small'/>&nbsp;{lastNews[4]?.title}&nbsp;&nbsp;&nbsp;&nbsp;</span>
                    </Link>
                    <Link href={`/blogs/${lastNews[5]?.slug}`}>
                        <span style={{cursor: "pointer"}}><SquareIcon fontSize='small'/>&nbsp;{lastNews[5]?.title}&nbsp;&nbsp;&nbsp;&nbsp;</span>
                    </Link>
                       
                    </marquee>
                    </div>
                </div>
            </div>
         
            </div>


        
      </>
  );
};

export default ScrollbarEng;
