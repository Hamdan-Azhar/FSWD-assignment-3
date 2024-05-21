import React from "react";
import { Avatar, Heading, VStack } from "@chakra-ui/react";
import FullScreenSection from "./FullScreenSection";

const greeting = "Hello, I am Hamdan!";
const bio1 = "A full stack developer";
const bio2 = "specialised in React and django";

const IntroductionSection
 = () => (
  <FullScreenSection
    justifyContent="center"
    alignItems="center"
    isDarkBackground
    backgroundColor="#2A4365"
  >
  <VStack spacing={16}>
    <VStack spacing={4}>
     <Avatar name="hamdan" size="xl"src={require("../images/profile_image.jpg")}/>
     <Heading as="h4" size="md">{greeting}</Heading>
    </VStack>
    <VStack spacing={6}>
     <Heading as="h1" size="3xl" whiteSpace="normal" overflow="wrap">{bio1}</Heading>
     <Heading as="h1" size="3xl" whiteSpace="normal" overflow="wrap">{bio2}</Heading>
    </VStack>
  </VStack>
  </FullScreenSection>
);

export default IntroductionSection;
