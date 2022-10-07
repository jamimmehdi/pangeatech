import {
    Box,
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    Button,
    Checkbox,
    Text,
    Flex,
} from '@chakra-ui/react'
import axios from 'axios';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addFilter, filterData, setCurrentPageData } from '../../helper/chartSlice';

export default function Navbar() {
    const filter = useSelector((state) => state.chart.filter);
    const rawData = useSelector((state) => state.chart.rawData);
    const activeFilter = useSelector((state) => state.chart.activeFilter);
    const dispatch = useDispatch()

    const fetchData = async () => {
        const URL = `http://fetest.pangeatech.net/data`;
        await axios.get(URL)
            .then((response) => {
                dispatch(filterData(response.data));;
                dispatch(setCurrentPageData(0));
            })
            .catch((err) => console.log(err))
    }
    useEffect(() => {
        fetchData()
    }, [activeFilter])
    return (
        <Flex bg='#3742fa' w='100%' p={4} color='white' alignItems='center' justifyContent='space-between'>
            <Menu>
                <MenuButton as={Button}
                    px={4}
                    py={2}
                    bg='white'
                    color='black'
                    transition='all 0.2s'
                    borderRadius='md'
                    borderWidth='1px'
                    _hover={{ bg: 'gray.100' }}
                    _focus={{ boxShadow: 'outline' }}
                >
                    Select Revenue Type
                </MenuButton>
                <MenuList
                    color='black'>
                    <MenuItem
                            bg='white'
                            color='black'
                            _hover={{ bg: 'gray.200' }}
                            onChange={() => dispatch(addFilter('alldata'))}
                        >
                            <Checkbox >All Data</Checkbox>
                        </MenuItem>
                    {filter && filter.map((item, index) => (
                        <MenuItem
                            key={index}
                            bg='white'
                            color='black'
                            _hover={{ bg: 'gray.200' }}
                            onChange={() => dispatch(addFilter(item))}
                        >
                            <Checkbox >{item}</Checkbox>
                        </MenuItem>
                    ))}
                </MenuList>
            </Menu>
            <Box>
                <Text fontSize='lg'>Hi, John Doe</Text>
            </Box>
        </Flex>
    )
}
