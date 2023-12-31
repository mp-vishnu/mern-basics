import React,{useState} from 'react'
import '../App.css';
const Addnew = () => {
  //const history=useNavigate();
  const [user,setUser]=useState({
    name:"",description:""
  });

  let name,value;
  const handleChange=(e)=>{
      name=e.target.name;
      value=e.target.value;

      setUser({...user,[name]:value});
  };

  const postData= async (e)=>{
    e.preventDefault();
    
    const {name,description}=user;
    if(!name||!description)
        {
          alert('Please fill in all fields');
          return;
        }
    const res=await fetch('/items/new',{
      method:"POST",
      headers:{
        "Content-Type":"application/json"
      },
      body:JSON.stringify({
        name,description
      })
    });
    
    if(res.status===201)
    {   
      const data=await res.json();
      console.log("data------",data);
      console.log("data------",data.status);
        window.alert('successfully added');
        console.log("done");
    }
    else{
      window.alert('not added');
      console.log("not added");
    }
  };
 
  return (      
    <div className="container">
    <div className="row ml-5">
      <div className="col-md-6">
        <div className="signup-image mt-5 ml-5">
         
        </div>
      </div>
      <div className="col-md-6">
        <section className="signup">
          <div className="container mt-5">
            <div className="signup-content">
              <div className="signup-form">
                <h2 className="form-title" style={{marginLeft:180, marginTop:30}}>Add new item</h2>
                <form method="POST" className="register-form" id="register-form" style={{marginLeft:200, marginTop:150}}>
                  {/* Form inputs go here */}
                  <div className="form-group mt-5">
                                      <label htmlFor="name">
                                      <i className="zmdi zmdi-account material-icons-name mr-4"></i>
                                      </label>
                                      <input type='text' name='name' id='name' 
                                          value={user.name}
                                          onChange={handleChange}
                                          autoComplete='off' 
                                          placeholder="Name" style={{border:'none',outline: 'none',padding:20}}
                                      />
                                  </div>
                                    
                                  <div className="form-group">
                                      <label htmlFor="description">
                                      <i className="zmdi zmdi-phone material-icons-name mr-4"></i>
                                      </label>
                                      <input type='text' name='description' id='description' 
                                      value={user.phone}
                                          onChange={handleChange}
                                          autoComplete='off' 
                                          placeholder="description" style={{border:'none',outline: 'none',padding:20}}
                                      />
                                  </div>
                                  
            
                              <div className="form-group form-button ml-5" style={{marginTop:20}}>
                                  <input type="submit" name="signup" id="signup" className="form-submit primary"
                                  value="Add" onClick={postData}/>
                              </div>
                </form>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
    </div>
)
}

export default Addnew
