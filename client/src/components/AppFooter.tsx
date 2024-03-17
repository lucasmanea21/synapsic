"use client";
import { Box, Link, Typography } from "@mui/material";
import { grey } from "@mui/material/colors";

const styles = {
	wrap: {
		p: 2,
		display: "flex",
		flexDirection: "column",
		alignItems: "center",
		justifyContent: "center",
		height: "72px",
		backgroundColor: grey[900],
	},
};

const AppFooter = () => {
	return (
		<Box sx={styles.wrap} className="text-gray-200">
			<Typography variant="caption">
				&copy;{new Date().getFullYear()}&nbsp;|&nbsp; Synapsic |&nbsp; Made with
				♡ for ETHGlobal London
			</Typography>
		</Box>
	);
};

export default AppFooter;
