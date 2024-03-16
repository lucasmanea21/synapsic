import type { Metadata } from "next";

import Dashboard from "@/components/Dashboard";
import PageWrapper from "@/components/Wrappers/PageWrapper";

export const metadata: Metadata = {
	title: "Next DApp",
	description:
		"A template for building Ethereum-based dApps using Next.js, Material UI, Wagmi/Viem, and WalletConnect.",
};

const DashboardPage = () => {
	return (
		<PageWrapper>
			<Dashboard />
		</PageWrapper>
	);
};

export default DashboardPage;
