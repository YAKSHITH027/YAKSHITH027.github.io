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
import Yakshith from '../utils/Images/yakshith.jpg'

const About = () => {
  const { colorMode, toggleColorMode } = useColorMode()
  return (
    <Fade bottom>
      <Heading textAlign={'center'} margin={'40px'} id='about'>
        About Me
      </Heading>
      <Flex
        flexDir={{
          base: 'column',
          lg: 'row',
        }}
        width={{ base: '93%', md: '80%' }}
        gap={'10%'}
        margin={'auto'}
      >
        <Image
          width={{ base: '80%', lg: '30%' }}
          src={Yakshith}
          height={'100%'}
          margin={'auto'}
        />
        <Box
          width={{ base: '95%', lg: '60%' }}
          padding={{ base: '10px 4px', lg: '20px 10px' }}
          lineHeight={'190%'}
          margin={'auto'}
        >
          I have 7 months of experience and a deep understanding of various web
          technologies such as HTML, CSS,
          JavaScript,React,Next.js,Redux,Vue.js,TypeScript. I am dedicated to
          keeping up with the latest trends and techniques in web development,
          and I am constantly learning and expanding my skill set. I have a keen
          eye for detail and strive for perfection in every project I work on.
          When I'm not coding, I enjoy exploring new technologies and work on
          side projects.
          <Flex
            flexDir={{ base: 'column', lg: 'row' }}
            gap={{ base: '30px', lg: '10%' }}
            marginTop={'20px'}
          >
            <Flex
              justifyContent={'center'}
              alignItems={'center'}
              flexDir={'column'}
              width={{ base: '80%', lg: '30%' }}
              maxWidth={'300px'}
              margin={'auto'}
              boxShadow={'rgba(49, 99, 99, 0.6) 0px 2px 8px 0px'}
              borderRadius={'8px'}
              padding={'5px 13px'}
              className='icon-shadow'
              transition={'all 0.3s '}
            >
              <Text textAlign={'center'} fontSize={'2xl'} fontWeight={600}>
                7+
              </Text>
              <Text marginBottom={'-4px'} textAlign={'center'}>
                Months of
              </Text>
              <Text textAlign={'center'}>experience</Text>
            </Flex>
            <Flex
              justifyContent={'center'}
              alignItems={'center'}
              flexDir={'column'}
              width={{ base: '80%', lg: '30%' }}
              maxWidth={'300px'}
              margin={'auto'}
              boxShadow={'rgba(49, 99, 99, 0.6) 0px 2px 8px 0px'}
              borderRadius={'8px'}
              padding={'5px 13px'}
              className='icon-shadow'
              transition={'all 0.3s '}
            >
              <Text textAlign={'center'} fontSize={'2xl'} fontWeight={600}>
                9+
              </Text>
              <Text marginBottom={'-4px'} textAlign={'center'}>
                Projects{' '}
              </Text>
              <Text textAlign={'center'}>completed </Text>
            </Flex>
            <Flex
              justifyContent={'center'}
              alignItems={'center'}
              flexDir={'column'}
              width={{ base: '80%', lg: '30%' }}
              maxWidth={'300px'}
              margin={'auto'}
              boxShadow={'rgba(49, 99, 99, 0.6) 0px 2px 8px 0px'}
              borderRadius={'8px'}
              padding={'5px 13px'}
              className='icon-shadow'
              transition={'all 0.3s '}
            >
              <Text textAlign={'center'} fontSize={'2xl'} fontWeight={600}>
                1
              </Text>
              <Text marginBottom={'-4px'} textAlign={'center'}>
                Companies{' '}
              </Text>
              <Text textAlign={'center'}>worked </Text>
            </Flex>
          </Flex>
        </Box>
      </Flex>
    </Fade>
  )
}

export default About
