import { useEffect } from "react";
import { useMyStore } from "../store/noticeList";

const Notice = () => {
    

    const noticeList = useMyStore(state=>state.noticeList);
    const noticeAction = useMyStore(state=> state.Action);

    useEffect(()=>{
        noticeAction();
    },[])

    

    return ( 
        <div>
            <h1>출국전 공지사항(외교부)</h1>
            {
                noticeList?.map((item, i)=>(
                    <div key={i}>
                        
                        <h3>{i+1}. {item.title}</h3>
                        <p>{item.txt_origin_cn}</p>
                        <p>{item.written_dt}</p>
                    </div>
                    
                    
                ))
                
            }
            
            
        </div>
    );
}

export default Notice;