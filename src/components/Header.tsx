import React from 'react'
import { Link} from 'react-router-dom';
import App from '../App';

const Header = () => {
  return (
    <>
    <header>
    <ul>
      <li><Link to="/">Income</Link></li>
      <li><Link to="/Expense">Expense</Link></li>
      <li><a href="/Savings">Sav.Target</a></li>
    </ul>
   </header>
   <App/>
    </>
  )
}

export default Header