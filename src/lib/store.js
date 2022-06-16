import { writable } from "svelte/store";

let data = [
	{
		value: "none",
		name: "Pledge with no reward",
		text: "Choose to support us without a reward if you simply believe in our project. As a backer, you will be signed up to receive product updates via email.",
	},
	{
		value: "bamboo",
		name: "Bamboo Stand",
		min: 25,
		text: "You get an ergonomic stand made of natural bamboo. You’ve helped us launch our promotional campaign, and you’ll be added to a special Backer member list.",
		left: 101,
	},
	{
		value: "black",
		name: "Black Edition Stand",
		min: 75,
		text: "You get a Black Special Edition computer stand and a personal thank you. You’ll be added to our Backer member list. Shipping is included.",
		left: 64,
	},
	{
		value: "mahogany",
		name: "Mahogany Special Edition",
		min: "200",
		text: "You get two Special Edition Mahogany stands, a Backer T-Shirt, and a personal thank you. You’ll be added to our Backer member list. Shipping is included.",
		left: 0,
	},
];

export const options = writable(data);
export const totalPledge = writable(89914);
export const backers = writable(5007);
