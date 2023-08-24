import { useEffect, useState } from "react";
import { ICommitData } from "./interfaces/commitData.interface";
import Container from "@mui/material/Container";
import FormControl from "@mui/material/FormControl";
import FormHelperText from "@mui/material/FormHelperText";
import Grid from "@mui/material/Grid";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import Typography from "@mui/material/Typography";
import axios from "axios";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Button from "@mui/material/Button";
import { selectBranches, selectRepository, formatDate } from "./utils";
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
      <CardActions sx={{ mx: 2,pb:3 }}>
        <Button target="_blank" href={url} variant="contained">
          View Commit
        </Button>
      </CardActions>
    </Card>
  );
};
const MainPage = () => {
  const [repoSelected, setRepoSelected] = useState(selectRepository[0]);
  const [branchSelected, setBranchSelected] = useState(selectBranches[0]);
  const [commitsData, setCommitsData] = useState<Array<ICommitData>>();
  useEffect(() => {
    if (!repoSelected) return;
    const fetchData = async () => {
      try {
        const url = `http://localhost:5000/commits?repository=${repoSelected}&branch=${branchSelected}`;
        const { data } = await axios.get(url);
        setCommitsData(data);
      } catch (e) {
        console.log(e);
      }
    };
    fetchData();
  }, [branchSelected, repoSelected]);
  const handleSelectRepoChange = (value: string) => setRepoSelected(value);
  const handleSelectBranchChange = (value: string) => setBranchSelected(value);
  return (
    <Container maxWidth="sm" sx={{ py: 5 }}>
      <Grid container spacing={3}>
        <Grid
          item
          xs={12}
          sx={{ display: "flex", justifyContent: "center", py: 5 }}
        >
          <Typography variant="h3">Github Commits</Typography>
        </Grid>
        <Grid item xs={12} md={6}>
          <FormControl fullWidth>
            <Select
              labelId="commit-select-label"
              id="commit-select-id"
              label="Age"
              value={repoSelected}
              onChange={({ target: { value } }) =>
                handleSelectRepoChange(value)
              }
            >
              {selectRepository.map((element, index) => {
                return (
                  <MenuItem key={index} value={element}>
                    {element}
                  </MenuItem>
                );
              })}
            </Select>
            <FormHelperText id="demo-simple-select-label">
              Repository
            </FormHelperText>
          </FormControl>
        </Grid>
        <Grid item xs={12} md={6}>
          <FormControl fullWidth>
            <Select
              labelId="commit-select-label"
              id="commit-select-id"
              label="Age"
              value={branchSelected}
              onChange={({ target: { value } }) =>
                handleSelectBranchChange(value)
              }
            >
              {selectBranches.map((element, index) => {
                return (
                  <MenuItem key={index} value={element}>
                    {element}
                  </MenuItem>
                );
              })}
            </Select>
            <FormHelperText id="demo-simple-select-label">
              Branch
            </FormHelperText>
          </FormControl>
        </Grid>
        {commitsData &&
          commitsData.map((e: ICommitData, index) => (
            <Grid item xs={12} key={index}>
              <CommitElement commit={e.commit} nodeId={e.nodeId} />
            </Grid>
          ))}
      </Grid>
    </Container>
  );
};
export default MainPage;
