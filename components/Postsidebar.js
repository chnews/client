import React from 'react';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { API } from '../config';
import HomeRightAds from './frontend/HomeRightAds';

const Postsidebar = () => {

	const [last, setLastNews] = useState([]);

	// Latest news
	useEffect(() => {
		fetch(`${API}/posts`).then((res)=>{return res.json()}).then((data)=>{setLastNews(data)})}, []); 
	  
  return (
      <>
                    <div className="col-lg-12 mt-3 panspd pl-0">
						<div className="border border-dark panspd">
							<ul className="nav nav-pills mb-3 justify-content-center justify-content-around" id="pills-tab" role="tablist">
								<li className="nav-item w-50 text-center" role="presentation">
									<a className="nav-link active text-dark strong" id="pills-home-tab" data-toggle="pill" href="#letest" role="tab" aria-controls="pills-home" aria-selected="true">সর্বশেষ</a>
								</li>
								<li className="nav-item w-50 text-center" role="presentation">
									<a className="nav-link text-dark" id=" pills-profile-tab"data-toggle="pill" href="#popular" role="tab" aria-controls="pills-profile" aria-selected="false">সর্বাধিক পঠিত</a>
								</li>
							</ul>
							<div className="tab-content" id="pills-tabContent">
								<div className="tab-pane fade show active" id="letest" role="tabpanel" aria-labelledby="pills-home-tab">
									{last && last.slice(0, 10).map((latest) => 
									
									<p className="border-bottom pb-1 px-4"><i className="fas fa-snowflake text-danger"></i>
										
											<Link href={`/blogs/${latest.slug}`}>
												<a className="text-dark font-weight-normal">
													
														{latest.title}
													
												</a>
											</Link>
										
									</p>
									
									)}
									

									 {/* <p className="border-bottom pb-1 px-4"><i className="fas fa-snowflake text-danger"></i><Link href={`/blogs/${last[1]?.slug}`}><a className="text-dark font-weight-normal">{last[1]?.title}</a></Link></p>
									<p className="border-bottom pb-1 px-4"><i className="fas fa-snowflake text-danger"></i><Link href={`/blogs/${last[2]?.slug}`}><a className="text-dark font-weight-normal">{last[2]?.title}</a></Link></p>
									<p className="border-bottom pb-1 px-4"><i className="fas fa-snowflake text-danger"></i><Link href={`/blogs/${last[3]?.slug}`}><a className="text-dark font-weight-normal">{last[3]?.title}</a></Link></p>
									<p className="border-bottom pb-1 px-4"><i className="fas fa-snowflake text-danger"></i><Link href={`/blogs/${last[4]?.slug}`}><a className="text-dark font-weight-normal">{last[4]?.title}</a></Link></p>
									<p className="border-bottom pb-1 px-4"><i className="fas fa-snowflake text-danger"></i><Link href={`/blogs/${last[5]?.slug}`}><a className="text-dark font-weight-normal">{last[5]?.title}</a></Link></p>
									<p className="border-bottom pb-1 px-4"><i className="fas fa-snowflake text-danger"></i><Link href={`/blogs/${last[6]?.slug}`}><a className="text-dark font-weight-normal">{last[6]?.title}</a></Link></p>
									<p className="border-bottom pb-1 px-4"><i className="fas fa-snowflake text-danger"></i><Link href={`/blogs/${last[7]?.slug}`}><a className="text-dark font-weight-normal">{last[7]?.title}</a></Link></p>
								   */}
									</div>
								<div className="tab-pane fade pl-3" id="popular" role="tabpanel" aria-labelledby="pills-profile-tab"> 
									<p className="pb-3 border-bottom pb-1 px-4"><i className="fas fa-snowflake pr-2 text-danger"></i><a className="text-dark font-weight-normal" href="#">চলমান ডেস্ক: নির্বাচন কমিশনে (ইসি) সচিব মো. হুমায়ুন কবীর খোন্দকার বলেছেন</a></p>
									<p className="pb-3 border-bottom pb-1 px-4"><i className="fas fa-snowflake pr-2 text-danger"></i><a className="text-dark font-weight-normal" href="#">চলমান ডেস্ক: নির্বাচন কমিশনে (ইসি) সচিব মো. হুমায়ুন কবীর খোন্দকার বলেছেন</a></p>
									<p className="pb-3 border-bottom pb-1 px-4"><i className="fas fa-snowflake pr-2 text-danger"></i><a className="text-dark font-weight-normal" href="#">চলমান ডেস্ক: নির্বাচন কমিশনে (ইসি) সচিব মো. হুমায়ুন কবীর খোন্দকার বলেছেন</a></p>
									<p className="pb-3 border-bottom pb-1 px-4"><i className="fas fa-snowflake pr-2 text-danger"></i><a className="text-dark font-weight-normal" href="#">চলমান ডেস্ক: নির্বাচন কমিশনে (ইসি) সচিব মো. হুমায়ুন কবীর খোন্দকার বলেছেন</a></p>
									<p className="pb-3 border-bottom pb-1 px-4"><i className="fas fa-snowflake pr-2 text-danger"></i><a className="text-dark font-weight-normal" href="#">চলমান ডেস্ক: নির্বাচন কমিশনে (ইসি) সচিব মো. হুমায়ুন কবীর খোন্দকার বলেছেন</a></p>
									<p className="pb-3 border-bottom pb-1 px-4"><i className="fas fa-snowflake pr-2 text-danger"></i><a className="text-dark font-weight-normal" href="#">চলমান ডেস্ক: নির্বাচন কমিশনে (ইসি) সচিব মো. হুমায়ুন কবীর খোন্দকার বলেছেন</a></p>
								</div>
							</div>
						</div>
					</div>

					<div className='col-lg-12 mt-2' style={{position: "-webkit-sticky", position: "sticky", top: "0"}}>
					
					<HomeRightAds/>
					
					</div>
      </>
  )
}

export default Postsidebar