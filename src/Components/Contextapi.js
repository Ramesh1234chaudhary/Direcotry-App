import { createContext, useState } from "react";

export const glabaldata = createContext();

function DataProvider({children}){


    // let vlauedata=localStorage.getItem("data")? JSON.parse(localStorage.getItem("data")):[]; 
    
    const [names, setNames] = useState("")
    const [dob, setDob] = useState("")
    const [mobileno, setMobileno] = useState("")
    const [adharno, setAdharno] = useState("")
    const [age, setAge] = useState("")
    const[addpersondata,setAddpersondata]=useState([])
  

    return <glabaldata.Provider value={{addpersondata,setAddpersondata, names,setNames,dob,setDob,mobileno,setMobileno,adharno,setAdharno,age,setAge}}>
        {children}
    </glabaldata.Provider>
}
export default DataProvider;
