import { useEffect, useState } from "react";

// 디바운스 구현
function useDebounce(value:string, delay = 500){
    const [debounceVal, setDebounceVal] = useState(value);

    useEffect(()=>{
        const handler = setTimeout(()=>{
            setDebounceVal(value);
        },delay)
        return () => {
            clearTimeout(handler)
        }
    },[value, delay]);

    return debounceVal;
}
export default useDebounce;