import useSWR from 'swr';
import {useEffect, useState} from 'react'
import styles from '../styles/Home.module.css'

const fetcher = (...args) => fetch(...args).then((res) => res.json())

export default function BoggleGameBoard({setGameBoard}){
  const [gameBoardComponents, setGameBoardComponents] = useState([])

  const { data, error } = useSWR('/api/boggleIt', fetcher)
  useEffect(() => {
    if(data){
      let newGameboard = []
      setGameBoard(data.gameBoard)
      data.gameBoard.forEach((row, idx) => {
        for(let i = 0; i < data.gameBoard.length; i++){
          newGameboard.push(GameBoardItem(row[i],`${i}${idx}`))
          
        }
      })
      setGameBoardComponents(newGameboard)
    }
  },[data])

  
  return (
    <div id='gameBoard' className={styles.boggleBoard}>
      {gameBoardComponents}
    </div>
  )
}

function GameBoardItem(txtToDisplay, idx){
  return (
    <div key={`boggleItem${idx}`} className={styles.boggleBoardItem}>{txtToDisplay}</div>
  )
}