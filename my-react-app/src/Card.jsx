import profilePic from './assets/profile-pic2.png'
function Card(){
    
    return(
        <div className="card">
            <img className='card-image' src={profilePic} alt="profile-picture"></img>
            <h2 className='card-title'>Cullen</h2>
            <p className='card-text'>I am a full stack developer</p>

        </div>
    )

}

export default Card