import React,{useState,useRef,useEffect} from "react";
import song1 from "./assets/LifeOfRam.mp3";
import image1 from "./assets/JaanuPoster.jpg";
import song2 from "./assets/jerseysong1.mp3";
import image2 from "./assets/jerseyposter.jpg";
import song3 from "./assets/MaateVinadhuga.mp3";
import image3 from "./assets/taxiwala2.jpg";






function MusicPlayer(){

    let [musiclist]=useState([
        {song:song1,image:image1},
        {song: song2,image:image2},
        {song: song3,image:image3}
    ]);
    let [i,seti]=useState(0);
    let [isplaying,setisplaying]=useState(false);
    let audioref=useRef(null);

    useEffect(() => {
        if (audioref.current) {
            
            if (isplaying) {
                audioref.current.play();
            }
        }
    }, [i, isplaying]);


    function toggle(){
        if(audioref.current){
            if(isplaying){
                audioref.current.pause();
            }
            else{
                audioref.current.play();
            }

            setisplaying(!isplaying);
        }
    }
    
    function prev(){
        
        if (i>0){
            let val=i-1;
            seti(val);
        }
        else{
            let val=musiclist.length-1;
            seti(val);
        }
        
    }

    function next(){
        
        if (i==musiclist.length-1){
            let val=0;
            seti(val);
        }
        else{
            let val=i+1;
            seti(val);
        }
        
    }
    return(
        <>
            <img src={musiclist[i].image} />
            <audio ref={audioref} controls src={musiclist[i].song}/>
            <div className="musicsettings">
                <button onClick={prev}>Previous</button>
                <button onClick={toggle}>{isplaying?"Pause":"Resume"}</button>
                <button onClick={next}>Next</button>
            </div>
        </>
        
    );
}
export default MusicPlayer
