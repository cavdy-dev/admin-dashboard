import React from 'react';

export default function input({inputStyle, value}) {
  return <input type="text" className={inputStyle} placeholder={value}/>
}
