import React from 'react'

const Posts_list = ({posts}) => {
  return (
    console.table(posts),
    <ul className="list-group">
        {posts.map((posts)=> 
        <li className="list-group-item d-flex justify-content-between align-items-center">
            {posts.title}
            <input type="checkbox" name="checked"></input>            
        </li>)
        }
    </ul>   
  )
}

export default Posts_list;
