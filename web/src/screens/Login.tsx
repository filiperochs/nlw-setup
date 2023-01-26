import { TabPanel } from '../components/TabPanel'
import { GoogleLogo } from 'phosphor-react'
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth'
import { auth } from '../services/firebase';

interface Props { }

const tabIdToURL: { [id: number]: string } = {
  0: "login",
  1: "register",
};

export function Login({ }: Props) {
  const provider = new GoogleAuthProvider()
  provider.addScope('profile')
  provider.addScope('email')

  const signInWithGoogle = async () => {
    const result = await signInWithPopup(auth, provider)

    console.log(result)
  }

  const LoginComponent = () => (
    <button
      type="button"
      className="flex flex-row gap-3 items-center justify-center border-2 border-zinc-700 rounded-lg p-3 bg-zinc-800 hover:bg-zinc-600 transition-colors"
      onClick={() => signInWithGoogle()}
    >
      <GoogleLogo size={24} alt="Logo Google" />
      Entrar com Google
    </button>
  )

  return (
    <TabPanel tabsTitle={["Login", "Register"]} tabsContent={[LoginComponent(), "Register"]} tabId="login" />
  )
}