import React, { useState } from 'react'
import { Box, Button, Container, Input, Text } from '@chakra-ui/react'
import styled from '@emotion/styled'
import words from 'an-array-of-english-words';

import { observer } from "mobx-react"

export const Game = ((() => {
    const getRandomWord = () => {
        var word = capitalizeFirstLetter(words[Math.floor(Math.random() * words.length)])
        console.log('word', word)
        return word
    }

    const capitalizeFirstLetter = (value: string) => {
        return value[0].toUpperCase() + value.slice(1);
    }

    const checkAnswer = () => {
        const rs = word[word.length - 1]?.toLowerCase() == answer[0]?.toLowerCase()

        if (rs) {
            setScore(score + 1)
            setWord(getRandomWord())
        } else {
            setScore(score - 1)
        }

        setAnswer('')
    }

    const [word, setWord] = useState(() => getRandomWord())
    const [answer, setAnswer] = useState('')
    const [score, setScore] = useState(0)

    return <Container>
        Score: {score}
        <p>{word}</p>
        <Input
            placeholder='Enter your word' size='lg'
            value={answer}
            onChange={(e) => setAnswer(e.target.value)} />
        <Button colorScheme='blue' onClick={() => checkAnswer()}>OK</Button>
        <Button colorScheme='blue' onClick={() => setWord(getRandomWord())}>DEMO</Button>
    </Container>
}))

export const Introduction: React.FC<{ status: any, onStartGame: any }> = (props) => {
    const { status, onStartGame } = props
    return <>
        <Title>WorDiscovery</Title>
        <Container>
            How to play?
            Enter a word that starts with the letter that ends with the previous word
            Example: WORD → DISCOVERY → YOU
        </Container>
        <Button colorScheme='blue' onClick={onStartGame}>
            PLAY
        </Button>
    </>
}

enum STATUS { MENU, PLAYING, OVER }

export default function Play() {
    const [status, setStatus] = useState<STATUS>(STATUS.MENU)

    return (
        <Box
            width='100vw'
            height='100vh'
            bgColor={'beige'}
        >
            <Container>
                {status == STATUS.MENU && <Introduction status={status} onStartGame={() => { setStatus(STATUS.PLAYING) }} />}
                {status == STATUS.PLAYING && <Game />}
            </Container>
        </Box>
    )
}

export const Title = styled(Text)`
    
`