import { Button } from "@chakra-ui/react"
import { observer } from "mobx-react-lite"
import { useContext } from "react"
import { PlayContext } from "../store/PlayStore"

export const GameOver: React.FC<{}> = observer((props) => {
    const playStore = useContext(PlayContext)
    const { onStartGame, errorMsg }= playStore

    return <div>
        <div>GameOver: {errorMsg}</div>

        <Button colorScheme='blue' onClick={onStartGame}>
            Play Again!
        </Button>
    </div>
})