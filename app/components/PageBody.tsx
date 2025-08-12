"use client";
import React from "react";
import "./PageBody.scss";

export default function PageBody( { child } : { child : React.ReactElement }) {
	return (
		<div className="page-body"> 
			{child}
		</div>
	)
} 