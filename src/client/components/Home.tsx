import React from "react";
import { trpc } from "../utils/trpc";
import { Button } from "@mui/material";

export default function (props: React.PropsWithChildren) {
    const userQuery = trpc.getUser.useQuery("Alice");
    const userCreator = trpc.createUser.useMutation();
    return <>
        <h1>Hello World</h1>
        <div>{userQuery.data?.name}</div>
        <Button variant="contained" onClick={() => {
            userCreator.mutateAsync({ name: "Alice" })
        }}>
            Test1
        </Button>
    </>
}