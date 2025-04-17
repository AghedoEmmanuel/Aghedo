export const Header = () => {


  const navItems = [
    {
      name:'Home',
      link:'#home',
    },
    {
      name:'Works',
      link:'#works',
    },
    {
      name:'About',
      link:'#about',
    },
    {
      name:'Contact',
      link:'#contact',
    },
  ]

  return (
  <div className="flex justify-center items-center fixed top-3 left-1/2 transform -translate-x-1/2 z-10">
    <nav className="flex gap-1 p-0.5 border border-white/15 rounded-full bg-white/10 backdrop-blur ">
    {navItems.map((item,i)=>{
      return(
          <a  
          key={i}
          href={item.link} 
          className="px-4 py-1.5 rounded-full text-white/70 text-sm font-semibold hover:bg-white/10 hover:text-white transition duration-300">
            {item.name}
          </a>
      )})}
    </nav>
  </div>
)};


