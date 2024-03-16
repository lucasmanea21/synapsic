import { Card } from "@nextui-org/react";
import React from "react";

const CardWrapper = ({ children }: any) => {
	return (
		<Card className="p-5 mt-12 mb-20 bg-gray-800 rounded-lg bg-opacity-40 justify-self-center">
			{children}
		</Card>
	);
};

export default CardWrapper;
