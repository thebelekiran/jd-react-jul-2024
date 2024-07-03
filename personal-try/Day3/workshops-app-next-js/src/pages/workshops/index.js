import axios from "axios";
import Link from "next/link";

export async function getServerSideProps(){
    const res = await axios.get('https://workshops-server.onrender.com/workshops');
    return {
        props: {
            workshops: res.data
        }
    }
}

// function getStaticProps(){
// }

export default function workshopsListPage( { workshops } ) {
    console.log(workshops);
    return ( 
        <div>
            <h1> List of workshops</h1>
            <hr />
            {
                workshops.map(
                    w => (
                        <div key={w.id}> 
                            <Link href={"/workshops/" + w.id}>
                                {w.name}
                            </Link>
                        </div>
                    )
                )
            }
        </div>
     );
}