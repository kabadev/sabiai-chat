"use client";
import React, { useState } from "react";

const Test = () => {
	const [formData, setFormData] = useState({ name: "", email: "" });
	const [result, setResult] = useState(null);
	const [isModalOpen, setIsModalOpen] = useState(false);

	const handleSubmit = (e: any) => {
		e.preventDefault();

		// Assuming some processing logic here, for demonstration, just echoing the form data
		const resultText: any = `Name: ${formData.name}, Email: ${formData.email}`;
		setResult(resultText);
		alert(window.innerWidth);
		// Show the result in the sidebar on desktop, and as a modal on mobile
		if (window.innerWidth >= 768) {
			setIsModalOpen(true);
			alert(window.innerWidth);
		}
	};

	return (
		<div className="flex justify-center items-center min-h-screen bg-gray-100">
			{/* Form */}
			<form
				className="max-w-md p-6 bg-white rounded shadow-md"
				onSubmit={handleSubmit}
			>
				<label className="block mb-2 text-sm font-bold text-gray-700">
					Name
				</label>
				<input
					type="text"
					className="w-full px-4 py-2 mb-4 border rounded-md"
					value={formData.name}
					onChange={(e) => setFormData({ ...formData, name: e.target.value })}
				/>

				<label className="block mb-2 text-sm font-bold text-gray-700">
					Email
				</label>
				<input
					type="email"
					className="w-full px-4 py-2 mb-4 border rounded-md"
					value={formData.email}
					onChange={(e) => setFormData({ ...formData, email: e.target.value })}
				/>

				<button
					type="submit"
					className="w-full px-4 py-2 text-white bg-blue-500 rounded-md hover:bg-blue-700"
				>
					Submit
				</button>
			</form>

			{/* Sidebar on Desktop */}
			{result && window.innerWidth >= 768 && (
				<div className="hidden md:block w-1/3 ml-8">
					<h2 className="text-xl font-bold mb-4">Form Result</h2>
					<p>{result}</p>
				</div>
			)}

			{/* Modal on Mobile */}
			{result && isModalOpen && (
				<div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
					<div className="bg-white p-6 rounded-md">
						<h2 className="text-xl font-bold mb-4">Form Result</h2>
						<p>{result}</p>
						<button
							onClick={() => setIsModalOpen(false)}
							className="mt-4 px-4 py-2 text-white bg-blue-500 rounded-md hover:bg-blue-700"
						>
							Close
						</button>
					</div>
				</div>
			)}
		</div>
	);
};

export default Test;
