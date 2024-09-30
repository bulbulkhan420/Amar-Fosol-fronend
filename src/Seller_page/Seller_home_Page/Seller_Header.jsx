import { useState } from 'react';
import { useParams } from 'react-router-dom';

const Seller_Header = (props) => {
    let {email}=props;
    const [isNavOpen, setIsNavOpen] = useState(false);

    const toggleNav = () => {
        setIsNavOpen(!isNavOpen);
    };

    return (
      <div style={{display:'block',background: 'green'}}>
        <h1 style={{textAlign:'center',color:'white' }}>
          Amar Phosol Seller Page
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
                        <a href={`/seller/profile/${email}`} style={{ textDecoration: 'none', color: 'white' }}>Home</a>
                    </li>
                    <li style={{
                        padding: '10px 20px',
                        transition: 'background 0.3s ease',
                        cursor: 'pointer',
                    }}
                    onMouseEnter={e => e.currentTarget.style.background = 'darkgreen'}
                    onMouseLeave={e => e.currentTarget.style.background = 'transparent'}>
                        <a href={`/seller/product/list/${email}`} style={{ textDecoration: 'none', color: 'white' }}>Product List</a>
                    </li>
                    <li style={{
                        padding: '10px 20px',
                        transition: 'background 0.3s ease',
                        cursor: 'pointer',
                    }}
                    onMouseEnter={e => e.currentTarget.style.background = 'darkgreen'}
                    onMouseLeave={e => e.currentTarget.style.background = 'transparent'}>
                        <a href={`/seller/add/product/${email}`} style={{ textDecoration: 'none', color: 'white' }}>Add Product</a>
                    </li>
                    <li style={{
                        padding: '10px 20px',
                        transition: 'background 0.3s ease',
                        cursor: 'pointer',
                    }}
                    onMouseEnter={e => e.currentTarget.style.background = 'darkgreen'}
                    onMouseLeave={e => e.currentTarget.style.background = 'transparent'}>
                        <a href="/signout" style={{ textDecoration: 'none', color: 'white' }}>SignOut</a>
                    </li>
                </ul>
            </nav>
        </div>
      </div>
    );
}

export default Seller_Header;
