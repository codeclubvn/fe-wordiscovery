import { Button, Drawer, DrawerOverlay, DrawerContent, DrawerHeader, DrawerBody, useDisclosure, Flex } from "@chakra-ui/react";
import { Switch, Route, Link } from "wouter";
import Nav from "./pages/Nav/Nav";
import routes from "./pages/routes";

export default function App() {
    const { isOpen, onOpen, onClose } = useDisclosure()

    return (
        <section>
            <Nav />
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

