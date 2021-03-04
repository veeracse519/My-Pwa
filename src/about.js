// import React from "react"
// import {FaBars,FaHome,FaRegWindowClose} from "react-icons/fa"
// class About extends React.Component{
//     state={
//         len:"-400px",
//         hover1:20,
//         hover2:20,
//         hover3:20,
//         hover4:20,
//         show:false
//     }
//     show=()=>{
//         this.setState({len:"0px"})
//     }
//     hide=()=>{
//         this.setState({len:"-400px"})
//     }
//     render(){
        
//         return(<div style={{width:"100%",height:"100vh"}}>
            
            
//             <div style={{display:"flex",justifyContent:"space-around",alignItems:"center",boxShadow:"1px 2px 3px black",backgroundColor:"gray",height:"10%",marginTop:10}}>
//                <FaBars onClick={this.show} size={25}/>
//               <input type="text" placeholder="Enter Product Name..." style={{height:25,width:"80%",borderRadius:5}}/>
//               </div>

//             <div style={{cursor:"pointer",width:230,height:"100vh",display:"flex",flexDirection:"column",backgroundColor:"#081d40",marginLeft:this.state.len,transition:".4s all ease",boxShadow:"1px 2px 3px black",position:"absolute",top:0,left:0,zIndex:54}}> 
//             <div style={{boxShadow:"1px 0px 3px black",height:"20%",paddingLeft:20}}>
//                 <div style={{display:"flex",justifyContent:"flex-end",alignItems:"center"}}>
//             <FaRegWindowClose color="white" onClick={this.hide} />
//             </div>
//             <img style={{width:50,height:50,borderRadius:50}} src="https://thumbs.dreamstime.com/b/default-avatar-photo-placeholder-profile-icon-eps-file-easy-to-edit-default-avatar-photo-placeholder-profile-icon-124557887.jpg"/>
//             <p style={{color:"white"}}>K.Veera Raghavulu</p>
//             </div>
//             <div style={{backgroundColor:"#081d40",transition:".3s all ease",paddingLeft:this.state.hover1,display:"flex",alignItems:"center",color:"white",boxShadow:"1px 0px 3px black"}}
//                onMouseEnter={()=>this.setState({hover1:30})}
//                onMouseLeave={()=>this.setState({hover1:20})}
//            >
//             <FaHome  size={30}/>
//            <h2 style={{marginLeft:15}}>Home</h2>
//            </div>
//            <div style={{cursor:"pointer",backgroundColor:"#081d40",transition:".3s all ease",paddingLeft:this.state.hover2,display:"flex",alignItems:"center",color:"white",boxShadow:"1px 0px 2px black"}}
//                onMouseEnter={()=>this.setState({hover2:30})}
//                onMouseLeave={()=>this.setState({hover2:20})}
//            >
//             <FaHome  size={30}/>
//            <h2 style={{marginLeft:15}}>Home</h2>
//            </div>
//            <div style={{cursor:"pointer",backgroundColor:"#081d40",transition:".3s all ease",paddingLeft:this.state.hover3,display:"flex",alignItems:"center",color:"white",boxShadow:"1px 0px 2px black"}}
//                onMouseEnter={()=>this.setState({hover3:30})}
//                onMouseLeave={()=>this.setState({hover3:20})}
//            >
//             <FaHome  size={30}/>
//            <h2 style={{marginLeft:15}}>Home</h2>
//            </div>
//            <div style={{backgroundColor:"#081d40",cursor:"pointer",transition:".3s all ease",paddingLeft:this.state.hover4,display:"flex",alignItems:"center",color:"white",boxShadow:"1px 0px 2px black"}}
//                onMouseEnter={()=>this.setState({hover4:30})}
//                onMouseLeave={()=>this.setState({hover4:20})}
//            >
//             <FaHome  size={30}/>
//            <h2 style={{marginLeft:15}}>Home</h2>
//            </div>
//            </div>
//         </div>)
//     }
// }
// export default About

