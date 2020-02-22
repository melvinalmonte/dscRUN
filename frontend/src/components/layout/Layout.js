import React from 'react'
import SideBar from '../sidebar'

export const Layout = props => (
    <div className="columns layout-base">
        <div className="column side-bar">
        <SideBar/>
        </div>
        <div className="column is-11">
            {props.children}
        </div>
    </div>
)