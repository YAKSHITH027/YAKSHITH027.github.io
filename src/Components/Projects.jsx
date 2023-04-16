import {
  Box,
  Button,
  Code,
  Flex,
  Grid,
  Heading,
  Image,
  Link,
  Text,
} from '@chakra-ui/react'
import React from 'react'
import { FaGithub } from 'react-icons/fa'
import { GrDeploy } from 'react-icons/gr'
import { projectsList } from '../utils/Data/Projects'
import Fade from 'react-reveal/Fade'

const Projects = () => {
  return (
    <Box minH={'10rem'} id='projects' my='2rem' mb='4rem'>
      <Heading mb={'1rem'} textAlign={'center'}>
        My Projects
      </Heading>
      <Grid
        templateColumns={{
          base: 'repeat(1,1fr)',
          md: 'repeat(2,1fr)',
          lg: 'repeat(3,1fr)',
        }}
        gap='2'
      >
        {projectsList.map((item) => {
          return (
            <Fade bottom>
              <Box
                className='project-card'
                borderWidth={'2px'}
                padding='0.5rem'
                key={item.id}
                borderRadius='md'
              >
                <Box
                  overflow='hidden'
                  height='240px'
                  width='full'
                  mb='6px'
                  borderRadius='md'
                >
                  <Image
                    transition={'all,0.4s'}
                    className='project-scale'
                    src={item.image}
                    height={'100%'}
                    width='100%'
                  />
                </Box>
                <Flex flexDir={'column'}>
                  <Box>
                    <Text
                      className='project-title'
                      fontSize={'1.1rem'}
                      textTransform='capitalize'
                      pl={'4px'}
                      my='4px'
                    >
                      {item.name}
                    </Text>
                  </Box>
                  <Flex textTransform={'capitalize'}>
                    {item.techStacks.map((item) => {
                      return (
                        <Code
                          margin={'2px'}
                          key={item}
                          borderRadius='md'
                          colorScheme='teal'
                          children={item}
                        />
                      )
                    })}
                  </Flex>
                  <Text
                    className='project-description'
                    px={'3px'}
                    letterSpacing='0.7px'
                    my={'7px'}
                  >
                    {item.desc}
                  </Text>
                  <Flex justify={'space-between'} px='0.2rem'>
                    <Link
                      href={item.liveLink}
                      isExternal
                      style={{ textDecoration: 'none' }}
                    >
                      <Button
                        className='project-deployed-link'
                        colorScheme={'teal'}
                      >
                        Deployed Link{' '}
                        <Text as='span' ml='4px'>
                          <GrDeploy />
                        </Text>
                      </Button>
                    </Link>
                    <Link
                      href={item.githubLink}
                      isExternal
                      style={{ textDecoration: 'none' }}
                    >
                      <Button
                        className='project-github-link'
                        colorScheme={'teal'}
                      >
                        Github
                        <Text as='span' ml='4px'>
                          <FaGithub />
                        </Text>
                      </Button>
                    </Link>
                  </Flex>
                </Flex>
              </Box>
            </Fade>
          )
        })}
      </Grid>
    </Box>
  )
}

export default Projects
