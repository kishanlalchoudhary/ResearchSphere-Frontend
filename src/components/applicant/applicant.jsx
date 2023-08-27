import React from 'react';

const Applicants = ({ name = 'Default Name', profileId = 'Default Profile ID' }) => {
  return (
    <div className="card shadow-md w-full bg-secondary text-primary-content">
      <div className="p-3">
        <h2 className="card-title">{name}</h2>
        <p>{profileId}</p>
        <div className="card-actions justify-around my-4">
          <button className="btn btn-success text-accent">Accept</button>
          <button className="btn btn-primary text-accent">Profile</button>
          <button className="btn btn-error text-accent">Reject</button>
        </div>
      </div>
    </div>
  );
};

export default Applicants;
