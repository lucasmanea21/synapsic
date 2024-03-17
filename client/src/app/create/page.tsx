import CreateScanCard from "@/components/Create/CreateScanCard";
import PageWrapper from "@/components/Wrappers/PageWrapper";
import React from "react";

const CreatePage = () => {
	return (
		<PageWrapper>
			<div className=" p-10 mt-[-50px] px-4 mx-auto sm:px-8 ">
				<CreateScanCard />
			</div>
		</PageWrapper>
	);
};

export default CreatePage;
