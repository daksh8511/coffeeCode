import worldMap from '/assets/world_map.png'
import {motion} from 'motion/react'

const WhereToBuy = () => {

  return (
    <div className='container'>
        <div className='py-26 grid grid-cols-1 min-sm:grid-cols-1 min-md:grid-cols-2 gap-8 place-items-center'>
            {/* form section */}
            <motion.div initial={{opacity :0, x: -100}} whileInView={{opacity : 1, x :0}} transition={{duration:0.4, delay : 0.4}}>
                <h2 className='text-4xl font-bold text-[var(--myDarkGray)]'>Buy our products from anywhere</h2>
                <div className='grid grid-cols-1 gap-2 mt-3'>
                    <input type="text" placeholder='Name' className='w-full border border-[var(--myPrimaryColor)] p-2 outline-0' />
                    <input type="email" placeholder='Email' className='w-full border border-[var(--myPrimaryColor)] p-2 outline-0' />
                </div>
                <div className='grid grid-cols-1 gap-2 mt-3'>
                    <input type="text" placeholder='Country' className='w-full border border-[var(--myPrimaryColor)] p-2 outline-0' />
                    <input type="number" placeholder='Zip Code' className='w-full border border-[var(--myPrimaryColor)] p-2 outline-0' />
                </div>
                <button className='mt-4 bg-[var(--myPrimaryColor)] text-white px-6 py-2 active:bg-white active:text-[var(--myPrimaryColor)] cursor-pointer border active:border-[var(--myPrimaryColor)]'>Order Now</button>
            </motion.div>
            {/* map section */}
            <motion.div initial={{opacity :0, x: 100}} whileInView={{opacity :1, x :0}} transition={{duration:0.4, delay : 0.4}}>
                <img src={worldMap} alt="" />
            </motion.div>
        </div>
    </div>
  )
}

export default WhereToBuy