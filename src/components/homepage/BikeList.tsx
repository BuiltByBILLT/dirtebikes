"use client"
import React, { useState } from "react"
import styles from "./BikeList.module.css"
import { bikes } from "./bikeData.js" // Import the bike data

type Bike = {
	model: string
	bgImage: string
	tagline: string
}

const BikeSection: React.FC<{ bike: Bike }> = ({ bike }) => {
	const [isHovered, setIsHovered] = useState(false)
	return (
		<div
			className={styles.section}
			style={{
				backgroundImage: `url(${bike.bgImage})`,
				backgroundSize: isHovered ? "102%" : "100%", // Dynamically adjust backgroundSize
				transition: "background-size 0.3s ease", // Add transition for smoothness
			}}
			onMouseEnter={() => setIsHovered(true)}
			onMouseLeave={() => setIsHovered(false)}>
			<h1 className={styles.heading}>{bike.model}</h1>
			<h3 className={styles.subheading}>{bike.tagline}</h3>
			<div className={styles.buttonRow}>
				<button className={styles.button}>About {bike.model}</button>
				<button className={styles.button}>Customize {bike.model}</button>
			</div>
		</div>
	)
}

export const BikeList: React.FC = () => {
	return (
		<div>
			{bikes.map(bike => (
				<BikeSection key={bike.model} bike={bike} />
			))}
		</div>
	)
}
