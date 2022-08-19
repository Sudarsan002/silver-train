import React from 'react'

export default function Header() {
    return (
        <div style={{backgroundColor:"rgba(141, 25, 255, 0.7)"}}>
    
          <h1 style={{textAlign:'center',fontSize:'48px',fontVariant:'Helvetica',fontWeight:'700',color:'#FFFFFF'}}>INCRESCO TECHNOLOGIES</h1>
          <h2 style={{textAlign:'center',fontSize:'36px',fontVariant:'Helvetica',fontWeight:'700',color:'#FFFFFF'}}>CAMPUS HIRING-2023</h2>
          <title style={{textAlign:'left',fontSize:'48px',fontVariant:'Helvetica',fontWeight:'700',color:'#000000'}}>
            Registration form
          </title>
        </div>
    )
}
// export default function (props) {
//     const {color,paddingHorizontal=65,paddingVertical=15,backgroundColor='#FFFFFF',border='1px solid #8D19FF',label='INCRESCO TECHNOLOGIES'} = props
//   return (
//     <div style={{display:'flex',marginBottom:10}}>
//         //<div style={{padding:`${paddingVertical}px ${paddingHorizontal}px`,background:backgroundColor,borderRadius:13,alignItems:'center',justifyContent:'center',display:'flex',border}}>
//             <div>{label}</div>
//         </div>
//         <></>
//     </div>
//   )
// }