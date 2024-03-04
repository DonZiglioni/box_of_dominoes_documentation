import logo from './assets/logoColor.png';
import logoBlack from './assets/logoBlack.png';
import Documentation from './components/Documentation';

const App = () => {
  return (
    <>
      <div className='bg-gradient-to-b from-slate-900 to-slate-500 from-33% h-[100%] -z-20 flex items-center flex-col'>

        <div className='flex justify-center '>
          <img src={logo} className='h-28 sm:h-36 md:h-48 xl:h-56 2xl:h-64 w-auto mt-24' />
        </div>

        <Documentation />

        <div>
          <h1 className='text-slate-100 font-normal text-center font-sans text-sm lg:text-lg'>2024 www.FrankAzzaro.com | github.com/donziglioni</h1>
        </div>
        <img src={logoBlack} className='h-12 sm:h-14 md:h-16 lg:h-20 xl:h-20 2xl:h-20 w-auto my-4' />
      </div>
    </>
  );
};

export default App;
