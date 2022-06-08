import Link from "next/link";
import styled from "styled-components";
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';


const Wrapper = styled.div`
    margin-left: 0px;
    margin-right: 0px;
    height: 35px;
    display:flex;
    border-bottom: 1px solid #C0C0C0;
    font-size: 14px;
`;

const Dateset = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
    text-aligh: center;
    margin-left: 17px;
    font-weight: bold;
    background-color: #F8F8FF;
`;

const Topmid = styled.div`
    flex: 4;
    display:flex;
    align-items: center;
    margin-left: 10px;
    font-weight: bold;
    color: #4682B4;
`;

const Socialmini = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    margin-right: 17px;
`;

const TopnavEng = () => {
   
    const monthNames = ["January", "February", "March", "April", "May", "June","July", "Augast", "September", "October", "November", "December"];
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    
    let today = new Date();
    let date =''+''+today.getDate()+'-'+monthNames[(today.getMonth())]+'-'+today.getFullYear();
    let dayName = days[today.getDay()];


   
  return (
    
      <>
        <Wrapper>
            
                <Dateset>
                    {dayName},&nbsp;&nbsp;{date} 
                </Dateset>
                      
                <Topmid>
                    <Link href="/site-pages/about">About Us</Link>&nbsp;&nbsp;&nbsp;
                    <Link href="/site-pages/contact">Contact</Link>
                </Topmid>

                <Socialmini>
                    <Link href="https://facebook.com"><a><FacebookRoundedIcon/></a></Link>&nbsp;&nbsp;&nbsp;
                    <Link href="https://twitter.com"><a><TwitterIcon/></a></Link>&nbsp;&nbsp;&nbsp;
                    <Link href="https://youtube.com"><a><YouTubeIcon/></a></Link>
                </Socialmini>
               
        </Wrapper>
      </>
  );
};

export default TopnavEng;
