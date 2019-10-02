import React,{useEffect} from 'react';

const Contact = (props) => {

    useEffect( () => {
        props.test();
      }, [])

return(<div>
        contact in progress
    </div>)
}
export {Contact};