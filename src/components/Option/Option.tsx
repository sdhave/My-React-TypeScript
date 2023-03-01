// import { FaBars } from 'react-icons/fa';
import React from "react"
import './Option.css'

type Props = {
    icon?: React.ReactNode;
    option: string;
}

const Option: React.FC<Props> = (props) => {
    const { icon, option } = props;
    return (
        <div className='option'>
            { icon }
            <span>{ option }</span>
        </div>
    )
}

export default Option;