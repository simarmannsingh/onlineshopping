import React, { Component } from 'react';

class Pagefooter extends Component {
    state = {  }
    render() { 
        return ( 
            <div className="page-footer">                
                <div className="pgft-col1">
                    <ul>
                        <li>Home</li>
                        <li>About</li>
                        <li>Contact</li>
                        <li>Imprint</li>                        
                    </ul>
                </div>
                <div className="pgft-col2">
                    <ul>
                        <li>Career</li>
                        <li>Code of Conduct</li>
                        <li>FAQs</li>
                        <li>Sponsors</li>
                    </ul>
                </div>
                <div className="pgft-col3">
                    <ul>
                        <li>iOS App</li>
                        <li>Android App</li>
                        <li>Web App</li>
                    </ul>
                </div>
            </div>
         );
    }
}
 
export default Pagefooter;