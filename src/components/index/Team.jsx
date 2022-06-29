import { icons} from '../../imports/images';
import { teamInfo } from '../../data/home';




const Team = () => {


    return (
        <div className='team py-5' id="team">
            <h2 className="text-center">TEAM</h2>
         <div className='row g-5 px-3' >
         {/* <div className="col-12 col-sm-4 row  justify-content-center">
                     
    
    <div className="col-12">
                <div className='team-image-wrapper mx-auto' style={{height: 650}}>
                    <img src={teamInfo[0].image} alt="" className='w-100 h-100'/>
                </div>
                <div className="name  text-center">{teamInfo[0].name}</div>
                <div className='role text-center'>{teamInfo[0].role}</div>
                <div className='social-links d-flex'>
                    {
                        teamInfo[0].onInstagram?<a>{teamInfo[0].instagramLink}</a>:""
                    }
                    {
                        teamInfo[0].onTwitter?<a>{teamInfo[0].twitterLink}</a>:""
                    }
                    {
                        teamInfo[0].onLinkedIn?<a>{teamInfo[0].linkedInLink}</a>:""
                    }
                </div>
                </div>
   

                

                
        

</div>
            <div className="col-12 col-sm-8 row gy-5">
                 */}
                {
            teamInfo.map( (info, index) => {
               
    return (
    <div className="col-12 col-sm-6 col-md-4 col-lg-3 position-relative" key={index} >
        <div className='team-member border py-4 mx-auto'>
                <div className='team-image-wrapper mx-auto'>
                    <img src={info.image} alt="" className='w-100 h-100'/>
                </div>
                <div>
                <div className="fancy-bg">
                <div className="name text-center py-2">{info.name}</div>
                <div className='role text-center pb-2'>{info.role}</div>
                </div>
                </div>
                <div className='d-flex justify-content-center gap-4 border-top border-bottom rounded-pill py-2 mx-5'>
                    {
                        info.onInstagram?<a href={info.instagramLink}><img src={icons.instagram} alt="" className="team-social-link" /></a>:""
                    }
                    {
                        info.onTwitter?<a href={info.twitterLink}><img src={icons.twitter}  alt="" className="team-social-link" /></a>:""
                    }
                    {
                        info.onLinkedIn?<a href={info.linkedInLink}><img src={icons.linkedin} alt="" className="team-social-link" /></a>:""
                    }
                </div>
                </div>
               
                </div>
    )

                

                
            })
}
         {/* </div> */}
        </div>
        </div>
        
    )
}

export default Team;