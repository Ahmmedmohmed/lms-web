import React from "react";
import { Link, NavLink } from "react-router-dom";

// utils
import { nameMainColor } from "../../../utils/constants";

function NavLinkAdmin({ to, icon, label }) {
    return (
        <>
            <li className="text-lg font-bold">
                <NavLink
                    to={to}
                    className={({ isActive }) =>
                        isActive
                            ? `flex items-center gap-3 px-3 py-2 rounded-md bg-blue-500 text-white transition-all shadow-sm`
                            : `flex items-center gap-3 px-3 py-2 text-white rounded-md hover:bg-blue-50 hover:text-blue-600 hover:shadow-sm transition-all `
                    }
                >
                    <span
                        className={`
                            ${({ isActive }) =>
                                isActive ? "text-white" : "text-white"}
                            `}
                    >
                        {icon}
                    </span>

                    <span>{label}</span>
                </NavLink>
            </li>
        </>
    );
}

export default NavLinkAdmin;
