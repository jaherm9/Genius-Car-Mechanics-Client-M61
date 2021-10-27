import axios from 'axios';
import React from 'react';
import { useForm } from "react-hook-form";
import './AddService.css';

const AddService = () => {
    const { register, handleSubmit } = useForm();
  const onSubmit = data => {
      console.log(data)
      axios.post('http://localhost:5000/services', data)
      .then(res =>{
            if(res.data.insertedId){
                alert('added succesfully')
            }
          console.log(res)
      })
    };

    return (
        <div className="add-service">
            <h2>Please Add a Sevice</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input {...register("name", { required: true, maxLength: 20 })} placeholder="Name"/>
                <textarea {...register("description")} placeholder="Description"/>
                <input type="price" {...register("price")} placeholder="Price"/>
                <input {...register("img")} placeholder="image url"/>
                <input type="submit" />
            </form>
        </div>
    );
};

export default AddService;