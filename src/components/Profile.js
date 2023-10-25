import './Profile.css'

const Profile = ({name, age, bio, picture}) => {
    return (
        <div className="Profile">
            <h1>[ {name}의 프로필 ] </h1>
            <div className="contentWrapper">
                <div className='imgWrapper'>
                    <img src={picture}/>
                </div>
                <div className='content'>
                    <div>
                        <span><h2>이름: </h2></span>
                        <h3>{name}</h3>
                    </div>
                    <div>
                        <span><h2>나이: </h2></span>
                        <h3>{age}</h3>
                    </div>
                    <div>
                        <span><h2>프로필: </h2></span>
                    </div>
                    <div>
                        <p>{bio}</p>
                    </div>
                        
                </div>
            </div>
        </div>
    )
}

export default Profile;