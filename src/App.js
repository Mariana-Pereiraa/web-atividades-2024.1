// import HelloWorld from "./components/01HelloWorld/HelloWord";
// import FuncoesInternas from "./components/02FuncoesInternas/FunçõesInternas";
// import Loja from "./components/03Props/Loja";
// import MeusDados from "./components/00Atividade/01MeusDados";
// import MeusDadosProps  from "./components/00Atividade/02MeusDados";
// import Temperatura from "./components/00Atividade/03Temperatura";
// import SistemaSolar from "./components/04Children/SistemaSolar";
// import Planeta from "./components/04Children/Planeta";
// import PokemonPrincipal from "./components/09PokemonContexto/PokemonPrincipal";
// import Pai from "./components/01Atividade/Questao01/01Pai";
// import * as PC from './components/01Atividade/Questao02/02MeuPC';
// import * as Batalha from './components/01Atividade/Questao03/03Batalha';
// import ComponenteAvo from "./components/02Atividade/Questao02/ComponenteAvo";
import ComponenteAvo from "./components/02Atividade/Questao03/ComponenteAvo";


// function App() {
//   return (
//     <div>
//       <h1>Desenvolvimento de Software para Web</h1>
//         <PokemonPrincipal/>
//     </div>
//   );
// }


function App() {
  return (
    <div>
      <h1>Desenvolvimento de Software para Web</h1>
        <ComponenteAvo/>
    </div>
  );
}
export default App;

// function App() {
//   return (
//     <div>
//       <h1>Desenvolvimento de Software para Web</h1>
//         <Pai/>
//         <hr />
//         <PC.default.PlacaDeVideo nome = "RTX 3060 -" preco={2600} />
//         <PC.default.PlacaMae nome = "Gigabyte b550 -" preco={759.90} />
//         <PC.default.Memoria nome = "DDR4 -" preco={300.50} />
//         <hr />
//         <Batalha.default.World>
//           <Batalha.default.Arena name = "Jatobá" />
//           <Batalha.default.Arena name = "Caracol" />
//           <Batalha.default.Arena name = "Estrela" />
//         </Batalha.default.World>
//         <hr />
//         <Batalha.default.World>
//           <Batalha.default.Arena2 name = "Jatobá" >
//             <Batalha.default.Hero name = "Mary Jane Plus" />
//               <img src = "https://lh3.googleusercontent.com/pw/AP1GczNojELZARQeNi0QQP3ZTYV7kdSl5kRSWorOeHGMOBrct2pKUtnoo_M8zKoadlCqz3_wQFh6vAC5EugqjODx8r4ocTa7PLDXO9Px5gCCVpjpFIS0sU7O18903p6NrcORk78Oa2xnMMHnqGi5oyDZOUPUNw=w556-h966-s-no-gm?authuser=0" 
//               alt = "Mariana"
//               style = {{width: "250px"}}
//               />

//             <Batalha.default.Enemy name = "Jonas do GB"  />
//               <img src = "https://lh3.googleusercontent.com/pw/AP1GczNoATrreZNz1oLgGk_Tn_i8FfxHy6qRIrHaJ7Fc01bek67CbafFrpsdLO-Yif3Pv4uedOjzVjgGGSfEoIEjifEt--zhjER53Oh5IEEJ3uLZzafDennJchIpky1R3o2ou6qUoAaRJnaHUQyyWMmwRfz4hg=w685-h594-s-no-gm?authuser=0" 
//               alt = "Jonas"
//               style = {{width: "250px"}}
//               />
//           </Batalha.default.Arena2>


//           <Batalha.default.Arena2 name = "Caracol" >
//             <Batalha.default.Hero name = "Mary Jane Plus" />
//               <img src = "https://lh3.googleusercontent.com/pw/AP1GczNojELZARQeNi0QQP3ZTYV7kdSl5kRSWorOeHGMOBrct2pKUtnoo_M8zKoadlCqz3_wQFh6vAC5EugqjODx8r4ocTa7PLDXO9Px5gCCVpjpFIS0sU7O18903p6NrcORk78Oa2xnMMHnqGi5oyDZOUPUNw=w556-h966-s-no-gm?authuser=0" 
//               alt = "Mariana"
//               style = {{width: "250px"}}
//               />

