
import Image from 'next/image'

export default function Weather({data}) {



    //main

  return (
    <div className="relative flex flex-col justify-between max-w-[500px] w-full h-[90vh] m-auto p-4 text-gray-300 z-10 pb-12" >
        <div className="relative flex justify-between pt-12" >

            <div className=" flex flex-col items-center justify-center">
                <Image 
                src={`http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`}
                width='100'
                height='100'
                 alt="/"/>
                <p className="text-2xl">{data.weather[0].main}</p>
            </div>
            <p className="text-7xl">{data.main.temp.toFixed(0)-273}&#176;</p>


        </div>

        <div className=' bg-black/75 relative p-8 rounded-md'>
            <p className="text-2xl text-center pb-6"> Weather in {data.name}</p>
            <div className='flex justify-between text-center items-center'>
                <div >
                    <p className=" font-bold text-2xl">{data.main.feels_like.toFixed(0)-273}&#176;</p>
                    <p>Feels like</p>

                </div>

                <div>
                    <p className=" font-bold text-xl">{data.main.humidity}</p>
                    <p>Humidity</p>

                </div>

                <div>
                    <p className=" font-bold text-2xl">{data.wind.speed.toFixed(0)} MPH</p>
                    <p>Wind</p>

                </div>
            </div>
        </div>
    </div>
  )
}
