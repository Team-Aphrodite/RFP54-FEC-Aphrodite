import React, { useState, useEffect } from 'react';
import './WriteEmail.css';

const email = ({change}) => {
  const [emailUpdate, setemailUpdate] = useState("");

  const updateEmail = (e) => {
    setemailUpdate(e.target.value);

  };

  useEffect(() => {
    change(emailUpdate);
  }, [emailUpdate]);

  return (
    <div>
      <label>
        Your email *:
      <input type="email" name="writeEmail" onChange={updateEmail} placeholder="Example: jackson11@email.com" maxLength="60" required />
      </label>
      <div>
        For authentication reasons, you will not be emailed
      </div>
    </div>
  );
};

export default email;