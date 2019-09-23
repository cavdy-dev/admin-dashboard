import React from 'react'

export default function link({linkStyle, icon, name}) {
  // eslint-disable-next-line
  return <a href="#" className={linkStyle}><i className={icon}></i>{name}</a>
}
