import React from 'react';
import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from './vite.svg';
import Directory from '../../components/directory/directory.component';
import { Outlet } from 'react-router';

const brands = [
  {
    name: 'Porsche',
    id: 1,
    img: 'https://cdn.discordapp.com/attachments/1093534626741489666/1094378282209779733/salym.eth_Capture_the_sleek_lines_of_the_Porsche_as_it_glides_t_5ed9f89d-cd05-4fc4-8a20-b084cf583506.png',
  },
  {
    name: 'Mercedes',
    id: 2,
    img: 'https://cdn.discordapp.com/attachments/1093534626741489666/1094378353466814535/salym.eth_Create_an_image_of_the_Mercedes_driving_along_a_coast_939bb409-cb3a-4580-a59f-64fa85da7d64.png',
  },
  {
    name: 'BMW',
    id: 3,
    img: 'https://cdn.discordapp.com/attachments/1093534626741489666/1094378757139202158/salym.eth_Create_an_image_of_the_BMW_cruising_along_an_open_roa_48363906-3dfc-4acc-b9fc-55c824585ab4.png',
  },
  {
    name: 'Lexus',
    id: 4,
    img: 'https://cdn.discordapp.com/attachments/1093534626741489666/1094378592877674546/salym.eth_Capture_the_Lexus_in_an_urban_environment_speeding_do_8d95a2ee-1976-46ba-a239-1e96aec7f2ee.png',
  },
  {
    name: 'Land Rover',
    id: 5,
    img: 'https://cdn.discordapp.com/attachments/1093534626741489666/1094378425453658172/salym.eth_the_Land_Rover_navigating_a_rocky_terrain_in_the_wild_2158ad24-63eb-4b6e-878f-b93c47e4a663.png',
  },
];

function Home() {

    return (
        <div>
        <Directory brands={brands}/>;   
        <Outlet />
        </div> 
    )
}
export default Home;