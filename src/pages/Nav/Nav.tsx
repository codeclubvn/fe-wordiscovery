import { HamburgerIcon } from '@chakra-ui/icons'
import { Drawer, DrawerOverlay, DrawerContent, DrawerBody, Flex, Button, useDisclosure, IconButton } from '@chakra-ui/react'
import styled from '@emotion/styled'
import { Link } from 'wouter'
import routes from '../routes'

export default function Nav() {
    const { isOpen, onOpen, onClose } = useDisclosure()

    return (
        <>
            <NavButton icon={<HamburgerIcon />} onClick={onOpen} aria-label={''}>Button</NavButton>
            <Drawer placement='left' onClose={onClose} isOpen={isOpen}>
                <DrawerOverlay />
                <DrawerContent>
                    <DrawerBody>
                        <Flex
                            flexDirection='column'
                            flexGrow={1}
                            gap={2}
                        >
                            {routes.map(route =>
                                    <Link key={route.path} href={route.path} >
                                    <Button key={route.path}>{route.name}</Button>
                                    </Link>
                                
                            )}
                        </Flex>
                    </DrawerBody>
                </DrawerContent>
            </Drawer>
        </>
    )
}

const NavButton = styled(IconButton)`
    position: absolute;
    top: 0.25rem;
    left: 0.25rem;
`