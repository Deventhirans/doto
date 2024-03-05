import React, { useState, useEffect } from 'react';
import axios from 'axios';

const NewForm = () => {
  const [formData, setFormData] = useState(null);

  useEffect(() => {
    // Fetch form data from the backend when the component mounts
    const fetchFormData = async () => {
      try {
        const response = await axios.get('http://localhost:8000/api/forms'); // Adjust the endpoint as needed
        setFormData(response.data);
      } catch (error) {
        console.error('Error fetching form data:', error);
      }
    };

    fetchFormData();
  }, []);

  return (
    <div>
      <h2>Form Builder</h2>
      {formData ? (
        <form>
          {formData.formComponents.map((component, index) => (
            <div key={index}>
              <label>{component.label}</label>
              {component.type === 'textbox' && (
                <input type="text" placeholder={component.placeholder} required={component.required} />
              )}
              {component.type === 'checkbox' && (
                component.options.map((option, optionIndex) => (
                  <div key={optionIndex}>
                    <input type="checkbox" id={`option-${optionIndex}`} name={`option-${optionIndex}`} value={option} />
                    <label htmlFor={`option-${optionIndex}`}>{option}</label>
                  </div>
                ))
              )}
              {/* Add other types of form components (e.g., dropdown) as needed */}
            </div>
          ))}
          <button type="submit">Submit</button>
        </form>
      ) : (
        <p>Loading form...</p>
      )}
    </div>
  );
};

export default NewForm;