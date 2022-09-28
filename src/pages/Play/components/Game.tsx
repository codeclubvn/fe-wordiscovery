import { Container, Input, Button, Slider, SliderFilledTrack, SliderTrack } from "@chakra-ui/react"
import { useContext } from "react"
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
       <Timer/>
        <Button colorScheme='blue' onClick={() => checkAnswer()}>OK</Button>
    </Container>
}))

const Timer = observer(() => {
    const playStore = useContext(PlayContext)
    const { percentage } = playStore

    return <>
        <Slider aria-label='slider-ex-1' value={percentage}>
            <SliderTrack>
                <SliderFilledTrack />
            </SliderTrack>
        </Slider>
    </>
})