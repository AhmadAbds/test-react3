import './Footer.css'
function Footer({menu , logo}) {
  return (
    <div className='Footer'>
        <div className='containerlogo'><h1 className='logo'>{logo}</h1><h1 className='logotext'><span style={{fontWeight:700}}>M</span>umair</h1></div>
       <div className='list'>
       <ul>
            {menu.map((element,index)=>{return(
                <li key={index}>{element.title}</li>
            )})}
        </ul>
</div>
<div className='social'>
<i class="fa-brands fa-facebook fa-2xl"></i> <i class="fa-brands fa-twitter fa-2xl"></i> <i class="fa-brands fa-square-instagram fa-2xl"></i> <i class="fa-brands fa-invision fa-2xl"></i>
</div>
<div  className="endfooter">© 2023 <span style={{color : "rgba(253, 111, 0, 1)" , margin : "0 5px"}}>Mumair</span> All Rights Reserved , Inc.</div>
    </div>
  )
}

export default Footer