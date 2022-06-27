import { NextPage } from "next";

const Footer: React.FC = () => {
    const date = new Date();

    return (
        <p>&copy; {date.getFullYear()}, Matcha All rights reserved.</p>
    )
}

export default Footer
