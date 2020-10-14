import React from 'react';

const LookupCustomer = (props) =>{
const {handleClick, setEmail, email} =props;

    return(
        <div className="email-information">
            <table>
                <tbody>
                    <tr>
                        <td><label>Email:</label></td>
                        <td><input id="email" name="email" value={email} onChange={e=>setEmail(e.target.value)}/></td>
                    </tr>
                </tbody>
            </table>
            <button className="btn" onClick={()=>handleClick()}>Lookup</button>
        </div>
    )
}

export default LookupCustomer;