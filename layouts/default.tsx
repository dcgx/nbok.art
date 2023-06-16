import Head from 'next/head'
import { ScriptProps } from 'next/script'
import BaseLayout from './base'
import Footer from './components/footer'
import Main from './components/main'
import Header from '../components/Header'

const DefaulLayout = ({ children }: ScriptProps) => {
  return (
    <BaseLayout>
      <>
        <Header />
        <Main>{children}</Main>
        <Footer />
      </>
    </BaseLayout>
  )
}
export default DefaulLayout
