import React from 'react'
import './game.css'
import { Snake } from '../index/'

const Game = () => {
    return (
        <div className='game1'>
            <div className="game_container">
                <div className="game_container_section">
                    <div className="game_container_section_title">
                        <h1>Поиграем?</h1>
                    </div>
                    <div className="game_container_section_rules">
                        <p>Вам нужно отгадать слово за 6 попыток</p>
                        <p>Вводите слова, чтобы понять какие буквы есть в загадываемом слове</p>
                        <div className='if'>
                            <p>- Если буква в введенном слове подсветилась зеленым, значит она есть в загаданном слове и находится на правильном месте</p>
                            <p>- Если буквы подсветилась желтым, то значит она есть в загаданном слове, но находится в другом месте.</p>
                        </div>
                        <p>По правилам русских кроссвордов использовать нужно букву Е вместо буквы Ё</p>
                    </div>
                </div>
                <div className="game_container_wordle">
                    <Snake />
                </div>
            </div>
        </div>
    )
}

export default Game
