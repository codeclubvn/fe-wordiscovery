import { Container, Button, Text } from "@chakra-ui/react"
import styled from '@emotion/styled'
import { observer } from "mobx-react"
import { useContext } from "react"
import { PlayContext } from "../store/PlayStore"

export const Introduction: React.FC = observer(() => {
    const playStore = useContext(PlayContext)
    const { onStartGame } = playStore
    console.log('playStore', playStore, onStartGame)
    
    return <>
        <Title>WorDiscovery</Title>
        <Container>
            How to play?
            Enter a word that starts with the letter that ends with the previous word
            Example: WORD → DISCOVERY → YOU
        </Container>
        <Button colorScheme='blue' onClick={() => onStartGame()}>
            PLAY
        </Button>
    </>
})

const Title = styled(Text)` `