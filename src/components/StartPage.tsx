import React, { FC } from 'react';
import { Link } from 'react-router-dom';


const StartPage: FC = () => {
  return (
    <div>
      <h3>Hello!</h3>
      <h3>This is React | TypeScript | Redux App</h3>

      <div className="btn-group">
        <Link className="btn btn-primary" to="/albums">Albums Page</Link>
        <Link className="btn btn-primary" to="/photos">Photos Page</Link>
      </div>
    </div>
  )
}

export default StartPage;