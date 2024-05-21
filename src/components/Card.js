import { Heading, HStack, Image, Text, VStack, Link } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import React from "react";

const Card = ({ title, description, imageSrc, link }) => {
  return (
     <VStack bg="white" color="black" borderRadius='xl'>
      <Image src={imageSrc} objectFit="cover" borderRadius='lg'/>
      <VStack alignItems="flex-start" padding={4} spacing={4}>
       <Heading as="h3"  size="md">{title}</Heading>
       <Text color="#64748b" fontSize="lg">{description}</Text>
       <HStack spacing={2} alignItems="center">
       <Link href={link} _hover={{ textDecoration: "none", cursor: "pointer" }}>
        <Text>See More</Text>
       </Link>
       <Link href={link} _hover={{ textDecoration: "none", cursor: "pointer" }}>
        <FontAwesomeIcon icon={faArrowRight} size="1x" />
       </Link>
       </HStack>
     </VStack>    
    </VStack>
  );
};

export default Card;