//             <Batalha.default.Enemy name = "Jonas do GB"  />
//               <img src = "https://lh3.googleusercontent.com/pw/AP1GczNoATrreZNz1oLgGk_Tn_i8FfxHy6qRIrHaJ7Fc01bek67CbafFrpsdLO-Yif3Pv4uedOjzVjgGGSfEoIEjifEt--zhjER53Oh5IEEJ3uLZzafDennJchIpky1R3o2ou6qUoAaRJnaHUQyyWMmwRfz4hg=w685-h594-s-no-gm?authuser=0" 
//               alt = "Jonas"
//               style = {{width: "250px"}}
//               />
//           </Batalha.default.Arena2>

//           <Batalha.default.Arena2 name = "Estrela" >
//             <Batalha.default.Hero name = "Mary Jane Plus" />
//               <img src = "https://lh3.googleusercontent.com/pw/AP1GczNojELZARQeNi0QQP3ZTYV7kdSl5kRSWorOeHGMOBrct2pKUtnoo_M8zKoadlCqz3_wQFh6vAC5EugqjODx8r4ocTa7PLDXO9Px5gCCVpjpFIS0sU7O18903p6NrcORk78Oa2xnMMHnqGi5oyDZOUPUNw=w556-h966-s-no-gm?authuser=0" 
//               alt = "Mariana"
//               style = {{width: "250px"}}
//               />

//             <Batalha.default.Enemy name = "Jonas do GB"  />
//               <img src = "https://lh3.googleusercontent.com/pw/AP1GczNoATrreZNz1oLgGk_Tn_i8FfxHy6qRIrHaJ7Fc01bek67CbafFrpsdLO-Yif3Pv4uedOjzVjgGGSfEoIEjifEt--zhjER53Oh5IEEJ3uLZzafDennJchIpky1R3o2ou6qUoAaRJnaHUQyyWMmwRfz4hg=w685-h594-s-no-gm?authuser=0" 
//               alt = "Jonas"
//               style = {{width: "250px"}}
//               />
//           </Batalha.default.Arena2>

//         </Batalha.default.World>
        

//     </div>
//   );
// }


// function App() {
//     return (
//       <div>
//         <h1>Desenvolvimento de Software para Web</h1>
//         {/* <h1> Meus Dados</h1> */}
//          {/* <MeusDadosProps nome = {"Mariana Pereira da Silva"} curso = {"SI"} universidade={"UFC"}/> */}
//          <br></br>
//         {/* <h1>Atividade Temperatura</h1> */}
//           <SistemaSolar> 
//           <h2> Sistema Solar</h2>
//             <hr></hr>
//             <Planeta 
//                 nome = "Mercúrio"
//                 tipo= {"Rochoso"}
//                 ordem={"1"}
//             />
//             <hr></hr>
//             <Planeta 
//                 nome = "Vênus"
//                 tipo= {"Rochoso"}
//                 ordem={"2"}
//             />
//             <hr></hr>
//             <Planeta 
//                 nome = "Terra"
//                 tipo= {"Rochoso"}
//                 ordem={"3"}
//             />
//             <hr></hr>
//             <Planeta 
//                 nome = "Marte"
//                 tipo= {"Rochoso"}
//                 ordem={"4"}
//             />
//             <hr></hr>
//             <Planeta 
//                 nome = "Jùpiter"
//                 tipo= {"Gasoso"}
//                 ordem={"5"}
//             />
//             <hr></hr>
//             <Planeta 
//                 nome = "Saturno"
//                 tipo= {"Gasoso"}
//                 ordem={"6"}
//             />
//             <hr></hr>
//             <Planeta 
//                 nome = "Urano"
//                 tipo= {"Gasoso"}
//                 ordem={"7"}
//             />
//             <hr></hr>
//             <Planeta 
//                 nome = "Netuno"
//                 tipo= {"Gasoso"}
//                 ordem={"8"}
//             />

//           </SistemaSolar>
//       </div>
    // );
  // }
  