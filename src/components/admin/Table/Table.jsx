import { useState, useEffect } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import axios from 'axios'
// import './Table.css';
const res = [
  {
    "role": [],
    "group": [],
    "_id": "65e038ae3495582320089f05",
    "firstName": "Pradeep",
    "lastName": "Sivakumar",
    "email": "pradeepksp96@gmail.com",
    "password": "$2b$10$LhsM23qZiXm372Ih/YWJ5.aGx64I0wyUKK.0bK1DUqZO0hP1oYSJ.",
    "phoneNumber": "8220018259",
    "designation": "Software Developer",
    "companyName": "Dotsito Tech.",
    "country": "India",
    "state": "Tamilnadu",
    "createdAt": "2024-02-29T07:56:30.625Z",
    "updatedAt": "2024-02-29T07:56:30.625Z",
    "__v": 0
  },
  {
    "role": [],
    "group": [],
    "_id": "65e039bb3f8e4eba1f3ac649",
    "firstName": "satheesh",
    "lastName": "kumar",
    "email": "satheesh@gmail.com",
    "password": "$2b$10$VmrVRxCujrO/nDNroBXRI.LTUkRnmBzk87VmmM7feA.LrAqQLPz8m",
    "phoneNumber": "98765321",
    "designation": "Software Developer",
    "companyName": "Dotsito Tech.",
    "country": "India",
    "state": "Tamilnadu",
    "createdAt": "2024-02-29T08:00:59.122Z",
    "updatedAt": "2024-02-29T08:00:59.122Z",
    "__v": 0
  },
  {
    "role": [],
    "group": [],
    "_id": "65e065e4fc836ce7954312fc",
    "firstName": "satheesh",
    "lastName": "kumar",
    "email": "satheesh2@gmail.com",
    "password": "$2b$10$sgxhRgZ5kEFjoW72ixMe7uXCF3lMUqX3Ows38Fr/TPSI/VXlObPiS",
    "phoneNumber": "8220018259",
    "designation": "Software Developer",
    "companyName": "Dotsito Tech.",
    "country": "India",
    "state": "Tamilnadu",
    "createdAt": "2024-02-29T11:09:24.054Z",
    "updatedAt": "2024-02-29T11:09:24.054Z",
    "__v": 0
  },
  {
    "role": [],
    "group": [],
    "_id": "65e065f7fc836ce7954312ff",
    "firstName": "satheesh",
    "lastName": "kumar",
    "email": "satheesh2@gmil.com",
    "password": "$2b$10$czWM9zB/VsOJriI648PE5e.WGc67IwMaQ2HLYXBnjUzonhoXpqKw2",
    "phoneNumber": "8220018259",
    "designation": "Software Developer",
    "companyName": "Dotsito Tech.",
    "country": "India",
    "state": "Tamilnadu",
    "createdAt": "2024-02-29T11:09:43.813Z",
    "updatedAt": "2024-02-29T11:09:43.813Z",
    "__v": 0
  },
  {
    "role": [],
    "group": [],
    "_id": "65e08ae3b2a12aed46f102b8",
    "firstName": "Prdeep",
    "lastName": "S",
    "email": "pradeep.sivakumar@dotsito.com",
    "password": "$2b$10$7lCMuKdKFknuY2Fd7B6xwOLaJvfOBsYW4rH5bQPrmeTF/sNBRvPh.",
    "designation": "ds",
    "country": "wde",
    "state": "erf",
    "createdAt": "2024-02-29T13:47:15.979Z",
    "updatedAt": "2024-02-29T13:47:15.979Z",
    "__v": 0
  },
  {
    "role": [],
    "group": [],
    "_id": "65e09faea23333ea935a2bde",
    "firstName": "Prdeep",
    "lastName": "S",
    "email": "pradeep@fkhfk.co",
    "password": "$2b$10$x2Ti78wTh8Nkfw09Y5YiheeQ/u1cOWlWdnHPo0Ibw2Ozqwg2IYTVW",
    "designation": "Dev",
    "country": "India",
    "state": "Tamilnadu",
    "createdAt": "2024-02-29T15:15:58.834Z",
    "updatedAt": "2024-02-29T15:15:58.834Z",
    "__v": 0
  },
  {
    "role": [],
    "group": [],
    "_id": "65e16777dc18347e551799da",
    "firstName": "Prdeep",
    "lastName": "S",
    "email": "pradeep@fkhfk.com",
    "password": "$2b$10$fjNmwf7rcCi7/A/Aeodzjesz6Qj8WVeM7ZEbeZAgmCqmkhqZDWAQC",
    "designation": "Dev",
    "country": "India",
    "state": "Tamilnadu",
    "createdAt": "2024-03-01T05:28:23.730Z",
    "updatedAt": "2024-03-01T05:28:23.730Z",
    "__v": 0
  },
  {
    "role": [],
    "group": [],
    "_id": "65e16cf7dc18347e551799e5",
    "firstName": "Prdeep",
    "lastName": "S",
    "email": "pradeep.sivakumar@dotsito.comw",
    "password": "$2b$10$GruJnAaAgt4fSLRetcplSOJE6EmKeIlGgZr.hXBnOUBbT2ytKjURi",
    "designation": "Dev",
    "country": "e",
    "state": "w",
    "createdAt": "2024-03-01T05:51:51.207Z",
    "updatedAt": "2024-03-01T05:51:51.207Z",
    "__v": 0
  },
  {
    "role": [],
    "group": [],
    "_id": "65e170b4dc18347e551799e9",
    "firstName": "Prdeep",
    "lastName": "S",
    "email": "re2@kf.d",
    "password": "$2b$10$JNg9CVZ9teLnsVeODTqiGuwg8Y4XttZWOXGcr73Hm3kd03PhGFNuK",
    "designation": "Dev",
    "country": "India",
    "state": "Tamilnadu",
    "createdAt": "2024-03-01T06:07:48.553Z",
    "updatedAt": "2024-03-01T06:07:48.553Z",
    "__v": 0
  },
  {
    "_id": "65e1db61cf9caf1dc3ca4165",
    "firstName": "userwrole",
    "lastName": "S",
    "email": "gjg@hfk.com",
    "password": "$2b$10$BxhWC4KieD8WLVvaWAfz6.ki3qD8hL5LL/tq5QRhvh.8VBbuSd/7y",
    "phoneNumber": "76868758",
    "designation": "Dev",
    "companyName": "abc",
    "country": "India",
    "state": "Tamilnadu",
    "role": [],
    "group": [],
    "createdAt": "2024-03-01T13:42:57.650Z",
    "updatedAt": "2024-03-01T13:42:57.650Z",
    "__v": 0
  },
  {
    "_id": "65e1dd52ffcf36dc498dc74f",
    "firstName": "1userwrole",
    "lastName": "S",
    "email": "gjg@hfdsssk.com",
    "password": "$2b$10$zJZIwIDUM.keKOtyOZSqoe3r969Mgrd.GT3g0tQ03LURqYdLk1RxW",
    "phoneNumber": "76868758",
    "designation": "Dev",
    "companyName": "abc",
    "country": "India",
    "state": "Tamilnadu",
    "role": [],
    "group": [],
    "createdAt": "2024-03-01T13:51:14.762Z",
    "updatedAt": "2024-03-01T13:51:14.762Z",
    "__v": 0
  },
  {
    "_id": "65e1dee19f1ca70ce8b211cf",
    "firstName": "1userwrole",
    "lastName": "S",
    "email": "gjg@hugjgfdsssk.com",
    "password": "$2b$10$1S55TO/IbC7/vG0alCDUoO/Fc6HFdK6jpOSmY5wqqovOOvgXtT0Dy",
    "phoneNumber": "76868758",
    "designation": "Dev",
    "companyName": "abc",
    "country": "India",
    "state": "Tamilnadu",
    "role": [],
    "group": [],
    "createdAt": "2024-03-01T13:57:53.700Z",
    "updatedAt": "2024-03-01T13:57:53.700Z",
    "__v": 0
  }
]


