import React, { useState } from 'react';

function Post() {
  const [file, setFile] = useState(null);
  const [description, setDescription] = useState('');

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    if (selectedFile) {
      if (selectedFile.type.includes('image')) {
        setFile(selectedFile);
      } else {
        alert('Please select a valid image file.');
      }
    }
  };

  const handleDescriptionChange = (e) => {
    setDescription(e.target.value);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (file && description) {
      const formData = new FormData();
      formData.append('file', file);
      formData.append('description', description);
  
      try {
        await fetch("http://localhost:3000/Post", {
          method: 'POST',
          body: formData
        });
      } catch (error) {
        console.error(error);
      }
      console.log('File:', file);
      console.log('Description:', description);
      // Reset form after submission
      setFile(null);
      setDescription('');
    } else {
      alert('Please select an image file and provide a description.');
    }
  };
  

  return (
    <form onSubmit={handleSubmit} style={{position: 'relative', left: '45vw'}}>
      <div>
        <label htmlFor="image">Select Image:</label>
        <input
          type="file"
          id="image"
          accept="image/*"
          onChange={handleFileChange}
        />
      </div>
      <div>
        <label htmlFor="description">Description:</label>
        <textarea
          id="description"
          value={description}
          onChange={handleDescriptionChange}
          required
        />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
}

export default Post;
