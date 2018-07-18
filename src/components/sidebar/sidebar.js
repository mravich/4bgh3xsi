import React from 'react';
import SideBarMenuItem from './sidebarMenuItem'
export default ({menuItems}) => {
    function renderSidebarMenuItems(){
        return menuItems.map((item, key)=>{
           return  <SideBarMenuItem menuItem={item} key={key}/>
        })
    }
    return <div className="container sideBar" >
        <div className="row">
            <div className="col-sm-12 col-md-12">
                <div className="panel-group" id="accordion">
                    {renderSidebarMenuItems()}
                </div>
            </div>
        </div>
    </div>;
};
