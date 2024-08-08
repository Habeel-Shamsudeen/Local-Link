import { useEffect, useState } from "react";
import { AppBar } from "../components/AppBar";
import { PostCard } from "../components/PostCard";
import { ProfileComponent } from "../components/ProfileComponent";
import axios from "axios";
import { BACKEND_URL } from "../../config";

export function EmployeeHome({ user }) {
    const [filter,setFilter] = useState('')
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    async function getMyData() {
      try {
        const response = await axios.get(
          `${BACKEND_URL}/api/v1/user/workpost?filter=${filter}`
        );
        if (response.data) {
          setPosts(response.data.post);
        }
      } catch (err) {}
    }
    getMyData();
  }, [filter]);
  return (
    <div>
      <AppBar name={user.firstName} onChange={(e)=>setFilter(e.target.value)}/>
      <div className="flex mt-4 h-full mb-2">
        <ProfileComponent
          user={user}
          className="w-64 border-r border-gray-200"
        />
        <div className="flex gap-4 overflow-y-auto flex-wrap">
          {posts.map((post) => (
            <PostCard
              title={post.title}
              desc={post.desc}
              imgUrl={post.imgUrl}
              location={post.location}
              pay={post.pay}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
