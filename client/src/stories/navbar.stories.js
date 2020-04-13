import React from 'react';
import Navbar from '../components/Navbar/Navbar';

export default {title: 'Navbar'}
export const LoggedOut = () => <Navbar/>
export const VillagerLoggedIn = () => <Navbar user="Villager" adventurer={false}/>
export const AdventurerLoggedIn = () => <Navbar user="Adventurer" adventurer={true}/>