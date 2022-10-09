import { Avatar, Button, HStack, Menu, MenuButton, MenuItemOption, MenuList, MenuOptionGroup, Text, Wrap, WrapItem } from "@chakra-ui/react";
import { ChevronDownIcon } from '@chakra-ui/icons';
import { getData, getFilteredData } from "../utils/services/APICall";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";

export default function Navbar() {
    const dispatch = useDispatch();
    const filterList = useSelector((state) => state.revenue.filterList);

    const handleFilterChange = (filters) => {
        getFilteredData(filters, dispatch);
    }

    useEffect(() => {
        getData(dispatch);
    }, []);

    return (
        <HStack h="4rem" w="100%" bg="#3742fa" px="1rem" justifyContent="space-between" boxShadow="lg">
            <Menu closeOnSelect={false}>
                <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
                    Select Revenue type
                </MenuButton>
                <MenuList minWidth='240px'>
                    <MenuOptionGroup title='Select Revenue Type' type='checkbox' onChange={handleFilterChange}>
                        <MenuItemOption value='ALL' defaultChecked={true}>All Revenue Type</MenuItemOption>
                        {filterList && filterList.map((filter, index) => (
                            <MenuItemOption key={index} value={filter}>{filter}</MenuItemOption>
                        ))}
                    </MenuOptionGroup>
                </MenuList>
            </Menu>
            <Wrap>
                <WrapItem>
                    <Avatar size="sm" name='Dan Abrahmov' src='https://bit.ly/dan-abramov' />
                </WrapItem>
                <WrapItem>
                    <Text color="white" fontSize="md" fontWeight="medium">Hi, John Doe</Text>
                </WrapItem>
            </Wrap>
        </HStack>
    )
}
