"use client";
import React from "react";
import { useForm } from "react-hook-form";
import { Button } from "@nextui-org/react";
import CardWrapper from "../Wrappers/CardWrapper";

const sendDataToBackend = async (data: any) => {
	console.log("Sending data to backend:", data);
	// Simulate API call
	return new Promise((resolve) => setTimeout(resolve, 1000));
};

const CreateFromData = () => {
	const {
		register,
		handleSubmit,
		formState: { errors },
		reset,
	} = useForm();

	const onSubmit = async (data: any) => {
		await sendDataToBackend(data);
		reset(); // Clear form after submission
	};

	return (
		<form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4 p-4">
			<input
				{...register("name", { required: true })}
				placeholder="Name"
				className="w-full max-w-xs input input-bordered"
			/>
			{errors.name && (
				<span className="text-red-500">This field is required</span>
			)}

			<textarea
				{...register("description", { required: true })}
				placeholder="Description of your data"
				className="w-full max-w-xs textarea textarea-bordered"
			/>
			{errors.description && (
				<span className="text-red-500">This field is required</span>
			)}

			<input
				type="file"
				{...register("file", { required: true })}
				className="w-full max-w-xs file-input"
			/>
			{errors.file && <span className="text-red-500">File is required</span>}

			<Button auto type="submit" className="mt-4 btn">
				Submit Data
			</Button>
		</form>
	);
};

export default CreateFromData;
