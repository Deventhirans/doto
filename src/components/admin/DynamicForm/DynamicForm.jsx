import React, { useState } from 'react';
import axios from 'axios';
import './dynamicform.css';

const DynamicForm = () => {
  const [isListView, setIsListView] = useState(false);
  const [formData, setFormData] = useState([]);
  const [newComponent, setNewComponent] = useState('');
  const [formName, setFormName] = useState('');
  const [componentLabel, setComponentLabel] = useState('');
  const [componentKey, setComponentKey] = useState('');
  const [placeholder, setPlaceholder] = useState('');
  const [isRequired, setIsRequired] = useState(false);
  const [checkboxOptions, setCheckboxOptions] = useState([]);
  const [editIndex, setEditIndex] = useState(null);
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedColor, setSelectedColor] = useState('');
  const [selectedImage, setSelectedImage] = useState(null);
  const [radioOption, setRadioOption] = useState('');
  const [dropdownOptions, setDropdownOptions] = useState([]);

  const addComponent = () => {
    if (newComponent.trim() !== '') {
      const newFormElement = {
        type: newComponent,
        label: componentLabel,
        placeholder: placeholder,
        isRequired: isRequired,
        options: newComponent === 'checkbox' ? checkboxOptions :
          newComponent === 'dropdown' ? dropdownOptions : null,
        key: componentKey,
        value: '',
      };

      if (editIndex !== null) {
        setFormData(prevData => {
          const updatedData = [...prevData];
          updatedData[editIndex] = newFormElement;
          return updatedData;
        });
        setEditIndex(null);
      } else {
        setFormData(prevData => [...prevData, newFormElement]);
      }

      setNewComponent('');
      setComponentLabel('');
      setComponentKey('');
      setPlaceholder('');
      setIsRequired(false);
      setCheckboxOptions([]);
      setDropdownOptions([]);
    }
  };

  const saveForm = async () => {
    try {
      console.log({
        formName: formName,
        isListView : isListView,
        formComponents: formData,
      });
      // const response = await axios.post('http://localhost:8000/api/newform', {
      //   formName: formName,
      //   formComponents: formData,
      // });
      // console.log('Form saved:', response.data);
    } catch (error) {
      console.error('Error saving form:', error);
    }
  };

  const editComponent = index => {
    const component = formData[index];
    setNewComponent(component.type);
    setComponentLabel(component.label);
    setComponentKey(component.key);
    setPlaceholder(component.placeholder);
    setIsRequired(component.isRequired);
    setCheckboxOptions(component.options || []);
    setDropdownOptions(component.options || []);
    setEditIndex(index);
  };

  const removeComponent = index => {
    setFormData(prevData => prevData.filter((_, i) => i !== index));
  };

  return (
    <div className="dynamic-form-container">
      <div className="dynamic-form-header">
        <h2>Create Dynamic Form</h2>
      </div>
      <div className="dynamic-form-input">
        <label>Form Name:</label>
        <input
          type="text"
          required
          value={formName}
          onChange={e => setFormName(e.target.value)}
        />
      </div>
      <div className="dynamic-form-input-in">
        <input
          type="checkbox"
          checked={isListView}
          onChange={e => setIsListView(e.target.checked)}
        />
        <label>inListView</label>
      </div>
      <div className="dynamic-form-input">
        <label>Select Component Type:</label>
        <select
          value={newComponent}
          onChange={e => setNewComponent(e.target.value)}
        >
          <option value="">Select</option>
          <option value="textbox">Textbox</option>
          <option value="checkbox">Checkbox</option>
          <option value="datepicker">Datepicker</option>
          <option value="colorpicker">Colorpicker</option>
          <option value="imageupload">Image Upload</option>
          <option value="radio">Radio</option>
          <option value="dropdown">Dropdown</option>
        </select>
        {newComponent && (
          <>
            <label>Label:</label>
            <input
              type="text"
              value={componentLabel}
              onChange={e => setComponentLabel(e.target.value)}
            />
            <label>Key:</label>
            <input
              type="text"
              value={componentKey}
              onChange={e => setComponentKey(e.target.value)}
            />
            {newComponent === 'textbox' && (
              <>
                <label>Placeholder:</label>
                <input
                  type="text"
                  value={placeholder}
                  onChange={e => setPlaceholder(e.target.value)}
                />
              </>
            )}
            {newComponent === 'datepicker' && (
              <>
                <label>Select Date:</label>
                <input
                  type="date"
                  value={selectedDate}
                  onChange={e => setSelectedDate(e.target.value)}
                />
              </>
            )}
            {newComponent === 'colorpicker' && (
              <>
                <label>Select Color:</label>
                <input
                  type="color"
                  value={selectedColor}
                  onChange={e => setSelectedColor(e.target.value)}
                />
              </>
            )}
            {newComponent === 'imageupload' && (
              <>
                <label>Upload Image:</label>
                <input
                  type="file"
                  onChange={e => setSelectedImage(e.target.files[0])}
                />
              </>
            )}
            {newComponent === 'radio' && (
              <>
                <label>Options:</label>
                <input
                  type="text"
                  value={radioOption}
                  onChange={e => setRadioOption(e.target.value)}
                />
              </>
            )}
            {newComponent === 'dropdown' && (
              <>
                <label>Options:</label>
                {dropdownOptions.map((option, optionIndex) => (
                  <div key={optionIndex}>
                    <input
                      type="text"
                      value={option}
                      onChange={e => {
                        const updatedOptions = [...dropdownOptions];
                        updatedOptions[optionIndex] = e.target.value;
                        setDropdownOptions(updatedOptions);
                      }}
                    />
                  </div>
                ))}
                <button className='form-add-button' onClick={() => setDropdownOptions(prev => [...prev, ''])}>
                  Add Option
                </button>
              </>
            )}
            <div className='form-required-check'>
            <input
              type="checkbox"
              checked={isRequired}
              onChange={e => setIsRequired(e.target.checked)}
              
            />
            <label>Required</label>
            </div>
            
            {newComponent === 'checkbox' && (
              <>
                <div>
                  <label>Options:</label>
                  {checkboxOptions.map((option, optionIndex) => (
                    <div key={optionIndex}>
                      <input
                        type="text"
                        value={option}
                        onChange={e => {
                          const updatedOptions = [...checkboxOptions];
                          updatedOptions[optionIndex] = e.target.value;
                          setCheckboxOptions(updatedOptions);
                        }}
                      />
                    </div>
                  ))}
                  <button onClick={() => setCheckboxOptions(prev => [...prev, ''])}>
                    Add Option
                  </button>
                </div>
              </>
            )}
            <button className="dynamic-form-button" onClick={addComponent}>
              {editIndex !== null ? 'Update Component' : 'Add Component'}
            </button>
          </>
        )}
      </div>
      <div className="dynamic-form-component-list">
        {formData.map((item, index) => (
          <div className="dynamic-form-component" key={item.key}>
            <label>{item.label}</label>
            {item.type === 'textbox' && (
              <input
                type="text"
                placeholder={item.placeholder}
                value={item.value}
                onChange={e => {
                  const updatedData = [...formData];
                  updatedData[index].value = e.target.value;
                  setFormData(updatedData);
                }}
              />
            )}
            {item.type === 'checkbox' && (
              <>
                {item.options.map((option, optionIndex) => (
                  <div key={optionIndex}>
                    <input
                      type="checkbox"
                      checked={option}
                      onChange={e => {
                        const updatedData = [...formData];
                        updatedData[index].options[optionIndex] = e.target.checked;
                        setFormData(updatedData);
                      }}
                    />
                    <label>{option}</label>
                  </div>
                ))}
              </>
            )}
            {item.type === 'dropdown' && (
              <select
                value={item.value}
                onChange={e => {
                  const updatedData = [...formData];
                  updatedData[index].value = e.target.value;
                  setFormData(updatedData);
                }}
              >
                <option value="">Select</option>
                {item.options.map((option, optionIndex) => (
                  <option key={optionIndex} value={option}>
                    {option}
                  </option>
                ))}
              </select>
            )}
            <button className="dynamic-form-edit-button" onClick={() => editComponent(index)}>Edit</button>
            <button className="dynamic-form-remove-button" onClick={() => removeComponent(index)}>Remove</button>
          </div>
        ))}
      </div>
      <button className="dynamic-form-button" onClick={saveForm}>Save</button>
    </div>
  );
};

export default DynamicForm;
