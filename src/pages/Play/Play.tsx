import React from 'react'
import { Box, Button, Container, Input, Text } from '@chakra-ui/react'
import styled from '@emotion/styled'

export const Game = () => {
    return <Container>
        Score: 0
        <p>HELLO</p>
        <Input placeholder='Enter your word' size='lg' />
    </Container>
}

export const Introduction = () => {
    return <>
        <Title>WorDiscovery</Title>
        <Container>
            How to play?
            Enter a word that starts with the letter that ends with the previous word
            Example: WORD → DISCOVERY → YOU
        </Container>
        <Button>
            PLAY
        </Button>
    </>
}

export default function Play() {
    return (
        <Box
            width='100vw'
            height='100vh'
            bgColor={'beige'}
        >
            <Container>
                <Introduction />
                <Game />
            </Container>
        </Box>
    )
}

export const Title = styled(Text)`
    
`