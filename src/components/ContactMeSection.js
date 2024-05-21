import React, {useEffect} from "react";
import { useFormik } from "formik";
import {
  Box,
  Button,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Heading,
  Input,
  Textarea,
  VStack,
  HStack,
  useBreakpointValue,
} from "@chakra-ui/react";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import {
  faGithub,
  faLinkedin,
  faStackOverflow,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import * as Yup from 'yup';
import FullScreenSection from "./FullScreenSection";
import useSubmit from "../hooks/useSubmit";
import {useAlertContext} from "../context/alertContext";

const socials = [
  {
    icon: faEnvelope,
    url: "mailto: hello@example.com",
  },
  {
    icon: faGithub,
    url: "https://github.com",
  },
  {
    icon: faLinkedin,
    url: "https://www.linkedin.com",
  },
  {
    icon: faStackOverflow,
    url: "https://stackoverflow.com",
  },
];

const LandingSection = () => {
  const {isLoading, response, submit} = useSubmit();
  const { onOpen } = useAlertContext();

  const formik = useFormik({
    initialValues: {firstName: '',
      email: '',
      date: new Date().toISOString().slice(0, 10),
      comment: ''},
    onSubmit: (values) => {
      submit('https://hamdan_azhar.com/contactme',values);
    },
    validationSchema: Yup.object({
      firstName:Yup.string().required("Required"),
      email:Yup.string().email("Invalid email address").required("Required"),
      comment:Yup.string().min(25,"Must be at least 25 characters").required("Required")
    }),
  });
  
  useEffect(()=>{
    if(response)
    {
      onOpen(response.message);
      formik.resetForm();
    }
  },[response]);

  const contentWidth = useBreakpointValue({
    base: "100%", // Default for smaller screens  // Medium screens (tablets)
    md: "600 to 1024px",
    lg: "1024px", // Large screens
  });

  return (
    <FullScreenSection
      isDarkBackground
      backgroundColor="#512DA8"
      spacing={8}
    >
      <VStack w={contentWidth} p={32} alignItems="center">
        <Heading as="h1" id="contactme-section">
          Contact me
        </Heading>
        <Box p={6} rounded="md" w="100%">
          <form onSubmit={formik.handleSubmit}>
            <VStack spacing={4}>
              <FormControl isInvalid={!!formik.errors.firstName && formik.touched.firstName }>
                <FormLabel htmlFor="firstName">Name</FormLabel>
                <Input 
                  id="firstName"
                  name="firstName"
                  {...formik.getFieldProps("firstName")}
                />
                <FormErrorMessage>{formik.errors.firstName}</FormErrorMessage>
              </FormControl>
              <FormControl isInvalid={!!formik.errors.email && formik.touched.email }>
                <FormLabel htmlFor="email">Email Address</FormLabel>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  {...formik.getFieldProps("email")}
                />
                <FormErrorMessage>{formik.errors.email}</FormErrorMessage>
              </FormControl>
              <FormControl>
                <FormLabel htmlFor="type">Date</FormLabel>
                <Input
                  id="date"
                  name="date"
                  type="date"
                  {...formik.getFieldProps("date")}
                />
              </FormControl>
              <FormControl isInvalid={!!formik.errors.comment && formik.touched.comment}>
                <FormLabel htmlFor="comment">Description</FormLabel>
                <Textarea
                  id="comment"
                  name="comment"
                  height={250}
                  {...formik.getFieldProps("comment")}
                />
                <FormErrorMessage>{formik.errors.comment}</FormErrorMessage>
              </FormControl>
              <Button isLoading = {isLoading} type="submit" colorScheme="purple" width="full">
                Submit
              </Button>
              <FormControl>
                <FormLabel>Social media</FormLabel>
                <HStack spacing={8} alignItems="center">
                  {socials.map(social=>{
                    return(
                    <a key={social.url} href={social.url}>
                      <FontAwesomeIcon icon={social.icon} size="2x"/>
                    </a>)
                  })} 
                </HStack>
              </FormControl>
            </VStack>
          </form>
        </Box>
      </VStack>
    </FullScreenSection>
  );
};

export default LandingSection;
