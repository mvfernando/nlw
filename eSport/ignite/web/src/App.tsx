//Funçoes de mudar o estado/states gerindo o comportamento de um componente no app
import { useState, useEffect } from 'react';
//Biblioteca de componentes. Ex: Modal, Btn e etc
import * as Dialog from '@radix-ui/react-dialog';

//importar arquivo css
import './styles/main.css';

//importar a caminho da logo
import logoImg from './assets/Logo-esports.svg';

//importar a componente de GameBanner
import { GameBanner } from './components/GameBanner';
//importar a componente CreatAdBanner
import { CreatAdBanner } from './components/CreateAdBanner';


import { CreatAdModel } from './components/CreateAdModel';

interface Game{
  id: string;
  title: string;
  bannerUrl: string;
  _count: {
    ads: number;
  }
}

function App() {
  const [games, SetGames] = useState <Game[]>([] as Game[])

  useEffect(() => {
    fetch('http://localhost:3333/games')
    .then(response => response.json())
    .then(data => {
      SetGames(data[0])
    })
  }, [])

  return (
    
    <div className="max-w-[1344px] mx-auto flex flex-col items-center my-20">
        <img src={logoImg} alt="logo nlw esports"/>

        <h1 className="text-6xl text-white font-black mt-20">Seu <span className="text-transparent bg-nlw-gradient bg-clip-text">duo</span> está aqui.</h1>
        
        <div className="grid grid-cols-6 gap-6 mt-16">
          
        {games.map(game =>{
          
          return (
            <GameBanner 
              key={game.id}
              title={game.title}
              bannerUrl={game.bannerUrl}
              adsCount={game._count.ads}
            />
          )
         
          })}

        </div>
        
      <Dialog.Root>
          <CreatAdBanner />
          <CreatAdModel />
         
      </Dialog.Root>
    </div>
  )
}

export default App
