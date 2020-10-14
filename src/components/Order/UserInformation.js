import React from 'react'

const UserInformation = (props) =>{
const {customer, resetCustomer} = props;

    return (
        <div className="user-information">
            <h3>{`Welcome back, ${customer.fullName}`}</h3>
            <table>
                <tbody>
                    <tr>
                        <td><label>ID:</label></td>
                        <td>{customer.identifier}</td>
                    </tr>
                    <tr>
                        <td><label>Address:</label></td>
                        <td>{customer.address}</td>
                    </tr>
                    <tr>
                        <td><label>Phone Number:</label></td>
                        <td>{customer.phoneNumber}</td>
                    </tr>
                    <tr>
                        <td><label>Email:</label></td>
                        <td>{customer.email}</td>
                    </tr>
                </tbody>
            </table>
            <button className="btn" onClick={()=>resetCustomer()}>{`Not ${customer.fullName}? Lookup again`}</button>
        </div>
    )

}

export default UserInformation;