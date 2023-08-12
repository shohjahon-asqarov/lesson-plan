import React from "react";

import {
    Card,
    Typography,
    List,
    ListItem,
    ListItemPrefix,
    ListItemSuffix,
    Chip,
    Accordion,
    AccordionHeader,
    AccordionBody,
} from "@material-tailwind/react";

import {
    PresentationChartBarIcon,
    ShoppingBagIcon,
    UserCircleIcon,
    Cog6ToothIcon,
    InboxIcon,
    PowerIcon,
} from "@heroicons/react/24/solid";

import { cssIcon, htmlIcon, jsIcon, reactIcon } from "../assets/data";

export function Sidebar() {

    return (
        <Card className="h-screen w-full max-w-[20rem] p-4 shadow-none border-r border-gray-500 shadow-blue-gray-900/5 rounded-none flex justify-between">
            <div>
                <div className="mb-2 p-4">
                    <Typography variant="h5" color="blue-gray">
                        Interview
                    </Typography>
                </div>

                <List>

                    <ListItem>
                        <ListItemPrefix>
                            <img src={htmlIcon} className="h-5 w-5" />
                        </ListItemPrefix>
                        Html
                        <ListItemSuffix>
                            <Chip value="14" size="sm" variant="ghost" color="blue-gray" className="rounded-full" />
                        </ListItemSuffix>
                    </ListItem>

                    <ListItem>
                        <ListItemPrefix>
                            <img src={cssIcon} className="h-5 w-5" />
                        </ListItemPrefix>
                        Css
                        <ListItemSuffix>
                            <Chip value="14" size="sm" variant="ghost" color="blue-gray" className="rounded-full" />
                        </ListItemSuffix>
                    </ListItem>

                    <ListItem>
                        <ListItemPrefix>
                            <img src={jsIcon} className="h-5 w-5" />
                        </ListItemPrefix>
                        JavaScript
                        <ListItemSuffix>
                            <Chip value="14" size="sm" variant="ghost" color="blue-gray" className="rounded-full" />
                        </ListItemSuffix>
                    </ListItem>

                    <ListItem>
                        <ListItemPrefix>
                            <img src={reactIcon} className="h-5 w-5" />
                        </ListItemPrefix>
                        React
                        <ListItemSuffix>
                            <Chip value="14" size="sm" variant="ghost" color="blue-gray" className="rounded-full" />
                        </ListItemSuffix>
                    </ListItem>

                </List>
            </div>

            <List>
                <ListItem>
                    <ListItemPrefix>
                        <PowerIcon className="h-5 w-5 text-red-500" />
                    </ListItemPrefix>
                    Log Out
                </ListItem>
            </List>

        </Card>
    );
}