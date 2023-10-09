import { async } from "q";
import React, { useEffect, useState } from "react";
import { dbService } from "../myBase";



const Home = () => {
    const [tweet, setTweet] = useState("");
    const [tweets, setTweets] = useState([]);
    const getTweets = async() => {
        const dbNweets = await dbService.collection("tweets").get();
        dbNweets.forEach(document => {
            // console.log(dbNweets);
            const nweetObject = {
                ...document.data(),
                id:document.id,
            }
            setTweets(prev => [nweetObject, ...prev]);
        });
        
        
    }
    useEffect(() => {
        // dbService.collection("tweets").get();
        getTweets();
    })
    const onSubmit = async (event) => {
        event.preventDefault(); 
        await dbService.collection("tweets").add({
            tweet,createdAt: Date.now(),
        });
        setTweet("");
    };
    const onChange = (event) => {
        const {
            target: {value}, 
        } = event;
        setTweet(value);
    };
    return (
        <div>
        <form onSubmit={onSubmit}>
            <input value={tweet} onChange={onChange} type="text" placeholder="What's on your mind?" maxLength={120} />
            <input type="submit" value="Tweet" />
        </form>
        <div>
            {tweets.map((tweet) => (
                <div key={tweet.id}>
                    <h4>{tweet.tweet}</h4>
                </div>
            ))}
        </div>
    </div>
    );
};
export default Home;