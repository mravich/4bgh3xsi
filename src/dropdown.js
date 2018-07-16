import React, { Component } from 'react';
import {
  MenuItem,
  SplitButton
}

class dropdown extends Component {
  <SplitButton title="Dropdown right" pullRight id="split-button-pull-right">
<MenuItem eventKey="1">Action</MenuItem>
<MenuItem eventKey="2">Another action</MenuItem>
<MenuItem eventKey="3">Something else here</MenuItem>
<MenuItem divider />
<MenuItem eventKey="4">Separated link</MenuItem>
</SplitButton>;

}
export default dropdown;
