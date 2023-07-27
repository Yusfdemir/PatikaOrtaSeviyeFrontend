 import axios from 'axios';

 async function getData(number){
    const {data:user}=await axios(`https://jsonplaceholder.typicode.com/users/${number}`)
    const userId=user.id;
    const {data:posts}=await axios(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`);
    console.log('USER\n',user)
    console.log('POSTS\n,',posts);
 }

 export default getData;

 
