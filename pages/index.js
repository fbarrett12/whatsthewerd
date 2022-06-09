
import React, { useState, useEffect } from 'react'
import Head from 'next/head'
import { useSelector } from 'react-redux'
import { Word } from '../components/slangWords'
import Waves from '../public/waves.svg'
import { Menu } from '../components/menu'

export default function Home() {
 
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
    let city = word.attributes.slang_city
    let longitude = word.attributes.slang_longitude
    let latitude = word.attributes.slang_latitude

    return (
      <>
        <Word 
        key={word.id} 
        term ={term} 
        definition={definition}
        city={city} 
        longitude={longitude}
        latitude={latitude}/>
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

  <Menu />
  
    <div className="hero">
      <h1 className="title">{"What's The Werd?"}</h1>
      <p className="description">
        Guide to Modern Slang. Click the Words to see their meanings.
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

