import React, { useState } from 'react';

const MyForm = () => {
  const [name, setName] = useState('');
  const [files, setFiles] = useState([]);
  const [resData,SetResData] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // Create formData object
    const formData = new FormData();
    formData.append("name", name);

    for (let i = 0; i < files.length; i++) {
      formData.append("files", files[i]);
    }

    // Post data to Node and Express server
    fetch('http://127.0.0.1:8000/api', {
      method: 'POST',
      body: formData,
    })
    .then(res => SetResData(res))
    .then(data => console.log(data));

    console.log(resData)
  };
 

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="files">Files:</label>
        <input
          type="file"
          id="files"
          multiple
          onChange={(e) => setFiles(e.target.files)}
        />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

export default MyForm;
