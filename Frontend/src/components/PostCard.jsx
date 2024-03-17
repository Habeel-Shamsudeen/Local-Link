import { Card, CardHeader, CardBody, CardFooter,Image,Stack,Heading,Text,Divider,Button,ButtonGroup } from '@chakra-ui/react'
export function PostCard({title,imgUrl,desc,pay,location}){
    return <div>
        <Card maxW='sm' className='hover:bg-slate-100 hover:shadow-sm'>
  <CardBody>
    <Image
      src={imgUrl}
      alt='Green double couch with wooden legs'
      borderRadius='lg'
      height={300}
      width={600}
    />
    <Stack mt='6' spacing='3'>
      <Heading size='md'>{title}</Heading>
      <Text noOfLines={3}>
        {desc}
      </Text>
      <Text color='blue.600' fontSize='2xl'>
        {pay}/hr
      </Text>
    </Stack>
  </CardBody>
  <Divider />
  <CardFooter>
    <ButtonGroup spacing='2'>
      <Button variant='outline' colorScheme='black' className='hover:bg-black hover:text-slate-50'>
        Connect
      </Button>
      <Button variant='link' colorScheme='black' onClick={()=>window.open(location,'_blank')}>
        location
      </Button>
    </ButtonGroup>
  </CardFooter>
</Card>
    </div>
}