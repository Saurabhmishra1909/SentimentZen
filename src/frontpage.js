import React from 'react';
import { useHistory } from 'react-router-dom';

const FrontPage = () => {
  const history = useHistory();

  const navigateToMainPage = () => {
    // Navigate to the main page route
    history.push('/main');
  };

  return (
    <div>
      <h1>Welcome to My App!</h1>
      <p>This is the front page content.</p>
      <button onClick={navigateToMainPage}>Go to Main Page</button>
    </div>
  );
};

export default FrontPage;
