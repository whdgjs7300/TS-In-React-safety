import React,{ useEffect } from "react";
import { useMyStore } from "../store/noticeList";


// 같은 내용을 반복하는 페이지이기 때문에 
// react.memo를 사용하여 이전 내용과 동일한 경우 불필요한 렌더링을 방지함 !

const Notice = () => {
    

    const {noticeList} = useMyStore((state)=>({
        noticeList : state.noticeList,
        loading : state.loading,
    }));
    
    const noticeAction = useMyStore(state=> state.Action);

    useEffect(()=>{
        noticeAction();
    },[])
    console.log(noticeList);

    return ( 
        <>  
            {
                
                <div className="container">
                    <h1>출국전 공지사항(외교부)</h1>
                    {
                        noticeList?.map((item, i)=>(
                            <div className="notice_text_box" 
                            key={i}>
                                
                                <h3>{i+1}. {item.title}</h3>
                                <p>{item.txt_origin_cn}</p>
                                <p>{item.written_dt}</p>
                                <a href={item.file_download_url}>상세정보 PDF파일 다운로드</a>
                            </div>
                        ))
                        }
                </div>
            }
            
        </>
        
    );
}

export default React.memo(Notice);