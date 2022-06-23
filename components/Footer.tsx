import { NextPage } from "next";

const Footer: NextPage = () =>{
    const date = new Date();

    return(
        <p>&copy; { date.getFullYear() }, Matcha All rights reserved.</p>
    )
} 

export default Footer