import React, { Fragment } from 'react';
import Media from 'react-media';
import {FaCog,FaRegTimesCircle,FaAddressBook,FaBars,FaHome,FaCreditCard,FaRegWindowClose,FaShoppingCart,FaSistrix} from "react-icons/fa"
import {GrCart} from "react-icons/gr"
import {CgProfile} from "react-icons/cg"
// import {GiCancel} from "react-icon/gi"
import product_store from "./store"
class About extends React.Component {
        state={
        len:"-1000px",
        hover1:20,
        hover2:20,
        hover3:20,
        hover4:20,
        hover5:20,
        hover6:20,
        hover7:20,
        show:false
    }
    componentDidMount(){
        // document.addEventListener("mousedown",this.hide)
    }
    show=()=>{
        this.setState({len:"0px"})
    }
    hide=()=>{
        this.setState({len:"-1000px"})
    }
  render() {
      const{items_data}=product_store
    return (
      <div>
        <Media queries={{
          small: "(max-width: 619px)",
          medium: "(min-width: 620px) and (max-width: 1199px)",
          large: "(min-width: 1200px)"
        }}>
          {matches => (
            <Fragment>
              {matches.small && 
              
              <div style={{width:"100%",height:"100vh",backgroundColor:"#cbdaf5"}}>
            
                
             <div style={{display:"flex",justifyContent:"space-around",alignItems:"center",boxShadow:"1px 2px 1px gray",backgroundColor:"#244d91",height:"15%",marginTop:10}}>
                <FaBars onClick={this.show} size={25}/>
               <div style={{backgroundColor:"white",height:25,width:"70%",display:"flex",alignItems:"center",borderRadius:5}}>
                <FaSistrix size={20}/>
               <input type="text" placeholder="Enter Product Name..." style={{border:"0px solid black",width:"80%",height:"90%"}}/>
               </div>
               <GrCart size={25}/>
               </div>
               <div style={{backgroundColor:"#cbdaf5",display:"flex",flexWrap:"wrap",justifyContent:"space-evenly"}}>
                {items_data.map(item=>(
                    <div style={{cursor:"pointer",textAlign:"center",width:120,height:330,borderRadius:5,boxShadow:"1px 2px 3px black",marginTop:5,backgroundColor:"white"}}>
                      <img src={item.image} width="100%" height="45%" style={{borderRadius:5}}/>
                      <div style={{height:"50%",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"space-around"}}>
                      <p style={{fontSize:12}}>{item.title}</p>
                     <div>
                      <p>Price</p>
                      <p>{item.price}</p>
                      </div>
                      <button style={{backgroundColor:"green",width:"70%",border:"0px solid black",borderRadius:3,color:"white",padding:5}}>Add to Cart</button> 
                      </div> 
                    </div>
                ))}   
</div>
             <div style={{cursor:"pointer",width:"90%",height:"100vh",display:"flex",flexDirection:"column",backgroundColor:"#081d40",marginLeft:this.state.len,transition:".4s all ease",boxShadow:"1px 2px 3px black",position:"fixed",top:0,left:0,zIndex:54}}> 
             <div style={{boxShadow:"1px 0px 3px black",height:"23%",paddingLeft:20}}>
                 <div style={{display:"flex",justifyContent:"flex-end",alignItems:"center"}}>
            <FaRegTimesCircle color="white" onClick={this.hide} size={25} style={{padding:5}} />
             </div>
             <img style={{width:50,height:50,borderRadius:50}} src="https://res.cloudinary.com/veera/image/upload/v1612777999/veera_images/vf3bs5hwolm6awbx7syp.jpg"/>
             <p style={{color:"white"}}>K.Veera Raghavulu</p>
             </div>
             <div style={{backgroundColor:"#081d40",transition:".3s all ease",paddingLeft:this.state.hover1,display:"flex",alignItems:"center",color:"white",boxShadow:"1px 0px 3px black"}}
               onMouseEnter={()=>this.setState({hover1:30})}
               onMouseLeave={()=>this.setState({hover1:20})}
           >
            <FaHome  size={20}/>
           <p style={{marginLeft:15}}>Home</p>
           </div>
           <div style={{cursor:"pointer",backgroundColor:"#081d40",transition:".3s all ease",paddingLeft:this.state.hover2,display:"flex",alignItems:"center",color:"white",boxShadow:"1px 0px 2px black"}}
               onMouseEnter={()=>this.setState({hover2:30})}
               onMouseLeave={()=>this.setState({hover2:20})}
           >
            <CgProfile  size={20} />
           <p style={{marginLeft:15}}>Profile</p>
           </div>
           <div style={{cursor:"pointer",backgroundColor:"#081d40",transition:".3s all ease",paddingLeft:this.state.hover3,display:"flex",alignItems:"center",color:"white",boxShadow:"1px 0px 2px black"}}
               onMouseEnter={()=>this.setState({hover3:30})}
               onMouseLeave={()=>this.setState({hover3:20})}
            onClick={()=>alert(1)}
           >
            <FaShoppingCart  size={20}/>
           <p style={{marginLeft:15}}>My orders</p>
           </div>
           <div style={{cursor:"pointer",backgroundColor:"#081d40",transition:".3s all ease",paddingLeft:this.state.hover4,display:"flex",alignItems:"center",color:"white",boxShadow:"1px 0px 2px black"}}
               onMouseEnter={()=>this.setState({hover4:30})}
               onMouseLeave={()=>this.setState({hover4:20})}
            onClick={()=>alert(1)}
           >
            <FaAddressBook  size={20}/>
           <p style={{marginLeft:15}}>Manage Address</p>
           </div>
           <div style={{cursor:"pointer",backgroundColor:"#081d40",transition:".3s all ease",paddingLeft:this.state.hover5,display:"flex",alignItems:"center",color:"white",boxShadow:"1px 0px 2px black"}}
               onMouseEnter={()=>this.setState({hover5:30})}
               onMouseLeave={()=>this.setState({hover5:20})}
            onClick={()=>alert(1)}
           >
            <FaCreditCard  size={20}/>
           <p style={{marginLeft:15}}>Manage Cards</p>
           </div>
           <div style={{backgroundColor:"#081d40",cursor:"pointer",transition:".3s all ease",paddingLeft:this.state.hover6,display:"flex",alignItems:"center",color:"white",boxShadow:"1px 0px 2px black"}}
               onMouseEnter={()=>this.setState({hover6:30})}
               onMouseLeave={()=>this.setState({hover6:20})}
           >
            <FaCog  size={20}/>
           <p style={{marginLeft:15}}>Settings</p>
           </div>
           </div>
        </div>
        }
              {matches.medium && <p>I am medium!</p>}
              {matches.large && <p>I am large!</p>}
            </Fragment>
          )}
        </Media>
      </div>
    );
  }
}
export default About