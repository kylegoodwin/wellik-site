import React from 'react'
import Icon from '@mdi/react'
import { mdiInstagram,mdiLinkedin } from '@mdi/js'

import slides from './Slides';
export default class Main extends React.Component{

    constructor(props) {
        super(props);

      }
    
      handleNext = () => {
    
        let newNumber = 0;
        if (this.props.slideNumber == (slides.length - 1)) {
            newNumber = 0;
        } else {
            newNumber = this.props.slideNumber + 1
        }

        this.updateLogo(newNumber);
        this.props.setSlideNumber(newNumber)
      }

      updateLogo = (number) =>{
        if( number == 0 ){
            this.props.makeLogoInvisible();
        }else{
            this.props.makeLogoVisible();
        }
      }
    
      handleBack = () => {
        let newNumber = 0;
        if (this.props.slideNumber == 0) {
       newNumber = slides.length - 1;
        } else {
  
            newNumber = this.props.slideNumber - 1;

        }
        this.updateLogo(newNumber);
        this.props.setSlideNumber(newNumber)

      }


    render(){

        return(
        <div className="Main">
        <div id="next" onClick={this.handleNext}>
        </div>

        <div id="back" onClick={this.handleBack} ></div>

        {slides[this.props.slideNumber]}

        <div className="bottom-bar">
      <div>
      
      <p>
        387 Grand Street <br></br>
          New York, NY 10003
        </p>

        <a href="https://www.linkedin.com/in/bethany-wellik-a0372b59">
        <Icon path={mdiInstagram}
        title="User Profile"
        size={1}
        color="#f0e1cf"/>
        </a>

        <a href="https://www.linkedin.com/in/bethany-wellik-a0372b59">
         <Icon path={mdiLinkedin}
        title="User Profile"
        size={1}
        color="#f0e1cf"/>
        </a>

      </div>
        </div>

      </div>
        )
    }

}