const columns = [
  { field: 'id', headerName: 'ID',width: 150, },
  { field: 'firstName', headerName: 'First name',width: 150, },
  { field: 'lastName', headerName: 'Last name', width: 150, },
  {
    field: 'age',
    headerName: 'Age',
    type: 'number',
    width: 150,
  },
  {
    field: 'fullName',
    headerName: 'Full name',
    width: 150,
  },
];

const rows = [
  { id: 1, lastName: 'Snow', firstName: 'Jon', age: 35 },
  { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42 },
  { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45 },
  { id: 4, lastName: 'Stark', firstName: 'Arya', age: 16 },
  { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null },
  { id: 6, lastName: 'ambristar', firstName: null, age: 150 },
  { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
  { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
  { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
  { id: 10, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
  { id: 11, lastName: 'Snow', firstName: 'Jon', age: 35 },
  { id: 12, lastName: 'Lannister', firstName: 'Cersei', age: 42 },
  { id: 13, lastName: 'Lannister', firstName: 'Jaime', age: 45 },
  { id: 14, lastName: 'Stark', firstName: 'Arya', age: 16 },
  { id: 15, lastName: 'Targaryen', firstName: 'Daenerys', age: null },
  { id: 16, lastName: 'ambristar', firstName: null, age: 150 },
  { id: 17, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
  { id: 18, lastName: 'Frances', firstName: 'Rossini', age: 36 },
  { id: 19, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
  { id: 20, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
];

export default function Table() {
//   const [columns, setColumns] = useState([]);
  const [isColumn, setIsColumn] = useState(false);
//   const [rows, setRows] = useState([]);

  useEffect(() => {
    // const fetchData = async () => {
    //   try {
    //     const res = await axios.get('http://localhost:8000/')
    //     if (res.length > 0) {
    //       const keysArray = Object.keys(res[0]);
    //       const columnsData = keysArray.map((key) => ({
    //         field: key,
    //         headerName: key==='_id' ? 'ID' : key,
    //         width: 250, 
    //       }));
    //       console.log(columnsData);
    //       setColumns(columnsData);
    //     }
    //   } catch (error) {
    //     console.error('Error fetching data:', error);
    //   }
    // };

    // fetchData();
  }, []);


  const handleRowClick = (params) => {
    console.log(params.id);
  };

  return (
    <div style={{ height: 640, width: '100%', backgroundColor: 'white' }}>
      <DataGrid
        rows={rows}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 10 },
          },
        }}
        // getRowId={(row) =>  row._id}
        onRowClick={handleRowClick}
        pageSizeOptions={[5, 10]}
        
      />
    </div>

  );
}