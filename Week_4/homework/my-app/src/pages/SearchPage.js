import SearchBox from "../components/SearchBox";
import { useState } from "react";

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

export default function SearchPage(props) {
    return (
        <div className="flex-container">
        <Outlet></Outlet>
        <SearchBox masterFunction={props.masterFunction}></SearchBox>
        </div>
        )
}