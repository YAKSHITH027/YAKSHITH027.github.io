import {
  Box,
  Button,
  Flex,
  Image,
  Link,
  Text,
  useColorMode,
} from '@chakra-ui/react'
import React from 'react'
import { MoonIcon, SunIcon, HamburgerIcon } from '@chakra-ui/icons'
import Sidebar from './Sidebar'
import { AiOutlineDownload } from 'react-icons/ai'
import resume from '../utils/Resume/P_Yakshith_Resume.pdf'
import Fade from 'react-reveal/Fade'
import openInNewTab from '../utils/newTabOpener'
const Navbar = () => {
  const { colorMode, toggleColorMode } = useColorMode()

  return (
    <Box
      id='nav-menu'
      pos={'sticky'}
      top='0'
      textTransform={'capitalize'}
      zIndex='1000'
    >
      <Fade top>
        <Flex
          justify={'space-between'}
          height='4rem'
          align={'center'}
          transition={'all 1s'}
        >
          <Box height='3.5rem' marginLeft={{ base: '2px', lg: '2rem' }}>
            <Link href='#'>
              <Image
                src={
                  colorMode == 'dark'
                    ? 'https://i.ibb.co/Rj0j6jc/Yakshith-1-removebg-preview.png'
                    : 'https://i.ibb.co/vYtc4mH/Yakshith-removebg-preview.png'
                }
                height={'3.5rem'}
              />
            </Link>
          </Box>

          <Flex
            display={{ base: 'none', lg: 'flex' }}
            width={'50%'}
            justify='space-around'
            align={'center'}
            marginRight='2rem'
          >
            <Link href='#home' className='nav-link home'>
              home
            </Link>
            <Link href='#about' className='nav-link about'>
              about
            </Link>
            <Link href='#skills' className='nav-link skills'>
              skills
            </Link>
            <Link href='#projects' className='nav-link projects'>
              projects
            </Link>
            <Link href='#contact' className='nav-link contact'>
              contactt
            </Link>

            <Button
              id='resume-button-1'
              width='max-content'
              colorScheme={'teal'}
              onClick={() =>
                openInNewTab(
                  'https://drive.google.com/file/d/1iRtaj8LV9l5y9-aiEVNRFC0KLz5Q-JMZ/view?usp=sharing'
                )
              }
            >
              <a
                href={resume}
                download
                className='nav-link resume'
                id='resume-link-1'
              >
                <Flex>
                  <Text>Resume</Text>
                  <Text as='span' ml={'2'}>
                    <AiOutlineDownload fontSize={'1.2rem'} />
                  </Text>
                </Flex>
              </a>
            </Button>
            <Button onClick={toggleColorMode}>
              {colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
            </Button>
          </Flex>
          <Box display={{ lg: 'none' }} marginRight='2rem'>
            <Sidebar />
          </Box>
        </Flex>
      </Fade>
    </Box>
  )
}

export default Navbar
