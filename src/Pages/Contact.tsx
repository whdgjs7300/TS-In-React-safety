import { useEffect } from "react";
import { useLocation, useParams } from "react-router-dom";
import { useMyStore } from "../store/contactList";

const Contact = () => {
    
    const {countryNM} = useParams();

    const contactList = useMyStore(state => state.contactList);
    const contactAction = useMyStore(state => state.Action);

    useEffect(()=>{
        if ( countryNM !== undefined)
        contactAction(countryNM);
    },[])

    console.log(contactList);

    return ( 
        <div>
            <h1>{contactList[0]?.country_nm}({contactList[0]?.continent_nm})</h1>
            <div dangerouslySetInnerHTML={{ __html: contactList[0]?.contact_remark}}>
            
            </div>
        </div>
    );
}

export default Contact;