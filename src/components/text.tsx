export const Text = () => {
    return ( 
        <ul className='mt-5 flex flex-col gap-3 w-full'>
          <li className='font-bold bg-Grey hover:bg-Green text-White hover:text-Dark-Grey transition-all p-2 text-center break-keep rounded-lg cursor-pointer'>GitHub</li>
          <li className='font-bold bg-Grey hover:bg-Green text-White hover:text-Dark-Grey transition-all p-2 text-center break-keep rounded-lg cursor-pointer'>Fronend Mentor</li>
          <li className='font-bold bg-Grey hover:bg-Green text-White hover:text-Dark-Grey transition-all p-2 text-center break-keep rounded-lg cursor-pointer'>LinkedIn</li>
          <li className='font-bold bg-Grey hover:bg-Green text-White hover:text-Dark-Grey transition-all p-2 text-center break-keep rounded-lg cursor-pointer'>Twitter</li>
          <li className='font-bold bg-Grey hover:bg-Green text-White hover:text-Dark-Grey transition-all p-2 text-center break-keep rounded-lg cursor-pointer'>Instagram</li>
        </ul>    
    );
}