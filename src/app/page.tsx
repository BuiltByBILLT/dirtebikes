import { Hero } from "@/components/homepage/Hero"
import { BikeList } from "@/components/homepage/BikeList"
import styles from "./page.module.css"
// import BikeList from "@/components/homepage/BikeList"

function HomePage() {
	return (
		<div className={styles.homePage}>
			<Hero />
			<BikeList />
		</div>
	)
}

export default HomePage
