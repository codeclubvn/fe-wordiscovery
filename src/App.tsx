import { Button, Drawer, DrawerOverlay, DrawerContent, DrawerHeader, DrawerBody, useDisclosure } from "@chakra-ui/react";
import { Link as Lin } from '@chakra-ui/react'

import React from "react";
import { Switch, Route, Link } from "wouter";
import routes from "./pages/routes";

export default function App() {
  const { isOpen, onOpen, onClose } = useDisclosure()


  return (
    <section>
      <nav>
        {routes.map(route => <Link key={route.path} href={route.path} >{route.path}</Link>)}
      </nav>
      <Button colorScheme='blue' onClick={onOpen}>Button</Button>
      <Drawer placement='right' onClose={onClose} isOpen={isOpen}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerBody>
            <p>Some contents...</p>
            <p>Some contents...</p>
            <p>Some contents...</p>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
      <main>
        <Switch>
          {routes.map(route => <Route key={route.path} path={route.path}>
            {route.component}
          </Route>)}
        </Switch>
      </main>
    </section>
  );
}
