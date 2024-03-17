import React from "react";
import {
  Card,
  CardBody,
  CardFooter,
  Image,
  Stack,
  Heading,
  Text,
  Divider,
  Button,
} from "@chakra-ui/react";

export function CustomerPageCard({
  image,
  username,
  description,
  rating,
  yoe,
  occupation,
}) {
  return (
    <div>
      <Card
        maxW="sm"
        className="my-2 hover:bg-slate-100 hover:shadow-sm mx-2 min-h-3.5"
      >
        <CardBody>
          <Image
            src={image}
            alt="Green double couch with wooden legs"
            borderRadius="lg"
            height={300}
            width={600}
          />
          <Stack mt="6" spacing="3">
            <Heading size="md">{username}</Heading>
            <Text className="text-lg">{occupation}</Text>
            <Text noOfLines={5}>{description}</Text>
            <Text color="blue.600" fontSize="2xl">
              {rating}/5 rating
            </Text>
          </Stack>
        </CardBody>
        <Divider />
        <CardFooter>
          <div className="flex justify-between items-center">
            <Button
              variant="outline"
              colorScheme="black"
              className="hover:bg-black hover:text-white"
            >
              Contact
            </Button>
            <div className="flex flex-col items-center">
              <b>{yoe}</b>
              <p className="text-gray-500 text-xs ps-2">YOE</p>
            </div>
          </div>
        </CardFooter>
      </Card>
    </div>
  );
}
