// ** import Next
import { NextPage } from 'next'
import { ReactNode } from 'react'

// view
import BlankLayout from 'src/views/layouts/BlankLayout'
import LoginPage from 'src/views/layouts/pages/login'

type TProps = {}

const Login: NextPage<TProps> = () => {
  return <LoginPage />
}

export default Login

Login.getLayout = (page: ReactNode) => <BlankLayout>{page}</BlankLayout>
