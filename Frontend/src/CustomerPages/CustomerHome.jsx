import React from 'react';
import { AppBar } from "../components/AppBar";
import { CustomerPageCard } from "../components/CustomerPageCard";
import Footer from '../components/Footer';

export function CustomerHome({ user }) {
  return (
    <div>
      <AppBar name={user.firstName} mode={user.mode}/>
      <div className="flex flex-col h-full justify-center items-center">
        <div className="flex-grow overflow-y-auto h-max">
          <div className="flex flex-wrap gap-10 justify-center">
            <CustomerPageCard username="Basil Tommy" description="Basil Tommy, an experienced pest control specialist with 4 years in the field, brings expertise and dedication to every job. With a keen understanding of pest behavior and effective control methods, he ensures thorough and efficient pest management solutions for his clients. Basil's commitment to customer satisfaction and pest-free environments makes him a trusted professional in the industry." image="https://images.pexels.com/photos/10806264/pexels-photo-10806264.jpeg?auto=compress&cs=tinysrgb&w=800" rating={4.9} yoe={4} occupation={"Pest Control"}/>
            <CustomerPageCard username="Gayatri Sunil Warrior" description="Gayatri Sunil Warrior, a talented makeup artist with 3 years of experience, possesses a creative flair and a meticulous attention to detail. Specializing in enhancing natural beauty and creating stunning looks, she has earned a reputation for her professionalism and skill. With a passion for her craft and a commitment to staying updated on the latest trends, Gayatri ensures that her clients look and feel their best for any occasion." image="https://images.pexels.com/photos/4307689/pexels-photo-4307689.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" rating={3.7} yoe={3} occupation={"Make-up Artist"}/>
            <CustomerPageCard username="Saleem Abdullah" description="Saleem Abdullah is a skilled coconut climber, renowned for his expertise in harvesting coconuts with efficiency and safety. With years of experience scaling tall palms, he demonstrates remarkable agility and precision in his work. Saleem's dedication to his occupation ensures the timely and careful collection of coconuts, providing a vital resource to communities while upholding the traditions of his craft." image="https://images.pexels.com/photos/7028721/pexels-photo-7028721.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" rating={4.8} occupation={"Coconut Climber"} yoe={6}/>
            <CustomerPageCard username="Purushothaman" description="Purushothaman is a skilled landscaper with a passion for transforming outdoor spaces into stunning environments. With a keen eye for design and a deep understanding of horticulture, he excels in creating beautiful landscapes that harmonize with nature. His dedication to his craft, coupled with his commitment to customer satisfaction, ensures that each project is executed with precision and care, leaving a lasting impression on those who experience his work." image="https://images.pexels.com/photos/15509867/pexels-photo-15509867/free-photo-of-farmer-in-hat.jpeg?auto=compress&cs=tinysrgb&w=800" rating={4.0} occupation={"Landscaper"} yoe={12}/>
            <CustomerPageCard username="Ran Vijay" description="A skilled Punjabi carpenter, adept in the art of woodworking with a keen eye for detail and precision. Drawing from a rich heritage of craftsmanship, they bring expertise in crafting fine furniture, intricate designs, and durable structures. With a dedication to quality and a commitment to their craft, this Punjabi carpenter delivers exceptional workmanship tailored to the needs of their clients, embodying the spirit of tradition and innovation in every project." image="https://images.pexels.com/photos/3665348/pexels-photo-3665348.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" rating={4.7} occupation={"Carpenter"} yoe={25}/>
            <CustomerPageCard username="Bala Krishnan R" description="Bala Krishnan is a dedicated and hardworking farmer with years of experience in agricultural practices. With a deep understanding of crop cultivation, soil management, and agricultural machinery, Bala Krishnan has successfully managed his own farm for many years. Now, Bala Krishnan is actively seeking new opportunities in the agricultural sector, whether it be in farm management, agricultural consultancy, or related fields. With a passion for farming and a strong work ethic." image="https://images.pexels.com/photos/2382899/pexels-photo-2382899.jpeg?cs=srgb&dl=pexels-kelly-2382899.jpg&fm=jpg" rating={4.3} yoe={10} occupation={"Farmer"}/>
          </div>
        </div>
      </div>
      
    </div>
  );
}
