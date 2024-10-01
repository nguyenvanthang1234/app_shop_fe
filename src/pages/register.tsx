// react
import { NextPage } from 'next'
import { ReactNode } from 'react'

// view
import BlankLayout from 'src/views/layouts/BlankLayout'
import RegisterPage from 'src/views/layouts/pages/register'

type TProps = {}

const Register: NextPage<TProps> = () => {
  return <RegisterPage />
}

export default Register
Register.getLayout = (page: ReactNode) => <BlankLayout>{page}</BlankLayout>
