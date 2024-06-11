import React from 'react'
import DetailsTable from "../component/Table"
import { TextField, Button, Box, Typography, Modal, Container, Card } from '@mui/material';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import { useNavigate } from 'react-router-dom';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

const FormTable = () => {
    const navigate = useNavigate();

    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const handleExit = () => {
        navigate('/');
    }

    return (
        <div>
            <Box
                sx={{
                    position: 'absolute',
                    top: 0,
                    right: 5,
                }}
            >
                <ExitToAppIcon onClick={handleExit} sx={{ fontSize: 42 , cursor: 'pointer'}} />
            </Box>

            <Container sx={{ marginTop: 10 }}>

                <h3>Details</h3>
                <Card sx={{ minWidth: 800, padding: 4, boxShadow: '0px 4px 20px rgba(0, 3, 2, 1)' }}>
                    <DetailsTable handleOpen={handleOpen}/>
                    <Button onClick={handleOpen}>Click here to open Form</Button>
                </Card >

                <Modal
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                >
                    <Box sx={style}>
                        <Typography id="modal-modal-title" variant="h6" component="h2">
                            Enter Details
                        </Typography>
                        <form >
                            <TextField
                                label="Title"
                                variant="outlined"
                                fullWidth
                                rows={4}
                                value={"email"}
                                // onChange={(e) => setEmail(e.target.value)}
                                margin="normal"
                            />
                            <TextField
                                label="Title"
                                value={""}
                                // onChange={(e) => setEmail(e.target.value)}
                                margin="normal"
                                rows={4}
                                sx={{ width: 400 }}
                                multiline
                            />
                            <Button
                                type="submit"
                                variant="contained"
                                color="primary"
                                fullWidth
                                size="large"
                                style={{ marginTop: '1rem' }}
                            >
                                Save
                            </Button>
                        </form>
                    </Box>
                </Modal>
            </Container >
        </div>
    )
}

export default FormTable