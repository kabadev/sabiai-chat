import React, { ReactNode } from "react";
interface ErrorWrapperProps {
	className?: string;
	children: ReactNode;
}

const ErrorWrapper: React.FC<ErrorWrapperProps> = ({ className, children }) => {
	return <div className={`error-wrapper ${className || ""}`}>{children}</div>;
};

export default ErrorWrapper;
