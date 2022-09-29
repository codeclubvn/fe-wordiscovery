import { Container, Button, Text, Box, Center, Flex, Divider } from "@chakra-ui/react"
import styled from '@emotion/styled'
import { observer } from "mobx-react"
import { useContext } from "react"
import { PlayContext } from "../store/PlayStore"

export const Introduction: React.FC = observer(() => {
    const playStore = useContext(PlayContext)
    const { onStartGame } = playStore
    console.log('playStore', playStore, onStartGame)

    return (
        <Flex h={'100vh'} alignItems={'center'} justifyContent={'center'} direction='column'>
            <Text fontSize='6xl'>WorDiscovery</Text>
            <Text fontSize='3xl'>How to play?</Text>
            <Text fontSize='4xl'>Enter a word that starts with the letter that ends with the previous word</Text>
            <Text fontSize='2xl'>Example: WORD → DISCOVERY → YOU</Text>
            <Divider />
            <Button colorScheme='blue' onClick={() => onStartGame()}>
                PLAY
            </Button>
        </Flex>
    )
})

const Title = styled(Text)` `