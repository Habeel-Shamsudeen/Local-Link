import React, { useEffect, useState } from "react";
import { Heading } from "../components/Heading";
import { SubHeading } from "../components/SubHeading";
import { InputBox } from "../components/InputBox";
import { Button } from "../components/Button";
import { useNavigate } from "react-router-dom";
import axios from "axios";
export function PostJob() {
  const [title, setTitle] = useState("");
  const [imgUrl, setImgUrl] = useState("");
  const [desc, setDesc] = useState("");
  const [pay, setPay] = useState("");
  const [location, setLocation] = useState("");

  return (
    <div className="flex h-screen bg-black justify-center">
      <div className="flex flex-col justify-center">
        <div className="rounded-lg bg-white text-center h-max w-96 px-4 p-2">
          <Heading label={"Post a job"} />
          <SubHeading label={"Enter your details of the work"} />
            <InputBox
              label={"title"}
              placeholder={""}
              onChange={(e) => {
                setTitle(e.target.value);
              }}
            />
          <InputBox
            label={"description"}
            placeholder={""}
            onChange={(e) => {
              setDesc(e.target.value);
            }}
          />
          <InputBox
            label={"Pay"}
            placeholder={""}
            onChange={(e) => {
              setPay(e.target.value);
            }}
          />
          <InputBox
            label={"Location link"}
            placeholder={""}
            onChange={(e) => {
              setLocation(e.target.value);
            }}
          />
          <InputBox
              label={"image Url"}
              placeholder={""}
              onChange={(e) => {
                setImgUrl(e.target.value);
              }}
            />
          <Button
            label={"Create a Job Post"}
            onClick={async () => {
              try {
                const response = await axios.post(
                  "https://local-link-gistathon-api.vercel.app/api/v1/user/addworkpost",
                  {
                    desc,
                    title,
                    imgUrl,
                    location,
                    pay,
                  }
                );
                alert(response.data.message)
              } catch (error) {
                alert(error.response.data.message);
              }
            }}
          />
        </div>
      </div>
    </div>
  );
}
