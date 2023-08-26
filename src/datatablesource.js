import React from "react";

export const userColumns = [
    
  { field: "id", headerName: "الكود", width: 70  , headerAlign: 'end'},
  {
    field: "user",
    headerAlign: 'end',

    headerName: "اسم المستخدم",
    width: 230,
    renderCell: (params) => {
      return (
        <div className="cellWithImg" style={{display : "flex" ,flexDirection:"row",  justifyContent:"end" ,alignItems:"center", gap :"20px" ,direction : "rtl" }  }>
          <img className="cellImg" style={{alignItems : "center"}  } src={params.row.img} alt="avatar" />
          {params.row.username}
        </div>
      );
    },
  },
  {
    field: "email",
    headerName: "البريد الإليكتروني",
    headerAlign: 'end',
    
    width: 230,
    renderCell: (params) => (
      <div style={{display : "flex" ,flexDirection:"row",  justifyContent:"center" ,alignItems:"center", }}>{params.value}</div>
    ),
  },

  {
    field: "age",
    headerName: "العمر",
    headerAlign: 'end',

    width: 100,
  },
  {
    field: "phone",
    headerName: "رقم الهاتف",
    headerAlign: 'end',

    width: 150,
  },

];

//temporary data
export const userRows = [
  {
    id: 1,
    username: "عمر عصام",
    img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    status: "active",
    email: "omar@gmail.com",
    age: 35,
    phone:"01028858104",
    
    
  },
  {
    id: 2,
    username: "مصطفى بكر",
    img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    email: "mostafa@gmail.com",
    status: "passive",
    age: 42,
    phone:"01028858104"

  },
  {
    id: 3,
    username: "محمد يحيى",
    img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    email: "mohamed@gmail.com",
    status: "pending",
    age: 45,
    phone:"01028858104"

  },
  {
    id: 4,
    username: "معاذ السيد",
    img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    email: "Moaz@gmail.com",
    status: "active",
    age: 16,
    phone:"01028858104"

  },
  {
    id: 5,
    username: "مسعود حامد",
    img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    email: "mas'oud@gmail.com",
    status: "passive",
    age: 22,
    phone:"01028858104",

  },
  {
    id: 6,
    username: "عمار عصام",
    img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    email: "Amar@gmail.com",
    status: "active",
    age: 15,
    phone:"01028858104",

  },
  {
    id: 7,
    username: "فريد عصام ",
    img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    email: "Farid@gmail.com",
    status: "passive",
    age: 44,
    phone:"01028858104",

  },
  {
    id: 8,
    username: "عبدالرحمن محمد ",
    img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    email: "Abdullrahman@gmail.com",
    status: "active",
    age: 36,
    phone:"01028858104",

  },
  {
    id: 9,
    username: "محمد مصلح",
    img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    email: "Mosleh@gmail.com",
    status: "pending",
    age: 65,
    phone:"01028858104",

  },
  {
    id: 10,
    username: "طارق هشام",
    img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    email: "Tarek@gmail.com",
    status: "active",
    age: 57,
    phone:"01028858104",

  },
];
