
import React, { useState, useEffect } from 'react'
import Head from 'next/head'
import { useSelector } from 'react-redux'
import { Word } from '../components/slangWords'
import Waves from '../public/waves.svg'
import { ShowWordModal } from '../components/ShowWordModal';

export default function Home() {
  const [modalShow, setModalShow] = useState(false)
 
  const prompt = useSelector((state) => state.slangWords.slangWords.data)
  console.log(prompt)

  const options = useSelector((state) => state.answerChoices.answerChoices.data)
  console.log(options)

  const d = new Date() // today
  const days = d.getTime() / (1000*60*60*24) 

  const dailyToggler = prompt ? Math.floor(days) % prompt.length : "loading"
  console.log(dailyToggler)

  const mappedWords =  prompt?.map(word => { 
    let term =  word.attributes.term
    let definition = word.attributes.definition
    
 
    return (
      <>
        <Word key={word.id} term ={term} definition={definition} />
      </>
    )
   })


return (
  <>
  <div>
    <Head>
      <title>WERD</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>
  </div>

    <div className="hero">
      <h1 className="title">Whats The Werd?</h1>
      <p className="description">
        Click words to guess their meanings. The more you guess correctly the longer your streak!
      </p>
    </div>
    <div className='wave-container'>
      <Waves />
    </div>
    <div className='word-container'>
      {mappedWords}
  </div>
  </>
  )
}

