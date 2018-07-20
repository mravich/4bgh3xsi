import React from 'react';
import SideBarMenuItem from './sidebarMenuItem';
import {SIDEBAR_MENU_ITEMS} from '../../constants/index'
export default () => {
  function renderSidebarMenuItems() {
    return SIDEBAR_MENU_ITEMS.map((item, key) => {
      return <SideBarMenuItem menuItem={item} key={key} name={item} />;
    });
  }

  return (
    <div className="container sideBar">
      <div className="row">
        <div className="col-sm-12 col-md-12">
          <div className="panel-group" id="accordion">
            {renderSidebarMenuItems()}
          </div>
        </div>
      </div>
    </div>
  );
};
