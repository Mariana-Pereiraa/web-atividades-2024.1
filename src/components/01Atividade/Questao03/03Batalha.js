import {Children, cloneElement} from 'react';

const Hero = ({name, arena}) => {
    return (
        <div>
            <h1>Sou herói e meu nome é: {name} e estou na Arena: {arena}</h1>
        </div>
    )
}

const Enemy = ({name, arena}) => {
    return (
        <div>
            <h1>Sou inimigo e meu nome é: {name} e estou na Arena: {arena}</h1>
        </div>
    )
}

const Arena2  = ({name, children}) => {
    return (
        <div>
             <h1>Arena: {name} </h1>
           {
            Children.map(
                children,
                (child) => {
                    return cloneElement(child,{arena: name})
                }
            )
           }
        </div>
    )
}

const Arena = ({name}) => {
    return (
        <div>
            <h1>Arena: {name}</h1>
            <Hero name = "Mary Jane Plus" />
            <img src = "https://lh3.googleusercontent.com/pw/AP1GczNojELZARQeNi0QQP3ZTYV7kdSl5kRSWorOeHGMOBrct2pKUtnoo_M8zKoadlCqz3_wQFh6vAC5EugqjODx8r4ocTa7PLDXO9Px5gCCVpjpFIS0sU7O18903p6NrcORk78Oa2xnMMHnqGi5oyDZOUPUNw=w556-h966-s-no-gm?authuser=0" 
            alt = "Mariana"
            style = {{width: "250px"}}
            />

            <Enemy name = "Jonas do GBs"  />
            <img src = "https://lh3.googleusercontent.com/pw/AP1GczNoATrreZNz1oLgGk_Tn_i8FfxHy6qRIrHaJ7Fc01bek67CbafFrpsdLO-Yif3Pv4uedOjzVjgGGSfEoIEjifEt--zhjER53Oh5IEEJ3uLZzafDennJchIpky1R3o2ou6qUoAaRJnaHUQyyWMmwRfz4hg=w685-h594-s-no-gm?authuser=0" 
            alt = "Jonas"
            style = {{width: "250px"}}
            />
        </div>
    )
}

const World = (props) => {
    return(
        <div>
            {props.children}
        </div>
    )
}

export default {Hero, Enemy, Arena2, Arena, World};