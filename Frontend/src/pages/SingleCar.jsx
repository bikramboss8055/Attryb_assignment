import { Box, Flex, Image, Text, VStack } from "@chakra-ui/react"
import axios from "axios";
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom";

export default function SignleCar(){
    const [oem , setOem] = useState({})
    const [car , setCar] = useState({})
    const [load , setLoad] = useState(false)
    const params = useParams();

    useEffect(()=>{
        setLoad(true)
        async function getObj(){
            let res = await axios.get(`https://stormy-tights-hen.cyclic.app/car/single/${params.id}`);
            let ans = await res.data;
            console.log(ans)
            if(ans.status){
                setOem(ans.oem);
                setCar(ans.cars)
            }
           setLoad(false)
          }
          getObj();
    },[])
    if(load){
       return <Flex w='100%' h='85vh' justifyContent='center' alignItems='center'>
              <Image src='https://media2.giphy.com/media/3oEjI6SIIHBdRxXI40/giphy.gif?cid=ecf05e47srmulmbb6y28hhyqxremhy0u0c53ttn9e22qiw95&ep=v1_gifs_search&rid=giphy.gif&ct=g' />
       </Flex>
    }

    return <Box p='50px 40px'>
          <Flex justifyContent='center' gap='100px' flexWrap='wrap'>
          <VStack>
            <Image maxW='400px' m='auto' src={car.images} />
            <Flex gap='7px' alignItems='center' mt='10px'>
          <Text fontSize="sm" fontWeight="semibold" color="gray.600" mr="2">
             {car.year}
          </Text>
          <Text fontSize="sm" fontWeight="semibold" color="gray.600" mr="2">
             {car.car_Manufacturer}
          </Text>
          <Text fontSize="sm" fontWeight="semibold" color="gray.600" mr="2">
             {car.model}
          </Text>
          </Flex>
            </VStack>
            <VStack >
                <Text fontSize='25px' fontWeight='600'>Dealers Data</Text>
                <Text fontSize="sm" fontWeight="semibold" color="gray.600" mr="2">
                Car Manufecturer : {car.car_Manufacturer}
                </Text>
                <Text fontSize="sm" fontWeight="semibold" color="gray.600" mr="2">
                Model Name : {car.model}
                </Text>
                <Text fontSize="sm" fontWeight="semibold" color="gray.600" mr="2">
                Model Year : {car.year}
                </Text>
                <Text fontSize="sm" fontWeight="semibold" color="gray.600" mr="2">
                Registration Place : {car.Registration_Place}
                </Text>
                <Text fontSize="sm" fontWeight="semibold" color="gray.600" mr="2">
                KMs on Odometer : {car.KMs_on_Odometer}
                </Text>
                <Text fontSize="sm" fontWeight="semibold" color="gray.600" mr="2">
                Mileage : {car.mileage}
                </Text>
                <Text fontSize="sm" fontWeight="semibold" color="gray.600" mr="2">
                Asking Price : {car.price}
                </Text>
                <Text fontSize="sm" fontWeight="semibold" color="gray.600" mr="2">
                Original Paint : {car.Original_Paint}
                </Text>
                <Text fontSize="sm" fontWeight="semibold" color="gray.600" mr="2">
                Number Of Accident : {car.Number_of_accidents_reported}
                </Text>
                <Text fontSize="sm" fontWeight="semibold" color="gray.600" mr="2">
                Number Of Previous Buyers : {car.Number_of_previous_buyers}
                </Text>
                <Text fontSize="sm" fontWeight="semibold" color="gray.600" mr="2">
                Major Scratches : {car.Major_Scratches}
                </Text>
                <Text fontSize="sm" fontWeight="semibold" color="gray.600" mr="2">
                   Posted By : {car.userID?.username}
                </Text>
            </VStack>
            <VStack>
            <Text fontSize='25px' fontWeight='600'>OEM Specs</Text>
            <Text fontSize="sm" fontWeight="semibold" color="gray.600" mr="2">
                Car Manufecturer : {oem.car_manufacturers}
                </Text>
                <Text fontSize="sm" fontWeight="semibold" color="gray.600" mr="2">
                Model Name : {car.model}
                </Text>
                <Text fontSize="sm" fontWeight="semibold" color="gray.600" mr="2">
                Model Year : {car.year}
                </Text>
                <Text fontSize="sm" fontWeight="semibold" color="gray.600" mr="2">
                Power : {oem.power} BHP
                </Text>
                <Text fontSize="sm" fontWeight="semibold" color="gray.600" mr="2">
                Max Speed : {oem.max_speed} KM/H
                </Text>
                <Text fontSize="sm" fontWeight="semibold" color="gray.600" mr="2">
                Mileage : {oem.mileage}
                </Text>
                <Text fontSize="sm" fontWeight="semibold" color="gray.600" mr="2">
                New Vehicle Price : {car.price + 109980}
                </Text>
                <Text fontSize="sm" fontWeight="semibold" color="gray.600" mr="2">
                Colors Available : {oem.available_color}
                </Text>
            </VStack>
           
          </Flex>
    </Box>
}