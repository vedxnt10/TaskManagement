// import React, { useEffect } from 'react';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link,useParams } from 'react-router-dom';

export default function Home() {

    const[users, setUsers] = useState([])

    const { id } = useParams();

    useEffect(()=>{
        loadUsers();
    },[]);

    const loadUsers =async()=>{
        const result = await axios.get("http://localhost:8080/users")
        setUsers(result.data);
    }

    const deleteTask = async (id) => {
        await axios.delete(`http://localhost:8080/user/${id}`);
        loadUsers();
      };


  return (
    <div className='container'>
        <div className='py-4'>
        <table className="table border shadow">
  <thead>
    <tr>
      <th scope="col">Task No</th>
      <th scope="col">Task</th>
      <th scope="col">Description</th>
      <th scope="col">Status</th>
      <th scope="col">Action</th>
    </tr>
  </thead>
  <tbody>
    {
        users.map((user, index)=>(

            <tr>
      <th scope="row" key={index}>{index+1}</th>
      <td>{user.task}</td>
      <td>{user.description}</td>
      <td>{user.status}</td>
      <td>
        <Link className="btn btn-primary mx-2" to={`/viewtask/${user.id}`}>View</Link>
        <Link className="btn btn-outline-primary mx-2" to={`/edittask/${user.id}`}>Edit</Link>
        <button className="btn btn-danger mx-2"  onClick={() => deleteTask(user.id)}>Delete</button>
      </td>
    </tr>

        ))
    }
    
    
  </tbody>
</table>
        </div>

    </div>
  )
}
