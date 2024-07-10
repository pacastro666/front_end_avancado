import React from "react"
import "./styles.css"

export default function Header() {
  return (
    <div className="header clip-contents">
      <div className="navigation-pill-list">      
      <div className="navigation-pill-1">
          <p className="button-2 clip-contents">Home</p>
          <p className="button">Produtos</p>
        </div>
      </div>
      <div className="button-3 clip-contents">
          <p className="button-2">Login</p>
        </div>
      <div className="button-3 clip-contents">
          <p className="button-2">Registro</p>
        </div>
    </div>
  )
}