import React, {useState, useEffect} from "react";
import { API } from '../../config';
import Link from 'next/link';
import styles from '../../styles/Tabs.module.css'



const PopulerNews = () => {

  const [last, setLastNews] = useState([]);

	// Latest news
	useEffect(() => {
		fetch(`${API}/eposts`).then((res)=>{return res.json()}).then((data)=>{setLastNews(data)})}, []); 


  return (
  <>
    <div className={styles.FirstTab}>
            {last && last.slice(0, 10).map((latest) =>
              <p><i className="fas fa-snowflake text-danger"></i>
                  <Link href={`/eblogs/${latest.slug}`}>
                    <a className="text-dark font-weight-normal">
                        {latest.title}
                    </a>
                  </Link>
                  <hr/>
              </p>
            )}
           
    </div>
    
  
  </>
  );
};
export default PopulerNews;