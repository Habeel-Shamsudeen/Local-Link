import { useEffect, useState } from "react";
import { EmployeeHome } from "../EmployeePages/EmployeeHome";
import { CustomerHome } from "../CustomerPages/CustomerHome";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { BACKEND_URL } from "../../config";

export function Home() {
  const [isLoading, setIsLoading] = useState(true); // Track loading state
  const [userMode, setUserMode] = useState(null); // Store user mode
  const [user,setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    async function getMyData() {
      try {
        const response = await axios.get(
          `${BACKEND_URL}/api/v1/user/me`,
          {
            headers: {
              Authorization: "Bearer " + localStorage.getItem("token"),
            },
          }
        );
        if (response.data.loggedIn) {
          console.log(response.data.mode);
          setUserMode(response.data.mode);
          setUser(response.data)
        }
      } catch (error) {
        console.error("Error fetching user data:", error);
      } finally {
        setIsLoading(false);
      }
    }

    getMyData();
  }, []);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (!userMode) {
    navigate('/signin')
  }

  if (userMode === "Worker") {
    return <EmployeeHome user={user}/>;
  } else if (userMode === "Customer") {
    return <CustomerHome user={user}/>;
  } else {
    return <div>Invalid user mode: {userMode}</div>; // Handle unexpected cases
  }
}
