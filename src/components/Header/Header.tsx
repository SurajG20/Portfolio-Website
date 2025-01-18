import { MapPinned, BriefcaseBusiness } from 'lucide-react'
const Header = () => {
  return (
    <div className="flex flex-col space-y-4">
      <h1 className="text-white font-bold text-4xl">suraj goswami</h1>
      <h4 className="inline-flex items-center gap-x-2">
        <MapPinned size={18} /> Mohali, Punjab
      </h4>
      <h4 className="inline-flex items-center gap-x-2">
        <BriefcaseBusiness size={18} />
        Full Stack BlockChain Developer @{' '}
        <a href="https://wisewaytec.com/">Wiseway Tec</a>
      </h4>
      <p className="tracking-white">
        Hi, I'm Suraj Goswami, a Full Stack Developer specializing in building
        scalable web applications. I craft innovative digital solutions using
        React, Node.js, and cloud platforms, focusing on creating efficient,
        user-centric applications that address real-world challenges.
      </p>
    </div>
  )
}

export default Header
