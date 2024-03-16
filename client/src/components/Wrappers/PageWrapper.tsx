import React from "react";
import Particles from "../Particles";
import Illustration from "../../../public/images/page-illustration.svg";
import Illustration02 from "../../../public/images/page-illustration-02.svg";
import Image from "next/image";

const PageWrapper = ({ children }: any) => {
	return (
		<section className="relative min-h-screen">
			{/* Radial gradient */}
			<div
				className="absolute flex items-center justify-center top-0 -translate-y-1/2 left-1/2 -translate-x-1/2 pointer-events-none w-[800px] aspect-square"
				aria-hidden="true"
			>
				<div className="absolute inset-0 translate-z-0 bg-blue-600 rounded-full blur-[120px] opacity-30"></div>
				<div className="absolute w-64 h-64 translate-z-0 bg-blue-500 rounded-full blur-[80px] opacity-70"></div>
			</div>

			{/* Particles animation */}
			<Particles className="absolute inset-0 h-96" quantity={15} />

			{/* Illustration */}
			<div
				className="absolute -mt-16 -translate-x-1/2 pointer-events-none md:block left-1/2 blur-2xl opacity-90"
				aria-hidden="true"
			>
				<Image
					src={Illustration}
					className="max-w-none"
					width={1440}
					height={427}
					alt="Page Illustration"
				/>
			</div>

			{/* Opacity layer */}
			<div
				className="absolute inset-0 bg-slate-900 opacity-20"
				aria-hidden="true"
			></div>

			{/* Illustration 02 */}
			<div
				className="absolute bottom-0 -mb-16 -translate-x-1/2 pointer-events-none md:block left-1/2 blur-2xl opacity-90"
				aria-hidden="true"
			>
				<Image
					src={Illustration02}
					className="max-w-none"
					width={1440}
					height={427}
					alt="Page Illustration 02"
				/>
			</div>

			{/* Content */}
			<div className="relative z-10 pt-20">{children}</div>
		</section>
	);
};

export default PageWrapper;
