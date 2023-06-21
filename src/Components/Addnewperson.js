import { useContext } from 'react';
import { Fragment } from 'react'
import './addnewperson.css';
import { glabaldata } from './Contextapi';




const Addnewperson = () => {

  const { addpersondata,setAddpersondata,names,setNames,dob,setDob,mobileno,setMobileno,adharno,setAdharno,age,setAge }=useContext(glabaldata)
 console.log(addpersondata)

  const handledata = () => {
    // if (names === "" || dob === "" || mobileno.length === 10 || adharno.length === 12 || age === "") {
    // alert("please fill complete details")
    // }
    if (names==="" ){
      alert("Enter your Full Name must have space between FirstName and LastName")
    } else if (dob === "" ) {
      alert("plase enter your date of birth dd/mm/yyyy or dd-mm-yyyy ")
    } else if (mobileno==="") {
      alert("plase enter your 10 digit mobile number ")
    } else if (adharno==="" ) {
      alert("plase enter your 12 digits adhar no. first number satrt with greater than 1 ")
    } else if (age === "") {
      alert("plase enter your Age < 5 ")
    } else {
        setAddpersondata([...addpersondata,{
        
        names: names,
        dob: dob,
        adharno: adharno,
        mobileno: mobileno,
        age: age,
        id: Date.now()
      }])
      setNames(" ")
      setDob(" ")
      setAdharno(" ")
      setMobileno(" ")
      setAge(" ")
    }


  }
  console.log(addpersondata)
   
  

  const deletehandle = (id) => {
    const updatedEntries = [{...addpersondata}];
    updatedEntries.splice(id, 1);
    setAddpersondata(updatedEntries);
    console.log(updatedEntries)
     localStorage.setItem("updatedEntries",JSON.stringify(updatedEntries))
  }
  
    



  return (
    <>
      <div className="container mainpart">
        <div className="row">
          <div className="col-md-3 col-sm-6 col-9 row1" style={{height:"30px",width:"150px" , marginRight:"1100px",textAlign:'center',marginBottom:"20px"}}>Add New Person</div>
        </div>



        <div className="container">
          <div className="row mt-4">
            <div className="col">
              <table className="table table-bordered border-dark">
                <thead className='thead'>
                  <tr>
                    <th>Name</th>
                    <th>Date Of Birth</th>
                    <th>Mobile Number</th>
                    <th>Adhar Number</th>
                    <th>Age</th>
                    <th>Actions</th>
                  </tr>
                </thead>

                <tbody>
                  
                    {
                      addpersondata && addpersondata.map((ele, id) => {
                        return (
                          <Fragment key={ id }>
                            <tr className='trmain'>
                              <td className='names'>{ ele.names }</td>
                              <td>{ ele.dob }</td>
 
                              <td>{ ele.mobileno }</td>
                              <td>{ ele.adharno }</td>

                              <td>{ ele.age }</td>

                              <td> <button className='btn2' >save</button> <button className='btn2' onClick={ () => deletehandle(id) }> delete </button></td>
                            </tr>
                          </Fragment>
                        )
                      })
                    }
                  


                  <tr className='inputetext'>
                    <td><input type="text" value={ names } onChange={ (e) => setNames(e.target.value) } /></td>

                    <td><input type="text" value={ dob } onChange={ (e) => setDob(e.target.value) } /></td>



                    <td><input type="number" value={ mobileno } onChange={ (e) => {
                      setMobileno(e.target.value)
                    } } /></td>

                    <td><input type="number" value={ adharno } onChange={ (e) => {
                      setAdharno(e.target.value)
                    } } /></td>



                    <td ><input type="number" value={ age } onChange={ (e) => {
                      setAge(e.target.value)
                    } } /></td>

                    <td><button className='btn2'>save</button><button className='btn2'>delete</button> </td>
                  </tr>

                </tbody>
              </table>
            </div>
          </div>
        </div>


        <div className="row">
          <div className="col btndiv">
            <button type="button" className="btn btn-primary" style={{background:"blue",marginRight:"350px"}} onClick={ handledata }>Add</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default Addnewperson;

 