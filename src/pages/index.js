import * as React from "react"
import Hero from "../components/hero"
import Header from "../components/Header"

const IndexPage = () => {
  return (
    <>
      <Header/>
      <Hero/>
    </>

  )
}

export default IndexPage

export const Head = () => <title>MEANT TO MAKE BAGELS</title>
