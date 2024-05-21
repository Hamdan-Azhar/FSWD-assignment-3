import React, { useState, useRef } from "react";
import { Box, HStack, IconButton, Collapse, useColorModeValue, Heading } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navRef = useRef();

  const handleClick = (anchor) => () => {
    const id = `${anchor}-section`;
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <Box
      backgroundColor={useColorModeValue("#18181b", "gray.100")} // Dynamic background color based on color mode
      position="fixed"
      width="100%"
      zIndex={10}
    >
      <Box color={useColorModeValue("white", "gray.800")} maxWidth="1280px" margin="0 auto">
        <HStack px={16} py={4} justifyContent="space-between" alignItems="center">
          <Box>
            <Heading as="h1">Hamdan Azhar</Heading>
          </Box>

          <Box display={{ base: "none", md: "flex" }}> {/* Hidden on mobile */}
            <nav>
              <HStack spacing={8}>
                <a onClick={handleClick("projects")} style={{ cursor: "pointer" }}>
                  Projects
                </a>
                <a onClick={handleClick("skills")} style={{ cursor: "pointer" }}>
                  Skills
                </a>
                <a onClick={handleClick("contactme")} style={{ cursor: "pointer" }}>
                  Contact me
                </a>
              </HStack>
            </nav>
          </Box>

          <IconButton
            icon={<FontAwesomeIcon icon="fa-solid fa-bars"/>}
            aria-label="Toggle Navigation"
            onClick={() => setIsOpen(!isOpen)}
            display={{ base: "flex", md: "none" }} // Only visible on mobile
          />
        </HStack>

        <Collapse in={isOpen} animateOnMount ref={navRef}>
          <Box py={4} px={16}> {/* Mobile navigation content */}
            <nav>
              <HStack spacing={8}>
                <a onClick={handleClick("projects")} style={{ cursor: "pointer" }}>
                  Projects
                </a>
                <a onClick={handleClick("skills")} style={{ cursor: "pointer" }}>
                  Skills
                </a>
                <a onClick={handleClick("contactme")} style={{ cursor: "pointer" }}>
                  Contact me
                </a>
              </HStack>
            </nav>
          </Box>
        </Collapse>
      </Box>
    </Box>
  );
};

export default Header;
