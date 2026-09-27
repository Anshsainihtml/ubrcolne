import { RiMapPin2Fill } from '@remixicon/react'

const LocationSearchPane = ( props ) => {
    
    // sample array for location
    const locations = [
        "24B, Near Kapoor's cafe, Sheryians Coding School, Bhopal",
        "24C, Near Malholtra's cafe, Sheryians Coding School, Bhopal",
        "20B, Near Singhai's cafe, Sheryians Coding School, Bhopal",
        "18A, Near Sharma's cafe, Sheryians Coding School, Bhopal",
    ]
    return (
        <div>
            {/* this is just a sample data */}
            {
                locations.map(function (location,index) {
                   return <div onClick={()=> {
                            props.setVehiclePanel(true)
                            props.setPanelOpen(false)
                   }} className='flex gap-4 border-2 p-3 active:border-black border-gray-100 rounded-xl items-center my-4 justify-start' key={index}>
                        <h2 className='bg-[#eee] h-8 w-12 flex items-center justify-center rounded-full '>
                            <RiMapPin2Fill
                                size={18} />
                        </h2>
                        <h4 className='font-medium'>{location}</h4>
                    </div>
                })
            }


        </div>
    )
}

export default LocationSearchPane