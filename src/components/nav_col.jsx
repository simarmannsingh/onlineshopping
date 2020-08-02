import React, { Component } from 'react';

class NavigationColumn extends Component {
    state = {  }
    render() { 
        return ( 
            <div className="navigation-column">
                <h5>Filter as per</h5>
                <form action="Filter with" className="nav-filter-form">
                    <input type="checkbox" name="Price" id="price" value="Price"/>
                    <label for="price" className="nav-filtform-label">Price</label> <br/>
                    <input type="checkbox" name="company" id="company" value="Company"/>
                    <label for="company" className="nav-filtform-label">Company</label><br/>
                    <input type="checkbox" name="color" id="color" value="Color"/>
                    <label for="color" className="nav-filtform-label">Color</label><br/>
                </form>
                
            </div>
         );
    }
}
 
export default NavigationColumn;