import React from 'react';
import Item from './item'
export default ({properties}) => {
    function renderSidebarItems(){
        return properties.map((item)=>{
           return  <Item id={item}/>
        })
    }
    return <div className="container sideBar" >
        <div className="row">
            <div className="col-sm-12 col-md-12">
                <div className="panel-group" id="accordion">
                    {renderSidebarItems()}
                </div>
            </div>
        </div>
    </div>;
};
