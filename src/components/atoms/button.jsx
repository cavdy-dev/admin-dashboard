import React from 'react';

export default function button({buttonStyle, value}) {
  return <button className={buttonStyle}>{value.toUpperCase()}</button>
}
