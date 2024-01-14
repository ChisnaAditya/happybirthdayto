import CustomModal from '@/components/CustomModal'
import { Button } from '@nextui-org/react'
import Image from 'next/image'

export default function Home() {
  return (
    <div className='flex items-center justify-center w-full h-screen bg-gradient-to-r from-cyan-500 to-blue-500'>
      <CustomModal />
    </div>
  )
}
