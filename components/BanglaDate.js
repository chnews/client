import React from 'react'

const BanglaDate = () => {
  return (
    <>
    
    <div id="app">
  <div className="leyout">
    <div className="box-title">
      <span>English to Bangla Date Converter</span>
    </div>
    <div className="inputbox">
      <input placeholder="Select your Date" type="date" id="indate" />
    </div>
    <div className="dateeng">
      <span d-text="dateEn.day" />
      <span d-text="dateEn.date" />
      <span d-text="dateEn.month" />
      <span d-text="dateEn.year"></span>
    </div>
    <div className="datebng">
      <div className="">
        <span d-text="dateBd.day" />
        <span d-text="dateBd.date" />
        <span d-text="dateBd.month" />
        <span d-text="dateBd.year"></span>
      </div>
      <div>
        <span d-text="dateBd.session"></span>
      </div>
    </div>
  </div>
</div>

    </>
  )
}

export default BanglaDate