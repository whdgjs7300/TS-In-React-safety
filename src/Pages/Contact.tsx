import { useEffect } from "react";
import { useLocation, useParams } from "react-router-dom";
import { useMyStore } from "../store/contactList";
import Loading from "../components/Loading";

const Contact = () => {
    
    const {countryNM} = useParams();

    const {contactList, loading }= useMyStore((state) => ({
        contactList : state.contactList,
        loading : state.loading
    }));
    
    const contactAction = useMyStore(state => state.Action);

    useEffect(()=>{
        if ( countryNM !== undefined)
        contactAction(countryNM);
    },[])
    const contactRemark = contactList[0]?.contact_remark;
    console.log(contactList);

    return ( 
        <>  
            {
            loading ? <Loading /> : 
            <div className="container">
            <h1>{contactList[0].country_nm}({contactList[0].continent_nm})</h1>
                <div className="contact_info"
                dangerouslySetInnerHTML={{ __html: contactRemark}}>
            
                </div>
            </div>
            
            }
            
        </>
        
    );
}

export default Contact;