import React,{useEffect} from 'react';
import {LoadVideo} from './Slides'

const baseURL = "https://kylegoodwin.github.io/wellik-site"

const Contact = (props) => {

    useEffect( () => {
        props.test();
      }, [])

return(<div className="contact-page">
        <div>
            <div>
                <a href="mailto:bethany@bethanywellik.com"> hi@bethanywellik.com</a>
                <img src={`${baseURL}/about.png`} />
            </div>
        </div>
    </div>)
}
export {Contact};