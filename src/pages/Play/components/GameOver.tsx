import { Button } from "@chakra-ui/react"
import { useContext } from "react"
import { PlayContext } from "../store/PlayStore"

export const GameOver: React.FC<{}> = (props) => {
    const playStore = useContext(PlayContext)
    const { onStartGame }= playStore

    return <div>
        You entered the word that does not start with the letter that the word I gave ends with 😙

        <Button colorScheme='blue' onClick={onStartGame}>
            Play Again!
        </Button>
    </div>
}