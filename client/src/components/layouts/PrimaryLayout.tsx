"use client";
import { Alert, Box, Container, Snackbar, SnackbarOrigin } from "@mui/material";

import AppFooter from "@/components/AppFooter";
import AppHeader from "@/components/AppHeader";
import { useContract } from "@/components/ContractProvider";

const styles = {
	main: {
		display: "flex",
		flexDirection: "column",
		justifyContent: "space-between",
		alignItems: "center",
		py: 6,
		minHeight: "calc(100vh - calc(64px + 72px))",
		backgroundColor: "#1a1a1a",
		color: "#fff",
	},
	alert: {
		color: "#fff",
	},
};

const PrimaryLayout = ({
	children,
}: {
	children: React.ReactNode;
}): React.ReactNode => {
	// Constants
	const NOTIFICATION_TIMEOUT: number = 10000;
	const NOTIFICATION_POSITION: SnackbarOrigin = {
		vertical: "top",
		horizontal: "center",
	};
	// Hooks
	const { txSuccess, txError, resetTxNotifications } = useContract();

	return (
		<>
			{/* Header/Body/Footer */}
			<AppHeader />
			{/* <Box component="main" sx={styles.main}> */}
			<div className="tracking-tight dark text-foreground bg-slate-900 text-slate-100">
				{children}
				{/* <Container maxWidth="xl">{children}</Container> */}
			</div>

			{/* </Box> */}
			<AppFooter />
			{/* Tx Notifications */}
			<Snackbar
				open={!!txSuccess}
				autoHideDuration={NOTIFICATION_TIMEOUT}
				onClose={resetTxNotifications}
				anchorOrigin={NOTIFICATION_POSITION}
			>
				<Alert
					variant="filled"
					severity="success"
					elevation={6}
					onClose={resetTxNotifications}
					sx={styles.alert}
				>
					Successfully sent transaction
				</Alert>
			</Snackbar>
			<Snackbar
				open={!!txError}
				autoHideDuration={NOTIFICATION_TIMEOUT}
				onClose={resetTxNotifications}
				anchorOrigin={NOTIFICATION_POSITION}
			>
				<Alert
					variant="filled"
					severity="error"
					elevation={6}
					onClose={resetTxNotifications}
					sx={styles.alert}
				>
					{txError}
				</Alert>
			</Snackbar>
		</>
	);
};

export default PrimaryLayout;
