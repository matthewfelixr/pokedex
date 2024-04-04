import React from 'react'

export const Layout = ({children}) => {
  return (
    <>
      <header style={{
        backgroundColor:"#ee1515",
        padding:"1rem",
        color:"white"
      }}>
        <h1 className="font-semibold text-lg">Pokédex</h1>
      </header>
      <main>{children}</main>
      <footer style={{
        backgroundColor:"cornsilk",
        padding:"1rem",
        color:"black",
        }}/>
    </>
  )
}
