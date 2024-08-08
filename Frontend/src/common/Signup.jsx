import React, { useEffect, useState } from "react";
import { Heading } from "../components/Heading";
import { SubHeading } from "../components/SubHeading";
import { InputBox } from "../components/InputBox";
import { Button } from "../components/Button";
import { BottomWarning } from "../components/BottomWarning";
import { useNavigate } from "react-router-dom";
import SelectButton from "../components/SelectButton";
import axios from "axios";
import { BACKEND_URL } from "../../../config";
export function Signup() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [mode, setMode] = useState("Customer");
  const [phno, setPhno] = useState("");
  const [aadhar, setAadhar] = useState("");
  const [selected, setSelected] = useState(true);
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
        if(response.data.loggedIn){
          navigate('/home');
        }
      } catch (err) {}
    }
    getMyData();
  }, []);
  
  return (
    <div className="flex h-screen bg-black justify-center">
      <div className="flex flex-col justify-center">
        <div className="rounded-lg bg-white text-center h-max w-96 px-4 p-2">
          <Heading label={"Sign Up"} />
          <SubHeading label={"Enter your information to create an account"} />
          <div className="flex">
            <InputBox
              label={"First Name"}
              placeholder={"Jacob"}
              onChange={(e) => {
                setFirstName(e.target.value);
              }}
            />
            <InputBox
              label={"Last Name"}
              placeholder={"Jomy"}
              onChange={(e) => {
                setLastName(e.target.value);
              }}
            />
          </div>

          <InputBox
            label={"Email"}
            placeholder={"jocob@example.com"}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
          <InputBox
            label={"phone number"}
            placeholder={"999999999"}
            onChange={(e) => {
              setPhno(e.target.value);
            }}
          />
          <InputBox
            label={"Aadhar Number"}
            placeholder={"aadhar no"}
            onChange={(e) => {
              setAadhar(e.target.value);
            }}
          />
          <InputBox
            label={"Password"}
            placeholder={"password"}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
          <div className="my-2">
            <SelectButton
              label={"Customer"}
              selected={selected}
              onClick={() => {
                if (mode !== "Customer") {
                  setSelected((e) => !e);
                  setMode("Customer");
                }
              }}
            />
            <SelectButton
              label={"Worker"}
              selected={!selected}
              onClick={() => {
                if (mode !== "Worker") {
                  setSelected((e) => !e);
                  setMode("Worker");
                }
              }}
            />
          </div>
          <Button label={"Sign up"} onClick={async () => {
              try {
                console.log(mode)
                const response = await axios.post(
                  "https://local-link-gistathon-api.vercel.app/api/v1/user/signup",
                  {
                    email,
                    firstName,
                    lastName,
                    password,
                    aadhar,
                    phno,
                    mode
                  }
                );
                localStorage.setItem("token", response.data.token);
                navigate("/home");
              } catch (error) {
                alert(error.response.data.message);
              }
            }}/>
          <BottomWarning
            label={"Already have an account?"}
            text={" Sign In"}
            to={"/signin"}
          />
        </div>
      </div>
    </div>
  );
}
