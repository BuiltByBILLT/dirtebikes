import React from "react"
import styles from "./BikeList.module.css"
import { bikes } from "./bikeData.js" // Import the bike data

type Bike = {
	model: string
	bgImage: string
	tagline: string
}

const BikeSection: React.FC<{ bike: Bike }> = ({ bike }) => {
	return (
		<div className={styles.section} style={{ backgroundImage: `url(${bike.bgImage})` }}>
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
