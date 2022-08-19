import React from 'react'

export default function Button(props) {
    const {color,paddingHorizontal=65,paddingVertical=15,backgroundColor='#FFFFFF',border='1px solid #8D19FF',label='Button'} = props
  return (
    <div style={{display:'flex',marginBottom:10}}>
        <div style={{padding:`${paddingVertical}px ${paddingHorizontal}px`,background:backgroundColor,borderRadius:13,alignItems:'center',justifyContent:'center',display:'flex',border}}>
            <div>{label}</div>
        </div>
        <></>
    </div>
  )
}
