import Link from "next/link";


 const page = () => {
    return (
      <div>Users
        <h2> Demo User</h2>
        <li><Link href="/Dashboard/User/1"> User1 </Link></li>
        <li><Link href="/Dashboard/User/2"> User2 </Link></li>
        <li><Link href="/Dashboard/User/3"> User3 </Link></li>
        <li><Link href="/Dashboard/User/4"> User4 </Link></li>
      </div>
    )
  }
  
  export default page;