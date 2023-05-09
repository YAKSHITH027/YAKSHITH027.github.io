import {
  Box,
  Button,
  Flex,
  Heading,
  Image,
  Link,
  Text,
  useColorMode,
} from '@chakra-ui/react'
import React from 'react'
import { AiOutlineArrowDown } from 'react-icons/ai'
import Fade from 'react-reveal/Fade'

const About = () => {
  const { colorMode, toggleColorMode } = useColorMode()
  return (
    <Fade bottom>
      <Flex
        minH={'70vh'}
        id='about'
        className='about section'
        flexDir={'column'}
        justify={'center'}
        align='center'
        paddingTop={{ base: '2rem', lg: '0' }}
      >
        <Fade>
          <Heading mb={'3rem'}>About me</Heading>
        </Fade>
        <Flex
          // height={"90%"}
          justify='center'
          alignItems={'center'}
          gap='3rem'
          borderRadius={'1rem'}
          flexDir={{ base: 'column', lg: 'row' }}
          width={{ base: '100%', lg: '80%' }}
          padding={{ base: '2px', lg: '2.4rem' }}
          boxShadow={
            colorMode == 'dark'
              ? '0px 0px 35px 0px #444559'
              : '0px 0px 35px 0px #c0c1cf'
          }
          box
          py={'1rem'}
        >
          <Flex
            height={{ base: '300px', sm: '300px', lg: '100%' }}
            width={{ base: '100%', lg: '25%' }}
            justify={'center'}
            align='center'
          >
            <Image
              className='home-img'
              src={
                'https://i.ibb.co/ZHY7H9g/1661791218027-1-1-removebg-preview.png'
              }
              height='100%'
              minW={{ lg: '250px' }}
              borderRadius={'50%'}
            />
          </Flex>
          <Flex
            flexDir={'column'}
            align='center'
            justify={'center'}
            textTransform='capitalize'
            gap='3'
            padding='5px'
            height={{ base: '477px', md: '300px', lg: '100%' }}
            width={{ base: '100%', lg: '70%' }}
          >
            <Flex
              justify={'space-between'}
              flexDir={{ base: 'column', md: 'row' }}
              gap='2'
              width='93%'
            >
              <Flex
                justify={'center'}
                align='center'
                flexDir={'column'}
                padding={'0.1rem'}
                className='info-shadow'
                bg={colorMode == 'dark' ? '#2e2f47' : '#dfdfe8'}
                borderRadius={'6px'}
                gap='1'
                width={{ base: 'full', md: '12rem' }}
              >
                <Text>2000+hours</Text>
                <Text textAlign={'center'}>full stack coding</Text>
              </Flex>
              <Flex
                justify={'center'}
                align='center'
                box-shadow='0px 0px 35px 0px #444559'
                flexDir={'column'}
                padding={{ base: '1px', lg: '0.5rem' }}
                bg={colorMode == 'dark' ? '#2e2f47' : '#dfdfe8'}
                className='info-shadow'
                borderRadius={'6px'}
                width={{ base: 'full', md: '16rem' }}
                gap='1'
              >
                <Text>5+ Major Projects</Text>
                <Text>40+ Mini Projects</Text>
              </Flex>
              <Flex
                justify={'center'}
                align='center'
                flexDir={'column'}
                bg={colorMode == 'dark' ? '#2e2f47' : '#dfdfe8'}
                padding={'0.5rem'}
                className='info-shadow'
                box-shadow='0px 0px 35px 0px #444559'
                borderRadius={'6px'}
                width={{ base: 'full', md: '12rem' }}
                gap='1'
              >
                <Text>100+ hours</Text>
                <Text>Soft skills</Text>
              </Flex>
            </Flex>
            <Box my={'1.6rem'}>
              <Text
                textAlign={'center'}
                width='80%'
                margin={'auto'}
                id='user-detail-intro'
              >
                Hi there! I'm Yakshith, a full stack developer proficient in
                various technologies such as HTML, CSS, JavaScript, React,
                Node.js, Express and MongoDB. With a strong background in
                front-end and back-end development, I'm passionate about
                creating innovative and efficient solutions for web applications
              </Text>
              <Flex
                justify={'center'}
                mt='1.9rem'
                mb={{ base: '1rem', sm: '0' }}
              >
                <Link href='#projects' style={{ textDecoration: 'none' }}>
                  <Button colorScheme={'teal'} textAlign='center'>
                    My Projects{' '}
                    <Text as='span' pl={'4px'}>
                      <AiOutlineArrowDown />
                    </Text>
                  </Button>
                </Link>
              </Flex>
            </Box>
          </Flex>
        </Flex>
      </Flex>
    </Fade>
  )
}

export default About
