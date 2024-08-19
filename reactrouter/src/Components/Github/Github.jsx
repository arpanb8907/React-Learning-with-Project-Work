import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'
function Github() {

    const data = useLoaderData()
    //console.log(data);
    
    // const [count,setcount] = useState(0)
    // const [id,setid] = useState("")
    // const [name,setname] = useState("")
    // const [data,setddata] = useState({})
    // useEffect(()=>{

    //     fetch("https://api.github.com/users/arpanb8907")
    //     .then(res=> res.json())
    //     .then(data=>{
    //         console.log(data);
            
    //        setcount(data.followers)
    //        setid(data.login)
    //        setname(data.name)
    //        setddata(data)
            
    //     })

    // },[])


  return (
    <div className='text-center m-4 bg-gray-600 text-white p-4 text-3xl'>
      Github followers : {data.followers} <br></br>
      User Id : {data.login} <br />
      Name : {data.name} 

      <img className='mx-auto  pt-4 ' src={data.avatar_url} alt='Git picture' width={300} />
    </div>
  )
}

export default Github

export const githubinfoloader = async()=>{
    const response = await fetch("https://api.github.com/users/arpanb8907")
  
    return response.json()
  }