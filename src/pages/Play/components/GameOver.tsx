import { Button, Flex } from "@chakra-ui/react"
import { observer } from "mobx-react-lite"
import { useContext } from "react"
import { PlayContext } from "../store/PlayStore"

export const GameOver: React.FC<{}> = observer((props) => {
    const playStore = useContext(PlayContext)
    const { onStartGame, errorMsg, history, getHistory }= playStore

    return <Flex h={'100vh'} alignItems={'center'} justifyContent={'center'} direction='column'>
        <div>GameOver: {errorMsg}</div>
        <div>
            scoreboard
            {getHistory().map(_ => <>{_.score}-{_.gameProgress.toString()}</>)}
        </div>
        <Button colorScheme='blue' onClick={onStartGame}>
            Play Again!
        </Button>
    </Flex>
})