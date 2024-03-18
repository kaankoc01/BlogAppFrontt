import "./post.css"

export default function Post() {
  return (
    <div className="post">
      <img
      className="postImg"
      src="https://images.pexels.com/photos/15288410/pexels-photo-15288410/free-photo-of-kent-sehir-kent-simgesi-gorulecek-yer.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
      alt="" />
      <div className="postInfo">
        <div className="postCats">
            <span className="postCat">Music</span>
            <span className="postCat">Life</span>
            

        </div>
        <span className="postTitle">
            Lorem ipsum dolor sit </span>
            <hr />
            <span className="postDate">1 hour ago</span>
      </div>
      <p className="postDesc">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis reiciendis quis id labore accusamus! Expedita neque vitae ea ducimus, nam rem a sit vero ipsam recusandae quia est! Ut, nemo.Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis reiciendis quis id labore accusamus! Expedita neque vitae ea ducimus, nam rem a sit vero ipsam recusandae quia est! Ut, nemo.Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis reiciendis quis id labore accusamus! Expedita neque vitae ea ducimus, nam rem a sit vero ipsam recusandae quia est! Ut, nemo.Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis reiciendis quis id labore accusamus! Expedita neque vitae ea ducimus, nam rem a sit vero ipsam recusandae quia est! Ut, nemo.
      </p>
      
    </div>
  )
}
