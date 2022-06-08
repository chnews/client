import React, { useState, useEffect } from "react";
import { API } from '../../config';

function Poll() {  
    const [voteData, setVoteData] = useState();
    const [totalVotes, setTotalVotes] = useState(0);
    const [voted, setVoted] = useState(false);

    const url = `${API}/poll`;
    // const url2 = `${API}/add-poll`;
    useEffect(() => {
    fetch(url)
        .then((response) => response.json())
        .then((data) => {
        setVoteData(data);
        let sum = 0;
        data.forEach(function (obj) {
            sum += obj.votes;
        });
        setTotalVotes(sum);
        });
    }, []);



    const submitVote = (e) => {
        if(voted === false) {
          const voteSelected = e.target.dataset.id;
          const voteCurrent = voteData[voteSelected].votes;
          voteData[voteSelected].votes = voteCurrent + 1;
          setTotalVotes(totalVotes + 1);
          setVoted(!voted);
          const options = {
            method: "POST",
            body: JSON.stringify(voteData),
            headers: { "Content-Type": "application/json" },
          };
          fetch(url, options)
            .then((res) => res.json())
            .then((res) => console.log(res));
        }
      };


      let pollOptions;
        if (voteData) {
        pollOptions = voteData.map((item) => {
            return (
              <>
           <span key={item.id}>
                <span className="btn border rounded-3 w-100" onClick={submitVote} data-id={item.id}>
              
            <span className="float-start">&nbsp; {item.option}</span><span className='float-end'>{item.votes}</span><br/>
                {/* {item.option}
                <span>- {item.votes} </span> */}
                </span>          
            </span> 
            {/* <div key={item.id}>
            <span onClick={submitVote} data-id={item.id}>
            <div className='border rounded-3 px-2'>
            <input type="radio" id="yes" name="vote" value="yes"/>
            <span for="yes">&nbsp; {item.option}</span><span className='float-end'>{item.votes}</span><br/>
            </div>
            </span> 
            </div> */}
            </>
            );
        });
        }


        return (
          <>
            <div className="poll">
              <ul className={voted ? "results" : "options"}>
                {pollOptions}
              </ul>
              {/* <p>Total Votes: {totalVotes}</p> */}
            </div>

            {/* <form>
                      
                        <div className='border rounded-3 px-2'>
                            <input type="radio" id="yes" name="vote" value="yes"/>
                            <label for="yes">&nbsp;  হ্যাঁ</label><span className='float-end'>29%</span><br/>
                        </div>
                        <div className='border rounded-3  mt-2 px-2'>
                          <input type="radio" id="no" name="vote" value="no"/>
                          <label for="no">&nbsp;  না</label><span className='float-end'>29%</span><br/>
                        </div>
                        <div className='border rounded-3 mt-2 px-2'>
                          <input type="radio" id="nocomments" name="vote" value="nocomments"/>
                          <label for="nocomments"> &nbsp; মন্তব্য নাই</label><span className='float-end'>29%</span>
                        </div>

                        <div className='col-lg-12 '>
                          <button className='btn rounded-pill btn-primary float-end px-4 mt-2' type="submit">Vote</button>  
                        </div>  
                      
                      </form>  */}



{/* <nav className="sb-sidenav accordion sb-sidenav-light" id="sidenavAccordion">
  <div className="sb-sidenav-menu">
    <div className="nav">
      <div className="sb-sidenav-menu-heading">Core</div>
      <a className="nav-link" href="index.html">
        <div className="sb-nav-link-icon">
          <i className="fas fa-tachometer-alt" />
        </div>
        Dashboard
      </a>
      <li className="nav-item dropdown">
        <a
          className="nav-link dropdown-toggle"
          href="#"
          id="navbarDropdown"
          role="button"
          data-toggle="dropdown"
          aria-haspopup="true"
          aria-=""
          expanded="falbse"
        >
          Layouts
        </a>
        <div className="dropdown-menu" aria-labelledby="navbarDropdown">
          <a className="dropdown-item" href="#">
            Static Navigation
          </a>
          <a className="dropdown-item" href="#">
            Light Sidenav
          </a>
        </div>
      </li>
    </div>
  </div>
</nav> */}

                      </>
          );
}
export default Poll;