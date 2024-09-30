import { useState } from 'react';

const Homehead = () => {
    const [isNavOpen, setIsNavOpen] = useState(false);

    const toggleNav = () => {
        setIsNavOpen(!isNavOpen);
    };

    return (
      <div style={{display:'block',background: 'green'}}>
        <h1 style={{textAlign:'center',color:'white' }}>
          Amar Phosol 
        </h1>
        <div>
            <nav style={{ padding: '10px', boxShadow: '0 2px 10px rgba(0, 0, 0, 0.2)' }}>
                <ul style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    listStyle: 'none',
                    margin: 0,
                    padding: 0,
                    fontSize: '20px',
                    color: 'white',
                }}>
                    
                    <li style={{
                        padding: '10px 20px',
                        transition: 'background 0.3s ease',
                        cursor: 'pointer',
                    }}
                    onMouseEnter={e => e.currentTarget.style.background = 'darkgreen'}
                    onMouseLeave={e => e.currentTarget.style.background = 'transparent'}>
                        <a href={`/login/${'seller'}`} style={{ textDecoration: 'none', color: 'white' }}>Seller login</a>
                    </li>
                    <li style={{
                        padding: '10px 20px',
                        transition: 'background 0.3s ease',
                        cursor: 'pointer',
                    }}
                    onMouseEnter={e => e.currentTarget.style.background = 'darkgreen'}
                    onMouseLeave={e => e.currentTarget.style.background = 'transparent'}>
                        <a href={`/login/${'buyer'}`} style={{ textDecoration: 'none', color: 'white' }}>Buyer login</a>
                    </li>
                    
                    
                </ul>
            </nav>
        </div>
      </div>
    );
}

export default Homehead;
