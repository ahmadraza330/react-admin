import React from 'react'
import './newUser.css'
function NewUser() {
    return (
        // <div className="newUser">
        //     <h1 className="newUserTitle">New User</h1>
        //     <form className="newuserForm">
        //         <div className="newUserFormItem">
        //             <label htmlFor="">User Name</label>
        //             <input type="text" />
        //         </div>
        //         <div className="newUserFormItem">
        //             <label htmlFor="">Full Name</label>
        //             <input type="text" />
        //         </div>
        //         <div className="newUserFormItem">
        //             <label htmlFor="">Email</label>
        //             <input type="email" />
        //         </div>
        //         <div className="newUserFormItem">
        //             <label htmlFor="">Password</label>
        //             <input type="password" />
        //         </div>
        //         <div className="newUserFormItem">
        //             <label htmlFor="">Phone</label>
        //             <input type="number" />
        //         </div>
        //         <div className="newUserFormItem">
        //             <label htmlFor="">Address</label>
        //             <input type="text" />
        //         </div>
        //         <div className="newUserFormItem">
        //             <label htmlFor="">Gender</label>
        //             <div className="newUserGender">
        //                 <input type="radio" name="gender" id="male" value="male" />
        //                 <label htmlFor="male">Male</label>
        //                 <input type="radio" name="gender" id="feMale" value="feMale" />
        //                 <label htmlFor="feMale">FeMale</label>
        //                 <input type="radio" name="gender" id="other" value="other" />
        //                 <label htmlFor="other">Other</label>
        //             </div>
        //         </div>
        //         <div className="newUserFormItem">
        //             <label htmlFor="">Active</label>
        //             <select className="newUserSelect" name="active" id="active">
        //                 <option value="yes">Yes</option>
        //                 <option value="no">No</option>
        //             </select>
        //         </div>
        //         <button className="newUserButton">Create</button>
        //     </form>
        // </div>
        <div className="newUser">
      <h1 className="newUserTitle">New User</h1>
      <form className="newUserForm">
        <div className="newUserItem">
          <label>Username</label>
          <input type="text" placeholder="john" />
        </div>
        <div className="newUserItem">
          <label>Full Name</label>
          <input type="text" placeholder="John Smith" />
        </div>
        <div className="newUserItem">
          <label>Email</label>
          <input type="email" placeholder="john@gmail.com" />
        </div>
        <div className="newUserItem">
          <label>Password</label>
          <input type="password" placeholder="password" />
        </div>
        <div className="newUserItem">
          <label>Phone</label>
          <input type="text" placeholder="+1 123 456 78" />
        </div>
        <div className="newUserItem">
          <label>Address</label>
          <input type="text" placeholder="New York | USA" />
        </div>
        <div className="newUserItem">
          <label>Gender</label>
          <div className="newUserGender">
            <input type="radio" name="gender" id="male" value="male" />
            <label for="male">Male</label>
            <input type="radio" name="gender" id="female" value="female" />
            <label for="female">Female</label>
            <input type="radio" name="gender" id="other" value="other" />
            <label for="other">Other</label>
          </div>
        </div>
        <div className="newUserItem">
          <label>Active</label>
          <select className="newUserSelect" name="active" id="active">
            <option value="yes">Yes</option>
            <option value="no">No</option>
          </select>
        </div>
        <button className="newUserButton">Create</button>
      </form>
    </div>
    )
}

export default NewUser
