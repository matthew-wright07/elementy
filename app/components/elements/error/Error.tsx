import { useState, useEffect } from "react";

type Props = {
    message:string
}

export default function Error({message}:Props){
    const [show,setShow] = useState(false)
    useEffect(() => {
        setShow(true);
        const timer = setTimeout(() => {
            setShow(false);
        }, 2000);
        return () => clearTimeout(timer);
    },[message]);
    return (
    <div className="fixed bottom-6 right-6 z-50">
      <div className="flex items-center gap-3 rounded-lg bg-red-500 px-8 py-4 shadow-lg">
            <p className="text-white">{message}</p>
        </div>
    </div>
  );
}