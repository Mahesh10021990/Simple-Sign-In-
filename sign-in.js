import React, {Component} from 'react';
import {VStack, Heading, Container, Flex, SimpleGrid, FormControl, FormLabel, Button, Input, GridItem} from '@chakra-ui/react'


class Message extends Component{
  
    render() {
    return(
       
            <Container maxWidth="container.sm" corners="borderRadius.full" p={10}>
                <Flex h="70vh" py={5} bg='blue.600'>
              <VStack 
                w="full" 
                h="full" 
                p={20}
                spacing={10} 
                alignItems="flex-Start"
                bg="red.50">
               <VStack  w="full" h="full" p={5} spacing={5}>
                <Heading size="lg" >Sign-In</Heading>
                
                <SimpleGrid colSpan={1} width="full">
                    <GridItem colSpan={1}>
                        <FormControl>
                            <FormLabel>Email</FormLabel>
                            <Input placeholder="john@gmail.com"></Input>
                        </FormControl>
                    </GridItem>
                </SimpleGrid>
                <SimpleGrid colSpan={1} width="full">
                    <GridItem colSpan={1}>
                        <FormControl>
                            <FormLabel>Password</FormLabel>
                            <Input placeholder="********"></Input>
                        </FormControl>
                    </GridItem>
                </SimpleGrid>
                <Button colorScheme='blue'>Sign-In</Button>
                </VStack>
               </VStack>
                </Flex>
               </Container>
     
       
    )

    }
}

export default Message