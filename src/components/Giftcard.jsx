import React from 'react'
import "./style.css"

const Giftcard = (props) => {
     //console.log(props.data)
  return (
        <div>
            <div  className="Amazon1">
                {props.data.map((data)=>{
                    console.log(data.color);
                    return (
                    <div key={data.id} style={{backgroundColor:data.color}}>
                        <div>
                            <p className='date'>{data.date}</p>
                            <button className='btn'>{data.casestudy}</button>
                            <h1>{data.heading}</h1>
                            <h1>{data.subheading}</h1>
                            <p>{data.devices}</p>
                        </div>
                        <div>
                            <img className="image" src={data.logo} alt="" />
                            <h1>→</h1>
                        </div>
                    </div>
                )})}
            </div>
        </div>
  )
}

export default Giftcard