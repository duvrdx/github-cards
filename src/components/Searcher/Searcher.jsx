import { useState } from 'react'
import styles from './searcher.module.scss'

export default function Searcher(){

    const [search, setSearch] = useState('')
    const [userData, setUserData] = useState()
    const [dataChecker, setDataChecker] = useState(false)
        

    function handleChange(event){
    setSearch(event.target.value)
    }

    function handleSubmit(event){
        event.preventDefault()
        fetch(`https://api.github.com/users/${search}`)
        .then(response=>response.json())
        .then(userResponse=>setUserData(userResponse))
        setDataChecker(true)

        console.log(userData)
        console.log(dataChecker)
    }


    return(
        <div className={styles.wrapper}>
            <div className={styles.searcherContainer}>
                <div className={styles.searchBarWrapper}>
                    <form onSubmit={handleSubmit}>
                        <div className={styles.wrapperButton}>
                            <input type="text" required value={search} onChange={handleChange}/>
                            <button type="submit">Search</button>
                        </div>
                    </form>
                </div>
            </div>

        {(userData && userData.login) ? (
             <div className={styles.cardContainer}>
                
                <h1>{userData?.name}</h1>
                <h3>{userData?.login}</h3>

                <img src={userData?.avatar_url} />

                <span>{userData?.location}</span>
                <span className={styles.bio}>{userData?.bio}</span>
                <a href={userData?.html_url} target="_blank"><span>{userData?.html_url}</span></a>

            </div>
        ):(
            <h1 className={styles.error}></h1>                    
        )}

               
            

        </div>
    )
}