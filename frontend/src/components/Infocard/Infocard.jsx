import { Image ,Box, Center, Heading, Text, Stack, Button, Grid, Flex,Card,CardBody,Divider,CardFooter,ButtonGroup} from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import {getDetailsData} from '../../actions/actions'
import { StarIcon } from '@chakra-ui/icons';
import './Infocard.css'

function Infocard({ src }) {
    console.log("Hello")
  let dispatch = useDispatch();
  return (
    <div className='infocard'>
      <Box>
        <Card maxW='sm'>
  <CardBody>
    <Image
      w={"100%"}
      src={src.images}
      alt='Green double couch with wooden legs'
      borderRadius='lg'
    />
    <Stack mt='6' spacing='6' className='stack'>
      <Heading >Name: {src.name}</Heading>
      <p style={{fontSize:"20px"}}>Type: {src.type}</p>
      <p style={{fontSize:"20px"}}> Location: {src.location}</p>
     <b>Price: {src.price}</b>
    </Stack>
  </CardBody>
  <Divider />
  <CardFooter>
    <ButtonGroup>
      <Link to={'/details'}>
      <Button className='btn'  onClick={(e)=>{dispatch(getDetailsData(src))}}>
        Show More
      </Button>
      </Link>
    </ButtonGroup>
  </CardFooter>
</Card>
      </Box>
     
    </div>
  );
}

export default Infocard;

