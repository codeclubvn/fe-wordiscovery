import React, { createContext, useContext, useState } from 'react'
import { Box, Button, Container, Flex, Input, Text } from '@chakra-ui/react'

import { observer } from "mobx-react"
import { EStatus, PlayContext, playStore } from './store/PlayStore';
import { Game, GameOver, Introduction } from './components';

const Play = observer(() => {
    const playStore = useContext(PlayContext)

    const { status } = playStore

    return (
        <Box
            width='100vw'
            height='100vh'
            bgColor={'beige'}
        >
            {status == EStatus.Menu && <Introduction />}
            {status == EStatus.Playing && <Game />}
            {status == EStatus.GameOver && <GameOver />}
        </Box>
    )
})

export default (
    <PlayContext.Provider value={playStore}>
        <Play />
    </PlayContext.Provider>
)