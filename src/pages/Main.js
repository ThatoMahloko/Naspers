import React, { useState } from 'react';
import lab from '../api/lab.js';


function Main() {
    const [rack, setRack] = useState(1);
    const [_serialNumber, setSerialNumber] = useState('5002753');
    const [data, setData] = useState([]);
    
    function getdata(val) {
        console.log(val.target.value);
        setSerialNumber(val.target.value);
    }
  return (
    <>
            <form>
                <input
                    type="text"
                    id="fname"
                    name="firstname"
                    placeholder="Your name.."
                    onChange={getdata}
                />
                <input type="submit" value="Submit" />
            </form>
            {lab
                .filter((fil) => fil.SerialNumber == _serialNumber)
                .map((data) => {
                    return (
                        <div>
                            <div className="side_by_side">
                                <img
                                    src={data.ImageUrl}
                                    alt="decoder model"
                                    width="800"
                                    height="900"
                                />
                                <div style={{ display: 'flex' }}>
                                    <div style={{ margin: '30px' }}>
                                        <h2>Rack: {data.Rack}</h2>
                                        <h2>Slot: {data.Slot}</h2>
                                        <h2>Decoder Model: {data.DecoderModel}</h2>
                                        <h2>Current Project: {data.CurrentProject}</h2>
                                        <h2>Software Type: {data.SoftwareType}</h2>
                                        <h2>Country Code: {data.CountryCode}</h2>
                                    </div>
                                    <div style={{ margin: '30px' }}>
                                        <h2>XtraView: {data.Xtraview}</h2>
                                        <h2>XtraViewPair: {data.Xtraviewpair}</h2>
                                        <h2>SmartCard Number: {data.SmartcardNumber}</h2>
                                        <h2>Serial Number: {data.SerialNumber}</h2>
                                        <h2>CSSN Number: {data.CSSNNumber}</h2>
                                        <h2>Package: {data.Package}</h2>
                                    </div>
                                </div>

                                <div style={{ display: 'flex' }}>
                                    <div style={{ margin: '30px' }}>
                                        <h2>Active Products: {data.ActiveProducts}</h2>
                                        <h2>SCMS: {data.SCMS}</h2>
                                        <h2>Installation: {data.Installation}</h2>
                                        <h2>DTT or DTH: {data.DTTorDTH}</h2>
                                        <h2>Connection to internet: {data.Connectedtointernet}</h2>
                                        <h2>Code Upgrade: {data.CodeUpgrade}</h2>
                                        <h2>Date Reviewed: {data.DateReviewed}</h2>
                                        <h2>Comments: {data.Comments}</h2>
                                    </div>
                                </div>
                            </div>
                        </div>
                    );
                })}
        </>
  )
}

export default Main
