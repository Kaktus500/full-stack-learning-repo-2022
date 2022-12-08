import React, { useContext, useEffect } from "react";
import { Outlet, Navigate } from "react-router-dom";

export default function DefaultLayout() {
    <div className="flex-container">
        <Outlet></Outlet>
    </div>
}