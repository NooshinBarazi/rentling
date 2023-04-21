import { ProfileTemplate } from "@rentling/fr-shared";
import React from "react";

export function ProfileLayout({children}:{children: React.ReactNode}){
    return(
        <ProfileTemplate children={children} />
    )
}