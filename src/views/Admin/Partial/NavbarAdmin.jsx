import React from "react";
import { Link } from "react-router-dom";

export default function AdminNavBar(){
    let admin_navs={
        users_link:'utilisateur', 
        post_link:'posts', 
        administration_link:'administration',
        feedback_link:'feedback'
    }
    return(
        <>
        <nav className="bg-gray-800 p-4">
          <ul className="flex space-x-4">
            <li>
                <Link to='/a'>
                {admin_navs.users_link}
                </Link>
            </li>
            <li>
                <Link to='/'>
                {admin_navs.post_link}
                </Link>
            </li>
            <li>
                <Link to='/'>
                {admin_navs.administration_link}
                </Link>
            </li>
            <li>
                <Link to='/'>
                {admin_navs.feedback_link}
                </Link>
            </li>
          </ul>
        </nav>
        </>
    )
}
