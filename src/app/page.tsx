import styles from "./page.module.css" // Import CSS Module

function HomePage() {
	return (
		<div className={styles.homePage}>
			<img src="images/gold.webp" alt="Background" className={styles.backgroundImage} />
			<div className={styles.logoContainer}>
				<img src="images/logo.webp" alt="Logo" className={styles.logo} />
			</div>
		</div>
	)
}

export default HomePage
