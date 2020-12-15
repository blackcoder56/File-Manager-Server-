import React, {useEffect, useState} from 'react'
import Axios from 'axios'
const HomeScreen = () => {
    const [dirs,setDirs] = useState([{}]);
    const [url,setUrl] = useState('http://localhost:8080/api/dir/');
    useEffect(() => {
      const getRootDirs = async () => {
        const res = await Axios({
          method:'GET',
          url:url
        });
        if(res.data) {
         console.log(res.data.path) 
          setDirs(res.data.path);
        }
          else console.log('Data not found');
      }
      getRootDirs()
    }, [url])
    const handleChange = (path) => {
      console.log(path)
    }
    return (
        <div>
          <input directory webkitdirectory="" type="file" />
            {dirs.map(dir => (
                <li>
                    
                        <span onClick={()=> {setUrl('http://localhost:8080/api/dir'+dir.path+'/'+dir.ls)}}>
                           {dir.type === "Folder" ? "Folder" : "File"} {dir.ls}
                        </span>
                </li>
            ))}
        </div>
    )
}

export default HomeScreen
