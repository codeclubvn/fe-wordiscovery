import { Container, Input, Button } from "@chakra-ui/react"
import { useContext, useState } from "react"
import { observer } from "mobx-react";
import { PlayContext } from "../store/PlayStore";

export const Game = observer((() => {
    const playStore = useContext(PlayContext)
    const { score, currentWord, currentAnswer, setCurrenAnswer, checkAnswer }= playStore
    
    return <Container>
        Score: {score}
        <p>currentWord: {currentWord}</p>
        <Input
            placeholder='Enter your word' size='lg'
            value={currentAnswer}
            onChange={(e) => setCurrenAnswer(e.target.value)} />
        <Button colorScheme='blue' onClick={() => checkAnswer()}>OK</Button>
    </Container>
}))