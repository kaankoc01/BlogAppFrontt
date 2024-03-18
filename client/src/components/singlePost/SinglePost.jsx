import "./singlepost.css"

export default function SinglePost() {
  return (
    <div className="singlePost">
        <div className="singlePostWrapper">
            <img src="https://images.pexels.com/photos/12801958/pexels-photo-12801958.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" className="singlePostImg" 
            />
            <h1 className="singlePostTitle">Lorem ipsum dolor sit amet.
            <div className="singlePostEdit">
            <i className="singlePostIcon fa-regular fa-pen-to-square"></i>
            <i className="singlePostIcon fa-solid fa-trash-can"></i>
            </div>
             </h1>
            <div className="singlePostInfo">
                <span className="singlePostAuthor">Autor <b>Kaan</b></span>
                <span className="singlePostDate">1 hour ago</span>
            </div>
            <p className="singlePostDesc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam dolorem suscipit natus ad, totam culpa doloribus exercitationem modi quas iusto possimus, reprehenderit cum sapiente eius voluptatibus, beatae vitae magni? Totam!
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam dolorem suscipit natus ad, totam culpa doloribus exercitationem modi quas iusto possimus, reprehenderit cum sapiente eius voluptatibus, beatae vitae magni? Totam!
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam dolorem suscipit natus ad, totam culpa doloribus exercitationem modi quas iusto possimus, reprehenderit cum sapiente eius voluptatibus, beatae vitae magni? Totam!
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam dolorem suscipit natus ad, totam culpa doloribus exercitationem modi quas iusto possimus, reprehenderit cum sapiente eius voluptatibus, beatae vitae magni? Totam!
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam dolorem suscipit natus ad, totam culpa doloribus exercitationem modi quas iusto possimus, reprehenderit cum sapiente eius voluptatibus, beatae vitae magni? Totam!

            </p>
        </div>
            
    </div>
  )
}
