import { Avatar } from '@mui/material'
import React from 'react'
import './Sidebar.css'

function Sidebar() {

    const recentItems = (topic) => (
        <div className="sidebar_recentItem">
            <span className='sidebar_hash'>#</span>
            <p>{topic}</p>
        </div>
    )


  return (
    <div className='sidebar'>
        <div className="sidebar_top">
            <img src="https://images.unsplash.com/photo-1660939066978-28d45ec6e7a1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" alt="" />
            <Avatar></Avatar>
            <h2>Santhosh D</h2>
            <h4>santhoshdayakar2002@gmail.com</h4>
        </div>
        <div className="sidebar_stats">
            <div className="sidebar_stat">
                <p>No of Posts:</p>
                <p className='sidebar_statNumber'>123</p>
            </div>
            <div className="sidebar_stat">
                <p>No of Followers:</p>
                <p className='sidebar_statNumber'>456</p>
            </div>
        </div>
        <div className="sidebar_bottom">
            <p>Recents</p>
            {recentItems("Gaming")}
            {recentItems("Programming")}
            {recentItems("Artificial Intelligence")}
            {recentItems("RTX")}
            {recentItems("4090Ti")}
        </div>
    </div>
  )
}

export default Sidebar