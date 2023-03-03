import Head from 'next/head'
import Image from 'next/image'
import axios from 'axios'
import { useState } from 'react'
import {BsSearch} from 'react-icons/bs'
import Weather from './componnt'
import Progress from './spinner'




export default function Home() {

  const [city,setcity]=useState('')
  const [weather,setweather]=useState({})
  const [loading,setload]=useState(false)

  const urlL=`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=eff411a99fcde94bb4c70db771e0bd46`


  const fetch =(e)=>{
    e.preventDefault()
    setload(true) 
    axios.get(urlL).then((response)=>{
      setweather(response.data)
      console.log(response.data)
    })
    setcity('')
    setload(false)
  }





  console.log(city)

  if(loading){
    return (<p> Loading</p>)
  }
  else{

  return (
    <div className=' overflow-hidden h-screen' >
     
      <Head>
        <title>Weather App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Image src='https://images.unsplash.com/photo-1592210454359-9043f067919b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80 ' fill={true} className=" object-cover"/>
      <div className=' absolute top-0 left-0 right-0 bottom-0 bg-black/40 z-[1]'></div>
  

      <div  className=' relative flex justify-between items-center max-w-[500px] w-full m-auto pt-4 text-xl text-white z-10'>
        <form onSubmit={fetch } className=' flex justify-between items-center w-[300px] md:w-full m-auto p-3 bg-transparent border border-gray-300 text-black rounded-2xl'>

          <div><input type='text' placeholder="Search City" className='text-white bg-transparent placeholder:text-white focus:outline-none' onChange={(e)=>{setcity(e.target.value)}}/></div>

          <button onClick={fetch}><BsSearch size={20} className=" text-white"/></button>

        </form>
      




      </div>
     

      { <Weather data={weather} />}

  


    </div>
  )
}
}