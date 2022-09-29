import { Container, Input, Button, Slider, SliderFilledTrack, SliderTrack, Box, Flex, Text, Center } from "@chakra-ui/react"
import { useContext } from "react"
import { observer } from "mobx-react";
import { EObject, PlayContext } from "../store/PlayStore";

export const Game = observer((() => {
    const playStore = useContext(PlayContext)
    const { score, currentWord, currentAnswer, setCurrenAnswer, checkAnswer, gameProgress } = playStore

    return (
        <Flex h={'100vh'} alignItems={'center'} justifyContent={'center'} direction='column'>
            Score: {score}
            <Box maxW='sm' borderWidth='1px' borderRadius='lg' overflow='hidden' bg='white' p={4}>
                <Center>
                    <Text>{currentWord.toUpperCase()}</Text>
                </Center>
                <Input
                    placeholder='Enter your word' size='lg'
                    value={currentAnswer}
                    onChange={(e) => setCurrenAnswer(e.target.value)}

                    onKeyDown={(e) => {
                        console.log('Na oi', e.key)
                        if (e.key == 'Enter')
                            checkAnswer()
                    }}
                />
                <Timer />
                <Button
                    colorScheme='blue' onClick={() => checkAnswer()}
                >
                    OK
                </Button>
            </Box>
            <Flex>
                {gameProgress.map((item, index) => {
                    return <>
                        <Text color={item.createdBy == EObject.Player ? 'purple' : 'tomato'}>{item.word.toUpperCase()}</Text>
                        {index < gameProgress.length - 1 && ' => '}
                    </>
                })}
            </Flex>
        </Flex>
    )
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