import Card from "@mui/material/Card";
import { ICommitData } from "../pages/main/interfaces/commitData.interface";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import CardActions from "@mui/material/CardActions";
import Button from "@mui/material/Button";
import { formatDate } from "../pages/main/utils";

const CommitElement = ({ commit, nodeId }: ICommitData) => {
    const {
        author: { email, date, name },
        url,
        message,
    } = commit;
    return (
        <Card elevation={2}>
            <CardContent sx={{ m: 1 }}>
                <Typography gutterBottom>
                    <strong>NodeId:</strong>
                </Typography>
                <Typography gutterBottom sx={{ fontSize: { xs: 7, md: 12 } }}>
                    {nodeId}
                </Typography>
                <Typography gutterBottom>
                    <strong>Author:</strong> {email}
                </Typography>
                <Typography gutterBottom>
                    <strong>Name:</strong> {name}
                </Typography>
                <Typography>
                    <strong>Date: </strong>
                    {formatDate(date)}
                </Typography>
                <Typography>
                    <strong>Message:</strong>
                </Typography>
                <Typography>{message}</Typography>
            </CardContent>
            <CardActions sx={{ mx: 2, pb: 3 }}>
                <Button target="_blank" href={url} variant="contained">
                    View Commit
                </Button>
            </CardActions>
        </Card>
    );
};
export default CommitElement;