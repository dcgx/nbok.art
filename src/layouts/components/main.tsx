import { ScriptProps } from 'next/script'
import React from 'react'

const Main = ({ children }: ScriptProps) => {
  return <main>{children}</main>
}

export default Main
