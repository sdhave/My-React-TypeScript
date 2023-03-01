import './Header.css'

export default function Header() {
    return (
        <header className='header'>
            <div className='logo-con'>
                <img src='./tampa-img.PNG' className='logo'/>
                <h4>Tampa Medical College</h4>
            </div>
            <div className='search-bar-container'>
                <input className='search' type='search' placeholder='Search'/>
            </div>
            <div className='account-container'>
                <h4>Simbarashe</h4>
                <img src='./emoji.PNG' className='user'/>
            </div>
        </header>
    )
}