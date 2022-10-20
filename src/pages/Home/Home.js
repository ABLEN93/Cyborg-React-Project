import React from 'react'
import './home.css';
import { Hero, Mostpopular, Gaminglibrary } from '../../components/export.js';

function Home() {
  return (
    <>
      <h1>Home Page</h1>
      <Hero />
      <Mostpopular />
      <Gaminglibrary />
    </>

  )
}

export default Home