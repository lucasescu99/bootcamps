import React from 'react';
import { Link } from 'react-router-dom';

class Home extends React.Component {
  render() {
    return (
      <div className="topnav">
        <Link to='/grupos' className='plataforma'>
          PLATAFORMA 5
        </Link>
        <Link to='/hdp'>
          HDP Semanal
        </Link>
        <Link to='/grupos'>
          Grupos
        </Link>
      </div>
    )
  }
}

export default Home