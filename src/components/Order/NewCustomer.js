import React from 'react'

const NewCustomer = (props) =>{
    const {newCustomer,handleInput, register, errors}=props;

    return(
        <div className="new-customer-container">
            <table>
                <tbody>
                    <tr>
                        <td><label>Full Name:</label></td>
                        <td><input 
                            id="fullName" 
                            name="fullName" 
                            defaultValue={newCustomer.fullName} 
                            onChange={e=>handleInput(e)}
                            ref={register({
                                required: {
                                    value: true
                                }
                            })}
                        />
                            {errors.fullName && <p>Your <b>Full Name</b> is required</p>}
                        </td>
                    </tr>
                    <tr>
                        <td><label>ID:</label></td>
                        <td><input id="identifier" name="identifier" value={newCustomer.identifier} onChange={(e)=>handleInput(e)}
                             ref={register({
                                required: "Required",
                                pattern: {
                                  value: /^[0-9]*$/i,
                                  message: "invalid"
                                }
                              })}
                            />
                            {errors.identifier && <p>{errors.identifier.type ==="required" ? <span>Your <b>ID</b> is required</span>:<span>{errors.identifier.message}<b> ID</b></span> }</p>}                         
                        </td>
                    </tr>
                    <tr>
                        <td><label>Address:</label></td>
                        <td><textarea id="address" name="address" value={newCustomer.address} onChange={(e)=>handleInput(e)}
                            ref={register({
                                required: {
                                    value: true
                                }
                            })}
                        />
                            {errors.address && <p>Your <b>Address</b> is required</p>}
                        </td>
                    </tr>
                    <tr>
                        <td><label>Phone Number:</label></td>
                        <td><input id="phoneNumber" name="phoneNumber" value={newCustomer.phoneNumber} onChange={(e)=>handleInput(e)} 
                            ref={register({
                                required: "Required",
                                pattern: {
                                  value: /^[0-9]*$/i,
                                  message: "invalid"
                                }
                              })}
                            />
                            {errors.phoneNumber && <p>{errors.phoneNumber.type ==="required" ? <span>Your <b>Phone Number</b> is required</span>:<span>{errors.phoneNumber.message}<b> Phone Number</b></span> }</p>}                         
                        </td>
                    </tr>
                    <tr>
                        <td><label>Email:</label></td>
                        <td><input id="email" name="email" value={newCustomer.email} onChange={(e)=>handleInput(e)}
                           ref={register({
                            required: "Required",
                            pattern: {
                              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                              message: "invalid"
                            }
                          })}
                        />
                             {errors.email && <p>{errors.email.type ==="required" ? <span>Your <b>Email</b> is required</span>:<span>{errors.email.message}<b> Email</b></span> }</p>}                         
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
        
    )
}

export default NewCustomer;