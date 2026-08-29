import UserForm from "./UserForm";
import UsersTable from "./UsersTable";
import { Box } from "@mui/material"; 

const users = [
    {
        id: 1,
        name : 'chamod',
    },
    {
        id: 2,
        name : 'Saman',
    },
];
const Users = () => {
    return(
        <Box sx={{
            width: 'calc(100% - 100px',
            margin: 'auto',
            marginBottom: '100px',
        }}>
            <UserForm />
            <UsersTable rows={users}/>  
        </Box>

    );
}

export default Users;