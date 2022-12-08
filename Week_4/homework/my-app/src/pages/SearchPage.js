import SearchBox from "../components/SearchBox";

import {
    createStyles,
    Group,
    Stack,
    Button,
    TextInput,
    Title,
    PasswordInput
  } from "@mantine/core";
import { Outlet } from "react-router-dom";

export default function SearchPage() {
    return (
        <div className="flex-container">
        <Outlet></Outlet>
        <SearchBox></SearchBox>
        </div>
        )
}