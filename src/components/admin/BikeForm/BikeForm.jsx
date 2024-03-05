import React, { useState } from 'react';
import { Container, TextField, Button, FormControl, InputLabel, Select, MenuItem, Grid } from '@mui/material';

const BikeForm = () => {
  const [bikeName, setBikeName] = useState('');
  const [brandName, setBrandName] = useState('');
  const [model, setModel] = useState('');
  const [type, setType] = useState('');
  const [color, setColor] = useState('');
  const [year, setYear] = useState('');
  const [condition, setCondition] = useState('');
  const [location, setLocation] = useState('');
  const [rcNo, setRcNo] = useState('');
  const [chaseNo, setChaseNo] = useState('');
  const [discType, setDiscType] = useState('');
  const [mileage, setMileage] = useState('');
  const [image, setImage] = useState(null);
  const [errors, setErrors] = useState({});

  const brands = ['Honda', 'Yamaha', 'Suzuki', 'Kawasaki', 'BMW', 'Ducati', 'Harley-Davidson', 'KTM', 'Triumph'];
  const models = ['BS-4', 'BS-6', 'Ordinary'];
  const types = ['Petrol', 'Electric'];
  const colors = ['Black', 'Red', 'Blue'];

  const handleSubmit = (e) => {
    e.preventDefault();
    const errors = {};

    // Validate bike name
    if (!bikeName.trim()) {
      errors.bikeName = 'Bike name is required';
    }

    // Validate brand name
    if (!brandName.trim()) {
      errors.brandName = 'Brand name is required';
    }

    // Validate model
    if (!model.trim()) {
      errors.model = 'Model is required';
    }

    // Validate type
    if (!type.trim()) {
      errors.type = 'Type is required';
    }

    // Validate color
    if (!color.trim()) {
      errors.color = 'Color is required';
    }

    // Validate year
    if (!year.trim()) {
      errors.year = 'Year is required';
    } else if (isNaN(year)) {
      errors.year = 'Year must be a number';
    }

    // Validate RC No
    if (!rcNo.trim()) {
      errors.rcNo = 'RC No is required';
    } else if (isNaN(rcNo)) {
      errors.rcNo = 'RC No must be a number';
    }

    // Validate mileage
    if (!mileage.trim()) {
      errors.mileage = 'Mileage is required';
    } else if (isNaN(mileage)) {
      errors.mileage = 'Mileage must be a number';
    }

    // If there are no errors, submit the form
    if (Object.keys(errors).length === 0) {
      const formData = {
        bikeName,
        brandName,
        model,
        type,
        color,
        year,
        condition,
        location,
        rcNo,
        chaseNo,
        discType,
        mileage,
        image: image ? image.name : null 
      };
      
      console.log(formData);

      // Reset form fields and errors
      setBikeName('');
      setBrandName('');
      setModel('');
      setType('');
      setColor('');
      setYear('');
      setCondition('');
      setLocation('');
      setRcNo('');
      setChaseNo('');
      setDiscType('');
      setMileage('');
      setImage(null);
      setErrors({});
    } else {
      setErrors(errors);
    }
  };

  const handleImageChange = (e) => {
    setImage(e.target.files[0]);
  };

  return (
    <div className='newbike-form'>
    <Container maxWidth="md">
      <form onSubmit={handleSubmit}>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <TextField label="Bike Name" type="text" value={bikeName} onChange={(e) => setBikeName(e.target.value)} fullWidth error={!!errors.bikeName} helperText={errors.bikeName} />
          </Grid>

          <Grid item xs={12} sm={6}>
            <FormControl fullWidth>
              <InputLabel>Brand Name</InputLabel>
              <Select value={brandName} onChange={(e) => setBrandName(e.target.value)} fullWidth error={!!errors.brandName}>
                <MenuItem value="">Select Brand</MenuItem>
                {brands.map((brand, index) => (
                  <MenuItem key={index} value={brand}>{brand}</MenuItem>
                ))}
              </Select>
            </FormControl>
          </Grid>

          <Grid item xs={12} sm={6}>
            <FormControl fullWidth>
              <InputLabel>Model</InputLabel>
              <Select value={model} onChange={(e) => setModel(e.target.value)} fullWidth error={!!errors.model}>
                <MenuItem value="">Select Model</MenuItem>
                {models.map((model, index) => (
                  <MenuItem key={index} value={model}>{model}</MenuItem>
                ))}
              </Select>
            </FormControl>
          </Grid>

          <Grid item xs={12} sm={6}>
            <FormControl fullWidth>
              <InputLabel>Type</InputLabel>
              <Select value={type} onChange={(e) => setType(e.target.value)} fullWidth error={!!errors.type}>
                <MenuItem value="">Select Type</MenuItem>
                {types.map((type, index) => (
                  <MenuItem key={index} value={type}>{type}</MenuItem>
                ))}
              </Select>
            </FormControl>
          </Grid>

          <Grid item xs={12} sm={6}>
            <FormControl fullWidth>
              <InputLabel>Color</InputLabel>
              <Select value={color} onChange={(e) => setColor(e.target.value)} fullWidth error={!!errors.color}>
                <MenuItem value="">Select Color</MenuItem>
                {colors.map((color, index) => (
                  <MenuItem key={index} value={color}>{color}</MenuItem>
                ))}
              </Select>
            </FormControl>
          </Grid>

          <Grid item xs={12} sm={6}>
            <TextField label="Year" type="number" value={year} onChange={(e) => setYear(e.target.value)} fullWidth error={!!errors.year} helperText={errors.year} />
          </Grid>

          <Grid item xs={12} sm={6}>
            <TextField label="Condition" value={condition} onChange={(e) => setCondition(e.target.value)} fullWidth error={!!errors.condition} helperText={errors.condition} />
          </Grid>

          <Grid item xs={12} sm={6}>
            <TextField label="Location" value={location} onChange={(e) => setLocation(e.target.value)} fullWidth error={!!errors.location} helperText={errors.location} />
          </Grid>

          <Grid item xs={12} sm={6}>
            <TextField label="RC No" type="number" value={rcNo} onChange={(e) => setRcNo(e.target.value)} fullWidth error={!!errors.rcNo} helperText={errors.rcNo} />
          </Grid>

          <Grid item xs={12} sm={6}>
            <TextField label="Chase No" value={chaseNo} onChange={(e) => setChaseNo(e.target.value)} fullWidth error={!!errors.chaseNo} helperText={errors.chaseNo} />
          </Grid>

          <Grid item xs={12} sm={6}>
            <TextField label="Disc Type" value={discType} onChange={(e) => setDiscType(e.target.value)} fullWidth error={!!errors.discType} helperText={errors.discType} />
          </Grid>

          <Grid item xs={12} sm={6}>
            <TextField label="Mileage" type="number" value={mileage} onChange={(e) => setMileage(e.target.value)} fullWidth error={!!errors.mileage} helperText={errors.mileage} />
          </Grid>

          <Grid item xs={12}>
            <input type="file" accept="image/*" id="image-upload" style={{ display: 'none' }} onChange={handleImageChange} />
            <label htmlFor="image-upload">
              <Button variant="outlined" component="span" style={{ color: 'whitesmoke', borderColor: 'black', 
                      borderWidth:"2px" , backgroundColor:"black"}}>
                Choose Image
              </Button>
            </label>
            {errors.image && <p style={{ color: 'red', marginTop: '5px' , }}>{errors.image}</p>}
          </Grid>

          <Grid item xs={12}>
            <Button
              variant="contained"
              color="primary"
              type="submit"
              fullWidth
              style={{ backgroundColor: 'black', color: 'whitesmoke',  borderRadius: '10px', padding: '10px 0' }}
            >
              Submit
            </Button>
          </Grid>

        </Grid>
      </form>
    </Container>
    </div>
  );
};

export default BikeForm;