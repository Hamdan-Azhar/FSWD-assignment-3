import React from "react";
import { Heading, VStack,HStack,useBreakpointValue } from "@chakra-ui/react";
import FullScreenSection from "./FullScreenSection";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

const SkillsSection = () => {

    const contentWidth = useBreakpointValue({
        base: "100%", // Default for smaller screens  // Medium screens (tablets)
        md: "md",
        lg: "750px", // Large screens
      });
    
    return(
    <FullScreenSection
    isDarkBackground
    justifyContent="center"
    alignItems="center"
    backgroundColor="#2A4365">

    <VStack spacing={16} w={contentWidth}>
     <Heading as="h1" id="skills-section">Skills</Heading>
     <HStack spacing={4} w="100%" justifyContent="space-between">
      <Heading as="h1">React</Heading>
      <HStack>
      <FontAwesomeIcon icon={faStar} size="2x"/>
      <FontAwesomeIcon icon={faStar} size="2x"/>
      <FontAwesomeIcon icon={faStar} size="2x"/>
      <FontAwesomeIcon icon={faStar} size="2x"/>
      </HStack>
     </HStack>
     <HStack spacing={4}  w="100%" justifyContent="space-between">
      <Heading as="h1">django</Heading>
      <HStack>
      <FontAwesomeIcon icon={faStar} size="2x"/>
      <FontAwesomeIcon icon={faStar} size="2x"/>
      <FontAwesomeIcon icon={faStar} size="2x"/>
      <FontAwesomeIcon icon={faStar} size="2x"/>
      <FontAwesomeIcon icon={faStar} size="2x"/>
      </HStack>
     </HStack>
     <HStack spacing={4}  w="100%" justifyContent="space-between">
      <Heading as="h1">Javascript</Heading>
      <HStack>
      <FontAwesomeIcon icon={faStar} size="2x"/>
      <FontAwesomeIcon icon={faStar} size="2x"/>
      <FontAwesomeIcon icon={faStar} size="2x"/>
      <FontAwesomeIcon icon={faStar} size="2x"/>
      </HStack>
     </HStack>
     <HStack spacing={4}  w="100%" justifyContent="space-between">
      <Heading as="h1">Python</Heading>
      <HStack>
      <FontAwesomeIcon icon={faStar} size="2x"/>
      <FontAwesomeIcon icon={faStar} size="2x"/>
      <FontAwesomeIcon icon={faStar} size="2x"/>
      <FontAwesomeIcon icon={faStar} size="2x"/>
      <FontAwesomeIcon icon={faStar} size="2x"/>
      </HStack>
     </HStack>
    </VStack>
    </FullScreenSection>
    );
};

export default SkillsSection;
