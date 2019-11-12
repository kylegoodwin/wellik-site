import React,{useEffect} from 'react';
import {LoadVideo} from './Slides'

const baseURL = "https://kylegoodwin.github.io/wellik-site"

const Contact = (props) => {

    useEffect( () => {
        props.test();
      }, [])

return(<div className="contact-page">
        <p> hi@bethanywellik.com</p>
        <img src={`${baseURL}/contact.JPG`} />
    </div>)
}
export {Contact};