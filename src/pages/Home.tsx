import { BiXCircle } from "react-icons/bi";
import { MdCheckCircle } from "react-icons/md";
import { useState } from "react";

type Props = {
    date: string;
    name: string;
    email: string;
    isOnline?: boolean
}

const visitor = {
    date: "Fri, 12 Feb",
    name: "Simbarashe Mapipi Dhave",
    email: "dhavesimbarashe26@gmail.com",
    isOnline: true
}

export default function Home() {
    const [data, setData] = useState(visitor)

    return (
        <div className='container'>
            <h2>Connected Clients</h2>
            <table className='clients-table'>
                <thead>
                    <tr>
                        <th style={{width: "15%"}}>DATE</th>
                        <th style={{width: "35%"}}>FULL NAME</th>
                        <th style={{width: "40%"}}>EMAIL</th>
                        <th  style={{width: "10%"}} className='fourth-col'>ONLINE</th>
                    </tr>
                </thead>
                <tbody>
                    <Client 
                        date={data.date}
                        name={data.name}
                        email={data.email}
                        isOnline={data.isOnline}
                    />
                    <Client 
                        date={data.date}
                        name={data.name}
                        email={data.email}
                        isOnline={data.isOnline}
                    />
                </tbody>
            </table>
        </div>
    )
}

function Client({ date, name, email, isOnline }: Props) {
    return (
        <tr>
            <td>{ date }</td>
            <td>{ name }</td>
            <td>{ email }</td>
            <td className='fourth-col'>
                { isOnline  
                    ? <MdCheckCircle className="cen yes-icon" /> 
                    : <BiXCircle className='cen no-icon' /> 
                }
            </td>
        </tr>
    )
}