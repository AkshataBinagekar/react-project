import React from 'react'
import Page from './Page'
import pages from '../pages'

const Sidebar = () => {
  return (
    <div>
      {pages.map((page)=>(
        <Page icon={page.icon} title={page.title}/>
      ))}
    </div>
  )
}

export default Sidebar;
