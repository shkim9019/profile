import "./Home.css"
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import useUserApi from "../apis/useUserApi";

const Home = ({setState}) => {
    const [search, setSearch] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const navigate = useNavigate();
    const getUserData = useUserApi(search);
    
    const changeSearch = (e) => {
        setSearch(e.target.value);
    }

    const searchUser  = () => {
        if (search === "" ){
            alert("검색어를 입력하세요.")
            return;
        }
        setIsLoading(true);
        setTimeout(()=>{
            findUser();
        },2000);
    }

    const onKeyDown = (e) => {
        if(e.keyCode === 13){
            searchUser();
        }
    }

   // const findUser = async( => {
    const findUser = async() => {
        try{
            const userData = await getUserData();
            setState(userData);
            navigate('/profile');
        }catch(e){
            console.log(e);
            return;
        }finally{
            setIsLoading(false);
            setSearch("");
        }
    }

    return (
        <div className="Home">
            <header><h1>😄 john 찾기 </h1></header>
            <h1>
                { isLoading ? "loading 중" : ''}
            </h1>
            <div className="searchWrap">
                <input 
                    type="text" 
                    value={search} 
                    onKeyDown={onKeyDown}
                    onChange={changeSearch}
                    placeholder="이름을 입력하세요"
                />
                <button onClick={searchUser}>사용자 검색</button>
            </div>
        </div>
    )
}

export default Home;