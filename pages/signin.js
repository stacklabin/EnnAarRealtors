import React from 'react';
import {providers, signIn, getSession, csrfToken} from "next-auth/client";
function SignIn({providers, csrfToken}){
    return (
        <section className="fullpagebackground text-white">
                <img className="background-image" src="/images/img5.jpg" alt="enn arr realtors"/>
            {/* <form method="post" action="/api/auth/signin/email">
                <input name="csrfToken" value={csrfToken} type="hidden"/>
                <input name="email" type="email" id="emai"/>
                <input type="submit" value="submit"/>
            </form> */}
            {
                Object.values(providers).map((provider)=>{
                    if(provider.name==="Email"){
                        return;
                    }
                    return(
                        <div key={provider.id} className="text-white  sign-in-button-container">
                            <button className="hover:text-blue-400 sign-in-button outline-none focus:outline-none" onClick={()=>signIn(provider.id)}>Login</button>
                        </div>
                    )
                })
            }
        </section>
    )
}

SignIn.getInitialProps = async (context)=>{
    const {req,res} = context;
    const session = await getSession({req});
    if(session && res){
        res.writeHead(302,{
            Location: '/admin',
        });
        res.end()
        return;
    }
    
    return {
        session: undefined,
        providers: await providers(context),
        csrfToken: await csrfToken(context),
    };
};

export default SignIn