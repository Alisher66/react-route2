import { useLocation, Link } from "react-router-dom";


function Breadcrumb() {
    let location = useLocation();
    let links = location.pathname.split("/").filter(el => el !=="");
 
    const resultLinks = () => {
        let arr = [];
        let str = "";
        links.forEach(link =>{
            str+=`/${link}`;
            arr.push(str);
        })
        return arr;
    }

    return (
        
        <>
            <Link to="/">Home</Link>
            {resultLinks().map((link,index) => {
                return <Link key={index} to={link}>{links[index]}</Link>
            })}
        </>
    )
}

export default Breadcrumb;