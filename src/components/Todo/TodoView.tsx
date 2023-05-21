import { Task } from "@/types/schema";
import Checkbox from "@mui/material/Checkbox";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import axios from "axios";
import { useEffect, useState } from "react";
import { CustomDate } from "../common/CustomDate";

export default function TodoView() {
    const [tasks, setTasks] = useState<Task[]>([]);

    useEffect(() => {
        const getTasks = async () => {
            try {
                const token = localStorage.getItem("jwt");
                const response = await axios.get(
                    `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/v1/task/my`,
                    { headers: { Authorization: `Bearer ${token}` } }
                );
                setTasks(response.data.tasks);
            } catch (error) {
                console.log(error);
            }
        };
        getTasks();
    }, []);

    return (
        <List
            sx={{ width: "100%", maxWidth: 600, bgcolor: "background.paper" }}
        >
            {tasks.map(({ id, comment, dead_line, finished_at }) => {
                return (
                    <ListItem key={id} disablePadding>
                        <ListItemButton role={undefined} dense>
                            <ListItemIcon>
                                <Checkbox
                                    edge="start"
                                    defaultChecked={finished_at != undefined}
                                    tabIndex={-1}
                                    disableRipple
                                />
                            </ListItemIcon>
                            <ListItemText id={id} primary={comment} />
                        </ListItemButton>
                        <CustomDate dateString={dead_line} />
                    </ListItem>
                );
            })}
        </List>
    );
}
