import jessica from './assets/avatar-jessica.jpeg'

export default function App() {
  // const [count, setCount] = useState(0)
  // <button onClick={() => setCount((count) => count + 1)}>
  //         count is {count}
  //       </button>

  return (
    <>
      <div className="bg-Dark-Grey rounded-2xl container mx-auto flex max-[1440px] min-[375px] flex-col content-center items-center">
        <div>
          <img src={jessica} className='rounded-full'/>
        </div>

        <div>
          <h1 className='text-lg text-White font-[Inter] font-bold'>Jessica Randall</h1>
          <h3 className='text-Green font-[Inter] font-semibold'>London, United Kingdom</h3>
        </div>
      </div>
    </>
  )
}
