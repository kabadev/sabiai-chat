"use client";
import React, { createContext, useContext, useState, ReactNode } from "react";

interface AppContextProps {
	isSidebarOpen: boolean;
	openSidebar: () => void;
	closeSidebar: () => void;
}

const AppContext = createContext<AppContextProps | undefined>(undefined);

export const AppProvider: React.FC<{ children: ReactNode }> = ({
	children,
}) => {
	const [isSidebarOpen, setIsSidebarOpen] = useState(false);

	const openSidebar = () => {
		setIsSidebarOpen(true);
	};

	const closeSidebar = () => {
		setIsSidebarOpen(false);
	};

	return (
		<AppContext.Provider value={{ isSidebarOpen, openSidebar, closeSidebar }}>
			{children}
		</AppContext.Provider>
	);
};

export const useAppContext = (): AppContextProps => {
	const context = useContext(AppContext);

	if (!context) {
		throw new Error("useAppContext must be used within an AppProvider");
	}

	return context;
};
