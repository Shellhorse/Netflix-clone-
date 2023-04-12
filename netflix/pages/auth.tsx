import Input from "@/components/input";
import { useCallback, useState } from "react";

const Auth = () => {
    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');

    const [variant, setVariant] = useState('login');

    const toggleVariant = useCallback(() => {
        setVariant((currentVariant) => currentVariant == 'login' ? 'register' : 'login')
    }, [])

    return (
        <div className="relative h-full w-full bg-[url('/images/hero.jpg')] bg-no-repeat bg-center bg-fixed bg-cover">
            <div className="bg-black w-full h-full lg:bg-opacity-50">
                <nav className="px-12 py-5">
                    <img src="/images/logo.png" alt="Netflix logo" className="h-12" />
                </nav>
                <section className="flex justify-center">
                    <div className="bg-black bg-opacity-70 px-16 py-16 self-center mt-2 lg:w-2/5 lg:max-w-md rounded-md w-ful">
                        <h2 className="text-white text-4xl mb-8 font-semibold">
                            {variant == 'login' ? 'Sign in' : 'Create Account'}
                        </h2>
                        <div className="flex flex-col gap-4">
                            { variant == 'register' && ( 
                                <Input label="Email" value={email} onChange={(ev : any) => setEmail(ev.target.value)} type="email" id="email"/> 
                            )}
                            <Input label="Username" value={name} onChange={(ev : any) => setName(ev.target.value)} type="name" id="name"/>
                            <Input label="Password" value={password} onChange={(ev : any) => setPassword(ev.target.value)} type="password" id="password"/>
                        </div>
                        <button className="bg-red-600 py-3 text-white rounded-md w-full mt-10 hover:bg-red-700 transition">{variant == 'login' ? 'Login' : 'Sign up'}</button>
                        <p className="text-neutral-500 mt-12">
                                {variant == 'login' ? 'First time using Netflix?' : 'Already have an account?'}
                            <span onClick={toggleVariant} className="text-white ml-1 hover:underline cursor-pointer">
                                {variant == 'login' ? 'Create Account' : 'Login'}
                            </span>
                        </p>
                    </div>

                </section>
            </div>
        </div>
    );
}

export default Auth;