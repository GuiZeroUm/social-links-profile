import jessica from './assets/avatar-jessica.jpeg'
import { Text } from './components/text'

export default function App() {
  // const [count, setCount] = useState(0)
  // <button onClick={() => setCount((count) => count + 1)}>
  //         count is {count}
  //       </button>

  return (
    <>
      <div className="bg-Dark-Grey rounded-2xl container mx-auto mt-36 p-5 flex max-[1440px] min-[375px] flex-col content-center items-center">
        <div>
          <img src={jessica} width={100} className='rounded-full'/>
        </div>

        <div className='text-center mt-10 mb-10 flex flex-col gap-3 '>
          <h1 className='text-lg text-White font-[Inter] font-bold'>Jessica Randall</h1>
          <p className='text-Green text-sm font-semibold font-[Inter]'>London, United Kingdom</p>
        </div>
        <p className='text-White'>"Fron-End developer and avid reader."</p>

        <Text />
        
      </div>
    </>
  )
}
